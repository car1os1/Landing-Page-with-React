import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'


function Hero() {
    const [text] = useTypewriter({
        words: ['BTC', "BTM", "SASS"],
        loop: {},
        startDelay: 150,
        typeSpeed: 200,
        deleteSpeed: 100,

    })


    return (
        <div className=' text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className=' text-[#F7E987] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
                <div className='flex justify-center items-center'>
                    <p className=' md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, Flexible, facinancing for </p>
                    <span className='md:text-5xl sm:text-4xl text-xl font-bold   md:pl-5 pl-2'>{text}</span>
                </div>
                <p className='md:text-2xl text-xl font-bold text-[#445069]'>Monitor your data analytics to increse revenue for BTB,BTC & SASS platforms.</p>
                <button className=' bg-[#F7E987] w-[200px] rounded-md font-medium my-6 mx-auto px-3 py-3 text-[#252B48]' >Get started</button>
            </div>
        </div>
    )
}

export default Hero
