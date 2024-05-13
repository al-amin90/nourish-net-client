import img from '../../assets/register.jpg';
import { MdOutlineMailOutline } from "react-icons/md";
import SideAuth from '../../components/SideAuth';
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdLockOpen } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import Loader from '../../utlis/Loader';
import { useEffect } from 'react';


const Register = () => {
    const { createUser, user, setUser, setLoading, loading } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "NourishNet | Register"
    }, [])

    useEffect(() => {
        if (user) return navigate('/')
    }, [user])

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        const user = { name, email, password, photo };

        createUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                setUser({ ...user, displayName: name, photoURL: photo })
                navigate('/')
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
                toast.error(error.message)
            })
    }

    if (user || loading) return <Loader></Loader>
    return (
        <div className='grid grid-cols-1 gap-0 lg:gap-5 w-[90%] mx-auto justify-between my-20 max-w-7xl lg:grid-cols-3'>

            <div style={{ backgroundImage: `url(${img})` }} className='col-span-2 mb-8 lg:mb-0 flex items-center justify-center rounded-lg border shadow-auth bg-cover'
            >
                <div className='text-white my-12 w-11/12 md:w-6/12 bg-white/20 backdrop-blur-md rounded-lg pt-8' >
                    <div className="">
                        <h1 className="text-3xl text-center font-bold">Register now!</h1>
                        <p className="text-sm text-center my-3">Welcome!!! Enter your details to register.</p>

                        <div className="card shrink-0 w-full shadow-2xl ">
                            <form onSubmit={handleSubmit} className="card-body">
                                <label className="input mb-1 -full rounded-full input-bordered flex items-center gap-2">
                                    <FaRegUser className='text-base text-[#023022]' />
                                    <input type="text" name='name' className="grow text-gray-900" placeholder="Enter Your Name" required />

                                </label>
                                <label className="input mb-6 w-full rounded-full input-bordered flex items-center gap-2">
                                    <MdAddPhotoAlternate className='text-lg text-[#023022]' />
                                    <input type="text" name='photo' className="grow text-gray-900" placeholder="Enter Your Photo URL" />

                                </label>
                                <label className="input mb-1 bg-[#eefdf9]   w-full rounded-full input-bordered flex items-center gap-2">
                                    <MdOutlineMailOutline className='text-lg text-[#023022]' />
                                    <input type="email" name='email' className="grow text-gray-900" placeholder="Enter Your Email" required />

                                </label>
                                <label className="input mb-1  bg-[#eefdf9]   w-full rounded-full input-bordered flex items-center gap-2">
                                    <MdLockOpen className='text-lg text-[#023022]' />
                                    <input type="password" name='password' className="grow text-gray-900" placeholder="Enter Your Password" required />

                                </label>


                                <div className="form-control mt-6">
                                    <button type='submit' className="btn bg-[#023022] text-white hover:bg-[#023022]/85 rounded-full">Register</button>
                                </div>
                            </form>

                            <p className='text-center pb-4'>Already have an account?  <Link to='/login' className='link text-[#023022]'>Log in</Link></p>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <SideAuth></SideAuth>
            </div>
        </div>
    );
};

export default Register;