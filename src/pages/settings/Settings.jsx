import { motion } from "framer-motion";

function Settings() {
  return (
    <motion.section
      className="settings"
      key="settings"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h1>Settings</h1>
    </motion.section>
  );
}

export default Settings;
