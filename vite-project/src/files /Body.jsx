import React from 'react'

const Body = () => {
  return (
    <div className='hidden md:flex flex-row items-center justify-between md:px-[20px] lg:px-[50px] py-[5px]'>
        <button className='hidden lg:flex items-center justify-center bg-[#edd443] p-[5.3px] rounded-[5px] font-[18px] h-[50px] w-[200px]'>
            <i className="fas fa-bars mx-[10px]"></i>
            All Categories
            <i className="fas fa-caret-down mx-[15px]"></i>
            </button>
        <div className='flex space-x-[10px]'>
            <p className='font-light'>New Products</p>
            <p className='font-light'>Specials</p>
            <p className='font-light'>Bestseller</p>
            <p className='font-light'>About Us</p>
            <p className='font-light'>Blog</p>
        </div>
        <p className='flex items-center space-x-[10px]'>
            <p><i className="fal fa-cog text-[35px]"></i></p>
            <p className='flex  flex-col '>
                <span className='text-[14px] text-[gray]'>Call us now</span>
                <span>+234-802-950-434-2</span>
            </p>
        </p>
    </div>
  )
}

export default Body