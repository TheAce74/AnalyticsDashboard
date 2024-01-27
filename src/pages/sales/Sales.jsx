import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import SalesChart from "../../components/SalesChart";
import OrdersTable from "../../components/OrdersTable";

function Sales() {
  const { setTitle } = useAppContext();

  useLayoutEffect(() => {
    setTitle("Sales");
  }, [setTitle]);

  return (
    <motion.section
      className="sales"
      key="sales"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="first">
        <h3>Sales Trend</h3>
        <SalesChart />
      </div>
      <div className="second">
        <h3>Sales Records</h3>
        <OrdersTable stopIndex={5} />
      </div>
    </motion.section>
  );
}

export default Sales;
