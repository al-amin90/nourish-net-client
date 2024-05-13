import solution from "../assets/family.jpeg"
import { Link } from 'react-router-dom';
import bgSolu from "../assets/bgSolu.png"

const Solulation = () => {
    return (
        <div className="bg-no-repeat mt-28 bg-contain" style={{ backgroundImage: `url(${bgSolu})` }}>
            <div className='max-w-7xl mx-auto w-[90%] md:w-[85%]'>
                <div className="hero py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className='flex-1 relative mr-16'>
                            <img src={solution} className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className='flex-1 flex-grow'>
                            <p className='text-[#108864] font-bold mb-4'>____________----____</p>
                            <h1 className="text-4xl  text-black font-bold">We have the the Solutions of your problems..</h1>
                            <p className="pt-6 md:w-11/12 font-light text-sm leading-snug">There are many variations of passages of Foods available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <p className="py-5 md:w-11/12 font-light text-sm leading-snug">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                            <Link className="py-3 px-5 text-base border-2 hover:border-[#303544] duration-300 text-white hover:scale-105 hover:-rotate-2 rounded-lg  gap-2 hover:shadow-xl font-semibold bg-[#108864]">Get More Info</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solulation;