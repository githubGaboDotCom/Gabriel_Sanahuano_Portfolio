import { motion } from "framer-motion";
import '../styles/css/MySkills.css';

function MySkills () {

    const draw = {
        hidden: {pathLength: 0, opacity: 0},
        visible: (i) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 0.8,
                opacity: 0.7,
                transition: {
                    pathLength: {delay, type: 'spring', duration: 3.5, bounce: 0},
                    opacity: {delay, duration: 0.01}
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
                <h3 className="SubTitleMySkillsContainer">Programming Skills</h3>
                <motion.svg
                width='600'
                height='600'
                viewBox='0 0 600 600'
                initial='hidden'
                animate='visible'>
                    <motion.circle 
                    cx='100'
                    cy='100'
                    r='80'
                    stroke='#1aff1a'
                    fill='rgb(55, 101, 40, 0.5)'
                    stroke-width='15'
                    variants={draw}
                    custom={1}/>
                        <motion.text x='72' y='110' fill='white' fontSize='40px' opacity='0.7'>80%</motion.text>
                        <motion.text x='80' y='150' fill='white' fontSize='23px'>C++</motion.text>
                </motion.svg>
            </motion.div>
        </div>
    );
}

export default MySkills;