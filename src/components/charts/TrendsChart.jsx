


// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// const TrendsChart = ({ data, title, color = "#4f46e5" }) => {
//   const chartRef = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     if (chartRef.current) chartRef.current.destroy();

//     const ctx = canvasRef.current.getContext("2d");

//     // ✅ Fix 4: Target line dataset
//     const datasets = [
//       {
//         label: title,
//         data: data.values || [0, 0, 0, 0, 0, 0, 0],
//         borderColor: color,
//         backgroundColor: `${color}22`,
//         tension: 0.4,
//         fill: true,
//         pointBackgroundColor: color,
//         pointRadius: 4,
//         pointHoverRadius: 6,
//       },
//     ];

//     // ✅ Fix 4: Agar target hai to dashed line add karo
//     if (data.target) {
//       const targetArray = new Array((data.labels || []).length).fill(data.target);
//       datasets.push({
//         label: "Goal",
//         data: targetArray,
//         borderColor: "#f97316",
//         borderDash: [6, 4],
//         borderWidth: 2,
//         backgroundColor: "transparent",
//         fill: false,
//         pointRadius: 0,
//         pointHoverRadius: 0,
//         tension: 0,
//       });
//     }

//     chartRef.current = new Chart(ctx, {
//       type: "line",
//       data: {
//         labels: data.labels || ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//         datasets,
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//           legend: {
//             display: !!data.target, // ✅ Sirf tab show karo jab target ho
//             labels: {
//               color: "#94a3b8",
//               boxWidth: 14,
//               font: { size: 11 },
//             },
//           },
//           tooltip: {
//             backgroundColor: "#1e293b",
//             titleColor: "#f1f5f9",
//             bodyColor: "#94a3b8",
//             borderColor: color,
//             borderWidth: 1,
//           },
//         },
//         scales: {
//           y: {
//             beginAtZero: true,
//             grid: { color: "rgba(255,255,255,0.05)" },
//             ticks: { color: "#64748b" },
//           },
//           x: {
//             grid: { color: "rgba(255,255,255,0.05)" },
//             ticks: { color: "#64748b" },
//           },
//         },
//       },
//     });

//     return () => { if (chartRef.current) chartRef.current.destroy(); };
//   }, [data, title, color]);

//   return (
//     <div className="chart-container">
//       <canvas ref={canvasRef}></canvas>
//     </div>
//   );
// };

// export default TrendsChart;


import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const TrendsChart = ({ data, title, color = "#4f46e5" }) => {
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) chartRef.current.destroy();

    const ctx = canvasRef.current.getContext("2d");

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.labels || ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: title,
            data: data.values || [0, 0, 0, 0, 0, 0, 0],
            borderColor: color,
            backgroundColor: `${color}22`,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: color,
            pointRadius: 4,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#1e293b",
            titleColor: "#f1f5f9",
            bodyColor: "#94a3b8",
            borderColor: color,
            borderWidth: 1,
            // ✅ Tooltip mein % dikhao
            callbacks: {
              label: (context) => ` ${context.parsed.y}% of goal`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100, // ✅ Y-axis 0-100% fixed
            grid: { color: "rgba(255,255,255,0.05)" },
            ticks: {
              color: "#64748b",
              callback: (value) => `${value}%`, // ✅ % sign ticks pe
            },
          },
          x: {
            grid: { color: "rgba(255,255,255,0.05)" },
            ticks: { color: "#64748b" },
          },
        },
      },
    });

    return () => { if (chartRef.current) chartRef.current.destroy(); };
  }, [data, title, color]);

  return (
    <div className="chart-container">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default TrendsChart;