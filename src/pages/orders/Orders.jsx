import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import { useAppContext } from "../../context/AppContext";

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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse adipisci
        temporibus enim culpa officiis rerum assumenda similique sequi dolorem
        nihil quos repellendus dignissimos eius saepe, accusantium perferendis
        ea, harum pariatur nobis cupiditate excepturi tenetur unde. Quis quam
        corporis nesciunt repellat, soluta quas quod eveniet incidunt labore
        beatae ad consectetur nihil amet ullam distinctio accusantium animi
        excepturi? Quidem at modi doloremque deserunt commodi quis veritatis?
        Minima nisi aut inventore in labore culpa fugit nam reprehenderit. Nobis
        id magnam eum omnis inventore odit expedita suscipit facere aspernatur
        iste aliquid alias ipsum nam pariatur dicta, possimus officia eveniet,
        dolore voluptatibus perspiciatis, quisquam nostrum?
      </p>
    </motion.section>
  );
}

export default Orders;
