// TransitionWrapper.js
import { motion } from 'framer-motion';

const transitionVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
};

const TransitionWrapper = ({ children }) => {
    return (
        <motion.div
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default TransitionWrapper;
