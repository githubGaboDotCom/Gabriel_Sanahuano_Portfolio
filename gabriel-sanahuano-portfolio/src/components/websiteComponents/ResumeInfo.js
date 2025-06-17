import { motion } from 'framer-motion';
import '../styles/css/ResumeInfo.css';
import { ResumeSlider} from './ResumeSlider';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';

function ResumeInfo () {

    const [current, setCurrent] = useState(0);
    const sliderLength = ResumeSlider.length;

    const nextSlide = () => {
        setCurrent(current === sliderLength - 1 ? 0 : current + 1);
    }

    const previousSlide = () => {
        setCurrent(current === 0 ? sliderLength - 1 : current - 1);
    }

    return (
        <div className="ResumeParentContainer">
            <motion.div className = 'ResumeMainContainer' 
            initial = {{opacity: 0, scale: 0.9}}
            animate = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>
                <div className='TitleResumeContainer'>
                    <h2>Gabriel A. Sanahuano</h2>
                </div>
                <div className='sliderContainer'>
                    <div className='leftArrowContainer'>
                        <FontAwesomeIcon className='leftArrow' icon= {faCircleArrowLeft} onClick={previousSlide} />
                    </div>
                    <div className='EducationAndJobExperience'>
                    {ResumeSlider.map((slide, index) => {
                        return (
                            <div className={index === current ? "slideActive" : "slide"} key={index}>
                                {
                                    index === current && (
                                        <div>
                                            <div className='iconAndTitleContainer'>
                                                <h3 className='EducationAndWorkTitle'>{slide.Title}</h3>
                                                <FontAwesomeIcon className='imageIcon' icon={faImage} />
                                            </div>
                                            <div className='slideTextContainer'>
                                                <div className='SubTitleAndOrg'>
                                                    <h5 className='SubTitle'>{slide.SubTitle}</h5>
                                                    <h5 className='Organization'>{slide.Organization}</h5>
                                                </div>
                                                <div className='DateAndLocation'>
                                                    <h5 className='Date'>{slide.Date}</h5>
                                                    <h5 className='Location'>{slide.Location}</h5>
                                                </div>
                                            </div>
                                            <p className='BulletText'>{slide.FirstItem}</p>
                                            <p className='BulletText'>{slide.SecondItem}</p>
                                            <p className='BulletText'>{slide.ThirdItem}</p>
                                            <p className='BulletText'>{slide.FourthItem}</p>
                                            <p className='BulletText'>{slide.FifthItem}</p>
                                            <p className='BulletText'>{slide.SixthItem}</p>
                                            <p className='BulletText'>{slide.SeventhItem}</p>
                                            <p className='BulletText'>{slide.EigthItem}</p>
                                            <p className='BulletText'>{slide.NinethItem}</p>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    })}
                    </div>
                    <div className='rightArrowContainer'>
                        <FontAwesomeIcon className='rightArrow' icon={faCircleArrowRight} onClick={nextSlide} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default ResumeInfo;