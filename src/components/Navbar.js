import React from 'react'
import logo from '../assets/Logo.svg'
import { Link} from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn
    let setIsLoggedIn=props.setIsLoggedIn
    function logoutHandler(){
        setIsLoggedIn(false)
        toast.success('Log Out')
    }
    
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] mx-auto py-2'>
        <Link to="/">
            <img src={logo} alt="logo" width={160} height={32}></img>
        </Link>

        <nav>
            <ul className='flex text-richblack-100 gap-3'>
                <li className='px-[12px] py-[8px]'>
                    <Link to="/"> Home</Link>
                </li>
                <li className='px-[12px] py-[8px]'>
                    <Link to="/"> About</Link>
                </li>
                <li className='px-[12px] py-[8px]'>
                    <Link to="/"> Contact</Link>
                </li> 
            </ul>
        </nav>

        <div className='flex gap-3 text-richblack-100'>
        {   !isLoggedIn &&
            <Link to='/login'>
                <button className="bg-richblack-800 px-[12px] py-[8px] rounded-[8px] border-richblack-700">
                    Log in
                </button>
            </Link>
        }
        {   !isLoggedIn &&
            <Link to="/signup">
                <button className="bg-richblack-800 px-[12px] py-[8px] rounded-[8px] border-richblack-700">
                    Sign up
                </button>
            </Link>
        }
        {   isLoggedIn &&
            <Link to="/">
                <button className="bg-richblack-800 px-[12px] py-[8px] rounded-[8px] border-richblack-700" onClick={logoutHandler}>
                    Log Out
                </button>
            </Link>
        }
        {   isLoggedIn &&
            <Link to="/dashboard">
                <button className="bg-richblack-800 px-[12px] py-[8px] rounded-[8px] border-richblack-700" >
                    Dashboard
                </button>
            </Link>
        }  
        </div>
    </div>
  )
}

export default Navbar