import React from 'react'
import linkedin from '../Assests/Linkedin.svg';
import github from '../Assests/github.svg';
import line1 from '../Assests/line1.svg';
import line2 from '../Assests/line2.svg';
import line3 from '../Assests/line3.svg';

const Hero = () => {
  return (
    <div className='mt-20 w-full relative sm:h-[88vh] h-[100vh] overflow-hidden' id='hero'>
      <div className='absolute w-full h-full overflow-hidden'>
        <img src={line1} alt="" className='absolute bottom-2 object-fit' />
        <img src={line2} alt="" className='absolute bottom-2 object-fit' />
        <img src={line3} alt="" className='absolute bottom-2 object-fit' />

        <div
          className='absolute w-[450px] h-[300px] inset-0 m-auto overflow-hidden'
          style={{
            background: 'radial-gradient(2762.36% 537.65% at -49.5% -250%, #9BFFA5 29.24%, #AED3FF 47.38%, #C9D4EF 54.97%, #D798E1 65.75%, #CACFFA 81.77%)',
            filter: 'blur(120px)',
          }}
        ></div>
      </div>

      <div className='flex lg:flex-row flex-col pt-24 mx-10 justify-around items-center relative z-10 '>
        <div>
          <div>
            <h1 className='manrope-font md:text-5xl text-3xl tex leading-[1.1 text-[#242A41] mb-1'>Hey! <b> I'm Kiran</b>,</h1>
            <h1 className='manrope-font md:text-5xl text-4xl leading-[1.1 text-[#242A41]'><b>MERN STACK </b>developer</h1>
            <p className='text-[#43495B] font-roboto text-base font-normal leading-[1.5] mt-3'>Crafting dynamic web applications with pixel-perfect interfaces and <br className='lg:block hidden' /> seamless user experiences.</p>
          </div>
          <div className='my-5 flex gap-5'>
            <a href="https://www.linkedin.com/in/004488-kiran-abbasi" target='_blank' rel="noreferrer"><img className='border border-[#242A41] rounded-full p-1 w-10 hover:opacity-90' src={linkedin} alt="Linkedin" /></a>
            <a href="https://github.com/kiranabbasi" target='_blank' rel="noreferrer" ><img className='border border-[#242A41] rounded-full p-1 w-10 hover:opacity-90' src={github} alt="Github" /></a>
            <button className='bg-[#242A41] text-gray-100 px-2 rounded hover:bg-opacity-95 text-sm manrope-font leading-[1.5]'><a href="/KiranCV-14-10-2024.pdf" target='_blank'>Download my CV</a></button>
          </div>
        </div>
        <div className='inline-block overflow-hidden'>
          <dotlottie-player
            src="https://lottie.host/de2bd7bc-232d-495d-b887-c6f87b093e41/ThZseu0EOR.json"
            background="transparent"
            speed="1"
            style={{ width: '500px', height: '300px' }}
            loop
            autoplay
          ></dotlottie-player>
        </div>

      </div>
    </div>
  )
}

export default Hero
