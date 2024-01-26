import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./utils/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import { SnackbarProvider } from "notistack";
import Error from "./components/Error";
import DashboardWrapper from "./components/DashboardWrapper";
import Dashboard from "./pages/dashboard/Dashboard";
import Income from "./pages/income/Income";
import Orders from "./pages/orders/Orders";
import Sales from "./pages/sales/Sales";
import Settings from "./pages/settings/Settings";
import Refunds from "./pages/refunds/Refunds";
import Users from "./pages/users/Users";
import AppContextProvider from "./context/AppContext";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <AppContextProvider>
          <SnackbarProvider>
            <AnimatePresence>
              <Outlet />
              <ScrollToTop />
            </AnimatePresence>
          </SnackbarProvider>
        </AppContextProvider>
      ),
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <DashboardWrapper />,
          children: [
            {
              path: "/",
              element: <Dashboard />,
            },
            {
              path: "/income",
              element: <Income />,
            },
            {
              path: "/orders",
              element: <Orders />,
            },
            {
              path: "/sales",
              element: <Sales />,
            },
            {
              path: "/settings",
              element: <Settings />,
            },
            {
              path: "/refunds",
              element: <Refunds />,
            },
            {
              path: "/users",
              element: <Users />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
