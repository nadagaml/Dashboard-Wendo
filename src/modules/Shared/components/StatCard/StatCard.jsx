// import React from "react";
// import { Box, Typography } from "@mui/material";
// import { LineChart, Line, ResponsiveContainer } from "recharts";

// export default function StatCard({ title, value, color, chartData }) {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         p: 2.5,
//         borderRadius: 2,
//         boxShadow: 2,
//         backgroundColor: "#fff",
//         minHeight: 120,
//         transition: "0.3s",
//         ":hover": { transform: "translateY(-3px)" },
//         position: "relative",
//         zIndex: 10,
//         mt: -4,
//       }}
//     >
//       {/* Mini Chart */}
//       <Box sx={{ width: 70, height: 50 }}>
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={chartData}>
//             <Line
//               type="monotone"
//               dataKey="value"
//               stroke={color}
//               strokeWidth={2}
//               dot={false}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </Box>

//       {/* Text: Title above Value */}
//       <Box textAlign="right">
//         <Typography variant="subtitle2" color="gray">
//           {title}
//         </Typography>
//         <Typography variant="h5" fontWeight="bold">
//           {value}
//         </Typography>
//       </Box>
//     </Box>
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
        boxShadow: "0px 4px 8px rgba(0,0,0,0.08)",
        p: 2.5,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        minHeight: 120,
        minWidth: 200, // ✅ العرض أكبر
        transition: "0.3s",
        ":hover": { transform: "translateY(-4px)" }
      }}
    >
      {/* دائرة فيها الأيقونة */}
      <Box
        sx={{
          width: 45,
          height: 45,
          borderRadius: "50%",
          backgroundColor: "rgba(103, 104, 167, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: color,
          mb: 1
        }}
      >
        {icon}
      </Box>

      {/* العنوان */}
      <Typography variant="subtitle2" color="gray" sx={{ mb: 0.5 }}>
        {title}
      </Typography>

      {/* القيمة */}
      <Typography variant="h6" fontWeight="bold">
        {value}
      </Typography>
    </Box>
  );
}

