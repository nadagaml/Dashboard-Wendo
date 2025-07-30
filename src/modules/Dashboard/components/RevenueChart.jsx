// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// export default function RevenueChart() {
//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
//     datasets: [
//       {
//         label: "Total Income",
//         data: [90, 80, 85, 70, 75, 85, 95, 100],
//         borderColor: "#6C63FF",
//         backgroundColor: "rgba(108,99,255,0.1)",
//         fill: true,
//         tension: 0.4,
//       },
//       {
//         label: "Operations",
//         data: [70, 65, 75, 60, 68, 78, 82, 90],
//         borderColor: "#FF6B6B",
//         backgroundColor: "rgba(255,107,107,0.1)",
//         fill: true,
//         tension: 0.4,
//       },
//     ],
//   };

//   return (
//     <>
//       <h2 className="text-xl font-semibold mb-4">$855.8K Total Revenue</h2>
//       <Line data={data} />
//     </>
//   );
// }



import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Typography, Box } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function RevenueChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Total Income",
        data: [90, 80, 85, 70, 75, 85, 95, 100],
        borderColor: "#6C63FF",
        backgroundColor: "rgba(108,99,255,0.1)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Operations",
        data: [70, 65, 75, 60, 68, 78, 82, 90],
        borderColor: "#FF6B6B",
        backgroundColor: "rgba(255,107,107,0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  return (
    <Box>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
        $855.8K Total Revenue
      </Typography>
      <Line data={data} options={options} />
    </Box>
  );
}
