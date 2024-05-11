import axios from 'axios';
import { Tooltip } from 'react-tooltip'
import React, { useEffect, useState } from 'react';
import FoodCard from '../components/FoodCard';


const AvilableFoods = () => {
    const [foods, setFoods] = useState(null)


    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`https://nourish-net-server-eight.vercel.app/foods`)
            setFoods(data);
        };


        getData()
    }, [])

    return (
        <div>
            <div className='py-4 w-[90%] md:w-[93%] font-outfit mx-auto max-w-7xl px-0'>

                <div className='text-left font-mons mt-12 md:mt-20'>
                    <h2 className='font-bold text-4xl mb-3'><span className='text-[#108864]'>All</span> Available Foods</h2>
                    <p className='mb-6 max-w-3xl'>
                        Welcome to the All Available Foods page on NourishNet! You'll find a bounty of delicious offerings waiting to be shared. This page is the heart of our platform, where food surplus meets those in need, fostering a community of generosity and compassion.</p>
                </div>

                <div className="flex flex-col md:flex-row items-center md:justify-end mt-16">
                    <div className='flex items-center justify-center relative'>
                        <input type="text" placeholder="Food Name" className="py-2 px-4 rounded-full font-semibold border border-[#023022] text-[#023022] w-72" />
                        <button className='py-2 px-5 hover:bg-[#023022]/85 bg-[#023022] text-white rounded-full absolute right-0'>Search</button>
                    </div>
                    <div className='flex md:mx-24 md:mt-0 mt-5 items-center gap-3 justify-center'>
                        <p>Sort By: </p>
                        <select
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Sort By Quantaty"
                            data-tooltip-place="top"
                            onChange={(e) => handleSort(e.target)}
                            name="sort"
                            className="py-2 px-3 rounded-full font-semibold border border-[#023022] text-[#023022] select-info w-36 max-w-xs">
                            <option defaultValue="" >Default</option>
                            <option defaultValue="Ascending"> Expire Date</option>
                        </select>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 mt-16 md:grid-cols-2 grid-cols-1  gap-7">
                    {
                        foods?.map(food => <FoodCard key={food._id}></FoodCard>)
                    }

                </div>
                <Tooltip id="my-tooltip" />
            </div >
        </div>
    );
};

export default AvilableFoods;