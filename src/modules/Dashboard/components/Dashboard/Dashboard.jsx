import React, { useState } from "react";
import { Grid } from "@mui/material";
import Header from "../../../Shared/components/Header/Header";
import StatCard from "../../../Shared/components/StatCard/StatCard";

export default function Dashboard() {
  const [stats] = useState({
    totalDrivers: 20,
    activeDrivers: 12,
    totalTrips: 158,
    successRate: "95%",
    rating: 4.7,
  });

  const sampleChart = [
    { value: 10 },
    { value: 15 },
    { value: 12 },
    { value: 20 },
    { value: 18 },
  ];

  return (
    <>
      <Header title="Dashboard Overview" />

      <Grid container spacing={3} mt={2} px={2}>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <StatCard title="Total Drivers" value={stats.totalDrivers} color="#4dabf7" chartData={sampleChart} />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <StatCard title="Active Drivers" value={stats.activeDrivers} color="#20c997" chartData={sampleChart} />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <StatCard title="Total Trips" value={stats.totalTrips} color="#ffa94d" chartData={sampleChart} />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <StatCard title="Success Rate" value={stats.successRate} color="#5f3dc4" chartData={sampleChart} />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <StatCard title="Driver Rating" value={stats.rating} color="#fab005" chartData={sampleChart} />
        </Grid>
      </Grid>
    </>
  );
}
