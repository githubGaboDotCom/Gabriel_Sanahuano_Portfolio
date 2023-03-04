import {motion} from 'framer-motion';
import styled from 'styled-components';

const styledBody = styled(motion.body)`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%);
    overflow: hidden;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const containerBoxMessage = styled(motion.div)`
    background: white;
    border-radius: 30px;
    width: 150px;
    height: 150px;
`;

const promptMessage = styled(motion.h1)`
    color: red;
`;

export const BodyComponent = () => <styledBody />;
export const DivComponent = () => <containerBoxMessage animate={{ scale: 2 }} />
export const PromptMessageComponent = () => <promptMessage />