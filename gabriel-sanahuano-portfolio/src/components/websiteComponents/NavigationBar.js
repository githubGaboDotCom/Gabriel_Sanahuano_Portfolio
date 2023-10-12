import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/css/NavigationBar.css';


function NavigationBar (animationToTheLeftDone) {

    const [showNavigationBar, setShowNavigationBar] = useState(false);

    if (animationToTheLeftDone == true){
        setShowNavigationBar(!showNavigationBar);
    }
    console.log(animationToTheLeftDone);
    console.log(showNavigationBar);
    // useEffect(() => {
    //     setInterval(() => {
    //         setShowNavigationBar(!showNavigationBar);
    //     }, 22000);
    // }, []);
    
    return (
        <motion.div className="NavigationBarCSS">
            {showNavigationBar && <h1>Testing this component!</h1>}
        </motion.div>
    );
}

export default NavigationBar;