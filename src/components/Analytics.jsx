import React from 'react'
import laptop from '../assets/laptop.avif'

function Analytics() {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className=' max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={laptop} alt="/" />
                <div className='flex flex-col justify-center md:pl-10'>
                    <p className='text-[#5B9A8B] font-bold uppercase'>Data Analytics Dashboard</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Manage Data Analytics Centrally
                    </h1>
                    <p>El análisis de datos no se limita solo a las empresas; también se aplica en campos como la investigación científica, la medicina y la administración pública. A medida que la tecnología continúa avanzando, el análisis de datos se ha convertido en un impulsor clave de la innovación y el progreso en diversas áreas.</p>

                    <button className='bg-[#F7E987] w-[200px] rounded-md font-medium my-6 mx-auto px-3 py-3 text-[#252B48]'>Get Start</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics
