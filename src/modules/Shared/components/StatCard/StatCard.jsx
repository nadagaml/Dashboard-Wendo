import React from "react";
import { Box, Typography } from "@mui/material";
import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function StatCard({ title, value, color, chartData }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2.5,
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: "#fff",
        minHeight: 110,
        transition: "0.3s",
        ":hover": { transform: "translateY(-3px)" },
        position: "relative",
        zIndex: 10,
        mt: -4,
      }}
    >
      {/* Left section: Mini Chart */}
      <Box sx={{ width: 70, height: 50 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {/* Right section: Title then Value */}
      <Box textAlign="right">
        <Typography variant="subtitle2" color="gray">
          {title}
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          {value}
        </Typography>
      </Box>
    </Box>
  );
}
