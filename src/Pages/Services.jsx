import React from 'react';
import sidedesign from '../Assests/sidedesign.svg';

const Services = () => {
  return (
    <div id='services' className='my-7 py-16 bg-[#F6F7FC]'>
      <h2 className='text-[#242A41] text-5xl font-semibold text-center mb-10'>Services</h2>
      <div className='lg:flex justify-around sm:mx-16 mx-5'>
        {/* Card 1: Simple One-Page Website */}
        <div className='bg-white rounded-lg shadow-lg p-5 lg:w-[25%] md:w[50%] w-[97%] mx-auto'>
          <h3 className='text-xl font-semibold'>Simple One-Page Website</h3>
          <p className='text-gray-700'>Price: PKR 10,000</p>
          <p className='mt-3'>Ideal for personal portfolios or small businesses looking for a web presence.</p>
          <ul className='list-disc pl-5 mt-3'>
            <li>Delivery Time: within one week</li>
            <li>Revisions: 4 included</li>
            <li>Responsive design tailored to your specifications</li>
            <li>Contact form</li>
            <li>Complete Functionalities</li>
            <li>Basic SEO optimization</li>
          </ul>
        </div>

        {/* Card 2: Basic Multi-Page Website */}
        <div className='bg-white rounded-lg shadow-lg p-5 lg:w-[25%] md:w[50%] w-[97%] my-8 mx-auto'>
          <h3 className='text-xl font-semibold'>Basic Multi-Page Website</h3>
          <p className='text-gray-700'>Price: PKR 20,000</p>
          <p className='mt-3'>Great for small businesses that need more than a single page.</p>
          <ul className='list-disc pl-5 mt-3'>
            <li>Delivery Time: 1 - 2 weeks</li>
            <li>Revisions: 10 included</li>
            <li>Up to 4 pages</li>
            <li>Responsive design</li>
            <li>Basic SEO optimization</li>
            <li>Optional blog setup</li>
          </ul>
        </div>

        {/* Card 3: E-Commerce Website */}
        <div className='bg-white rounded-lg shadow-lg p-5 lg:w-[25%] md:w[50%] w-[97%] my-8 mx-auto'>
          <h3 className='text-xl font-semibold'>E-Commerce Website</h3>
          <p className='text-gray-700'>Price: PKR 40,000</p>
          <p className='mt-3'>Perfect for startups looking to sell products online.</p>
          <ul className='list-disc pl-5 mt-3'>
            <li>Delivery Time: 15 - 20 days</li>
            <li>Revisions: Unlimited</li>
            <li>Full Stack Website</li>
            <li>Responsive design</li>
            <li>Payment processing integration</li>
            <li>Free 3 month maintainence</li>
            <li>Admin Dashboard Implementation</li>
            <li>Unlimited products listed</li>
          </ul>
        </div>
        <div>
          <img className='lg:block hidden' src={sidedesign} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Services;

