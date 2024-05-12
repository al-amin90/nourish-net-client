import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData } from 'react-router-dom';
import { GiFruitBowl } from "react-icons/gi";
import { FaCloudSun } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { FaPlaneDeparture } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";

const FoodDetails = () => {
    const { data } = useLoaderData()
    console.log(data);

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
                        <div className="px-6 flex items-center justify-end mt-4">
                            <button className="py-2 px-5 text-base border-2 border-[#303544] hover:text-[#303544] text-white duration-300 hover:bg-white bg-[#303544] rounded-full flex items-center gap-2 hover:shadow-xl font-medium">Request </button>

                            {/* <p className="flex text-base mt-1 font-semibold text-[#2BA2FF] items-center ">
                                <FaCloudSun className=" mr-2" /> Seasonality:
                                <span className="text-black/90 ml-3">{data?.seasonality}</span></p>
                            <p className="flex text-base mt-1 font-semibold text-[#2BA2FF] items-center ">
                                Travel Time:
                                <span className="text-black/90 ml-3">{data?.travel_time}</span></p>
                            <p className="flex text-base mt-1 ml-1 font-semibold text-[#2BA2FF] items-center ">
                                <FaPeoplePulling className=" mr-2" /> Visitors:
                                <span className="text-black/90  ml-3">{data?.visitors}/yr</span>
                            </p>
                            <p className="flex text-base mt-1 ml-1 font-semibold text-[#2BA2FF] items-center ">
                                <FaPlaneDeparture className=" mr-2" /> Country Name:
                                <span className="text-black/90  ml-3">{data?.countryName}</span>
                            </p> */}
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