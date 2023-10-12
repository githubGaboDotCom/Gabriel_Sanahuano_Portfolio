import {useMotionValue, useTransform, motion} from 'framer-motion';
import NavigationBar from './NavigationBar';
import {wrap} from '@motionone/utils';
import '../styles/css/BinarySequence.css';

let animationToTheLeftDone = false;
let animationToTheRightDone = false;

function BinarySequenceToTheLeft ({children}) { 

    const baseX = useMotionValue(100); 
    const x = useTransform(baseX, (v) => `${wrap(-101, 100, v)}%`); 
    let last = new Date().getTime();

    function moveByToTheLeft() {
        const now = new Date().getTime();
        let deltaTime = now - last;
        last = now; 
        let moveBy = -3.5 * (deltaTime / 1000);
        baseX.set(baseX.get() + moveBy);
        const floatX = parseFloat(x.get());
        if (floatX < -100.0) {
            animationToTheLeftDone = true;
        }
        if (floatX > -100.0) {
            window.requestAnimationFrame(moveByToTheLeft);
        }
    }

    window.requestAnimationFrame(moveByToTheLeft);

    return (
        <div className = 'NumbersContainer'>
            <motion.div className = 'numbers' style={{ x }}>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
            </motion.div>
        </div>
    );
}

function BinarySequenceToTheRight ({children}) { 

    const baseX = useMotionValue(-110);
    const x = useTransform(baseX, (v) => `${wrap(-111, 101, v)}%`);
    let last = new Date().getTime();

    function moveByToTheRight() {
        const now = new Date().getTime();
        let deltaTime = now - last;
        last = now; 
        let moveBy = 3 * (deltaTime / 1000);
        baseX.set(baseX.get() + moveBy);
        const floatX = parseFloat(x.get());
        if (floatX > 100.0) {
            animationToTheRightDone = true;
        }
        if (floatX < 100.0) {
            window.requestAnimationFrame(moveByToTheRight);
        }
    }
    
    window.requestAnimationFrame(moveByToTheRight);

    return (
        <div className = 'NumbersContainer'>
            <motion.div className = 'numbers' style={{ x }}>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
            </motion.div>
        </div>
    );
}

function BinarySequence () {

    return (
        <div>
            <div>
                <NavigationBar animationToTheLeftDone = {animationToTheLeftDone}/>
            </div>
            <section>
                <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
                <BinarySequenceToTheRight>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheRight>
                <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
                <BinarySequenceToTheRight>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheRight>
                <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
                <BinarySequenceToTheRight>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheRight>
                <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
                <BinarySequenceToTheRight>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheRight>
                <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
                <BinarySequenceToTheRight>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheRight>
                <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
                <BinarySequenceToTheRight>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheRight>
                <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
                <BinarySequenceToTheRight>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheRight>
                <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
                <BinarySequenceToTheRight>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheRight>
                <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
                <BinarySequenceToTheRight>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheRight>
                <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
                <BinarySequenceToTheRight>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheRight>
            </section>
        </div>
    );
}

export default BinarySequence;
