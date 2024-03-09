import React from 'react';
import Title from './../shared/Title';
import ProjectCard from './ProjectCard';
import { projectOne, projectTwo, projectThree,projectSix,projectFive } from '../../assets';
import { projectFour } from '../../assets';


const Projects = () => {
    return (
        <div
            id='projects'
            className='w-full py-20 border-b-[1px] border-b-black'
        >
            <div className='flex justify-center items-center text-center mb-36'>
                <Title
                    
                    description='My Projects'
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
                <ProjectCard
                    title='Food Ordering App'
                    description='I completed my food ordering app using reactjs at Web stack academy in Bangalore !'
                    src={projectOne}
                />
                <ProjectCard
                    title='Insurance Management System'
                    description='I completed my insurance management system using reactjs with mongodb backend !'
                    src={projectTwo}
                />
                <ProjectCard
                    title='Amazon clone website '
                    description=' I experienced to work and clone the amazon website using reactjs and also google authentication with backend ! '
                    src={projectThree}
                />
                <ProjectCard
                    title='Skin Care Product Website'
                    description='I completed to my skin care product using reactjs with mongodb backend !'
                    src={projectFour}
                />
                <ProjectCard
                    title='Placement Management System'
                    description='I completed my placement management system using Html,css and Javsscript !'
                    src={projectFive}
                />
                <ProjectCard
                    title='Shop website'
                    description='I completed my shop website using Html , css and javascript !'
                    src={projectSix}
                />
            </div>
        </div>
    );
};

export default Projects;
