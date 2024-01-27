import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

function Income() {
  const { setTitle } = useAppContext();

  useLayoutEffect(() => {
    setTitle("Income");
  }, [setTitle]);

  return (
    <motion.section
      className="income"
      key="income"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="wrapper">
        <h1>Coming Soon...</h1>
        <p>We are working to get this page ready for you</p>
        <Link to="/">Back to Dashboard</Link>
      </div>
    </motion.section>
  );
}

export default Income;
