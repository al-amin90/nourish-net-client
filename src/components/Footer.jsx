

const Footer = () => {
    return (
        <div className='bg-[#1D2835] font-outfit text-white'>
            <footer className="pt-28 pb-10 max-w-7xl  mx-auto w-[90%] ">
                <div className="container px-6 mx-auto space-y-6 md:space-y-12">
                    <div className="grid lg:grid-cols-12 gap-10 md:gap-20">
                        <div className="pb-6 md:pb-0 md:col-span-4">
                            <div className="flex gap-2 items-center mb-3 text-lg">
                                <img className='w-9' src="/apple.png" alt="" />
                                <p className='text-white font-mons font-bold pt-3'>NourishNet</p>
                            </div>
                            <p className='text-sm mb-5'>Explore the world with ease using our comprehensive travel platform. Discover top destinations, book accommodations, and plan your dream getaway with confidence. Your adventure begins here!</p>

                            <div>
                                <div className='flex gap-3'>
                                    <a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#303544] text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                    </a>
                                    <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#303544] text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                            <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                                        </svg>
                                    </a>
                                    <a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#303544] text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center text-sm md:text-left lg:col-span-2">
                            <p className="pb-4 text-xl font-bold">Quick Link</p>
                            <ul className='space-y-2'>
                                <li>
                                    <a rel="noopener noreferrer" href="#" className="hover:text-[#2BA2FF]">About Us</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#" className="hover:text-[#2BA2FF]">Tour Package</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#" className="hover:text-[#2BA2FF]">Destination</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#" className="hover:text-[#2BA2FF]">Tour Guide</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#" className="hover:text-[#2BA2FF]">Booking Process</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#" className="hover:text-[#2BA2FF]">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center text-sm md:text-left lg:col-span-3">
                            <p className="pb-4 text-xl font-bold">Newsletter</p>
                            <ul className='space-y-2'>
                                <li>
                                    <a rel="noopener noreferrer" href="#" className="hover:text-[#2BA2FF]">Subscribe our newsletter to get our latest update & news.
                                    </a>
                                </li>

                            </ul>
                            <label className="border border-white input hidden md:flex px-3 w-full relative rounded-md mt-10 bg-transparent input-bordered items-center gap-2">
                                <input type="text" className="grow text-sm rounded-full outline-none h-full" placeholder="Your Email" />
                                <button className='px-5 absolute text-sm right-0 h-full bg-[#023022] text-white hover:bg-[#023022]/85 rounded-md'>Email</button>
                            </label>
                        </div>
                        <div className="text-center text-sm md:text-left lg:col-span-3">
                            <p className="pb-4 text-xl font-bold">Address</p>
                            <ul className='space-y-2'>
                                <li>
                                    <a className='text-xl  font-black'></a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-2" rel="noopener noreferrer" href="#">
                                        <span> info@mkmunna.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-2" rel="noopener noreferrer" href="#">
                                        <span> +1 763-227-5032</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-2" rel="noopener noreferrer" href="#">

                                        <span>
                                            Lewa House Pimibi Ltd.</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-start text-left gap-2" rel="noopener noreferrer" href="#">
                                        <span>Po. Box 760
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-start text-left gap-2" rel="noopener noreferrer" href="#">
                                        <span>Isiolo
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-start text-left gap-2" rel="noopener noreferrer" href="#">
                                        <span>
                                            60300
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center pt-10 text-sm">
                        <span>Copyright@2024. All rights reserved</span>
                    </div>
                </div >
            </footer >
        </div >
    );
};

export default Footer;