import { motion } from "framer-motion";

function Dashboard() {
  return (
    <motion.section
      className="dashboard"
      key="dashboard"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h1>Dashboard</h1>
    </motion.section>
  );
}

export default Dashboard;
