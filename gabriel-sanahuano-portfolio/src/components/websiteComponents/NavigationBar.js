import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/css/NavigationBar.css';


function NavigationBar (animationToTheLeftDone) {

    const [showNavigationBar, setShowNavigationBar] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setShowNavigationBar(!showNavigationBar);
        }, 16000);
         // eslint-disable-next-line
    }, []);
    
    return (
        <motion.div className="NavigationBarCSS">
            {showNavigationBar && <h1>Testing this component!</h1>}
        </motion.div>
    );
}

export default NavigationBar;