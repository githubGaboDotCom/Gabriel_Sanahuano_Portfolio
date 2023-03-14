import {useMotionValue, useTransform, motion} from 'framer-motion';

function MotionedNumberSequence () {

    

    return (
        <div className = 'NumbersContainer'>
            <motion.div className = 'numbers'>
                <span></span>
            </motion.div>
        </div>
    );
}

function BinarySequence () {
    <section>
        <MotionedNumberSequence baseVelocity = {-5}>
            1 0 1 0 1 0 0 1 0 1 0 0 1 1 1 0 0 1 0 1
        </MotionedNumberSequence>
    </section>
}

export default BinarySequence;