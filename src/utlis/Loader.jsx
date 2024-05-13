import { HashLoader } from 'react-spinners'
import loader from "../assets/loader.gif"

const Loader = () => {
    return (
        <div>
            <div className='flex bg-black  justify-center items-center w-full min-h-[calc(100vh-180px)]'>

                <img className='object-contain' src={loader} alt="" />
            </div>
        </div>
    );
};

export default Loader;