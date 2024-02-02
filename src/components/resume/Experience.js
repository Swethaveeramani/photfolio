import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className='py-12 font-titleFont flex w-full gap-20 justify-between'
        >
            <div>
                <div className='flex flex-col gap-4 '>
                    <p className='text-sm text-designColor tracking-[4px]'>
                        2021 - 2025
                    </p>
                    <h2 className='text-4xl font-bold'>Experience</h2>
                </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title='UI/UX designer'
                        subTitle=' I have experienced to Working with Figma'
                        result=''
                        des=""
                    />
                    <ResumeCard
                        title='Full Stack Developer'
                        subTitle='I have complete to develop 5 Application using reactjs and 3 Application using Html,css and Javascript'
                        result=''
                        des=""
                    />
                    <ResumeCard
                        title='Front-end Developer'
                        subTitle='I have Develop a Many Frontend Website.'
                        result=''
                        des=''
                    />
                </div>
            </div>
            
        </motion.div>
    );
};

export default Experience;
