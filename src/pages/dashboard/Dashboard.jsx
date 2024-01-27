import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import SalesChart from "../../components/SalesChart";
import Select from "react-select";
import Overview from "./Overview";
import totalOrdersIcon from "../../assets/totalOrdersIcon.svg";
import totalOrdersTrend from "../../assets/totalOrdersTrend.svg";
import totalRefundsIcon from "../../assets/totalRefundsIcon.svg";
import totalRefundsTrend from "../../assets/totalRefundsTrend.svg";
import averageSalesIcon from "../../assets/averageSalesIcon.svg";
import averageSalesTrend from "../../assets/averageSalesTrend.svg";
import totalIncomeIcon from "../../assets/totalIncomeIcon.svg";
import totalIncomeTrend from "../../assets/totalIncomeTrend.svg";
import { v4 as uuidv4 } from "uuid";
import OrdersTable from "../../components/OrdersTable";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import { platforms } from "../../utils/platforms";

function Dashboard() {
  const { setTitle } = useAppContext();
  const [selectedOption, setSelectedOption] = useState({
    value: "monthly",
    label: "Monthly",
  });

  const options = [
    { value: "yearly", label: "Yearly" },
    { value: "monthly", label: "Monthly" },
    { value: "weekly", label: "Weekly" },
    { value: "daily", label: "Daily" },
    { value: "hourly", label: "Hourly" },
  ];

  const overviews = [
    {
      svg: totalOrdersIcon,
      trend: totalOrdersTrend,
      text: "Total Orders",
      amount: 350,
      bullish: true,
      percentage: 23.5,
    },
    {
      svg: totalRefundsIcon,
      trend: totalRefundsTrend,
      text: "Total Refunds",
      amount: 270,
      bullish: false,
      percentage: 13.5,
    },
    {
      svg: averageSalesIcon,
      trend: averageSalesTrend,
      text: "Average Sales",
      amount: 1567,
      bullish: false,
      percentage: 33.7,
    },
    {
      svg: totalIncomeIcon,
      trend: totalIncomeTrend,
      text: "Total Income",
      amount: 350000,
      bullish: true,
      percentage: 64.2,
    },
  ];

  useLayoutEffect(() => {
    setTitle("Dashboard");
  }, [setTitle]);

  return (
    <motion.section
      className="dashboard"
      key="dashboard"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div>
        <div className="sales-trend">
          <div className="sales-trend-inner">
            <h2>Sales Trend</h2>
            <div>
              <p>Sort by:</p>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </div>
          </div>
          <SalesChart />
        </div>
        <div className="overview">
          {overviews.map((item) => (
            <Overview key={uuidv4()} {...item} />
          ))}
        </div>
      </div>
      <div>
        <div className="last-orders">
          <div>
            <h2>Last Orders</h2>
            <Link to="/orders">See All</Link>
          </div>
          <OrdersTable stopIndex={5} />
        </div>
        <div className="top-platforms">
          <div>
            <h2>Top Platforms</h2>
            <button>See All</button>
          </div>
          <ul role="list">
            {platforms.map(({ name, progress, amount, percentage, color }) => (
              <li key={uuidv4()}>
                <h3>{name}</h3>
                <ProgressBar
                  completed={progress}
                  isLabelVisible={false}
                  bgColor={color}
                  animateOnRender
                />
                <div>
                  <p>{amount}</p>
                  <p>+{percentage}%</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default Dashboard;
