// export default function VisaCard() {
//   return (
//     <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white p-6 rounded-2xl shadow flex flex-col justify-between">
//       <h3 className="text-xl font-bold">VISA Premium</h3>
//       <div className="mt-6 text-2xl font-mono">**** **** **** 2847</div>
//       <div className="mt-4 text-sm">Card Holder: Wendo CEO</div>
//       <div className="text-sm">Exp: 06/21</div>
//       <h2 className="text-2xl mt-6 font-bold">$4,050,12,300</h2>
//     </div>
//   );
// }


import { Box, Typography } from "@mui/material";

export default function VisaCard() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #6C63FF, #3B82F6)",
        color: "#fff",
        borderRadius: 3,
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 220,
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        VISA Premium
      </Typography>

      <Typography
        variant="h5"
        sx={{ mt: 4, fontFamily: "monospace", letterSpacing: 2 }}
      >
        **** **** **** 2847
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography variant="body2">Card Holder: Wendo CEO</Typography>
        <Typography variant="body2">Exp: 06/21</Typography>
      </Box>

      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
        $4,050,12,300
      </Typography>
    </Box>
  );
}
