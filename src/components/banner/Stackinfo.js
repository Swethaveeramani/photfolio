import React from 'react';
import './Banner.css';
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
        words: ['Full Stack Developer.', 'UI/UX Designer.'],
        loop: true,
        typeSpeed: 10,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className='w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                <h1 className='text-6xl font-bold text-black'>
                    Hi I'm {''}
                    <span className='text-designColor capitalize'>
                        Swetha Veeramani
                    </span>
                </h1>
                <h2 className='text-4xl font-bold text-black'>
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
                        <div className='bannerIcon'>
                            <a
                                href='https://github.com/Swethaveeramani'
                            
                            >
                                <FaGithub />
                                <span><br/><br/>Github</span>
                            </a>
                        </div>
                        <div className='bannerIcon'>
                            <a
                                
                                href='https://www.linkedin.com/in/swetha-v-b705a9244/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedinIn />
                                <span><br/><br/>LinkedIn</span>
                            </a>
                        </div>
                        <div className='bannerIcon'>
                            <a
                                
                                href='https://www.hackerrank.com/profile/swethav_21it'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaHackerrank />
                                <span><br/><br/>Hackerrank</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        BEST SKILL ON
                    </h2>
                    <div className='flex gap-4'>
                        <div className='bannerIcon'>
                            <FaHtml5 />
                            
                            <span><br/><br/>HTML</span>
                        </div>
                        <div className='bannerIcon'>
                            <FaReact />
                            <span><br/><br/>React</span>
                        </div>
                        <div className='bannerIcon'>
                            <SiTailwindcss />
                            <span><br/><br/>Tailwind</span>
                        </div>
                        <div className='bannerIcon'>
                            <SiFigma />
                            <span><br/><br/>Figma</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stackinfo;
