import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { GiFruitBowl } from "react-icons/gi";
import { LuClock } from "react-icons/lu";
import { LuPartyPopper } from "react-icons/lu";
import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loader from "../utlis/Loader";

const FoodDetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    // const { data } = useLoaderData()
    const { user } = useAuth()
    const navigate = useNavigate()
    const [modal2Open, setModal2Open] = useState(false);
    const axiosSecure = useAxiosSecure()
    const { id } = useParams()

    useEffect(() => {
        document.title = "NourishNet | Food Details"
    }, [])


    const { data = [], refetch, isLoading } = useQuery({
        queryKey: ["food-Details"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/food/${id}`)
            return data
        }
    })
    const food = data;
    // console.log(data);


    const { mutateAsync } = useMutation({
        mutationFn: async ({ id, food }) => {
            const { data } = await axiosSecure.put(`/food/${id}`, food)
            return data
        },
        onSuccess: () => {

            toast.success("Your Request has Confirmed");
            setModal2Open(false)
            refetch()
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;

        const foodName = data.foodName;
        const foodURL = data.foodURL;
        const locationPickup = data.locationPickup;
        const expiredDate = data.expiredDate;
        const note = form.note.value;
        const statusFood = "requested";
        const foodQuantity = data.foodQuantity;
        const donateUser = data.donateUser;
        const userEmail = user.email;
        const requestedDate = startDate;

        const food = {
            userEmail,
            foodName,
            foodURL,
            locationPickup,
            expiredDate,
            note,
            statusFood,
            foodQuantity,
            donateUser,
            requestedDate
        };
        const id = data._id;


        await mutateAsync({ id, food })

        // axiosSecure.put(`/food/${data._id}`, food).then((res) => {
        //     console.log(res.data);
        //     if (res.data.modifiedCount > 0) {
        //         toast.success("Your Request has Confirmed");
        //         setModal2Open(false)
        //         // navigate("/manage");
        //     }
        // });
    }

    if (isLoading) return <Loader></Loader>
    return (
        <div className='bg-[#F4F4F4]'>
            <div className='max-w-7xl grid py-24 mb-12 grid-cols-1 lg:grid-cols-3 mx-auto w-[90%]  md:w-[85%]'>
                <div className='mb-4 col-span-2 lg:mr-16'>
                    <figure><img className='rounded-xl object-cover h-96 w-full' src={data?.foodURL} alt="" /></figure>


                </div>

                <div className='text-[#303544]'>
                    <h1 className='font-extrabold text-[#303544]   text-3xl'>{data?.foodName}</h1>
                    <div className="text-[#717C7D] flex mt-5">

                        <p className="text-base mr-4 "> <span className="text-[#108864] font-medium"> Donate By:</span>  {data?.donateUser?.name}</p>
                        <p className="flex items-center gap-2">
                            <FaLocationDot className="text-[#108864]" /> {data?.locationPickup}
                        </p>
                    </div>
                    <div className="bg-white rounded-xl mt-3 pt-5">
                        <div className="flex justify-between border-b pb-4 px-6">
                            <div>
                                <p className="text-xs font-medium text-[#A2AAAB]">● Expired Date</p>
                                <p className="text-2xl flex items-center mt-1 font-bold text-[#108864]"><LuClock className="text-sm mr-2" />{data?.AVGCost}<span className="text-black/90 text-sm font-medium "> {new Date(data.expiredDate).toLocaleDateString()}</span></p>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-[#A2AAAB]">● Food Quantity
                                </p>
                                <p className="text-2xl flex items-center mt-1 font-bold text-[#108864]"><GiFruitBowl className="text-sm mr-2" />{data?.AVGCost}<span className="text-black/90 text-sm font-medium "> {data.foodQuantity}</span></p>
                            </div>


                        </div>


                        {/* form is here */}
                        <div className="px-6 flex items-center justify-end mt-4">
                            {/* <button className="">Request </button> */}

                            <Button
                                disabled={food?.statusFood === "requested"}
                                className="py-4 px-5 text-base border-2 border-[#303544] hover:text-[#303544] text-white duration-300 hover:bg-white bg-[#303544] rounded-full flex items-center gap-2 hover:shadow-xl font-medium" onClick={() => setModal2Open(true)}>
                                Request
                            </Button>
                            <Modal
                                title="Your Request Food Info is here, "
                                centered
                                open={modal2Open}
                                onCancel={() => setModal2Open(false)}
                            >
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 lg:grid-cols-3">
                                        <div>
                                            <label
                                                className="text-black font-medium dark:text-gray-200"
                                                htmlFor="username"
                                            >
                                                ● Food Name
                                            </label>
                                            <input
                                                defaultValue={food?.foodName || ""}
                                                id="username"
                                                name="foodName"
                                                disabled
                                                placeholder="Food Name"
                                                type="text"
                                                className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label
                                                className="text-black font-medium dark:text-gray-200"
                                                htmlFor="username"
                                            >
                                                ● Food URL
                                            </label>
                                            <input
                                                defaultValue={food?.foodURL || ""}
                                                id="username"
                                                name="foodURL"
                                                disabled
                                                placeholder="Food URL"
                                                type="text"
                                                className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label
                                                className="text-black font-medium dark:text-gray-200"
                                                htmlFor="locationPicker"
                                            >
                                                ● Pickup Location
                                            </label>

                                            <select
                                                name="locationPicker"
                                                id="locationPicker"
                                                disabled
                                                defaultValue={food?.locationPickup || "Dhaka"}
                                                type="text"
                                                placeholder="locationPicker"
                                                className="py-2 px-3  mt-1 col-span-2 text-black bg-white rounded-md dark:bg-gray-800 dark:text-gray-300  border border-[#023022] w-full focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring"
                                            >
                                                <option defaultValue="">Default</option>
                                                <option defaultValue="Dhaka"> Dhaka</option>
                                                <option defaultValue="Chittagong"> Chittagong</option>
                                                <option defaultValue="Khulna"> Khulna</option>
                                                <option defaultValue="Barguna"> Barguna</option>
                                                <option defaultValue="Bandarban"> Bandarban</option>
                                                <option defaultValue="Barishal"> Barishal</option>
                                                <option defaultValue="Rajshahi"> Rajshahi</option>
                                            </select>
                                        </div>

                                        <div className="flex flex-col">
                                            <label
                                                className="text-black mt-[2px] font-medium dark:text-gray-200"
                                                htmlFor="username"
                                            >
                                                ● Expired Date
                                            </label>
                                            <DatePicker
                                                disabled
                                                className="w-full px-4 py-2 mb-[2px] text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring"
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                            />
                                        </div>

                                        <div className="">
                                            <label
                                                className="text-black font-medium dark:text-gray-200"
                                                htmlFor="username"
                                            >
                                                ● Donator Name
                                            </label>
                                            <input
                                                id="username"
                                                disabled
                                                placeholder={food?.donateUser?.name || ""}
                                                type="text"
                                                className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring"
                                            />
                                        </div>

                                        <div className="">
                                            <label
                                                className="text-black font-medium dark:text-gray-200"
                                                htmlFor="username"
                                            >
                                                ● Donator Email
                                            </label>
                                            <input
                                                id="username"
                                                disabled
                                                placeholder={food?.donateUser?.email || ""}
                                                type="text"
                                                className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring"
                                            />
                                        </div>


                                        <div className="">
                                            <label
                                                className="text-black font-medium dark:text-gray-200"
                                                htmlFor="username"
                                            >
                                                ● Food Id
                                            </label>

                                            <input
                                                defaultValue={food?._id || ""}
                                                id="username"
                                                name="foodQuantity"
                                                disabled
                                                placeholder="Food id"
                                                type="text"
                                                className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring"
                                            />

                                        </div>

                                        <div className="md:col-span-3">
                                            <label
                                                className="text-black font-medium dark:text-gray-200"
                                                htmlFor="username"
                                            >
                                                ● User Email
                                            </label>
                                            <input
                                                id="username"
                                                disabled
                                                placeholder={user?.email}
                                                type="text"
                                                className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring"
                                            />
                                        </div>

                                        <div className="md:col-span-3">
                                            <label
                                                className="text-black font-medium dark:text-gray-200"
                                                htmlFor="username"
                                            >
                                                ● Additional Notes
                                            </label>
                                            <input
                                                defaultValue={food?.note || ""}
                                                id="username"
                                                name="note"
                                                placeholder="Additional Notes"
                                                type="text"
                                                className="block w-full px-4 py-2 mt-1 text-black bg-white border border-[#023022] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#108864] focus:ring-[#108864] focus:ring-opacity-40 dark:focus:border-[#108864] focus:outline-none focus:ring"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center justify-end mt-4">
                                        <button className="py-2 bg-[#2BA2FF] px-5 text-base border-2 border-white duration-300 text-white hover:scale-105 hover:-rotate-2 rounded-full flex items-center gap-2 hover:shadow-xl font-semibold">
                                            Confirm
                                        </button>
                                    </div>

                                </form>
                            </Modal>
                        </div>
                        <div className="flex items-center mt-5 p-6 space-x-4 rounded-b-xl bg-gray-50 ">
                            <div className="flex items-center text-2xl justify-center">
                                <LuPartyPopper />
                            </div>
                            <span>Let Your Smile Shine Bright !</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;