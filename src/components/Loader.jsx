import Lottie from "lottie-react";
import bolt from "../data/bolt.json";
import { useEffect, useRef } from "react";

function Loader() {
  const lottieRef = useRef(null);

  useEffect(() => {
    lottieRef.current.setSpeed(0.6);
  }, []);

  return (
    <div className="loader">
      <Lottie
        animationData={bolt}
        loop={true}
        style={{
          height: "100%",
        }}
        lottieRef={lottieRef}
      />
    </div>
  );
}

export default Loader;
