import React, { useState } from 'react'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

const Navbar = ({open,setOpen}) => {

    const Menu = () => (
        setOpen(!open)
      )

    const links = [
        { name: 'Home', url: '' },
        { name: 'About Me' },
        { name: 'Current Project' },
        { name: 'Resume' },
        { name: 'Gallery' },
    ];
    return (
        <>
            <div className=' p-5 flex justify-between items-center'>
                    <div className='flex items-center z-50 p-5 md:w-auto w-full gap-3 top-0'>
                        <a href="#"><AiFillFacebook size={'1.5em'} color={'blue'} /></a>
                        <a href="#"><AiFillInstagram size={'1.5em'} color={'orange'} /></a>
                        <a href="#"><AiFillYoutube size={'1.5em'} color={'red'} /></a>
                    </div>
                    <div className='md:hidden block'>
                       {open?<RxCross2 size={'1.5em'} onClick={Menu}/> :<GiHamburgerMenu size={'1.5em'} onClick={Menu} />}
                    </div>

                <ul className='md:flex hidden justify-center items-center'>
                    {
                        links.map((link, index) => (
                            <li key={index} className='py-7 mx-4 my-6 md:my-0'><a href="/" className='text-xl hove:text-cyan-500 duration-500'>{link.name}</a></li>
                        ))
                    }
                </ul>
            </div>

            {/* mobile-nav */}
            <div>
                <ul className={` md:hidden absolute bg-white py-6 w-full h-full duration-500 ${open?'left-0':'left-[-100%]'}`}>
                    {
                        links.map((link) => (
                            <li className='mx-4 my-6 md:my-0'><a href="/" className='text-xl hover:text-cyan-500 duration-500'>{link.name}</a></li>
                        ))
                    }
                </ul>
            </div>
        </>

    )
}

export default Navbar
