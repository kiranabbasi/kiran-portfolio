import React, { useState } from 'react'
import homeicon from '../Assests/home.svg';
import abouticon from '../Assests/about.svg';
import portfolioicon from '../Assests/portfolio.svg';
import serviceicon from '../Assests/services.svg';
import contacticon from '../Assests/contact.svg';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    return (
        <div className='fixed z-40 bg-opacity-100 top-0 w-full border-b border-dashed border-[#1D2130] bg-white mb-5'>
            <nav className="flex md:justify-around justify-between mx-10 items-center h-20 ">
                <h2 className='manrope-font flex-shrink-0 text-[#242A41] font-manrope font-semibold text-[24px] leading-[1.5]'><a href="#hero">KIRAN SHAHZADI</a></h2>
                <ul className="manrope-font hidden md:flex lg:gap-10 gap-5 text-[#1D2130] text-[17px] font-normal leading-[1.5]">
                    <li className='py-1 hover:text-black'><a href="#hero">Home</a></li>
                    <li className='py-1 hover:text-black'><a href="#about">About</a></li>
                    <li className='py-1 hover:text-black'><a href="#portfolio">Projects</a></li>
                    <li className='py-1 hover:text-black'><a href="#contact">Contact</a></li>
                    <button className='bg-[#242A41] text-white px-3 py-1 rounded hover:bg-opacity-95'><a href="#services">Services</a></button>
                </ul>

                {/* mobile navbar */}
                <div className="md:hidden">
                    <button onClick={toggleDropdown} className="text-[#1D2130] relative z-50">
                        {dropdownOpen ? '✖' : '☰'} {/* Hamburger icon */}
                    </button>

                    {/* Render the mobile dropdown based on dropdownOpen state */}
                    {dropdownOpen && (
                        <ul className='absolute top-0 right-0 z-40 bg-[#EDF0F9] w-[300px] h-[100vh] bg-opacity-90 pt-20 font-manrope font-semibold text-[20px] leading-[1.5]'>
                            <li className='py-4 px-4 hover:bg-white flex items-baseline gap-2'>
                                <img src={homeicon} alt="" className='w-6' />
                                <a href="#hero" onClick={toggleDropdown}>Home</a>
                            </li>
                            <li className='py-3 px-4 hover:bg-white flex items-baseline gap-3'>
                                <img src={abouticon} alt="" className='w-5'/>
                                <a href="#about" onClick={toggleDropdown}>About</a>
                            </li>
                            <li className='py-3 px-4 hover:bg-white flex items-baseline gap-3'>
                                <img src={portfolioicon} alt="" className='w-5'/>   
                                <a href="#portfolio" onClick={toggleDropdown}>Projects</a>
                            </li>
                            <li className='py-3 px-4 hover:bg-white flex items-baseline gap-3'>
                                <img src={contacticon} alt="" className='w-5'/>
                                <a href="#contact" onClick={toggleDropdown}>Contact</a>
                            </li>
                            <button className='bg-[#242A41] text-white py-3 px-4 hover:bg-opacity-95 w-full text-left flex items-baseline gap-3'>
                                <img src={serviceicon} alt="" className='w-5' />
                                <a href="#services">Services</a></button>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
