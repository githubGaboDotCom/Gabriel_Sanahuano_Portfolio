import { motion } from 'framer-motion';
import '../styles/css/ResumeInfo.css';

function ResumeInfo () {

    return (
        <div className="ResumeParentContainer">
            <motion.div className = 'ResumeMainContainer' 
            initial = {{opacity: 0, scale: 0.9}}
            animate = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>
                <h1>This is the resume window.</h1>
            </motion.div>
        </div>
    );
}

export default ResumeInfo;