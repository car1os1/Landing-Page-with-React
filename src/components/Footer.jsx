import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare
} from 'react-icons/fa'

function Footer() {
  return (
    <div className=' -max-w-[1224px] mx-auto py-16 px-4 grid lg:grid-cols-3 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#5B9A8B]'>Finance</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaGithubSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between'>
        <div>
          <h6 className='  font-medium text-gray-400 '>
            Solutions
          </h6>
          <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insight</li>

          </ul>
        </div>
        <div>
          <h6 className='  font-medium text-gray-400 '>
            Support
          </h6>
          <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>Api Status</li>

          </ul>
        </div>
        <div>
          <h6 className='  font-medium text-gray-400 '>
            Company
          </h6>
          <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Careers</li>

          </ul>
        </div>
        <div>
          <h6 className='  font-medium text-gray-400 '>
            Legal
          </h6>
          <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>

          </ul>
        </div>
      </div>

    </div>
  )
}

export default Footer
