import {motion} from 'framer-motion';
import styled from 'styled-components';

export const DivComponent = styled(motion.div)`
    background: white;
    border-radius: 30px;
    width: 150px;
    height: 150px;
`;

export const PromptMessageComponent = styled(motion.h1)`
    color: red;
`;