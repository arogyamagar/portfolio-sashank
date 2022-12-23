import React from 'react'

const Hero = () => {
    return (
        <div className='md:flex md:flex-col md:justify-center md:items-center'>
            <div className='p-5 md:flex md:justify-center md:items-center gap-10'>
                <img className='object-cover h-96' src="/img/hero_img_left.JPG" alt="Sashank" />
                <img className='object-cover h-96' src="/img/hero_img_center.JPG" alt="Sashank" />
                <img className='object-cover h-96' src="/img/hero_img_right.JPG" alt="Sashank" />
            </div>
            <div className='md:flex md:flex-col md:justify-center md:items-center'>
                <h1 className='text-6xl font-bold tracking-widest'>Sashank Bohara</h1>
                <p className='text-4xl font-semibold tracking-widest'>Actor</p>
            </div>
        </div>
    )
}

export default Hero
