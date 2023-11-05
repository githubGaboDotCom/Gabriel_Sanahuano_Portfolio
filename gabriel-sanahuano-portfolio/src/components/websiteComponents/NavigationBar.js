import { motion } from 'framer-motion';
import { useState, useEffect} from 'react';
import AboutMeWindow from './AboutMeWindow';
import ResumeInfo from './ResumeInfo';
import MySkills from './MySkills';
import MyProjects from './MyProjects';
import ContactMe from './ContactMe';
import '../styles/css/NavigationBar.css';


function NavigationBar () {
    const [showAboutMe, setShowAboutMe] = useState(false);
    const [showResume, setShowResume] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showContactMe, setShowContactMe] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowAboutMe(true);
        }, 16000);
    }, []);

    return (
        <div>
            <div className='NavBarParentContainer'>
                <motion.div className='NavigationBarCSS'
                initial = {{opacity: 0, scale: 0.9}}
                animate = {{opacity: 1, scale: 1}}
                transition = {{duration: 0.5, delay: 16, ease: [0, 0.71, 0.2, 1.01]}}>
                    <ul>
                        <li className={showAboutMe ? 'active' : ''} onClick={() => {
                            setShowAboutMe(true)
                            setShowResume(false)
                            setShowSkills(false)
                            setShowProjects(false)
                            setShowContactMe(false)
                            }}>About Me</li>
                        <li className={showResume ? 'active' : ''} onClick={() => {
                            setShowAboutMe(false)
                            setShowResume(true)
                            setShowSkills(false)
                            setShowProjects(false)
                            setShowContactMe(false)
                            }}>Resume</li>
                        <li className={showSkills ? 'active' : ''} onClick={() => {
                            setShowAboutMe(false)
                            setShowResume(false)
                            setShowSkills(true)
                            setShowProjects(false)
                            setShowContactMe(false)
                            }}>Skills</li>
                        <li className={showProjects ? 'active' : ''} onClick={() => {
                            setShowAboutMe(false)
                            setShowResume(false)
                            setShowSkills(false)
                            setShowProjects(true)
                            setShowContactMe(false)
                            }}>Projects</li>
                        <li className={showContactMe ? 'active' : ''} onClick={() => {
                            setShowAboutMe(false)
                            setShowResume(false)
                            setShowSkills(false)
                            setShowProjects(false)
                            setShowContactMe(true)
                            }}>Contact Me</li>
                    </ul>            
                </motion.div>
            </div>
            {showAboutMe && <AboutMeWindow />}
            {showResume && <ResumeInfo />}
            {showSkills && <MySkills />}
            {showProjects && <MyProjects />}
            {showContactMe && <ContactMe />}
        </div>
    );
}

export default NavigationBar;