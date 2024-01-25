import { motion } from "framer-motion";

function Sales() {
  return (
    <motion.section
      className="sales"
      key="sales"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h1>Sales</h1>
    </motion.section>
  );
}

export default Sales;
