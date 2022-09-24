import React from 'react'
import logo from './logo.webp';

const Navbar = () => {
  return (
    <div className='w-[100%] text-[white] min-h-[100px] lg:h-[50px] bg-[#2e3752] flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between p-[20px] space-y-[10px] lg:space-y-[0px] lg:p-[0] lg:px-[50px]'>
                <img src={ logo } alt="" srcset="" className='' />
        <p className='hidden lg:flex items-center space-x-[5.3px]'>
            <p className=''>
                <i className="fal fa-cog text-[35px]"></i>
            </p>
            <p className=' flex flex-col space-y-[6px]'>
                <span className='font-lignt'>Email us:</span>
                <span className='font-bold'>Contact@gmail.com</span>
            </p>
        </p>
        <p className='w-[100%] h-[50px] flex items-center justify-between px-[10px] border border-[gray] rounded-md lg:w-[35%] '>
            <input type="text" placeholder='Search...' className='bg-[transparent] focus:outline-none w-[70%]' />
            <i className="fas fa-search"></i>
        </p>
        {/* <input type="text" className='w-[100%] p-[4px] ' /> */}
        <p className='space-x-[10px]'>
            
            <i className="fal fa-cog"></i>
            <i className="fal fa-cog"></i>
            <i className="fal fa-cog"></i>
            
        </p>
    </div>
  )
}

export default Navbar