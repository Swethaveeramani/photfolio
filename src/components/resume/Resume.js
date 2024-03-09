import React, { useState } from 'react';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from './Experience';
import Title from './../shared/Title';
import ResumeCard from './ResumeCard';

const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    const [achievementData, setAchievementData] = useState(false);

    // Function to handle download
    const handleDownload = () => {
        // Assuming the resume data is stored somewhere, you can create a blob and initiate download
        // Replace resumeDataURL with actual data URI of the resume image
        const resumeDataURL = 'data:image/jpeg;base64,YourBase64EncodedImageData'; // Change the MIME type and replace YourBase64EncodedImageData with actual base64 encoded image data
        const blob = dataURItoBlob(resumeDataURL);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Resume.jpg'; // Change the file name as needed
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    };

    // Function to convert data URI to blob
    const dataURItoBlob = (dataURI) => {
        const byteString = atob(dataURI.split(',')[1]);
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });
        return blob;
    };

    return (
        <section id='resume' className='w-full border-b-[1px] border-b-black'>
            <div className='flex justify-center my-20 items-center text-center'>
                <Title  description='My Resume' />
            </div>
            <div>
                <ul className='w-full grid grid-cols-4'>
                    <li
                        onClick={() =>
                            setEducationData(true) &
                            setSkillData(false) &
                            setExperienceData(false) &
                            setAchievementData(false)
                        }
                        className={` ${
                            educationData
                                ? 'border-designColor rounded-lg'
                                : 'border-transparent'
                        } resume`}
                    >
                        Education
                    </li>
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            setSkillData(true) &
                            setExperienceData(false) &
                            setAchievementData(false)
                        }
                        className={` ${
                            skillData
                                ? 'border-designColor rounded-lg'
                                : 'border-transparent'
                        } resume`}
                    >
                        Professional Skills
                    </li>
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            setSkillData(false) &
                            setExperienceData(true) &
                            setAchievementData(false)
                        }
                        className={` ${
                            experienceData
                                ? 'border-designColor rounded-lg'
                                : 'border-transparent'
                        } resume`}
                    >
                        Experience
                    </li>
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            setSkillData(false) &
                            setExperienceData(false) &
                            setAchievementData(true)
                        }
                        className={` ${
                            achievementData
                                ? 'border-designColor rounded-lg'
                                : 'border-transparent'
                        } resume`}
                    >
                        Achievements
                    </li>
                </ul>
            </div>

            {educationData && <Education />}
            {skillData && <Skills />}
            {experienceData && <Experience />}
            {achievementData && <Achievement />}

            {/* Download button */}
            <button onClick={handleDownload} className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-4">
                Download Resume
            </button>
        </section>
    );
};

export default Resume;
