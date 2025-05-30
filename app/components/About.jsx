import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full px-4 sm:px-8 lg:px-[12%] py-10 scroll-m-20'>
    <h4 className='text-center mb-2 text-lg'>Introduction</h4>
    <h2 className='text-center text-5xl font-Ovo'>About me</h2>
    <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-full max-w-xs sm:max-w-sm rounded-3xl'>
        <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </div>
        <div className='flex-1'>
        <p className='mb-10 max-w-2xl font-Ovo'>
            {/* I hold a Master's in Software Systems Engineering from RWTH Aachen and a Bachelor's
            in Computer Science from BRAC University, building a strong technical foundation.
            With over three years of experience, I have worked on web development, contributing
            to user-friendly applications. My tech stack includes Python, Flask, FastAPI, Docker,
            React, and TypeScript. I aim to grow as a Full Stack Developer, with a primary focus
            on backend development, and thrive in a dynamic, innovative environment. */}
            A software developer with a strong focus on web development, 
            bringing around 3 years of professional experience in designing, 
            developing, and maintaining web applications. On the front end, 
            experienced with JavaScript/TypeScript using frameworks like React and Next.js 
            to build responsive and user-friendly interfaces. On the back end,
            proficient in Python, working with technologies such as FastAPI 
            and Flask to create robust APIs and server-side logic. Actively
            interested in DevOps topics and modern deployment workflows.
        </p>
        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
            <li key={index} className='border-[0.5px] border-gray-700 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
                <Image src={icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-600'>{title}</h3>
                <p className='text-gray-600 text-sm'>{description}</p>
            </li>
            ))}
        </ul>
        <h4 className='my-6 text-gray-700 font-Ovo'>My Tech Stack</h4>
        <ul className='flex flex-wrap items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
            <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-500 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
            </li>
            ))}
        </ul>
        </div>
    </div>
    </div>

  )
}

export default About