import { SiFireship } from "react-icons/si";
import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { motion } from 'framer-motion'

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';



const Banner = () => {
    return (
        <div className="  ">
            <Swiper
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Pagination, Autoplay, Navigation]}
                className="mySwiper "
            >
                <SwiperSlide >
                    <div className="md:h-[calc(100vh-50px)] h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(https://i.postimg.cc/1320PCvG/man-carrying-tray-of-fruits.jpg)` }}>
                        <div className="bg-white/20  md:backdrop-blur-md md:w-1/3 rounded-3xl relative top-1/2 md:left-24 -translate-y-1/2 h-2/3 bg-opacity-60">
                            <motion.div
                                initial={{ y: -250 }}
                                animate={{ y: -10 }}
                                className="mx-auto h-full w-[90%] md:w-[85%] flex items-center">
                                <div
                                    className=" mt-10 md:mt-0 text-white w-full md:w-auto">
                                    <p className="text-2xl md:text-3xl lg:text-3xl w-11/12 font-bold text-center md:text-left">
                                        Together, Let's  <span className="text-[#25d4a0]">Share</span> Foods Souls!
                                        {/* Sharing Food,  <span className="text-[#25d4a0]">Reducing</span> Waste! */}
                                    </p>
                                    <p className="font-medium mt-5 text-sm md:text-base text-center md:text-left">
                                        NourishNet Connects Food Surpluses with Those in Need.
                                    </p>

                                    <div className="flex justify-center md:justify-start">
                                        <button className="bg-[#108864] py-2 mt-5 px-3 rounded text-white font-semibold duration-150 hover:-rotate-3 hover:bg-[#25d4a0]">
                                            <span className="mr-3">
                                                <i className="bx bx-hive"></i>
                                            </span>
                                            Explore Now
                                        </button>
                                    </div>
                                </div>

                                {/* left */}
                                <div>

                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="md:h-[calc(100vh-50px)] z-0 h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(https://i.postimg.cc/25Y64nyp/grapes-in-hands.png)` }}>
                        <div className="bg-white/20 md:backdrop-blur-md md:w-1/3 rounded-3xl relative top-1/2 md:left-24 -translate-y-1/2 h-2/3 bg-opacity-60">
                            <motion.div
                                initial={{ y: -250 }}
                                animate={{ y: -10 }}
                                className="mx-auto h-full w-[90%] md:w-[85%] flex items-center">
                                <div className=" mt-10 md:mt-0 text-white w-full md:w-auto">
                                    <p className="text-2xl md:text-3xl lg:text-3xl w-11/12 font-bold text-center md:text-left">
                                        Sharing Food,  <span className="text-[#303544]">Reducing</span> Waste!
                                    </p>
                                    <p className="font-medium mt-5 text-sm md:text-base text-center md:text-left">
                                        NourishNet Bridges the Gap between Surplus and Hunger.
                                    </p>

                                    <div className="flex justify-center md:justify-start">
                                        <button className="bg-[#303544] py-2 mt-5 px-3 rounded text-white font-semibold duration-150 hover:-rotate-3 hover:bg-[#303544c9]">
                                            <span className="mr-3">
                                                <i className="bx bx-hive"></i>
                                            </span>
                                            Explore Now
                                        </button>
                                    </div>
                                </div>

                                {/* left */}
                                <div>

                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;