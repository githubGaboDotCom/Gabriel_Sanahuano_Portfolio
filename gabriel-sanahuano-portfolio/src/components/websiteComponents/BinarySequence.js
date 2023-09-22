import {useMotionValue, useTransform, motion, useScroll, useVelocity, useAnimationFrame, useSpring} from 'framer-motion';
import { useRef } from 'react';
import {wrap} from '@motionone/utils';
import '../styles/css/BinarySequence.css';

function MotionedNumberSequence (children, baseVelocity = 100) { 

    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        
        if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className = 'NumbersContainer'>
            <motion.div className = 'numbers' style={{ x }}>
                <span>{children.numbersSequence}</span>
            </motion.div>
        </div>
    );
}

function BinarySequence () {
    return (
        <section>
            <MotionedNumberSequence numbersSequence = {'1 0 1 0 1 0'} baseVelocity = {-5} />
        </section>
    );
}

export default BinarySequence;
