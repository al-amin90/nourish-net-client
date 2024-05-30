import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import "./CheckoutFrom.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ billInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();
  console.log(billInfo?.price);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: billInfo?.price })
      .then((res) => {
        console.log(res.data);
        setClientSecret(res.data.clientSecret);
      });
  }, [billInfo?.price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    //   confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      toast.error(error.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      //   1. create payment info obj
      const donateInfo = {
        transactionId: paymentIntent.id,
        date: new Date(),
        name: user?.displayName,
        email: user?.email,
        amount: billInfo?.price,
      };
      toast.success(`Successfull Your transactionId: ${paymentIntent.id}`);
      // console.log(paymentInfo);

      try {
        console.log(donateInfo);
        //   2. save payment info in booking collection (db)
        const { data } = await axiosSecure.post("/donate", donateInfo);
        if (data.insertedId) {
          navigate("/dashboard/donateHistory");
        }

        //   3. change room status to booked in db
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <div className="flex items-center justify-end mt-4">
        <button
          type="submit"
          disabled={!stripe}
          className="py-2 bg-[#25d4a0] px-5 text-base border-2 border-white duration-300 text-white hover:scale-105 hover:-rotate-2 rounded-full flex items-center gap-2 hover:shadow-xl font-semibold"
        >
          Donate Now
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
