import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
        items-center justify-center gap-4'>
        <div>
            <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'> 
                Hi! I'm Syed Junayed Ahmed Anta <Image  src={assets.hand_icon} alt=''
            className='w-6'/>
            <Image  src={assets.hand_icon} alt=''
            className='w-6'/>
            <Image  src={assets.hand_icon} alt=''
            className='w-6'/></h3>
        <h1 className='text-3x1 sm:text-6xl lg:text-[66px] font-Ovo'>
            Full stack developer based in Germany</h1>
            {/* <p className='max-w-2xl mx-auto font-Ovo'>
              A software developer with a strong focus on web development, 
              bringing around 3 years of professional experience in designing, 
              developing, and maintaining web applications. On the front end, 
              experienced with JavaScript/TypeScript using frameworks like React and Next.js 
              to build responsive and user-friendly interfaces. On the back end,
               proficient in Python, working with technologies such as FastAPI 
               and Flask to create robust APIs and server-side logic. Actively
                interested in DevOps topics and modern deployment workflows.
            </p> */}
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact"
                className='px-10 py-3 border border-white rounded-full bg-black text-white flex
                items-center gap-2'
                >contact me <Image src={assets.right_arrow_white} alt='' 
                className='w-4'/>
                </a>
                {/* <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex
                items-center gap-2'>
                my resume <Image src={assets.download_icon} alt='' 
                className='w-4'/>
                </a> */}

            </div>
    </div>
  )
}

export default Header