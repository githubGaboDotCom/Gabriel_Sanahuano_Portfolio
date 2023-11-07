import { motion } from 'framer-motion';
import '../styles/css/ResumeInfo.css';

function ResumeInfo () {

    return (
        <div className="ResumeParentContainer">
            <motion.div className = 'ResumeMainContainer' 
            initial = {{opacity: 0, scale: 0.9}}
            animate = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>
                <div className='TitleResumeContainer'>
                    <h2>Gabriel A. Sanahuano</h2>
                </div>
            </motion.div>
        </div>
    );
}

export default ResumeInfo;