import React from 'react'
import linkedin from '../Assests/Linkedin.svg';
import github from '../Assests/github.svg';

const Hero = () => {
  return (
    <div className='mt-16 '>
      <div className=' flex justify-around items-center min-h-[600px]'>
        <div>
          <div>
            <h1 className='manrope-font text-5xl leading-[1.1 text-[#242A41]'>HEY! <b>I'm Kiran</b>,</h1>
            <h1 className='manrope-font text-5xl leading-[1.1 text-[#242A41]'><b>MERN STACK </b>developer</h1>
            <p className='text-[#43495B] font-roboto text-base font-normal leading-[1.5] mt-3'>Crafting dynamic web applications with pixel-perfect interfaces and <br /> seamless user experiences.</p>
          </div>
          <div className='my-5 flex gap-5'>
            <a href="https://www.linkedin.com/in/004488-kiran-abbasi" target='_blank' rel="noreferrer"><img className='border border-[#242A41] rounded-full p-1 w-10 hover:opacity-90' src={linkedin} alt="Linkedin" /></a>
            <a href="https://github.com/kiranabbasi" target='_blank' rel="noreferrer" ><img className='border border-[#242A41] rounded-full p-1 w-10 hover:opacity-90' src={github} alt="Github" /></a>
            <button className='bg-[#242A41] text-gray-100 px-2 rounded hover:bg-opacity-95 text-sm manrope-font leading-[1.5]'><a href="/KiranCV-14-10-2024.pdf" target='_blank'>Download my CV</a></button>
          </div>
        </div>
        <div className='border-2inline-block'>
          <dotlottie-player
            src="https://lottie.host/de2bd7bc-232d-495d-b887-c6f87b093e41/ThZseu0EOR.json"
            background="transparent"
            speed="1"
            style={{ width: '400px', height: '400px' }}
            loop
            autoplay
          ></dotlottie-player>
        </div>

      </div>
    </div>
  )
}

export default Hero
