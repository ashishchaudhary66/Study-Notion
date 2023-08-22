import React from 'react'
import { useState } from 'react';
import{AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link,useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast'

const LoginForm = (props) => {
    const navigate=useNavigate()
    const setIsLoggedIn=props.setIsLoggedIn
    const[formData,setFormData]=useState({
        email:"",password:""
    })
    const[showPassword,setShowPassword]=useState(false)
    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
            })
        )
    }

    function submitHandler(event){
        event.preventDefault()
        setIsLoggedIn(true)
        toast.success('Logged In')
        navigate('/dashboard')
        console.log('Printing the Login form data',formData)
    }
    return (
        <form  onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1'>
                    Email Address<sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter email address"
                    name="email"
                    className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1'>
                    Password<sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type={showPassword?"text":"password"}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter password"
                    name="password"
                    className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
                <span className='absolute right-3 top-[39px] cursor-pointer'
                    onClick={()=> setShowPassword(!showPassword)}>
                        {showPassword?
                            (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>):
                                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                </span>
                <Link to='#'>
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button className='bg-yellow-50 rounded-lg font-medium text-richblack-900 px-3 py-2 mt-6'>
                Sign In
            </button>
        </form>
    )
}

export default LoginForm