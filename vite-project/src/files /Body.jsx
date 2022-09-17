import React from 'react'

const Body = () => {
  return (
    <div className='hidden md:flex flex-row items-center justify-between lg:px-[50px] py-[5px]'>
        <button className='hidden lg:flex items-center justify-center bg-[#edd443] p-[5.3px] rounded-[5px] font-[18px] h-[50px] w-[200px]'>
            <i className="fas fa-bars mx-[10px]"></i>
            All Categories
            <i className="fas fa-caret-down mx-[15px]"></i>
            </button>
        <div className='flex space-x-[10px]'>
        <p>New Products</p>
        <p>New Products</p>
        <p>New Products</p>
        <p>New Products</p>
        <p>New Products</p>
        </div>
        <p>Call Us Now</p>
    </div>
  )
}

export default Body