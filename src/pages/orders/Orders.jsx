import { motion } from "framer-motion";

function Orders() {
  return (
    <motion.section
      className="orders"
      key="orders"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h1>Orders</h1>
    </motion.section>
  );
}

export default Orders;
