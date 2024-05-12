import { HashLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div>
            <div className='flex justify-center items-center w-full min-h-[calc(100vh-180px)]'>

                <HashLoader
                    color="#108864"
                    cssOverride={{}}
                    loading
                    size={70}
                    speedMultiplier={5}
                />
            </div>
        </div>
    );
};

export default Loader;