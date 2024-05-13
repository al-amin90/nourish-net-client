import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Loader from '../utlis/Loader';

import Lottie from "lottie-react";
import box from "../assets/box.json"


const FoodReqest = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    // const [foods, setFoods] = useState()

    useEffect(() => {
        document.title = "NourishNet | Food Request"
    }, [])

    const { data: foods = [], isLoading } = useQuery({
        queryKey: ["food-request"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/foodss?email=${user.email}&requ=requested`);
            return data
        }
    })

    // console.log(foods);
    // useEffect(() => {
    //     axiosSecure.get(`/foodss?email=${user.email}&requ=requested`)
    //         .then(res => setFoods(res.data))
    // }, [user])
    // console.log(foods);

    if (isLoading) return <Loader></Loader>
    return (
        <div>
            <section className="container mb-24 px-4 mx-auto pt-4">
                <div className='flex justify-between items-end'>
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-gray-800 ">Food Requests:</h2>

                        <span className="px-3 py-1 text-xs text-[#108864] bg-[#1088643b] rounded-full ">
                            {foods?.length} Requests
                        </span>
                    </div>
                    <Lottie className='w-36 relative top-6' animationData={box}></Lottie>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-[#108864] text-white">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right"
                                            >
                                                <div className="flex items-center gap-x-3">
                                                    <span>Food Name</span>
                                                </div>
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right"
                                            >
                                                <div className="flex items-center gap-x-3">
                                                    <span>Donator Name</span>
                                                </div>
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right"
                                            >
                                                <button className="flex items-center gap-x-2">
                                                    <span>Quantity</span>
                                                </button>
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right"
                                            >
                                                <span>Additional Notes</span>
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right"
                                            >
                                                Expire Date
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right"
                                            >
                                                Request Date
                                            </th>


                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 ">
                                        {foods?.map((food) => (
                                            <tr key={food._id} className='bg-[#108864]/5'>
                                                <td className="px-4 py-4 text-sm text-black/80  whitespace-nowrap">
                                                    {food?.foodName}
                                                </td>
                                                <td className="px-4 py-4 text-sm text-black/80  whitespace-nowrap">
                                                    {food?.donateUser?.name}
                                                </td>

                                                <td className="px-4 py-4 text-sm text-black/80  whitespace-nowrap">
                                                    {food?.foodQuantity}
                                                </td>

                                                <td className="px-4 py-4 text-sm text-black/80  whitespace-nowrap">
                                                    {food?.note.slice(0, 17)}...
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    {new Date(food?.expiredDate).toLocaleDateString()}
                                                </td>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    {new Date(food?.requestedDate).toLocaleDateString()}
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FoodReqest;