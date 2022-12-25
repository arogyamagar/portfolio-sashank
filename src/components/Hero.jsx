import React, {useState} from 'react'
import Swiper from './Swiper'

const Hero = () => {
    const [hidden, setHidden] = useState(false)
    return (
        <div className='flex flex-col justify-center items-center'>
            {<div className='p-5 flex justify-start md:overflow-hidden md:justify-center items-center gap-10 overflow-scroll'>
                <img className='object-cover h-96' src="/img/hero_img_left.JPG" alt="Sashank" />
                <img className='object-cover h-96' src="/img/hero_img_center.JPG" alt="Sashank" />
                <img className='object-cover h-96' src="/img/hero_img_right.JPG" alt="Sashank" />
            </div>}
            <div className='flex flex-col align-text-center justify-center items-center'>
                <h1 className='text-6xl uppercase font-bold tracking-widest'style={{textAlign:'center'}}>Sashank</h1>
                <h1 className='text-4xl font-semibold tracking-wide'style={{textAlign:'center'}}>Bohara</h1>
                <p className='text-2xl font-semibold tracking-widest'>Actor</p>
            </div>
        </div>
    )
}

export default Hero
