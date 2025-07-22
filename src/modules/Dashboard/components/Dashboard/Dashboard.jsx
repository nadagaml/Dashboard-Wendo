import React, { useState } from "react";
import { Grid } from "@mui/material";
import Header from "../../../Shared/components/Header/Header";
import StatCard from "../../../Shared/components/StatCard/StatCard";

import { Users, Activity, Truck, BarChart2, Star } from "lucide-react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalDrivers: 20,
    activeDrivers: 12,
    totalTrips: 158,
    successRate: "95%",
    rating: 4.7,
  });

  return (
    <>
      <Header title="Dashboard Overview" />

      <Grid container spacing={3} mt={2} px={2}>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <StatCard
            title="Total Drivers"
            value={stats.totalDrivers}
            icon={<Users size={20} />}
            color="#4dabf7"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <StatCard
            title="Active Drivers"
            value={stats.activeDrivers}
            icon={<Activity size={20} />}
            color="#20c997"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <StatCard
            title="Total Trips"
            value={stats.totalTrips}
            icon={<Truck size={20} />}
            color="#ffa94d"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <StatCard
            title="Success Rate"
            value={stats.successRate}
            icon={<BarChart2 size={20} />}
            color="#5f3dc4"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <StatCard
            title="Driver Rating"
            value={stats.rating}
            icon={<Star size={20} />}
            color="#fab005"
          />
        </Grid>
      </Grid>
    </>
  );
}
