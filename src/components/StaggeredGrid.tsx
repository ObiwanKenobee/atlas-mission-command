import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggeredGridProps {
  children: ReactNode;
  className?: string;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const StaggeredGrid = ({ children, className }: StaggeredGridProps) => (
  <motion.div
    className={className}
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-30px" }}
  >
    {children}
  </motion.div>
);

export const StaggeredItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div variants={item} className={className}>
    {children}
  </motion.div>
);

export default StaggeredGrid;
