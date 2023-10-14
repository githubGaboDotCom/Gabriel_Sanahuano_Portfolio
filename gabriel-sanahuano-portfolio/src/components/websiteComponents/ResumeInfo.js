import { motion } from 'framer-motion';
import '../styles/css/ResumeInfo.css';

function ResumeInfo () {

    return (
        <motion.div 
            className = 'MainContainer' 
            initial = {{opacity: 0, scale: 0.5}}
            animate = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.8, delay: 16, ease: [0, 0.71, 0.2, 1.01]}}>
            <p>This is a test!</p>
        </motion.div>
    );
}

export default ResumeInfo;