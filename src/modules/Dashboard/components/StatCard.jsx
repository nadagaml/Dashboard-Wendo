// export default function StatCard({ title, value, icon }) {
//   return (
//     <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-4 hover:shadow-lg transition">
//       <div className="text-purple-600 text-3xl">{icon}</div>
//       <div>
//         <p className="text-gray-500 text-sm">{title}</p>
//         <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
//       </div>
//     </div>
//   );
// }


// export default function StatCard({ title, value, icon, bgColor }) {
//   return (
//     <div className="card shadow-sm border-0 p-3 d-flex flex-row align-items-center gap-3 stat-card">
//       <div
//         className="d-flex justify-content-center align-items-center rounded-circle text-white"
//         style={{ width: "50px", height: "50px", backgroundColor: bgColor }}
//       >
//         {icon}
//       </div>
//       <div>
//         <p className="text-muted mb-1">{title}</p>
//         <h5 className="fw-bold mb-0">{value}</h5>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Box, Typography } from "@mui/material";

export default function StatCard({ title, value, icon, color }) {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        p: 2.5,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        minHeight: 130,
        minWidth: 220,
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        ":hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* دائرة الأيقونة */}
      <Box
        sx={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          backgroundColor: `${color}20`, // لون شفاف
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: color,
          fontSize: 26,
          mb: 1.5,
        }}
      >
        {icon}
      </Box>

      {/* العنوان */}
      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
        {title}
      </Typography>

      {/* القيمة */}
      <Typography variant="h5" fontWeight="bold">
        {value}
      </Typography>
    </Box>
  );
}
