import { motion } from "framer-motion";
import '../styles/css/MyProjects.css';

function MyProjects () {
    return (
        <div className="MyProjectsParentContainer">
            <motion.div className = 'MyProjectsMainContainer' 
            initial = {{opacity: 0, scale: 0.9}}
            animate = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>
                <h1>This is the Projects window.</h1>
            </motion.div>
        </div>
    );
}

export default MyProjects;