import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Pie = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    const chartData = {
      labels: ["May", "Jun", "Jul", "Aug", "Sept"],
      datasets: [
        {
          data: data,
          backgroundColor: [
            "#FF6B6BAA","#6BFF6BAA","#6B6BFFAA ","#E67E22","#D64460",
          ],
        },
      ],
    };

    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: chartData,
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }, [data]);
  return (
    <div className="w-40 h-40">
      <canvas ref={chartRef} />
    </div>
  );
};

export default Pie;
