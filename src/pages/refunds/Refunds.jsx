import { motion } from "framer-motion";

function Refunds() {
  return (
    <motion.section
      className="refunds"
      key="refunds"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h1>Refunds</h1>
    </motion.section>
  );
}

export default Refunds;
