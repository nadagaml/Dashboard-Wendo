import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CommissionChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-6">Platform Commission</h3>
      <div className="w-32 mx-auto">
        <CircularProgressbar
          value={70}
          text={`70%`}
          styles={buildStyles({
            pathColor: "#6C63FF",
            textColor: "#6C63FF",
            trailColor: "#eee",
          })}
        />
      </div>
      <div className="mt-6 text-gray-600 text-sm flex justify-between">
        <p>
          <span className="font-semibold">Cash:</span> 251K
        </p>
        <p>
          <span className="font-semibold">E-payment:</span> 176K
        </p>
      </div>
    </div>
  );
}
