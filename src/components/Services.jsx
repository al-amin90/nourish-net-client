import { Link } from 'react-router-dom';
import imageBG from '../assets/giphy.gif';

const Services = () => {
    return (
        <div className='bg-contain mt-32 flex items-center max-w-7xl mx-auto w-[95%] md:w-[85%]  justify-between'>
            <div className="  font-outfit">

                <div>
                    <p className='text-[#108864] font-bold mb-4'>____________----____</p>
                    <h1 className="text-4xl  text-black font-bold">Empowering Solutions for Every Need</h1>
                </div>
                <div>
                    <p className='max-w-lg mt-5'>Discover our comprehensive range of services designed to empower you in every aspect of your journey. From tailored solutions to expert guidance, we're dedicated to providing the support you need to thrive. Explore our services and unlock the potential for success today.</p>
                    <button className="py-3 mt-8 px-5 text-base border-2 hover:border-[#303544] duration-300 text-white hover:scale-105 hover:-rotate-2 rounded-lg  gap-2 hover:shadow-xl font-semibold bg-[#108864]">Contact Us</button>
                </div>


            </div >
            <div>
                <img src={imageBG} className='object-cover rounded-full' alt="" />
            </div>
        </div >
    );
};

export default Services;