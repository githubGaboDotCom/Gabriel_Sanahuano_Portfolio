import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import '../styles/css/BiographyWindow.css';

function BiographyWindow () {

    const title = useRef(null);
    const text = useRef(null);

    useEffect(() => {
        const typedTitle = new Typed(title.current, {
            strings: ['Hi, I am Gabriel!'],
            typeSpeed: 50,
            showCursor: false
        });

        const typedText = new Typed(text.current, {
            strings: ['Sed ut perspiciatis unde omnis This is another string'],
            typeSpeed: 30,
            showCursor: false
        });

        return () => {
            typedTitle.destroy();
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
                    <div className="TitleContainer">
                    {/*eslint-disable-next-line*/}
                        <h2 id="Title" ref={title} />
                        <p id="Text" ref={text} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default BiographyWindow;