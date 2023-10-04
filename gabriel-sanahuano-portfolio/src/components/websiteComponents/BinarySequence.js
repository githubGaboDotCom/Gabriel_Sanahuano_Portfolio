import {useMotionValue, useTransform, motion, useAnimationFrame} from 'framer-motion';
import {wrap} from '@motionone/utils';
import { useEffect, useRef } from 'react';
import '../styles/css/BinarySequence.css';

function BinarySequenceToTheLeft ({children}) { 

    const baseX = useMotionValue(-100);
    const x = useTransform(baseX, (v) => `${wrap(-105, 80, v)}%`);
    useAnimationFrame((t, delta) => {
        let moveBy = -9 * (delta / 1000);

        baseX.set(baseX.get() + moveBy);
    });

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

    const baseX = useMotionValue(95);
    const x = useTransform(baseX, (v) => `${wrap(-100, 100, v)}%`);
    let initial = new Date().getTime();
    const last = useRef(initial);
    let moveBy = useRef(0);
    baseX.set(baseX.get() + moveBy);
    
    // useAnimationFrame((t, delta) => {
    //     console.log(delta);
    //     const now = new Date().getTime();
    //     let deltaTime = now - last;
    //     last = now;
    //     let moveBy = 9 * (deltaTime / 1000);
    //     console.log(moveBy);
    //     baseX.set(baseX.get() + moveBy);

    // });

    useEffect(() => {
        const now = new Date().getTime();
        let deltaTime = now - last.current;
        last.current = now;
        console.log(deltaTime);
        let moveUpdate = 9 * (deltaTime / 1000);
        moveBy.current = moveUpdate;
        // console.log(moveBy);
        // baseX.set(baseX.get() + moveBy);
    }, []);

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
        <section>
            <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
            <BinarySequenceToTheRight>1 1 0 1 0 1 1 0 1 1</BinarySequenceToTheRight>
            <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
            <BinarySequenceToTheRight>1 1 0 1 0 1 1 0 1 1</BinarySequenceToTheRight>
            <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
            <BinarySequenceToTheRight>1 1 0 1 0 1 1 0 1 1</BinarySequenceToTheRight>
            <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
            <BinarySequenceToTheRight>1 1 0 1 0 1 1 0 1 1</BinarySequenceToTheRight>
            <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
            <BinarySequenceToTheRight>1 1 0 1 0 1 1 0 1 1</BinarySequenceToTheRight>
            <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
            <BinarySequenceToTheRight>1 1 0 1 0 1 1 0 1 1</BinarySequenceToTheRight>
            <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
            <BinarySequenceToTheRight>1 1 0 1 0 1 1 0 1 1</BinarySequenceToTheRight>
            <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
            <BinarySequenceToTheRight>1 1 0 1 0 1 1 0 1 1</BinarySequenceToTheRight>
            <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
            <BinarySequenceToTheRight>1 1 0 1 0 1 1 0 1 1</BinarySequenceToTheRight>
            <BinarySequenceToTheLeft>1 0 1 1 0 0 1 0 1 1</BinarySequenceToTheLeft>
            <BinarySequenceToTheRight>1 1 0 1 0 1 1 0 1 1</BinarySequenceToTheRight>
        </section>
    );
}

export default BinarySequence;
