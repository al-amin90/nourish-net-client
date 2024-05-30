import { Modal } from "antd";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../From/CheckoutForm";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const DonateModal = ({ modal2Open, setModal2Open, price }) => {
  const billInfo = {
    price,
  };

  return (
    <div>
      <Modal centered open={modal2Open} onCancel={() => setModal2Open(false)}>
        <div className="p-2">
          <h4 className="text-3xl font-semibold">Checkout</h4>
          <h6 className="text-base mt-7 font-semibold">Billing Details</h6>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 lg:grid-cols-4">
            <div className="md:col-span-2">
              <label
                className="text-black font-medium dark:text-gray-200"
                htmlFor="username"
              >
                ● First name
              </label>
              <input
                id="username"
                name="firstName"
                placeholder="First name"
                type="text"
                className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring"
              />
            </div>
            <div className="md:col-span-2">
              <label
                className="text-black font-medium dark:text-gray-200"
                htmlFor="username"
              >
                ● Last name
              </label>
              <input
                id="username"
                name="lastName"
                placeholder="Last name"
                type="text"
                className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring"
              />
            </div>

            <div className="md:col-span-4">
              <label
                className="text-black font-medium dark:text-gray-200"
                htmlFor="username"
              >
                ● Street Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring"
              />
            </div>

            <div className="md:col-span-2">
              <label
                className="text-black font-medium dark:text-gray-200"
                htmlFor="username"
              >
                ● Phone
              </label>
              <input
                id="username"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring"
              />
            </div>

            <div className="md:col-span-2">
              <label
                className="text-black font-medium dark:text-gray-200"
                htmlFor="username"
              >
                ● Email
              </label>
              <input
                id="username"
                name="email"
                type="text"
                className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring"
              />
            </div>

            <div className="md:col-span-4">
              <label
                className="text-black font-medium dark:text-gray-200"
                htmlFor="username"
              >
                ● Donation Notes (optional)
              </label>
              <input
                id="username"
                name="note"
                type="text"
                className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-8">Payment Details</h2>
          <p className="text-base font-bold mt-2">
            Donated Amount: <span className=" text-[#25d4a0]">${price}</span>
          </p>
          {/* checkuot filed */}
          <Elements stripe={stripePromise}>
            <CheckoutForm billInfo={billInfo} />
          </Elements>
        </div>
      </Modal>
    </div>
  );
};

export default DonateModal;
