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
    <div className="bg-gray-800 mt-2 rounded p-3 mt-2 ">
      <div className="">
        <canvas ref={chartRef} id="myChart"></canvas>
      </div>
      <div className="chart-button mt-1">
        <button
          className=""
          onClick={() => setTimeFormat("24h")}
          className="bg-black p-2"
        >
          24h
        </button>
        <button
          onClick={() => setTimeFormat("7d")}
          className="bg-black p-2 mx-1"
        >
          7d
        </button>
        <button onClick={() => setTimeFormat("1y")} className="bg-black p-2">
          1y
        </button>
      </div>
    </div>
  );
};

export default HistoryChart;
