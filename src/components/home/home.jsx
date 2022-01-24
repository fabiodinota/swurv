import react from "react";
import './home.css';
import { motion, AnimatePresence } from "framer-motion"

const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, delay: 1 }
  }

const Home = () => {
    return (
        <motion.div className="header1"
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
        layout
        variants={ variants }>
            <AnimatePresence>
                <h1>SWURV</h1>
                <p>Motion Designer</p>
            </AnimatePresence>
        </motion.div>
        
    );
  }
  
export default Home;