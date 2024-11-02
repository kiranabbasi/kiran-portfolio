import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed z-50 bg-opacity-100 top-0 w-full border-b border-dashed border-[#1D2130] bg-white mb-5'>
            <nav className="flex justify-around items-center h-20 ">
                <h2 className='manrope-font flex-shrink-0 text-[#242A41] font-manrope font-semibold text-[24px] leading-[1.5]'><a href="#hero">KIRAN SHAHZADI</a></h2>
                <ul className="manrope-font flex gap-10 text-[#1D2130] text-[17px] font-normal leading-[1.5]">
                    <li className='py-1 hover:text-black'><a href="#hero">Home</a></li>
                    <li className='py-1 hover:text-black'><a href="#about">About</a></li>
                    <li className='py-1 hover:text-black'><a href="#portfolio">Projects</a></li>
                    <li className='py-1 hover:text-black'><a href="#contact">Contact</a></li>  
                    <button className='bg-[#242A41] text-white px-3 py-1 rounded hover:bg-opacity-95'><a href="#services">Services</a></button>                
                </ul>                
            </nav>

        </div>
    )
}

export default Navbar
