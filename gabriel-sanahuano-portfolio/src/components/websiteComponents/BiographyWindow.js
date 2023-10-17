import { motion } from "framer-motion";
import '../styles/css/BiographyWindow.css';

function BiographyWindow () {
    return (
        <div className="ParentContainer">
            <motion.div className = 'MainContainer' 
            initial = {{opacity: 0, scale: 0.8}}
            animate = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.5, delay: 16, ease: [0, 0.71, 0.2, 1.01]}}>
                <div className="ImageContainer">
                    <img src="/pictureResume.jpeg" alt="Gabriel's Pic"/>
                </div>
            </motion.div>
        </div>
    );
}

export default BiographyWindow;