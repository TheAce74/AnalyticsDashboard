import { motion } from "framer-motion";

function Income() {
  return (
    <motion.section
      className="income"
      key="income"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h1>Income</h1>
    </motion.section>
  );
}

export default Income;
