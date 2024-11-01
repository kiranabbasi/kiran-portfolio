import React, { useRef } from 'react';
import nodeicon from '../Assests/node.svg';
import mergeicon from '../Assests/codemerge.svg'
import ellipse1 from '../Assests/Ellipse-2179.svg';
import ellipse2 from '../Assests/Ellipse-2180.svg';
import ellipse3 from '../Assests/Ellipse-2181.svg';
import ellipse4 from '../Assests/Pattern.svg';

const About = () => {
  // References to control each player
  const firstLottieRef = useRef(null);
  const secondLottieRef = useRef(null);
  const thirdLottieRef = useRef(null);
  const fourthLottieRef = useRef(null);

  return (
    <div className="flex w-[80%] m-auto border-b border-[#1D2130] py-12 mb-12">

      {/* left half */}
      <div className='relative w-1/2 min-h-[400px]'>
        {/* First Animation */}
        <div
          className='absolute top-56 left-12'
          onMouseEnter={() => {
            secondLottieRef.current.seek(0);
            secondLottieRef.current.play();
          }}
        >
          <dotlottie-player
            ref={secondLottieRef}
            src="https://lottie.host/10f8a6ff-4750-4f3f-bf4b-1fcbf3c4436c/eEcREHIiMC.json"
            background="transparent"
            speed="1"
            autoplay
            style={{ width: "120px", height: "120px" }}
          ></dotlottie-player>
        </div>

        {/* Second Animation */}
        <div
          className='absolute top-10 left-40 hover:scale-75 duration-1000'
          onMouseEnter={() => thirdLottieRef.current.play()}
          onMouseLeave={() => thirdLottieRef.current.stop()}
        >
          <dotlottie-player
            ref={thirdLottieRef}
            src="https://lottie.host/4df0e24c-1903-48ae-9bde-200ae40aef20/YSojaV1fQT.json"
            background="transparent"
            speed="1"
            style={{ width: "120px", height: "120px" }}
            autoplay
          ></dotlottie-player>
        </div>

        {/* Third Animation */}
        <div
          className='absolute top-96 left-64'
          onMouseEnter={() => {
            fourthLottieRef.current.seek(0);
            fourthLottieRef.current.play();
          }}
        >
          <dotlottie-player
            ref={fourthLottieRef}
            src="https://lottie.host/c415153b-1e61-497e-ba59-8cb6b9793c2b/YqgZagBBRR.json"
            background="transparent"
            speed="1"
            style={{ width: "60px", height: "60px" }}
            autoplay
          ></dotlottie-player>
        </div>

        {/* Fourth Animation */}
        <div
          className='absolute top-56 left-64'
          onMouseEnter={() => {
            firstLottieRef.current.seek(0);
            firstLottieRef.current.play();
          }}
        >
          <dotlottie-player
            ref={firstLottieRef}
            src="https://lottie.host/0e3331ab-1e57-490b-9ce1-9a7a125fb3b2/AIkv5OOKQm.json"
            background="transparent"
            speed="1"
            autoplay
            style={{ width: "70px", height: "70px" }}
          ></dotlottie-player>
        </div>
        <div className='w-20 hover:scale-75 duration-1000 absolute top-40 left-96'>
          <img src={nodeicon} alt="nodeicon" />
        </div>
        <div className='w-10 absolute top-72 right-32 rotate-6  hover:-rotate-180 duration-1000'>
          <img src={mergeicon} alt="merge" />
        </div>
      </div>

      {/* right half   */}
      <div className='flex flex-col gap-10'>
        <h2 className='text-4xl font-semibold text-[#242A41]'>I specialize in </h2>

        <div className='bg-[#EDF0F9] p-5 rounded-lg border-2 border-[#585F6F] relative w-[500px] h-36 -rotate-2 hover:rotate-2 duration-1000'>
          <img src={ellipse1} alt="" className='absolute top-0 left-0 z-20' />
          <img src={ellipse2} alt="" className='absolute bottom-0 left-0 z-20' />
          <img src={ellipse3} alt="" className='absolute bottom-0 left-24 z-20' />
          <img src={ellipse4} alt="" className='absolute right-0 bottom-0 h-28 z-20' />
          <div className='relative z-30'> 
            <h3 className='text-[#242A41] font-serif font-semibold text-xl text-opacity-100'>Front-End Development</h3>
            <p className='text-[#585F6F] text-sm font-medium text-opacity-100'>Designing interactive, responsive interfaces for a smooth user experience.</p>
          </div>
        </div>

        <div className='bg-[#EDF0F9] p-5 rounded-lg border-2 border-[#585F6F] relative w-[500px] h-36 hover:-rotate-2 rotate-2 duration-1000'>
          <img src={ellipse1} alt="" className='absolute top-0 left-0 z-20' />
          <img src={ellipse2} alt="" className='absolute bottom-0 left-0 z-20' />
          <img src={ellipse3} alt="" className='absolute bottom-0 left-24 z-20' />
          <img src={ellipse4} alt="" className='absolute right-0 bottom-0 h-28 z-20' />
          <div className='relative z-30'> 
            <h3 className='text-[#242A41] font-serif font-semibold text-xl text-opacity-100'>Back-End Development</h3>
            <p className='text-[#585F6F] text-sm font-medium text-opacity-100'>Creating solid server-side applications that keep websites running efficiently.</p>
          </div>
        </div>

        <div className='bg-[#EDF0F9] p-5 rounded-lg border-2 border-[#585F6F] relative w-[500px] h-36 -rotate-2 hover:rotate-2 duration-1000'>
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
