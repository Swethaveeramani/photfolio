import React from 'react';
import {
    FaGithub,
    FaLinkedinIn,
    FaReact,
    FaTwitter,
    FaHackerrank,
    FaHtml5,
} from 'react-icons/fa';
import { SiFigma, SiTailwindcss } from 'react-icons/si';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Stackinfo = () => {
    const [text] = useTypewriter({
        words: [ 'Full Stack Developer.', 'UI/UX Designer.'],
        loop: true,
        typeSpeed: 10,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className='w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                <h1 className='text-6xl font-bold text-white'>
                    Hi I'm {''}
                    <span className='text-designColor capitalize'>
                        Swetha Veeramani
                    </span>
                </h1>
                <h2 className='text-4xl font-bold text-white'>
                    a<span> {text}</span>
                    <Cursor
                        cursorBlinking='true'
                        cursorStyle='|'
                        cursorColor='#ff014f'
                    />
                </h2>

                <p className='text-base font-bodyFont leading-6 tracking-wide'>
                As an aspiring full-stack developer and skilled UI/UX designer, I am eager to contribute my technical expertise to a challenging work environment. With a passion for continuous learning, I am ready to leverage my engineering background and dedication to enhance the innovation and success of your team.
                </p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        Find me in
                    </h2>
                    <div className='flex gap-4'>
                        <span className='bannerIcon'>
                            <a
                                href='https://github.com/Swethaveeramani'
                                target='_blank'
                                className='bannerIcon'
                                rel='noreferrer'
                            >
                                <FaGithub />
                            </a>
                        </span>
                        <span className='bannerIcon'>
                            <a
                                className='bannerIcon'
                                href='https://twitter.com/Srinath799'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter />
                            </a>
                        </span>
                        <span className='bannerIcon'>
                        <a
                                className='bannerIcon'
                                href='https://www.linkedin.com/in/swetha-v-b705a9244/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedinIn />
                            </a>
                            
                        </span>
                        <span className='bannerIcon'>
                        <a
                                className='bannerIcon'
                                href='https://www.hackerrank.com/profile/swethav_21it'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaHackerrank />
                            </a>
                            
                        </span>
                        
                    </div>
                </div>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        BEST SKILL ON
                    </h2>
                    <div className='flex gap-4'>
                        <span className='bannerIcon'>
                            <FaHtml5 />
                        </span>
                        <span className='bannerIcon'>
                            <FaReact />
                        </span>
                        <span className='bannerIcon'>
                            <SiTailwindcss />
                        </span>
                        <span className='bannerIcon'>
                            <SiFigma />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stackinfo;
