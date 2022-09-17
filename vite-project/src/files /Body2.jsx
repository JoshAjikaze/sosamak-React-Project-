import React from 'react'

const Body2 = () => {
  return (
    <div className='flex flex-col lg:flex-row w-[100%] min-h-[60vh] lg:space-x-[5%] md:px-[20px] lg:px-[50px] pt-[25px]'>
        <div className='min-w-[16%] border border-gray-400 rounded-[5px] p-[5px] hidden lg:flex'>div 1</div>
        <div className='min-w-[65%] border border-gray-400 rounded-[5px]'>div 2</div>
    </div>
  )
}

export default Body2