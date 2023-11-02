import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import '../styles/css/BiographyWindow.css';

function BiographyWindow () {

    const text = useRef(null);
    useEffect(() => {
        const typedText = new Typed(text.current, {
            strings: ['Hi, I am Gabriel!'],
            typeSpeed: 50
        });

        return () => {
            typedText.destroy();
        };
    }, []);

    return (
        <div className="ParentContainer">
            <motion.div className = 'MainContainer' 
            initial = {{opacity: 0, scale: 0.9}}
            animate = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>
                <div className="ContentContainer">
                    <img src="/pictureResume.jpeg" alt="Gabriel's Pic"/>
                    <div className="TextContainer">
                        <span id="Title" ref={text} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default BiographyWindow;