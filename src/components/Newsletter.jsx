import React from 'react'

function Newsletter() {
    return (
        <div className='w-full text-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full '>
                        <input className='p-3 flex w-full rounded-md text-black ' type="email" placeholder='Enter email' />
                        <button className='bg-[#F7E987] w-[200px] rounded-md font-medium  my-6  px-6 py-3 ml-4 text-[#252B48] '>Notify me </button>
                    </div>
                    <p>
                        We care about the protection of your data. Read our <span className='text-[#F7E987]'>Privacy Policy.</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Newsletter
