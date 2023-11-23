import { motion } from "framer-motion";
import '../styles/css/MyProjects.css';

function MyProjects () {
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
                    <video width="320" height="240">
                        <source src="https://www.youtube.com/watch?v=rY4KFmj9GeE"/>
                    </video>
                </div>
            </motion.div>
        </div>
    );
}

export default MyProjects;