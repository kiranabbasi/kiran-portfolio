import React from 'react'
import design1 from '../Assests/Ellipse-2179.svg';
import design2 from '../Assests/Ellipse-2180.svg';
import design3 from '../Assests/Ellipse-2181.svg';
import design4 from '../Assests/Pattern.svg';
import arrow from '../Assests/arrow.svg';


const Portfolio = () => {
  return (
    <div className='my-16 overflow-x-hidden' id='portfolio'>
      <h2 className='text-[#242A41] text-5xl font-semibold text-center mb-10'>My Portfolio</h2>

      <div className='flex flex-col gap-10'>

        {/* first project  */}
        <div className='relative bg-[#DEFCFF] lg:h-[60vh] sm:py-10 py-3 sm:w-[80%] w-[98%] m-auto rounded-xl flex lg:flex-row flex-col items-center justify-around '>
          <img src={design1} alt="" className='absolute top-0 left-0  z-20 rounded-tl-xl' />
          <img src={design2} alt="" className='absolute bottom-0 left-0 z-20 rounded-bl-xl' />
          <img src={design3} alt="" className='absolute bottom-0 left-24 z-20' />
          <img src={design4} alt="" className='absolute right-0 bottom-0 h-4/5 z-20 rounded-br-xl' />
          <div className='lg:w-2/5 w-[98%] relative z-30'>
            <video
              src="https://res.cloudinary.com/dtgja4jlq/video/upload/v1730540943/E-commerceProject_wcctdw.mp4"
              className="rounded-3xl"
              type="video/mp4"
              autoPlay
              muted
              controls
              loop
            />
          </div>
          <div className='text-[#242F65] lg:w-1/2 w-[95%] py-5 relative z-30'>
            <h3 className='sm:text-3xl text-2xl font-semibold'>Moon Ceramics E-commerce Platform</h3>
            <p>A fully function e-commerce platform to browse through various pages, search and filter products and
              signup to add items to cart and place orders with test payments.</p>
            <div className='mt-10 flex flex-wrap gap-4'>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>React.js</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>CSS</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>TailWind CSS</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>Node.js</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>Express.js</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>MongoDB</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>Mongoose</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>Bcrypt</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>JWT authorization</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>Stripe</span>

            </div>
            <a
              className='bg-[#583FBC] my-5 px-4 py-3 rounded font-bold flex w-44 gap-2 text-white'
              href="https://e-commerce-project-frontend-nine.vercel.app/"
              target='blank'>
              View live Site
              <img className='w-3' src={arrow} alt="" />
            </a>
          </div>
        </div>

        {/* second project  */}
        <div className='relative bg-[#EDF0F9] lg:h-[60vh] sm:py-10 py-3 sm:w-[80%] w-[98%] m-auto rounded-xl flex lg:flex-row flex-col items-center justify-around'>
          <img src={design1} alt="" className='absolute top-0 left-0  z-20 rounded-tl-xl' />
          <img src={design2} alt="" className='absolute bottom-0 left-0 z-20 rounded-bl-xl' />
          <img src={design3} alt="" className='absolute bottom-0 left-24 z-20' />
          <img src={design4} alt="" className='absolute right-0 bottom-0 h-4/5 z-20 rounded-br-xl' />
          <div className='lg:w-2/5 w-[98%]'>
            <video
              src="https://res.cloudinary.com/dtgja4jlq/video/upload/v1730541087/AdminPanel_ed2uqo.mp4"
              className="rounded-3xl relative z-30"
              type="video/mp4"
              autoPlay
              muted
              controls
              loop
            />
          </div>
          <div className='text-[#242F65] lg:w-1/2 w-[95%] relative z-30'>
            <h3 className='sm:text-3xl text-2xl font-semibold'>Moon Ceramics Admin Panel</h3>
            <p>E-commerce admin panel to manage products and orders. Gives basic analysis on purchases and user experience.</p>
            <div className='mt-10 flex flex-wrap gap-4'>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>React.js</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>CSS</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>TailWind CSS</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>Node.js</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>Express.js</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>MongoDB</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>Mongoose</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>Bcrypt</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>JWT authorization</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>Stripe</span>

            </div>
            <a
              className='bg-[#583FBC] my-5 px-4 py-3 rounded font-bold flex w-44 gap-2 text-white'
              href="https://e-commerce-project-admin-two.vercel.app/"
              target='blank'>
              View live Site
              <img className='w-3' src={arrow} alt="" />
            </a>
          </div>
        </div>


        {/* third project  */}
        <div className='relative bg-[#DEFCFF] lg:h-[60vh] lg:py-10 py-3 w-[98%] m-auto rounded-xl flex lg:flex-row flex-col items-center justify-around'>
          <img src={design1} alt="" className='absolute top-0 left-0  z-20 rounded-tl-xl' />
          <img src={design2} alt="" className='absolute bottom-0 left-0 z-20 rounded-bl-xl' />
          <img src={design3} alt="" className='absolute bottom-0 left-24 z-20' />
          <img src={design4} alt="" className='absolute right-0 bottom-0 h-4/5 z-20 rounded-br-xl' />
          <div className='lg:w-2/5 w-[98%]'>
            <video
              src="https://res.cloudinary.com/dtgja4jlq/video/upload/v1730540177/BankingSite_qlhssa.mp4"
              className="rounded-3xl relative z-30"
              type="video/mp4"
              autoPlay
              muted
              controls
              loop
            />
          </div>
          <div className='text-[#242F65] lg:w-1/2 w-[95%] relative z-30'>
            <h3 className='sm:text-3xl text-2xl font-semibold'>Your Bank Website Landing Pages</h3>
            <p>Pixel perfect UI built with React.js and tailwind CSS. Smooth transitions using react hooks and </p>
            <div className='mt-10 flex flex-wrap gap-4'>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>React.js</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>CSS</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>TailWind CSS</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>Useref hook</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>UseEffect hook</span>
              <span className='bg-slate-400 px-2 py-1 rounded-full bg-opacity-90 text-sm font-semibold'>Git/Github</span>

            </div>
            <a
              className='bg-[#583FBC] my-5 px-4 py-3 rounded font-bold flex w-44 gap-2 text-white'
              href="https://kiranabbasi.github.io/YourBank/"
              target='blank'>
              View live Site
              <img className='w-3' src={arrow} alt="" />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Portfolio
