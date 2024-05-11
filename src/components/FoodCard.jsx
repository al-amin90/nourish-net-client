import { FaArrowRight } from "react-icons/fa6";
import { LuClock } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import useAuth from "../Hooks/useAuth";

const FoodCard = () => {
    const navigate = useNavigate()
    const { user } = useAuth()


    return (
        <div className="min-h-full">
            <div className="card min-h-full rounded-2xl bg-white dark:bg-white/90 card-compact font-open shadow-lg">
                <figure className="md:h-60 border  h-[250px] rounded-xl bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(https://i.postimg.cc/gjpqQgYY/product-16.jpg)` }}>

                </figure>
                <div className="relative px-6 mt-5">

                    <p className="font-md flex items-center justify-between">
                        <h2 className="text-2xl pt-4 dark:text-black/70 font-bold"> Apple Fruits</h2>
                        <div className="text-center">
                            <span className="py-2 text-base text-white px-4 rounded-xl bg-[#108864]">4</span>
                            <p className="pt-1 text-[#108864]">Avilable</p>
                        </div>
                    </p>

                    <p className="flex text-base mt-6 font-medium items-center ">
                        <IoLocationSharp className=" text-lg mr-2  text-[#023022]" /> Pickup Location:

                        <span className="text-black/90   ml-3">Cumilla</span>
                    </p>
                    <p className="flex pb-4 text-base mt-2 font-medium items-center ">
                        <LuClock className="text-lg mr-2 text-[#023022]" /> Expired Date:
                        <span className="text-black/90   ml-3">23/30/2022</span>
                    </p>
                    <div className="flex items-center justify-between pb-5">
                        <button onClick={() => navigate(`/spot/${`spot?._id`}`)} className="py-2 px-5 text-base border-2 border-[#303544] duration-300 text-[#303544] hover:scale-105 hover:-rotate-2 rounded-full flex items-center gap-2 hover:shadow-xl font-semibold">Details <FaArrowRight /></button>


                    </div>

                    <div className="border-t pt-3">
                        <h3 className="text-md mt-2 font-semibold">Donator:</h3>

                        <div className="justify-between text-lg items-center flex">
                            <h2 className="font-semibold text-[#108864]">{user?.displayName}</h2>
                            <div className="avatar -mt-4 z-50">
                                <div className="w-11 object-cover rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                        </div>

                        <p className="pb-6  mt-2"><span className="font-semibold">Note:</span> Appropriately embrace intermandated resources for impactful scenarios.</p>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default FoodCard;