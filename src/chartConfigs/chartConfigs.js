export const historyOptions = {
  lineHeightAnnotation: {
    always: true,
    hover: false,
    lineWeight: 1.5,
  },
  legend: {
    labels: {
      fontColor: "white",
    },
  },
  animation: {
    duration: 500,
  },
  maintainAspectRatio: true,
  responsive: true,
  scales: {
    xAxes: [{ type: "time", distribution: "linear" }],
  },
};
