import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/css/NavigationBar.css';


function NavigationBar () {

    // const [showNavigationBar, setShowNavigationBar] = useState(false);

    // useEffect(() => {
    //     setInterval(() => {
    //         setShowNavigationBar(!showNavigationBar);
    //     }, 16000);
    //      // eslint-disable-next-line
    // }, []);
    
    return (
        <div className='NavBarParentContainer'>
            <motion.div className='NavigationBarCSS'
            initial = {{opacity: 0, scale: 0.9}}
            animate = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.5, delay: 16, ease: [0, 0.71, 0.2, 1.01]}}>
                <ul>
                    <li className='active'>Biography</li>
                    <li>Resume</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact Me</li>
                </ul>            
            </motion.div>
        </div>
    );
}

export default NavigationBar;