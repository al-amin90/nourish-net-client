import addImg from '../assets/banner.jpg';
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from '../Hooks/useAuth';

const AddFood = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [location, setLocation] = useState(null)
    const { user } = useAuth()

    const handlePicker = ele => {
        setLocation(ele.value);
    }

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;

        const foodName = form.foodName.value;
        const foodURL = form.foodURL.value;
        const locationPickup = location;
        const expiredDate = startDate;
        const note = form.note.value;
        const statusFood = "available";
        const foodQuantity = parseInt(form.foodQuantity.value);
        const donateUser = {
            name: user?.displayName,
            email: user?.email,
            photo: user?.photoURL
        }

        console.log(foodName, foodURL, locationPickup, expiredDate, note, statusFood, foodQuantity, donateUser);
    }

    return (
        <div className='min-h-[100vh] w-full bg-no-repeat bg-contain ' style={{ backgroundImage: `url(${addImg})`, backgroundSize: "100%" }}>
            <div className=' flex py-16 justify-center '>
                <section className="max-w-4xl p-8 mx-auto bg-white/20 backdrop-blur-md rounded-md shadow-md dark:bg-gray-800">
                    <div className='flex items-center justify-center'>
                        <h2 className='font-bold bg-black/20 px-10 w-fit backdrop-blur-lg py-2 rounded-xl text-4xl text-white text-center mb-3'><span className=''>Add</span>  Food</h2>
                    </div>

                    <div className=' mt-10 mb-10'>
                        <div className='text-white space-y-2 font-semibold text-base'>
                            <div className="avatar">
                                <div className="w-24 rounded">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <h3>Name: <span className='font-medium'>{user?.displayName}</span></h3>
                            <h3>Email: <span className='font-medium'>{user?.email}</span></h3>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 lg:grid-cols-3">
                            <div>
                                <label className="text-black font-medium dark:text-gray-200" htmlFor="username">● Food Name</label>
                                <input id="username" name='foodName' placeholder='Food Name' type="text" className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring" />
                            </div>
                            <div className='md:col-span-2'>
                                <label className="text-black font-medium dark:text-gray-200" htmlFor="username">● Food URL</label>
                                <input id="username" name='foodURL' placeholder='Food URL' type="text" className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring" />
                            </div>

                            <div className='md:col-span-2'>
                                <label className="text-black font-medium dark:text-gray-200" htmlFor="username">● Pickup Location</label>
                                <select
                                    onChange={(e) => handlePicker(e.target)}
                                    className="py-2 px-3  mt-1 col-span-2 text-black bg-white rounded-md dark:bg-gray-800 dark:text-gray-300  border border-[#023022] select-info w-full focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring">
                                    <option defaultValue="" >Default</option>
                                    <option defaultValue="Dhaka"> Dhaka</option>
                                    <option defaultValue="Chittagong"> Chittagong</option>
                                    <option defaultValue="Khulna"> Khulna</option>
                                    <option defaultValue="Barguna"> Barguna</option>
                                    <option defaultValue="Bandarban"> Bandarban</option>
                                    <option defaultValue="Barishal"> Barishal</option>
                                    <option defaultValue="Rajshahi"> Rajshahi</option>
                                </select>
                            </div>

                            <div className='flex flex-col'>
                                <label className="text-black font-medium dark:text-gray-200" htmlFor="username">● Expired Date</label>
                                <DatePicker className='min-w-full px-4 py-2 mb-[2px] text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring' selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>

                            <div className='md:col-span-2'>
                                <label className="text-black font-medium dark:text-gray-200" htmlFor="username">● Food Quantity
                                </label>
                                <input id="username" name='foodQuantity' placeholder='Food Quantity' type="number" className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring" />
                            </div>

                            <div className=''>
                                <label className="text-black font-medium dark:text-gray-200" htmlFor="username">● Food Status
                                </label>
                                <div className="form-control block w-full px-3 font-medium mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Available</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
                                    </label>
                                </div>
                            </div>

                            <div className=''>
                                <label className="text-black font-medium dark:text-gray-200" htmlFor="username">● User Image
                                </label>
                                <input id="username" disabled placeholder={user?.photoURL} type="text" className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring" />
                            </div>

                            <div className=''>
                                <label className="text-black font-medium dark:text-gray-200" htmlFor="username">● Name
                                </label>
                                <input id="username" disabled placeholder={user?.displayName} type="text" className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring" />
                            </div>
                            <div className=''>
                                <label className="text-black font-medium dark:text-gray-200" htmlFor="username">● Email
                                </label>
                                <input id="username" disabled placeholder={user?.email} type="text" className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring" />
                            </div>


                            <div className='md:col-span-3'>
                                <label className="text-black font-medium dark:text-gray-200" htmlFor="username">● Additional Notes
                                </label>
                                <input id="username" name='note' placeholder='Additional Notes' type="text" className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring" />
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <button type='submit' className="px-8 w-full py-2.5 leading-5 text-white transition-colors duration-300 transform bg-black/80 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Food</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddFood;