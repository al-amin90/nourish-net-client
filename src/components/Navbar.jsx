import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            {/* navbar 1 */}
            <div className="navbar w-[95%] mx-auto mt-1 max-w-7xl px-0 bg-base-100">
                <div className="navbar-start">
                    <div className='flex '>
                        <div className="flex gap-2 items-center justify-center text-lg">
                            <img className='w-9' src="/apple.png" alt="" />
                            <p className='text-[#023022] font-mons font-bold pt-3'>NourishNet</p>
                        </div>
                        <label className="border hidden md:flex ml-24 px-3 w-60 relative rounded-full input-bordered items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            <input type="text" className="grow text-sm rounded-full outline-none h-full" placeholder="Name" />
                            <button className='px-5 absolute text-sm right-0 h-full bg-[#023022] text-white hover:bg-[#023022]/85 rounded-full'>Search</button>
                        </label>
                    </div>
                </div>
                <div className="navbar-center ml-10 hidden lg:flex">
                    <ul className="menu menu-horizontal hidden lg:flex px-1">
                        <div>
                            <p className='font-bold text-md'>Everyday:</p>
                            <p className=' text-sm'>8:00 AM - 9:00 PM</p>
                        </div>

                    </ul>
                </div>
                <div className="navbar-end items-center gap-7">
                    <div className="xl:mr-20 hidden lg:flex items-center gap-7">
                        <div className='text-right'>
                            <p className=' text-sm'>Support 24/7:</p>
                            <p className='font-bold text-md'>+66 442-424-444</p>
                        </div>

                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" className="theme-controller" value="synthwave" />

                            {/* sun icon */}
                            <svg className="swap-off fill-current w-9 h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>

                    <FaCartPlus className="text-3xl" />
                    <div className="avatar online">
                        <div className="w-11 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* navbar 2 */}
        </div>
    );
};

export default Navbar;