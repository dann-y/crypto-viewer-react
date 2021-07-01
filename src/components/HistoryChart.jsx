import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import { historyOptions } from "../chartConfigs/chartConfigs";

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: "Price of Currency",
              data: determineTimeFormat(),
              backgroundColor: "rgba(174,305,194,0.5)",
              borderColor: "rgba(174, 305, 194, 0.4)",
              pointRadius: 0,
              borderWidth: 1,
            },
          ],
        },
        options: { ...historyOptions },
      });
    }
  });
  return (
    <div className="p-4">
      <div className="p-4">
        <canvas ref={chartRef} id="myChart"></canvas>
      </div>
      <div className="chart-button mt-1">
        <button
          className=""
          onClick={() => setTimeFormat("24h")}
          className="transition duration-300 focus:outline-none focus:bg-purple-600 bg-black py-2 px-3 hover:bg-purple-600"
        >
          24h
        </button>
        <button
          onClick={() => setTimeFormat("7d")}
          className="transition duration-300 outline-none bg-black py-2 px-3 mx-1 focus:outline-none focus:bg-purple-600 hover:bg-purple-600"
        >
          7d
        </button>
        <button
          onClick={() => setTimeFormat("1y")}
          className="transition duration-300 focus:outline-none focus:bg-purple-600 outline-none bg-black py-2 px-3 hover:bg-purple-600"
        >
          1y
        </button>
      </div>
    </div>
  );
};

export default HistoryChart;
