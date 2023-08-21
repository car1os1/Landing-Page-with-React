import React, { useState } from 'react'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {
    const [nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#5B9A8B]'>Finance</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resource</li>
                <li className='p-4'>About</li>
                <li className='p-4' >Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <div className={!nav ? ' fixed left-0 top-0 w-[60%] h-full border-r ease-in-out duration-500 b{order-r-grey-900 bg-[#252B48]' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#5B9A8B] m-4'>Finance</h1>

                <ul className=' uppercase p-4'>
                    <li className='p-4 border-b border-gray-500'>Home</li>
                    <li className='p-4 border-b border-gray-500'>Company</li>
                    <li className='p-4 border-b border-gray-500'>Resource</li>
                    <li className='p-4 border-b border-gray-500'>About</li>
                    <li className='p-4 border-b border-gray-500' >Contact</li>
                </ul>
            </div>
        </div>
    );
};



export default Navbar
