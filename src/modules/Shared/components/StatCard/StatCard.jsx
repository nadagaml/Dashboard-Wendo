import React from "react";
import { Box, Typography } from "@mui/material";

export default function StatCard({ title, value, icon, color }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2.5,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#fff",
        minHeight: 110,
        position: "relative",
        zIndex: 10,
        mt: -4, // ده اللي بيخلي الكارت يطلع شوية فوق
        transition: "0.3s",
        ":hover": {
          transform: "translateY(-3px)",
        },
      }}
    >
      {/* Left section: icon + chart placeholder */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            backgroundColor: color || "#4e73df",
            color: "#fff",
            p: 1.3,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 40,
            minHeight: 40,
          }}
        >
          {icon}
        </Box>

        {/* Placeholder for chart */}
        <Box
          sx={{
            width: 40,
            height: 30,
            bgcolor: "#f2f2f2",
            borderRadius: 1,
          }}
        />
      </Box>

      {/* Right section: number + title */}
      <Box textAlign="right">
        <Typography variant="h5" fontWeight="bold">
          {value}
        </Typography>
        <Typography variant="subtitle2" color="gray">
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
