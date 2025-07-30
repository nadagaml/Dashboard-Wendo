import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function RefundChart() {
  const data = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "Refund & Cancellation",
        data: [60, 90, 50, 120, 80, 95, 70],
        backgroundColor: "#6C63FF",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-4">Refund & Cancellation Losses</h3>
      <Bar data={data} options={options} />
    </div>
  );
}
