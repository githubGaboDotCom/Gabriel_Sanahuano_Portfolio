import { motion } from "framer-motion";
import '../styles/css/MyProjects.css';
import { useState } from "react";
import { MyProjectsSlider } from "./MyProjectsSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function MyProjects () {
    const [current, setCurrent] = useState(0);
    const projectsSliderLength = MyProjectsSlider.length;

    const nextSlide = () => {
        setCurrent(current === projectsSliderLength - 1 ? 0 : current + 1);
    }

    const previousSlide = () => {
        setCurrent(current === 0 ? projectsSliderLength - 1 : current - 1);
    }

    return (
        <div className="MyProjectsParentContainer">
            <motion.div className = 'MyProjectsMainContainer' 
            initial = {{opacity: 0, scale: 0.9}}
            animate = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>
                <div className="ProjectsTitleContainer">
                    <h2>My Projects</h2>
                </div>
                <div className="ProjectsSliderContainer">
                    <div className='leftArrowContainer'>
                        <FontAwesomeIcon className='leftArrow' icon= {faCircleArrowLeft} onClick={previousSlide}/>
                    </div>
                    {MyProjectsSlider.map((slide, index) => {
                        return (
                            <div className={index === current ? "slideActive" : "slide"} key={index}>
                                {
                                    index === current && (
                                        <div className="ProjectsSliderContentContainer">
                                            <h3>Project: {slide.AppName}</h3>
                                            <div className="VideoAndAppDescriptionContainer">
                                                <iframe width="400" height="224" 
                                                src={slide.WebUrl} 
                                                title="YouTube video player" 
                                                style={{border: 'none'}} 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                                allowFullScreen></iframe>
                                                <p className="AppDescription">{slide.AppDescription}</p>
                                            </div>
                                            <p>{slide.ProjectSkills}</p> 
                                            <a href={slide.AppWebURL} target="blank">Click here to go to the Pasuca Calculator App <FontAwesomeIcon icon= {faArrowUpRightFromSquare} /></a>
                                            <a href={slide.GithubRepositoryLink} target="blank">Click here to go to the Github Repository <FontAwesomeIcon icon= {faArrowUpRightFromSquare} /></a>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    })}    
                    <div className='rightArrowContainer'>
                        <FontAwesomeIcon className='rightArrow' icon={faCircleArrowRight} onClick={nextSlide}/>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default MyProjects;