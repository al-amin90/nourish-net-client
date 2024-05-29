import { Button, Modal } from "antd";
import donate from "../assets/donate.png";
import payment from "../assets/payment.png";
import wall from "../assets/wall.png";
import ToggleBtn from "./ToggleBtn";
import { IoMdHeart } from "react-icons/io";
import { useState } from "react";

const DonateNow = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [price, setPrice] = useState(25);
  const [kitSms, setkitSms] = useState(true);

  console.log(price);

  const handleSubmit = () => {};

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
                onClick={() => setModal2Open(true)}
              >
                Donate Now <IoMdHeart />
              </Button>
              <Modal
                centered
                open={modal2Open}
                onCancel={() => setModal2Open(false)}
              >
                <form className="p-2" onSubmit={handleSubmit}>
                  <h4 className="text-3xl font-semibold">Checkout</h4>
                  <h6 className="text-base mt-7 font-semibold">
                    Billing Details
                  </h6>
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
                  <div className="flex items-center justify-end mt-4">
                    <button className="py-2 bg-[#2BA2FF] px-5 text-base border-2 border-white duration-300 text-white hover:scale-105 hover:-rotate-2 rounded-full flex items-center gap-2 hover:shadow-xl font-semibold">
                      Donate Now
                    </button>
                  </div>
                </form>
              </Modal>
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
