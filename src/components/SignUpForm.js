import React from 'react'
import { useState } from "react";
import{AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast'

const SignUpForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate()
    const [isStudent,setIsStudent]=useState(true)
    const[showPassword,setShowPassword]=useState(false)
    const[showConfirmPassword,setShowConfirmPassword]=useState(false)
    const[formData,setFormData]=useState({
        firstName:"",lastName:"",email:"",password:"",confirmPassword:"" 
    })
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
        toast.success('Account created')
        navigate('/dashboard')
        const totalData={
            ...formData,
            isStudent
        }
        console.log('Printing the Signup form data',totalData)
    }
    function studentHandler(){
        setIsStudent(true)
    }
    function instructorHandler(){
        setIsStudent(false)
    }
    return (
        <div>

            <div className='flex w-fit gap-4 bg-richblack-800 my-2 py-1 px-1 rounded-full text-richblack-5'>
                <button className={`w-full rounded-full ${isStudent?"bg-richblack-900":"bg-richblack-800 text-richblack-200"} py-2 px-5`} onClick={studentHandler}>
                    Student
                </button>
                <button className={`w-full rounded-full ${!isStudent?"bg-richblack-900":"bg-richblack-800 text-richblack-200"} py-2 px-5`} onClick={instructorHandler} >
                    Instructor
                </button>
            </div>
            
            <form className='flex flex-col gap-2' onSubmit={submitHandler}>
                <div className='flex gap-2'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1'>First Name<sup className='text-pink-200'>*</sup></p>
                        <input 
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                        />
                    </label>
                    <label className='w-full flex flex-col'>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1'>Last Name<sup className='text-pink-200'>*</sup></p>
                        <input 
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                        />
                    </label>
                </div>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address"
                        value={formData.email}
                        className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                    />
                </label>

                <div className='flex gap-2'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1'>Create Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showPassword?"text":"password"}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            value={formData.password}
                            className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                        />
                        <span className='absolute right-3 top-[39px] cursor-pointer'
                            onClick={()=> setShowPassword(!showPassword)}>
                                {showPassword?(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showConfirmPassword?"text":"password"}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                        />
                        <span  className='absolute right-3 top-[39px] cursor-pointer'
                            onClick={()=> setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword?(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>
                </div>
                <button className='bg-yellow-50 rounded-lg font-medium text-richblack-900 px-3 py-2 mt-6'>
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignUpForm