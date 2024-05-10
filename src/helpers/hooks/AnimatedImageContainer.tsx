import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedImageContainerProps {
  threshold?: number;
  children: ReactNode;
  yValue?: number;
  xValue?: number;
  initialX?: number; 
  initialY?: number; 
  className?: string;
  onClick?: () => void;
  animateX?: boolean;
  animateY?: boolean;
}

function AnimatedImageContainer({ threshold, children, yValue, xValue, className, initialX, initialY, onClick, animateX, animateY }: AnimatedImageContainerProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: threshold || 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: animateX ? initialX || 0 : 0, y: animateY ? initialY || 0 : 0 }}
      animate={inView ? { opacity: 1, y: yValue || 0, x: xValue || 0 } : {}} 
      transition={{ duration: 1 }}  
      className={className}
      onClick={onClick}
    >
      {children}   
    </motion.div>
  );
}

export default AnimatedImageContainer;
