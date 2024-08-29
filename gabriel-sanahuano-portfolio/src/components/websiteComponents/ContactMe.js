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
                    <h2>Send Me a Message!
                        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.gif" alt="😀" width="26" height="26"/>
                    </h2>
                </div>
                <p className="connectInvitation">Let's chat and create something together. If you have any fun projects or ideas to revolutionize your business through 
                   software, you're in the right place and I would love to help and contribute to them. Get in touch by completing the 
                   form below, and I'll be contacting you soon. Thanks for visiting my portfolio! 
                </p>
                <form>
                    <input type="text" id="textFields" name="firstName" placeholder="First Name" />
                    <input type="text" id="textFields" name="lastName" className="lastNameField" placeholder="Last Name" /> <br />
                    <input type="email" id="textFields" name="email" placeholder="Email" /> <br />
                    <input type="text" id="textFields" name="subject" placeholder="Subject" /> <br />
                    <textarea name="bodyEmail" rows="7" cols="72" placeholder="Type your message here ..."/> <br />
                    <input type="submit" value="Submit" />
                </form>
            </motion.div>
        </div>
    );
}

export default ContactMePage;