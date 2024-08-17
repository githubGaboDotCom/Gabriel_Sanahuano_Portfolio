import { motion } from "framer-motion";
import '../styles/css/ContactMe.css';

function ContactMePage () {
    return (
        <div className="ContactMeParentContainer">
            <motion.div className = 'ContactMeMainContainer' 
            initial = {{opacity: 0, scale: 0.9}}
            animate = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>
                <div className="ContactMeTitleContainer">
                    <h2>Send Me a Message!</h2>
                    <picture>
                        <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.webp" type="image/webp" />
                        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.gif" alt="😀" width="32px" height="32px"/>
                    </picture>
                </div>
            </motion.div>
        </div>
    );
}

export default ContactMePage;