import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className='w-full flex  lgl:flex-row gap-10 lgl:gap-20'
        >
            {/* part one */}
            <div>
                <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>
                        2019 - 2025
                    </p>
                    <h2 className='text-3xl md:text-4xl font-bold mb-10'>
                        Education Quality
                    </h2>
                </div>
                <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-14'>
                    <ResumeCard
                        title='BTech Information Technology'
                        subTitle='Engineering (2021-2025)'
                        percentage='8.25/10'
                        description='I am currently pursuing my education at Kongu Engineering College, where I am immersed in a dynamic learning environment that fosters academic excellence and practical skills development. The college s commitment to innovation and industry-relevant education aligns with my aspirations for a successful engineering career.'
                    />
                    <ResumeCard
                        title='Rajavignesh Higher Secondary School '
                        subTitle='HSC (2018 - 2019)'
                        percentage='89.6%'
                        description='I graduated from Rajavignesh Higher Secondary School in 2021 with an impressive 89.6% in the HSC examination, specializing in the biology group. This educational foundation has equipped me with a strong knowledge base and a passion for the biological sciences.'
                    />
                    <ResumeCard
                        title='Rajavignesh Higher Secondary School'
                        subTitle='SSLC (2020 - 2021)'
                        percentage='91.6%'
                        description='I successfully completed my SSLC at Rajavignesh Higher Secondary School in 2021, achieving a commendable percentage of 91.6%. This academic achievement reflects my dedication to excellence and sets the stage for my continued pursuit of knowledge.'
                    />
                </div>
            </div>

            {/*  Job Experience */}

        </motion.div>
    );
};

export default Education;
