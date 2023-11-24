import { motion } from "framer-motion";
import '../styles/css/MySkills.css';
import { useState } from "react";
import { MySkillsSlider } from "./MySkillsSlider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function MySkills () {

    const [current, setCurrent] = useState(0);
    const skillsSliderLength = MySkillsSlider.length;

    const nextSlide = () => {
        setCurrent(current === skillsSliderLength - 1 ? 0 : current + 1);
    }

    const previousSlide = () => {
        setCurrent(current === 0 ? skillsSliderLength - 1 : current - 1);
    }

    const draw = {
        hidden: {pathLength: 0, opacity: 0},
        visible: (i) => {
            const delay = 0.5;
            const customPathLength = i;
            return {
                pathLength: customPathLength,
                opacity: 0.7,
                transition: {
                    pathLength: {delay, type: 'spring', duration: 3, bounce: 0},
                }
            }
        }
    };

    return (
        <div className="MySkillsParentContainer">
            <motion.div className = 'MySkillsMainContainer' 
            initial = {{opacity: 0, scale: 0.9}}
            animate = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>
                <div className="TitleSkillsContainer">
                    <h2>My Skills</h2>
                </div>
                <div className="MySkillsSliderContainer">
                    <div className='leftArrowContainer'>
                        <FontAwesomeIcon className='leftArrow' icon= {faCircleArrowLeft} onClick={previousSlide}/>
                    </div>
                    {MySkillsSlider.map((slide, index) => {
                        return (
                            <div className={index === current ? "slideActive" : "slide"} key={index}>
                                {
                                    index === current && (
                                        <div className="MySkillsContentSliderContainer">
                                            <h3 className="SubTitleMySkillsContainer">{slide.SkillsType}</h3>
                                            <motion.svg className='SvgContainer'
                                            width='200'
                                            height='200'
                                            viewBox='0 0 200 200'
                                            initial='hidden'
                                            animate='visible'>
                                                <motion.circle 
                                                cx='100'
                                                cy='100'
                                                r='80'
                                                stroke='#1aff1a'
                                                fill='rgb(55, 101, 40, 0.5)'
                                                strokeWidth='15'
                                                variants={draw}
                                                custom={slide.FirstSkillsPercentageDecimal}/>
                                                <motion.text x='58' y='120' fill='white' fontSize='48px' opacity='0.7'>{slide.FirstSkillsPercentage}</motion.text>
                                            </motion.svg>
                                            <motion.svg className='SvgContainer'
                                            width='200'
                                            height='200'
                                            viewBox='0 0 200 200'
                                            initial='hidden'
                                            animate='visible'>
                                                <motion.circle 
                                                cx='100'
                                                cy='100'
                                                r='80'
                                                stroke='#1aff1a'
                                                fill='rgb(55, 101, 40, 0.5)'
                                                strokeWidth='15'
                                                variants={draw}
                                                custom={slide.SecondSkillsPercentageDecimal}/>
                                                <motion.text x='58' y='120' fill='white' fontSize='48px' opacity='0.7'>{slide.SecondSkillsPercentage}</motion.text>
                                            </motion.svg>
                                            <motion.svg className='SvgContainer'
                                            width='200'
                                            height='200'
                                            viewBox='0 0 200 200'
                                            initial='hidden'
                                            animate='visible'>
                                                <motion.circle 
                                                cx='100'
                                                cy='100'
                                                r='80'
                                                stroke='#1aff1a'
                                                fill='rgb(55, 101, 40, 0.5)'
                                                strokeWidth='15'
                                                variants={draw}
                                                custom={slide.ThirdSkillsPercentageDecimal}/>
                                                <motion.text x='58' y='120' fill='white' fontSize='48px' opacity='0.7'>{slide.ThirdSkillsPercentage}</motion.text>
                                            </motion.svg>
                                            <div className="SkillNamesContainer">
                                                <div className="SkillNameOne">
                                                    <p>{slide.FirstSkillName}</p>
                                                </div>
                                                <div className="SkillNameTwo">
                                                    <p>{slide.SecondSkillName}</p>
                                                </div>
                                                <div className="SkillNameThree">
                                                    <p>{slide.ThirdSkillName}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    })}
                    <div className='rightArrowContainer'>
                        <FontAwesomeIcon className='rightArrow' icon={faCircleArrowRight} onClick={nextSlide} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default MySkills;