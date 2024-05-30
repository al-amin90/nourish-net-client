import { Button, Modal } from "antd";
import donate from "../assets/donate.png";
import payment from "../assets/payment.png";
import wall from "../assets/wall.png";
import ToggleBtn from "./ToggleBtn";
import { IoMdHeart } from "react-icons/io";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import DonateModal from "./Modal/DonateModal";
import useAuth from "../Hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const DonateNow = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [price, setPrice] = useState(25);
  const [kitSms, setkitSms] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e);
    setPrice(e);

    if ([25, 50, 100, 500].includes(e)) {
      setkitSms(true);
    } else {
      setkitSms(false);
    }
    console.log(kitSms);
  };

  const handleDonate = () => {
    console.log("cl;icke");
    if (!user?.email) {
      navigate("/login");
      toast.error("Please Login to donate");
      return;
    }
    setModal2Open(true);
  };
  return (
    <div>
      <div className="flex gap-16 py-4 mt-12 w-[90%] md:w-[93%] font-outfit mx-auto max-w-7xl px-0">
        <div className="w-1/2 ">
          <ToggleBtn></ToggleBtn>
          <div className="border bg-[#F5F5F5] z-40 rounded-2xl p-6">
            {kitSms ? (
              <h3 className=" mb-8 text-lg">${price} - Food Aid</h3>
            ) : (
              <h3 className=" mb-8 text-lg">
                You choose custom amount to donate.
              </h3>
            )}
            {/* price */}
            <from className="grid grid-cols-4 gap-3 ">
              <div className="form-control">
                <label className="py-2 flex border-black/20 items-center gap-3 justify-center border rounded-xl px-4 bg-white cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    value={25}
                    onClick={() => handleChange(25)}
                    className="radio w-5 h-5 radio-primary"
                    checked={price === 25}
                  />
                  <span className="label-text text-base">$25</span>
                </label>
              </div>
              <div className="form-control">
                <label className="py-2 flex border-black/20 items-center gap-3 justify-center border rounded-xl px-4 bg-white cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    value={50}
                    onClick={() => handleChange(50)}
                    className="radio w-5 h-5 radio-primary"
                    checked={price === 50}
                  />
                  <span className="label-text text-base">$50</span>
                </label>
              </div>
              <div className="form-control">
                <label className="py-2 flex border-black/20 items-center gap-3 justify-center border rounded-xl px-4 bg-white cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    value={100}
                    onClick={() => handleChange(100)}
                    className="radio w-5 h-5 radio-primary"
                    checked={price === 100}
                  />
                  <span className="label-text text-base">$100</span>
                </label>
              </div>
              <div className="form-control">
                <label className="py-2 flex border-black/20 items-center gap-3 justify-center border rounded-xl px-4 bg-white cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    value={500}
                    onClick={() => handleChange(500)}
                    className="radio w-5 h-5 radio-primary"
                    checked={price === 500}
                  />
                  <span className="label-text text-base">$500</span>
                </label>
              </div>
            </from>
            {/* input */}
            <input
              type="number"
              onChange={(e) => handleChange(parseInt(e.target.value))}
              name=""
              className="py-2 my-4 w-full flex px-4 text-base border-black/20 rounded-xl border  text-black"
              placeholder="Enter Custom Amount"
              id=""
            />
            {/* btn */}
            <div className="flex items-center justify-between gap-3">
              <Button
                className="py-6  flex-1 justify-center text-white rounded-full flex text-lg font-semibold gap-2 items-center px-4 hover:bg-[#108864] bg-[#25d4a0]"
                onClick={() => handleDonate()}
              >
                Donate Now <IoMdHeart />
              </Button>
              <DonateModal
                setModal2Open={setModal2Open}
                modal2Open={modal2Open}
                price={price}
              ></DonateModal>
              <div>
                <img src={payment} className="w-[300px] " alt="" />
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="w-1/2">
          <img src={donate} className="mx-6  w-11/12" alt="" />
        </div>
      </div>

      {/* bottm img */}
      <div className="flex items-center justify-center relative -top-14">
        <img src={wall} className="object-contain w-9/12" alt="" />
      </div>
    </div>
  );
};

export default DonateNow;
