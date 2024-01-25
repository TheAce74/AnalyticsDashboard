import Lottie from "lottie-react";
import bolt from "../data/bolt.json";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Loader() {
  const lottieRef = useRef(null);

  useEffect(() => {
    lottieRef.current.setSpeed(0.6);
  }, []);

  return (
    <motion.div
      className="loader"
      key="loader"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Lottie
        animationData={bolt}
        loop={true}
        style={{
          height: "100%",
        }}
        lottieRef={lottieRef}
      />
    </motion.div>
  );
}

export default Loader;
