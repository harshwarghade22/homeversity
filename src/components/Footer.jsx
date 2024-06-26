import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaArrowRightLong, FaRegCopyright } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
function Footer() {
  return (
    <div className='h-[65vh] w-full bg-zinc-50 text-zinc-900'>
                <div className='h-[80%] w-full bg-zinc-100 flex flex-col lg:flex-row '>
                    <div className='h-full w-full lg:w-[40%] bg-zinc-50 flex flex-col lg:justify-center lg:items-start items-center pl-[5vw] gap-2 pt-6 lg:pt-0'>
                        <h1 className='h-[4vh]  rounded-full bg-orange-600 text-white text-center px-2 '>Logo</h1>
                        <div className='font-bold tracking-tight lg:text-2xl text-lg'>
                            <h1>To make sure when you are </h1>
                            <h1>independent you live like a boss</h1>
                        </div>
                        <h1 className='font-semibold text-lg tracking-tight mt-4'>Habit8,2023</h1>
                    </div>
                    <div className="h-full w-full lg:w-[60%] bg-zinc-200 flex  lg:flex-row mx-5 lg:mx-0 text-sm lg:text-xl  ">                                                                 
                        <div className="w-full lg:w-[25%] bg-zinc-50 flex flex-col justify-center space-y-2">
                            <h4 className="text-zinc-500 pt-4 sm:pt-0">FAQ's</h4>
                            <h4 className="text-zinc-900 font-gilroy_regular">How it works</h4>
                            <h4 className="text-zinc-900 font-gilroy_regular">List your property</h4>
                            <h4 className="text-zinc-900 font-gilroy_regular">See More</h4>
                        </div>
                        <div className="w-full lg:w-[25%] bg-zinc-50 flex flex-col justify-center space-y-2">
                            <h4 className="text-zinc-500">Company</h4>
                            <h4 className="text-zinc-900 font-gilroy_regular">Blogs</h4>
                            <h4 className="text-zinc-900 font-gilroy_regular">Career</h4>
                            <h4 className="text-zinc-900 font-gilroy_regular">News</h4>
                        </div>
                        <div className="w-full lg:w-[25%] bg-zinc-50 flex flex-col justify-center space-y-2">
                            <h4 className="text-zinc-500">Insights</h4>
                            <h4 className="text-zinc-900 font-gilroy_regular">Inventory</h4>
                            <h4 className="text-zinc-900 font-gilroy_regular">Stats</h4>
                            <h4 className="text-zinc-900 font-gilroy_regular">Investments</h4>
                        </div>
                        <div className="w-full lg:w-[25%] bg-zinc-50 flex flex-col justify-center space-y-2 mr-7 lg:mr-0">
                            <h4 className="text-zinc-500">Get the app</h4>
                            <button className="w-fit px-4 py-1 font-semibold border-2 rounded-full border-zinc-500 flex justify-center items-center gap-1"><DiAndroid />Android</button>
                            <button className="w-fit px-4 py-1 font-semibold border-2 rounded-full border-zinc-500 flex justify-center items-center gap-1"><FaApple />Apple</button>
                        </div>
                    </div>
                </div>
                <div className='h-[30%] lg:h-[20%] w-full text-white bg-orange-600 flex flex-col lg:flex-row items-center p-7'>
                    <div className='lg:w-[50%]'>
                        <h4 className='font-semibold tracking-tight flex items-center '>Copyright <FaRegCopyright /> 2023 Techademy Campus</h4>
                    </div>
                    <div className='flex lg:flex-row lg:justify-end mt-4 lg:mt-0 text-xs lg:text-lg'>
                        <h4 className='mr-2 lg:mr-4'>Terms of Services</h4>
                        <h4 className='mr-2 lg:mr-4'>Privacy Policy</h4>
                        <h4>Cookies</h4>
                    </div>
                </div>
            </div>
  )
}

export default Footer