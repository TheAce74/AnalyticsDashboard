import PropTypes from "prop-types";
import trendingUpIcon from "../../assets/trendingUpIcon.svg";
import trendingDownIcon from "../../assets/trendingDownIcon.svg";

Overview.propTypes = {
  svg: PropTypes.string,
  trend: PropTypes.string,
  text: PropTypes.string,
  amount: PropTypes.number,
  bullish: PropTypes.bool,
  percentage: PropTypes.number,
};

export default function Overview({
  svg,
  trend,
  text,
  amount,
  bullish,
  percentage,
}) {
  return (
    <div className="overview-wrapper">
      <div className="top">
        <div className="ring">
          <img src={svg} alt="" />
        </div>
        <img src={trend} alt="" />
      </div>
      <h3>{text}</h3>
      <p>
        {text === "Total Income"
          ? `$${amount.toString().replace("0000", "0,000")}`
          : amount}
      </p>
      <div className="bottom">
        <div className={bullish ? "bullish" : "bearish"}>
          <img src={bullish ? trendingUpIcon : trendingDownIcon} alt="" />
          <p>{percentage}%</p>
        </div>
        <p>vs. previous month</p>
      </div>
    </div>
  );
}
