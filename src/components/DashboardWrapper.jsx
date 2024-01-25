import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function DashboardWrapper() {
  return (
    <main>
      <SideBar />
      <div>
        <Header />
        <Outlet />
      </div>
    </main>
  );
}

export default DashboardWrapper;
