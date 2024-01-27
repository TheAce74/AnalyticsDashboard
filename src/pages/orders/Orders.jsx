import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import OrdersTable from "../../components/OrdersTable";

function Orders() {
  const { setTitle } = useAppContext();

  useLayoutEffect(() => {
    setTitle("Orders");
  }, [setTitle]);

  return (
    <motion.section
      className="orders"
      key="orders"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <OrdersTable stopIndex={Infinity} />
    </motion.section>
  );
}

export default Orders;
