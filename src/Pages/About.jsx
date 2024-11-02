import React from 'react';
import nodeicon from '../Assests/node.svg';
import mergeicon from '../Assests/codemerge.svg'
import ellipse1 from '../Assests/Ellipse-2179.svg';
import ellipse2 from '../Assests/Ellipse-2180.svg';
import ellipse3 from '../Assests/Ellipse-2181.svg';
import ellipse4 from '../Assests/Pattern.svg';

const About = () => {

  return (
    <div className="flex lg:flex-row flex-col-reverse py-12 my-12 justify-around items-center" id='about'>
      {/* left half */}
      <div className='relative hidden lg:mt-0 mt-20 lg:w-[450px] w-[430px]  lg:h-[450px] h-[430px] sm:flex items-center justify-center rounded-full p-10 '>
        {/* center animation  */}
        <div className=''>
          <dotlottie-player
            src="https://lottie.host/b321c127-abba-4971-b92e-1ea1e87d3c4d/Y8gAMHO4H3.json"
            background="transparent" speed="1"
            style={{ width: "300px", height: "300px" }}
            loop
            autoplay
          >
          </dotlottie-player>
        </div>
        {/* First Animation */}
        <div
          className='absolute -top-16'
        >
          <dotlottie-player
            src="https://lottie.host/10f8a6ff-4750-4f3f-bf4b-1fcbf3c4436c/eEcREHIiMC.json"
            background="transparent"
            speed="1"
            autoplay
            loop
            style={{ width: "130px", height: "130px" }}
          ></dotlottie-player>
        </div>

        {/* Second Animation */}
        <div
          className='absolute top-0 left-0 hover:scale-75 duration-1000'
        >
          <dotlottie-player
            src="https://lottie.host/4df0e24c-1903-48ae-9bde-200ae40aef20/YSojaV1fQT.json"
            background="transparent"
            speed="1"
            style={{ width: "150px", height: "150px" }}
            autoplay
            loop
          ></dotlottie-player>
        </div>

        {/* Third Animation */}
        <div
          className='absolute top-10 right-10'
        >
          <dotlottie-player
            src="https://lottie.host/c415153b-1e61-497e-ba59-8cb6b9793c2b/YqgZagBBRR.json"
            background="transparent"
            speed="1"
            style={{ width: "80px", height: "80px" }}
            autoplay
            loop
          ></dotlottie-player>
        </div>

        {/* Fourth Animation */}
        <div
          className='absolute top-48 z-20 -left-6'
        >
          <dotlottie-player
            src="https://lottie.host/0e3331ab-1e57-490b-9ce1-9a7a125fb3b2/AIkv5OOKQm.json"
            background="transparent"
            speed="1"
            autoplay
            loop
            style={{ width: "70px", height: "70px" }}
          ></dotlottie-player>
        </div>

        {/* fifth animation  */}
        <div
          className='absolute bottom-10 left-0 z-10'
        >
          <dotlottie-player
            src="https://lottie.host/c5cccd3c-cd3f-46ab-acf9-b85765290417/z30dwPgVoJ.json" background="transparent"
            speed="1"
            style={{ width: "140px", height: "140px" }}
            autoplay
            loop>
          </dotlottie-player>
        </div>

        {/* sixth animation  */}
        <div
          className='absolute -right-4 bottom-14'
        >
          <dotlottie-player
            src="https://lottie.host/01d12e40-bb57-40dc-805d-0a6ad968915e/CfSwTGhCiP.json"
            background="transparent" speed="1"
            style={{ width: "120px", height: "120px" }}
            autoplay
            loop
          >
          </dotlottie-player>
        </div>

        {/* Custom keyframes */}
        <style>
          {`
          @keyframes pulse-scale {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
          @keyframes back-and-forth {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(180deg); }
            100% { transform: rotate(0deg); }
          }
        `}
        </style>
        {/* Scaling (Pulsing) Icon */}
        <div
          className="w-20 absolute top-48 -right-7"
          style={{
            animation: 'pulse-scale 4s ease-in-out infinite',
          }}
        >
          <img src={nodeicon} alt="nodeicon" />
        </div>

        {/* Back-and-Forth Rotating Icon */}
        <div
          className="w-10 absolute -bottom-7"
          style={{
            animation: 'back-and-forth 6s ease-in-out infinite',
          }}
        ></div>
        <div className='w-10 animate-rotate-slow absolute -bottom-7'>
          <img src={mergeicon} alt="merge" />
        </div>


      </div>

      {/* right half   */}
      <div className='flex flex-col gap-10'>
        <h2 className='sm:text-4xl text-3xl text-center font-semibold text-[#242A41]'>I specialize in </h2>

        <div className='bg-[#EDF0F9] p-5 rounded-lg border-2 border-[#585F6F] relative sm:w-[500px] w-11/12 m-auto h-36 -rotate-2 hover:rotate-2 duration-1000'>
          <img src={ellipse1} alt="" className='absolute top-0 left-0 z-20' />
          <img src={ellipse2} alt="" className='absolute bottom-0 left-0 z-20' />
          <img src={ellipse3} alt="" className='absolute bottom-0 left-24 z-20' />
          <img src={ellipse4} alt="" className='absolute right-0 bottom-0 h-28 z-20' />
          <div className='relative z-30'>
            <h3 className='text-[#242A41] font-serif font-semibold text-xl text-opacity-100'>Front-End Development</h3>
            <p className='text-[#585F6F] text-sm font-medium text-opacity-100'>Designing interactive, responsive interfaces for a smooth user experience.</p>
          </div>
        </div>

        <div className='bg-[#EDF0F9] p-5 rounded-lg border-2 border-[#585F6F] relative sm:w-[500px] w-11/12 m-auto h-36 hover:-rotate-2 rotate-2 duration-1000'>
          <img src={ellipse1} alt="" className='absolute top-0 left-0 z-20' />
          <img src={ellipse2} alt="" className='absolute bottom-0 left-0 z-20' />
          <img src={ellipse3} alt="" className='absolute bottom-0 left-24 z-20' />
          <img src={ellipse4} alt="" className='absolute right-0 bottom-0 h-28 z-20' />
          <div className='relative z-30'>
            <h3 className='text-[#242A41] font-serif font-semibold text-xl text-opacity-100'>Back-End Development</h3>
            <p className='text-[#585F6F] text-sm font-medium text-opacity-100'>Creating solid server-side applications that keep websites running efficiently.</p>
          </div>
        </div>

        <div className='bg-[#EDF0F9] p-5 rounded-lg border-2 border-[#585F6F] relative sm:w-[500px] w-11/12 m-auto h-36 -rotate-2 hover:rotate-2 duration-1000'>
          <img src={ellipse1} alt="" className='absolute top-0 left-0 z-20' />
          <img src={ellipse2} alt="" className='absolute bottom-0 left-0 z-20' />
          <img src={ellipse3} alt="" className='absolute bottom-0 left-24 z-20' />
          <img src={ellipse4} alt="" className='absolute right-0 bottom-0 h-28 z-20' />
          <div className='relative z-30'>
            <h3 className='text-[#242A41] font-serif font-semibold text-xl text-opacity-100'>Full-Stack Integration</h3>
            <p className='text-[#585F6F] text-sm font-medium text-opacity-100'>Merging front-end and back-end tech to build complete, functional web applications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
