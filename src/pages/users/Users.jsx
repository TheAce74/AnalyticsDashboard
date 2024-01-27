import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import OrdersTable from "../../components/OrdersTable";

function Users() {
  const { setTitle } = useAppContext();

  useLayoutEffect(() => {
    setTitle("Users");
  }, [setTitle]);

  return (
    <motion.section
      className="users"
      key="users"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <OrdersTable />
    </motion.section>
  );
}

export default Users;
