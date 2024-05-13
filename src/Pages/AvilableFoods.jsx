import axios from 'axios';
import { Tooltip } from 'react-tooltip'
import React, { useEffect, useState } from 'react';
import FoodCard from '../components/FoodCard';
import { baseURL } from '../utlis/baseURL';
import { TbLayoutCards } from "react-icons/tb";
import { motion } from 'framer-motion'
import Lottie from "lottie-react";
import open from "../assets/avilable.json"
import Loader from '../utlis/Loader';

const AvilableFoods = () => {
    const [foods, setFoods] = useState(null)
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [layout, setLayout] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        document.title = "NourishNet | Available Foods"
    }, [])

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const { data } = await axios.get(`${baseURL}/foods?avi=available&sort=${sort}&search=${search}`)
            setFoods(data);
            setLoading(false)
        };

        getData()
    }, [sort, search])

    const handleSearch = e => {
        e.preventDefault()

        const text = e.target.search.value;
        setSearch(text)
        e.target.reset()
    }

    if (loading) return <Loader></Loader>
    return (
        <div>
            <div className='py-4 mb-24 w-[90%] md:w-[93%] font-outfit mx-auto max-w-7xl px-0'>

                <div className='flex items-center justify-between'>
                    <div className='text-left font-mons mt-12 md:mt-20'>
                        <h2 className='font-bold text-4xl mb-3'><span className='text-[#108864]'>All</span> Available Foods</h2>
                        <p className='mb-6 max-w-3xl'>
                            Welcome to the All Available Foods page on NourishNet! You'll find a bounty of delicious offerings waiting to be shared. This page is the heart of our platform, where food surplus meets those in need, fostering a community of generosity and compassion.</p>
                    </div>
                    <Lottie className='relative top-8 right-8' style={{ width: "250px" }} animationData={open}></Lottie>
                </div>

                <motion.div
                    initial={{ x: '10vh' }}
                    animate={{ x: 0 }}
                    className="flex flex-col md:flex-row items-center md:justify-end mt-16">
                    <form onSubmit={handleSearch} className='flex items-center justify-center relative'>
                        <input type="text" name='search' placeholder="Food Name" className="py-2 px-4 rounded-full font-semibold border border-[#023022] text-[#023022] w-72" />
                        <button type='submit' className='py-2 px-5 hover:bg-[#023022]/85 bg-[#023022] text-white rounded-full absolute right-0'>Search</button>
                    </form>
                    <div className='flex lg:mx-24 mx-6 md:mt-0 mt-5 items-center gap-3 justify-center'>
                        <p>Sort By:</p>
                        <select
                            onChange={(e) => setSort(e.target.value)}
                            name="sort"
                            className="py-2 px-3 rounded-full font-semibold border border-[#023022] text-[#023022] select-info w-48 max-w-xs">
                            <option defaultValue=""> Expire Date</option>
                            <option defaultValue="Descending Order"> Descending Order</option>
                            <option defaultValue="Ascending Order"> Ascending Order</option>
                        </select>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: '10vh' }}
                    animate={{ x: 0 }}
                    className='hidden duration-100 lg:flex items-center justify-end md:mr-24 mt-6 gap-2'>
                    <p>Change layout:</p>
                    <button className='flex items-center gap-2 py-2 px-6 rounded-full hover:scale-105 duration-300 text-white font-semibold border bg-[#023022] hover:bg-[#303544] ' onClick={() => setLayout(!layout)}>Layout {layout ? "|||" : <TbLayoutCards />}</button>
                </motion.div>
                <div
                    className={`grid ${layout ? "lg:grid-cols-2" : "lg:grid-cols-3"} mt-16 md:grid-cols-2 grid-cols-1  gap-7`}>
                    {
                        foods?.map(food => <FoodCard food={food} key={food._id}></FoodCard>)
                    }

                </div>
                <Tooltip id="my-tooltip" />
            </div >
        </div>
    );
};

export default AvilableFoods;