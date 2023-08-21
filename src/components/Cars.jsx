import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/Triple.png'

function Cars() {
    return (
        <div className='bg-white w-full py-[7rem] px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className=' w-full border shadow-md flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="" />
                    <h2 className=' font-bold text-2xl text-center p-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500gb Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#F7E987] w-[200px] rounded-md font-medium  my-6  px-6 py-3 mx-auto text-[#252B48] '>Start Trial</button>
                </div>
                <div className=' w-full border shadow-md  flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt="" />
                    <h2 className=' font-bold text-2xl text-center p-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$200</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500gb Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#F7E987] w-[200px] rounded-md font-medium  my-6 mx-auto px-6 py-3  text-[#252B48] '>Start Trial</button>
                </div>
                <div className='w-full border  shadow-md flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto bg-white mt-[-3rem]' src={Triple} alt="/" />
                    <h2 className=' font-bold text-2xl text-center p-7'>Organization</h2>
                    <p className=' text-center text-4xl font-bold'>$300</p>
                    <div className=' text-center font-medium'>
                        <p className='py-2 border-b mt-9' >full Storage</p>
                        <p className='py-2 border-b mx-8'>Unlimited</p>
                        <p className='py-2 border-b mx-8'>Unlimited</p>
                        <button className='bg-[#F7E987] w-[200px] rounded-md font-medium  my-6  px-6 py-3 mx-auto text-[#252B48] '>Start Trial</button>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Cars
