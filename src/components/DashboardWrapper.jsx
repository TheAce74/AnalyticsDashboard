import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import Loader from "./Loader";

function DashboardWrapper() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
      clearTimeout(timeout);
    }, 5000);
  }, []);

  return (
    <main className="dashboard-wrapper">
      <MiniWrapper />
      <div className="outer">
        <Header />
        <div className="inner">
          <Outlet />
        </div>
      </div>
      {loader && <Loader />}
    </main>
  );
}

export default DashboardWrapper;

//helper component to avoid performance issues due to menu icon state
function MiniWrapper() {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const menu = document.querySelector(".hamburger-react");
    menu.setAttribute("aria-controls", "primary-navigation");
  }, []);

  return (
    <div className="mini-wrapper">
      <Hamburger
        toggled={openMenu}
        toggle={setOpenMenu}
        label={openMenu ? "Hide menu" : "Show menu"}
        hideOutline={false}
        size={28}
      />
      <SideBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
}
