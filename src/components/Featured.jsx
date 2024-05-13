import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../utlis/baseURL';
import { useQuery } from '@tanstack/react-query';
import Loader from '../utlis/Loader';

const Featured = () => {
    // const [foods, setFoods] = useState(null)
    const navigate = useNavigate()

    const { data: foods = [], isLoading } = useQuery({
        queryKey: ["featured-food"],
        queryFn: async () => {
            const { data } = await axios.get(`${baseURL}/foodsAcc`)
            return data;
        }
    })
    console.log(foods);

    // useEffect(() => {
    //     const getData = async () => {
    //         const { data } = await axios.get(`${baseURL}/foodsAcc`)
    //         setFoods(data);
    //     };
    //     getData()
    // }, [])

    if (isLoading) return <Loader></Loader>
    return (
        <div>
            <div className='py-4 w-[90%] md:w-[93%] font-outfit mx-auto max-w-7xl px-0'>

                <div className=' font-mons text-center mt-12 md:mt-20'>
                    <h2 className='font-bold text-4xl mb-3'><span className='text-[#108864]'>Featured</span>  Foods</h2>
                    <p className='mb-6 text-sm mx-auto w-2/3'>
                        In this section, we showcase the most abundant and sought-after food items, ensuring that those in need have access to essential sustenance.Here, you'll discover an array of food items generously shared by our community of donors.</p>
                </div>

                <div className="grid lg:grid-cols-3 mt-16 md:grid-cols-2 grid-cols-1  gap-7">
                    {
                        foods?.slice(0, 6)?.map(food => <FoodCard food={food} key={food._id}></FoodCard>)
                    }

                </div>
                <div className='flex items-center justify-center mt-16'>
                    <button onClick={() => navigate('/available')} className='py-2 px-5 text-base border-2 border-[#303544] duration-300 bg-[#303544] text-white hover:scale-105 hover:-rotate-2 rounded-lg flex items-center gap-2 hover:shadow-xl font-semibold'>Show All</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;