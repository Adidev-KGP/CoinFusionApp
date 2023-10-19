import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function Bar() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
        ],
        datasets: [
          {
            label: "Recieved",
            data: [400, 350, 250, 900, 600, 480, 280, 600],
            backgroundColor: "#38c0d2",
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 2,
        scales: {
          x: {
            barPercentage: 0.3, // Adjust bar width if needed
          },
          y: {},
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                return `$${context.formattedValue}`;
              },
            },
          },
        },
      },
    });

   chartRef.current.style.width = "400px"; 
    chartRef.current.style.height = "250px"; 
  }, []);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default Bar;
