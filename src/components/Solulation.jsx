import solution from "../assets/family.jpeg"
import { Link } from 'react-router-dom';
import bgSolu from "../assets/bgSolu.png"

import Lottie from "lottie-react";
import circle from "../assets/lottie.json"

const Solulation = () => {
    return (
        <div className="bg-no-repeat relative mt-32 bg-contain" style={{ backgroundImage: `url(${bgSolu})` }}>
            <Lottie className='w-48 hidden md:block absolute -top-40 right-20' animationData={circle}></Lottie>
            <div className='max-w-7xl mx-auto w-[90%] md:w-[85%]'>
                <div className="hero pt-12 md:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className='flex-1 relative mr-16'>
                            <img src={solution} className="w-full h-full object-cover rounded-xl" />
                        </div>
                        <div className='flex-1 flex-grow'>
                            <p className='text-[#108864] font-bold mb-4'>____________----____</p>
                            <h1 className="text-4xl  text-black font-bold">We have the the Solutions of your problems..</h1>
                            <p className="pt-6 md:w-11/12 font-light text-sm leading-snug">Our web section is your ultimate destination for problem-solving. With a comprehensive range of solutions tailored to your needs, we're here to address all your challenges efficiently and effectively. </p>
                            <p className="py-5 md:w-11/12 font-light text-sm leading-snug">Explore our offerings and experience the ease of finding solutions that truly work for you. A comprehensive range of solutions tailored to your needs.</p>

                            <button className="py-3 px-5 mt-3 text-base border-2 hover:border-[#303544] duration-300 text-white hover:scale-105 hover:-rotate-2 rounded-lg  gap-2 hover:shadow-xl font-semibold bg-[#108864]">Get More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solulation;