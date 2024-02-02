import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Achievement = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className='py-12 font-titleFont flex gap-20'
        >
            <div>
                <div className='py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>
                        2023 - 2024
                    </p>
                    <h2 className='text-4xl font-bold'>Internship Experience</h2>
                </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title='FOOD ORDERING APP'
                        subTitle='I am thrilled to share that I am Swetha V, have successfully cleared the internship evaluation criteria set by our incredible mentors at WSA, Bangalore. 🙌🏆
                        I m now the proud recipient of an internship certificate which marks a significant milestone in my journey. I want to express my heartfelt gratitude to all those who supported and guided me throughout this internship.
                        This experience has been incredibly valuable, and I m excited about the career possibilities that lie ahead in the core segment 🚀
                        I also want to extend my thanks to our wonderful team at WSA for their unwavering support and encouragement 🙏
                        Having completed my course in full-stack development'
                        result='Success'
                        des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!'
                    />
                    
                </div>
            </div>
            
        </motion.div>
    );
};

export default Achievement;
