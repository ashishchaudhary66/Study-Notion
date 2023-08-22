import React from 'react'
import frameImage from '../assets/frame.png'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import {FcGoogle} from 'react-icons/fc'

const Template = ({title,desc1,desc2,image,formType,setIsLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] mx-auto py-12 justify-between'>
      <div className='w-11/12 max-w-[450px]'>
        <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] '>{title}</h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
          <span className='text-richblack-100'>{desc1}</span><br/>
          <span className='text-blue-100 italic'>{desc2}</span>
        </p>
        {formType==='login'?<LoginForm setIsLoggedIn={setIsLoggedIn}/>:<SignUpForm setIsLoggedIn={setIsLoggedIn}/>}
        <div className='flex w-full items-center my-4 gap-x-2'>
          <div className='w-full h-[1px] bg-richblack-700'></div>
          <div className=' text-richblack-700'>OR</div>
          <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>
        <button className='flex text-richblack-100 items-center justify-center mx-auto gap-x-2 font-medium rounded-lg border-richblack-700 border px-3 py-2 mt-6'>
          <FcGoogle/>
          <p>Sign in with Google</p>
        </button>
      </div>

      <div className='relative w-11/12 max-w-[450px]'>
        <img src={frameImage}
          alt='pattern'
          width={558}
          height={504}
          loading='lazy'
        />
        <img src={image}
          alt='students'
          width={558}
          height={490}
          loading='lazy'
          className="absolute -top-4 right-4"
        />
      </div>
    </div>
  )
}
export default Template;