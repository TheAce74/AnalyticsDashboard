import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function SalesChart() {
  const root = document.querySelector(":root");
  const text = getComputedStyle(root).getPropertyValue("--text").trim();
  const background = getComputedStyle(root)
    .getPropertyValue("--background")
    .trim();

  ChartJS.defaults.font.family = "Plus Jakarta Sans";

  const backgrounds = [
    "hsla(165, 59%, 50%, 10%)",
    "hsla(165, 59%, 50%, 10%)",
    "hsla(165, 59%, 50%, 10%)",
    "hsla(165, 59%, 50%, 10%)",
    "hsla(165, 59%, 50%, 10%)",
    "hsl(165, 59%, 50%)",
    "hsla(165, 59%, 50%, 10%)",
    "hsla(165, 59%, 50%, 10%)",
    "hsla(165, 59%, 50%, 10%)",
    "hsla(165, 59%, 50%, 10%)",
    "hsla(165, 59%, 50%, 10%)",
    "hsla(165, 59%, 50%, 10%)",
  ];

  const hoverBackgrounds = [
    "hsl(150, 100%, 34%)",
    "hsl(150, 100%, 34%)",
    "hsl(150, 100%, 34%)",
    "hsl(150, 100%, 34%)",
    "hsl(150, 100%, 34%)",
    "hsl(150, 100%, 34%)",
    "hsl(150, 100%, 34%)",
    "hsl(150, 100%, 34%)",
    "hsl(150, 100%, 34%)",
    "hsl(150, 100%, 34%)",
    "hsl(150, 100%, 34%)",
    "hsl(150, 100%, 34%)",
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: background,
        displayColors: false,
        titleAlign: "center",
        titleColor: text,
        titleMarginBottom: 0,
        titleFont: {
          size: 15,
          weight: 550,
        },
        padding: 8,
        callbacks: {
          title: (context) => {
            return `$${context[0].dataset.data[context[0].dataIndex]}`;
          },
          label: () => {
            return "";
          },
        },
        yAlign: "bottom",
        xAlign: "center",
        caretSize: 0,
        caretPadding: 8,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },

      y: {
        min: 0,
        max: 50000,
        ticks: {
          stepSize: 10000,
        },
        border: {
          dash: [10],
        },
      },
    },
    elements: {
      bar: {
        hoverBackgroundColor: hoverBackgrounds,
      },
    },
  };

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: [
          6000, 19000, 3800, 25000, 7500, 45000, 8000, 21000, 32000, 4900,
          30000, 23000,
        ],
        backgroundColor: backgrounds,
        borderRadius: 100,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
