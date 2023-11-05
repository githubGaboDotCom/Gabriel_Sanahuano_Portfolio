import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import '../styles/css/AboutMeWindow.css';

function AboutMeWindow () {

    const title = useRef(null);
    const text = useRef(null);
    const text2 = useRef(null);
    const text3 = useRef(null);
    const text4 = useRef(null);

    useEffect(() => {
        const typedTitle = new Typed(title.current, {
            strings: ['Hi, I am Gabriel!'],
            typeSpeed: 50,
            showCursor: false
        });

        const typedText = new Typed(text.current, {
            strings: ['I am a computer scientist with a specialized ' +
            'focus on Machine Learning and Web Development. I am passionate ' +
            'about software engineering and QA testing, and also about any ' + 
            'technological science that helps us achieve our potential as ' + 
            'individuals and society. I love being able to serve and help ' + 
            'people achieve their goals through software.'],
            typeSpeed: 20,
            showCursor: false,
            startDelay: 2800
        });

        const typedText2 = new Typed(text2.current, {
            strings: ['In a world with daily challenges, I aim to generate ' + 
            'quick and effective solutions through quality software for any ' + 
            'person or organization that needs it. It is for this reason that ' + 
            'I have created this website to make myself known and to be able to ' + 
            'demonstrate how my skills and knowledge can help enhance your future.'],
            typeSpeed: 20,
            showCursor: false,
            startDelay: 21000
        });

        const typedText3 = new Typed(text3.current, {
            strings: ['Thank you very much for visiting my website and taking some ' +
            'of your time to learn more about me. I will be eagerly waiting for ' +
            'any opportunity where we can work together to meet your current goals ' +
            'and projects through technology. For future job opportunities with your ' +
            'company, in the "Contact Me" section, you will find all of my contact ' +
            'information along with the section to send me a message. Please feel ' + 
            'free to contact me anytime, and I will respond as soon as possible. ' +
            'I hope you have an excellent experience browsing my website!'],
            typeSpeed: 20,
            showCursor: false,
            startDelay: 38000
        });

        const textSign = new Typed(text4.current, {
            strings: ['Gabriel Sanahuano'],
            typeSpeed: 40,
            showCursor: false,
            startDelay: 65000
        });

        return () => {
            typedTitle.destroy();
            typedText.destroy();
            typedText2.destroy();
            typedText3.destroy();
            textSign.destroy();
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
                    {/*eslint-disable-next-line*/}
                        <h2 id="Title" ref={title} />
                        <p id="Text" ref={text} />
                        <p id="Text" ref={text2}/>
                        <p id="Text" ref={text3}/>
                        <p id="Sign" ref={text4}/>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default AboutMeWindow;