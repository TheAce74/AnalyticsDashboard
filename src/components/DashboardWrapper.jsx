import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";

function DashboardWrapper() {
  return (
    <main className="dashboard-wrapper">
      <MiniWrapper />
      <div>
        <Header />
        <div className="inner">
          <Outlet />
        </div>
      </div>
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
    <div>
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
