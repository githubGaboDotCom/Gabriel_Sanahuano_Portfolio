import {useMotionValue, useTransform, motion, useAnimationFrame} from 'framer-motion';
import {wrap} from '@motionone/utils';
import '../styles/css/BinarySequence.css';

function BinarySequenceToTheLeft ({children}) { 

    const baseX = useMotionValue(-100);
    const x = useTransform(baseX, (v) => `${wrap(-105, 80, v)}%`);
    useAnimationFrame((t, delta) => {
        let moveBy = -9 * (delta / 1000);
        //Making a comment

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
    useAnimationFrame((t, delta) => {
        let moveBy = 9 * (delta / 1000);

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
