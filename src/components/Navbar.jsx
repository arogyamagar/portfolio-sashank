import React, {useState} from 'react'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';

const Navbar = () => {
    // const Menu = () => {
    //     alert('test')
    // }
    const links = [
        {name: 'About Me'},
        {name: 'Current Project'},
        {name: 'Resume'},
        {name: 'Gallery'},
    ];
    return (
        <div className='p-5 md:flex md:justify-between md:items-center'>
            <div className='flex justify-start items-center md:flex md:justify-start md:items-center gap-2 cursor-pointer'>
                <a href="#"><AiFillFacebook size={'1.5em'} /></a>
                <a href="#"><AiFillInstagram size={'1.5em'} /></a>
                <a href="#"><AiFillYoutube size={'1.5em'} /></a>
            </div>
          
            <ul className='md:flex md:items-center w-full md:width-auto'>
                {
                    links.map((link)=>(
                        <li className='mx-4 my-6 md:my-0'><a href="/" className='text-xl hove:text-cyan-500 duration-500'>{link.name}</a></li>
                    ))
                }
            </ul>
        </div>

    )
}

export default Navbar
