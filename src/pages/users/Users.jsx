import { motion } from "framer-motion";

function Users() {
  return (
    <motion.section
      className="users"
      key="users"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h1>Users</h1>
    </motion.section>
  );
}

export default Users;
