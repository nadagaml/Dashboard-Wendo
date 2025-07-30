// import React, { useState } from "react";
// import { Grid } from "@mui/material";
// import Header from "../../../Shared/components/Header/Header";
// import StatCard from "../../../Shared/components/StatCard/StatCard";
// import { Users, Activity, Truck, BarChart2, Star } from "lucide-react";

// export default function Dashboard() {
//   const [stats] = useState({
//     totalDrivers: 20,
//     activeDrivers: 12,
//     totalTrips: 158,
//     successRate: "95%",
//     rating: 4.7,
//   });

//   return (
//     <>
//       {/* الهيدر */}
//       <Header title="Dashboard Overview" />

//       {/* الكروت فوق الهيدر */}
//       <Grid
//         container
//         spacing={3}
//         sx={{ marginTop: "-40px", padding: "0 20px" }} // ✅ طلّعناها فوق
//       >
//         <Grid item xs={12} sm={6} md={4} lg={2.4}>
//           <StatCard
//             title="Total Drivers"
//             value={stats.totalDrivers}
//             icon={<Users size={20} />}
//             color="#4dabf7"
//           />
//         </Grid>

//         <Grid item xs={12} sm={6} md={4} lg={2.4}>
//           <StatCard
//             title="Active Drivers"
//             value={stats.activeDrivers}
//             icon={<Activity size={20} />}
//             color="#20c997"
//           />
//         </Grid>

//         <Grid item xs={12} sm={6} md={4} lg={2.4}>
//           <StatCard
//             title="Total Trips"
//             value={stats.totalTrips}
//             icon={<Truck size={20} />}
//             color="#ffa94d"
//           />
//         </Grid>

//         <Grid item xs={12} sm={6} md={4} lg={2.4}>
//           <StatCard
//             title="Success Rate"
//             value={stats.successRate}
//             icon={<BarChart2 size={20} />}
//             color="#5f3dc4"
//           />
//         </Grid>

//         <Grid item xs={12} sm={6} md={4} lg={2.4}>
//           <StatCard
//             title="Driver Rating"
//             value={stats.rating}
//             icon={<Star size={20} />}
//             color="#fab005"
//           />
//         </Grid>
//       </Grid>
//     </>
//   );
// }



      {/* <Grid container spacing={3} mt={2} px={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <StatCard title="Total Drivers" value={stats.totalDrivers} color="#4dabf7" chartData={sampleChart} />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <StatCard title="Active Drivers" value={stats.activeDrivers} color="#20c997" chartData={sampleChart} />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <StatCard title="Total Trips" value={stats.totalTrips} color="#ffa94d" chartData={sampleChart} />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <StatCard title="Success Rate" value={stats.successRate} color="#5f3dc4" chartData={sampleChart} />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <StatCard title="Driver Rating" value={stats.rating} color="#fab005" chartData={sampleChart} />
        </Grid>
      </Grid> */}


      

// import React from "react";
// import { Grid, Box, Typography, Card, CardContent } from "@mui/material";
// import Header from "../../../Shared/components/Header/Header";
// import StatCard from "../../../Shared/components/StatCard/StatCard";
// import {
//   Users,
//   Activity,
//   Truck,
//   BarChart2,
//   Star,
// } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
// } from "recharts";

// export default function Dashboard() {
//   const stats = [
//     { title: "Total Drivers", value: 20, icon: <Users size={20} />, color: "#4dabf7" },
//     { title: "Active Drivers", value: 12, icon: <Activity size={20} />, color: "#20c997" },
//     { title: "Total Trips", value: 158, icon: <Truck size={20} />, color: "#ffa94d" },
//     { title: "Success Rate", value: "95%", icon: <BarChart2 size={20} />, color: "#5f3dc4" },
//     { title: "Driver Rating", value: 4.7, icon: <Star size={20} />, color: "#fab005" },
//   ];

//   const revenueData = [
//     { name: "Jan", value: 400 },
//     { name: "Feb", value: 300 },
//     { name: "Mar", value: 500 },
//     { name: "Apr", value: 450 },
//     { name: "May", value: 600 },
//   ];

//   const pieData = [
//     { name: "Commission", value: 70 },
//     { name: "Company", value: 30 },
//   ];

//   const barData = [
//     { name: "Refund", value: 120 },
//     { name: "Cancel", value: 80 },
//   ];

//   return (
//     <>
//       {/* Header */}
//       <Header title="Dashboard Overview" />

//       {/* Stat Cards */}
//       <Grid container spacing={3} px={3} sx={{ marginTop: "-60px", position: "relative", zIndex: 10 }}>
//         {stats.map((stat, index) => (
//           <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
//             <StatCard
//               title={stat.title}
//               value={stat.value}
//               color={stat.color}
//               icon={stat.icon}
//             />
//           </Grid>
//         ))}
//       </Grid>

//       {/* Main Content */}
//       <Grid container spacing={12} px={10} mt={1}>
//         {/* Left Column (10) */}
//         <Grid item xs={12} md={10}>
//           {/* Line Chart */}
//           <Card sx={{ p: 2, mb: 3 }}>
//             <Typography variant="h6" mb={2}>Total Revenue</Typography>
//             <ResponsiveContainer width="100%" height={200}>
//               <LineChart data={revenueData}>
//                 <Line type="monotone" dataKey="value" stroke="#4dabf7" strokeWidth={3} />
//                 <Tooltip />
//               </LineChart>
//             </ResponsiveContainer>
//           </Card>

//           {/* Pie + Bar */}
//           <Grid container spacing={2} mb={3}>
//             <Grid item xs={12} md={10}>
//               <Card sx={{ p: 2 }}>
//                 <Typography variant="subtitle1">Platform Commission</Typography>
//                 <ResponsiveContainer width="100%" height={150}>
//                   <PieChart>
//                     <Pie data={pieData} dataKey="value" outerRadius={50}>
//                       <Cell fill="#4dabf7" />
//                       <Cell fill="#ffa94d" />
//                     </Pie>
//                   </PieChart>
//                 </ResponsiveContainer>
//               </Card>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Card sx={{ p: 2 }}>
//                 <Typography variant="subtitle1">Refund & Cancellation</Typography>
//                 <ResponsiveContainer width="100%" height={150}>
//                   <BarChart data={barData}>
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Bar dataKey="value" fill="#20c997" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </Card>
//             </Grid>
//           </Grid>

//           {/* Recent Trips */}
//           <Card sx={{ p: 2 }}>
//             <Typography variant="h6" mb={2}>Recent Trips</Typography>
//             <table className="table table-striped">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Driver</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr><td>#1</td><td>Nada</td><td>Completed</td></tr>
//                 <tr><td>#2</td><td>Ali</td><td>Cancelled</td></tr>
//               </tbody>
//             </table>
//           </Card>
//         </Grid>

//         {/* Right Column (2) */}
//         <Grid item xs={12} md={2}>
//           {/* Visa Card */}
//           <Card sx={{ p: 3, mb: 3, backgroundColor: "#4dabf7", color: "#fff" }}>
//             <Typography variant="h6">Visa Card</Typography>
//             <Typography variant="h5" mt={2}>**** **** **** 1234</Typography>
//             <Typography variant="body2" mt={1}>Balance: $2,500</Typography>
//           </Card>

//           {/* Visitors */}
//           <Card sx={{ p: 2, mb: 3 }}>
//             <Typography variant="subtitle1">Website Visitors</Typography>
//             <Typography variant="h5">4,500</Typography>
//           </Card>

//           {/* Lost Items */}
//           <Card sx={{ p: 2 }}>
//             <Typography variant="subtitle1">Lost Items</Typography>
//             <ul>
//               <li>Bag</li>
//               <li>Phone</li>
//             </ul>
//           </Card>
//         </Grid>
//       </Grid>





      
//     </>
//   );
// }




// the lasst********************
// import React from "react";
// import {
//   Grid,
//   Box,
//   Typography,
//   Card,
//   Container,
//   Paper
// } from "@mui/material";
// import Header from "../../../Shared/components/Header/Header";
// import StatCard from "../../../Shared/components/StatCard/StatCard";
// import {
//   Users,
//   Activity,
//   Truck,
//   BarChart2,
//   Star,
// } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
// } from "recharts";

// export default function Dashboard() {
//   const stats = [
//     { title: "Total Drivers", value: 20, icon: <Users size={20} />, color: "#4dabf7" },
//     { title: "Active Drivers", value: 12, icon: <Activity size={20} />, color: "#20c997" },
//     { title: "Total Trips", value: 158, icon: <Truck size={20} />, color: "#ffa94d" },
//     { title: "Success Rate", value: "95%", icon: <BarChart2 size={20} />, color: "#5f3dc4" },
//     { title: "Driver Rating", value: 4.7, icon: <Star size={20} />, color: "#fab005" },
//   ];

//   const revenueData = [
//   { name: "Jan", income: 80, operations: 60 },
//   { name: "Feb", income: 75, operations: 63 },
//   { name: "Mar", income: 90, operations: 70 },
//   { name: "Apr", income: 85, operations: 68 },
//   { name: "May", income: 95, operations: 72 },
//   { name: "Jun", income: 88, operations: 66 },
//   { name: "Jul", income: 92, operations: 74 },
//   { name: "Aug", income: 97, operations: 78 },
//   ];

//   const pieData = [
//     { name: "Commission", value: 70 },
//     { name: "Company", value: 30 },
//   ];

//   const barData = [
//     { name: "Refund", value: 120 },
//     { name: "Cancel", value: 80 },
//   ];

//   return (
//     <>
//       <Header title="Dashboard Overview" />

//       <Container >
//         {/* Stat Cards */}
//         <Grid
//           container
//           spacing={3}
//           mt={-6} 
//         >
//           {stats.map((stat, index) => (
//             <Grid item xs={12} sm={6} md={2.4} key={index}>
//               <StatCard
//                 title={stat.title}
//                 value={stat.value}
//                 color={stat.color}
//                 icon={stat.icon}
//               />
//             </Grid>
//           ))}
//         </Grid>


//       {/* Main Content */}


// <Grid  spacing={3} mt={3}>
//   {/* العمود الكبير 8 - Chart */}
//   <Grid item xs={12} md={8}>
//     <Paper
//       sx={{
//         p: 3,
//         borderRadius: 3,
//         height: "320px",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         width: "50%",
//       }}
//     >
//       <Box>
//         <Typography variant="h6" fontWeight="bold">
//           $855.8K
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Total Revenue
//         </Typography>
//       </Box>

//       <ResponsiveContainer width="70%" height={220}>
//         <LineChart data={revenueData}>
//           <CartesianGrid strokeDasharray="3 3" vertical={false} />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Line type="monotone" dataKey="income" stroke="#5D5FEF" strokeWidth={2} />
//           <Line type="monotone" dataKey="operations" stroke="#80DEEA" strokeWidth={2} />
//         </LineChart>
//       </ResponsiveContainer>
//     </Paper>
//   </Grid>


//   {/* العمود الصغير 4 - Visa Card */}
//   <Grid item xs={12} md={4}>
//     <Paper
//       sx={{
//         p: 3,
//         borderRadius: 3,
//         height: "320px",
//         background: "linear-gradient(135deg, #6768A7 0%, #363770 100%)",
//         color: "#fff",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         width: "50%",
//       }}
//     >
//       <Box>
//         <Typography variant="h6">VISA</Typography>
//         <Typography variant="body2">PREMIUM ACCOUNT</Typography>
//       </Box>

//       <Box>
//         <Typography variant="h5">**** **** **** 2847</Typography>
//         <Typography variant="body2">Wendo CEO</Typography>
//         <Typography variant="body2">Exp: 06/21</Typography>
//       </Box>

//       <Typography variant="h6">$4,050,12,300</Typography>
//     </Paper>
//   </Grid>
// </Grid>




//       </Container>

      
//     </>
//   );
// }




// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap"; // استيراد Bootstrap components
// import Header from "../../../Shared/components/Header/Header";
// import StatCard from "../../../Shared/components/StatCard/StatCard";
// import {
//   Users,
//   Activity,
//   Truck,
//   BarChart2,
//   Star,
// } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   ResponsiveContainer,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
// } from "recharts";

// export default function Dashboard() {
//   const stats = [
//     { title: "Total Drivers", value: 20, icon: <Users size={20} />, color: "#4dabf7" },
//     { title: "Active Drivers", value: 12, icon: <Activity size={20} />, color: "#20c997" },
//     { title: "Total Trips", value: 158, icon: <Truck size={20} />, color: "#ffa94d" },
//     { title: "Success Rate", value: "95%", icon: <BarChart2 size={20} />, color: "#5f3dc4" },
//     { title: "Driver Rating", value: 4.7, icon: <Star size={20} />, color: "#fab005" },
//   ];

//   const revenueData = [
//     { name: "Jan", income: 80, operations: 60 },
//     { name: "Feb", income: 75, operations: 63 },
//     { name: "Mar", income: 90, operations: 70 },
//     { name: "Apr", income: 85, operations: 68 },
//     { name: "May", income: 95, operations: 72 },
//     { name: "Jun", income: 88, operations: 66 },
//     { name: "Jul", income: 92, operations: 74 },
//     { name: "Aug", income: 97, operations: 78 },
//   ];

//   return (
//     <>
//       <Header title="Dashboard Overview" />

//       <Container>
//         {/* Stat Cards */}
        // <Row style={{ marginTop: '-15px' }}> 
        //   {stats.map((stat, index) => (
        //     <Col xs={12} sm={6} md={2} key={index} className="mb-3">
        //       <StatCard
        //         title={stat.title}
        //         value={stat.value}
        //         color={stat.color}
        //         icon={stat.icon}
        //       />
        //     </Col>
        //   ))}
        // </Row>


//         {/* Main Content */}
//         <Row className="mt-3">
//           {/* العمود الكبير 70% - Chart */}
//           <Col xs={12} md={8}>
//             <Card className="p-3 rounded-3" style={{ height: "320px" }}>
//               <div>
//                 <h6 className="font-weight-bold">$855.8K</h6>
//                 <p className="text-muted">Total Revenue</p>
//               </div>

//               <ResponsiveContainer width="70%" height={220}>
//                 <LineChart data={revenueData}>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="income" stroke="#5D5FEF" strokeWidth={2} />
//                   <Line type="monotone" dataKey="operations" stroke="#80DEEA" strokeWidth={2} />
//                 </LineChart>
//               </ResponsiveContainer>
//             </Card>
//           </Col>

//           {/* العمود الصغير 30% - Visa Card */}
//           <Col xs={12} md={4}>
//             <Card className="p-3 rounded-3" style={{ height: "320px", background: "linear-gradient(135deg, #6768A7 0%, #363770 100%)", color: "#fff" }}>
//               <div>
//                 <h6>VISA</h6>
//                 <p>PREMIUM ACCOUNT</p>
//               </div>

//               <div>
//                 <h5>**** **** **** 2847</h5>
//                 <p>Wendo CEO</p>
//                 <p>Exp: 06/21</p>
//               </div>

//               <h6>$4,050,12,300</h6>
//             </Card>
//           </Col>
//         </Row>

//         <Col xs={12} className="mt-3">
//   <Card className="p-3 rounded-3">
//     <h6 className="font-weight-bold">Recent Trips</h6>
//     <table className="table">
//       <thead>
//         <tr>
//           <th>Trip ID</th>
//           <th>Driver</th>
//           <th>Passenger Count</th>
//           <th>Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {[
//           { tripId: 'Addidas Sportwear', driver: 'mohamed ahmed', passengers: 8, status: 'Finished' },
//           { tripId: 'Netflix', driver: 'Mohamed Mansour', passengers: 8, status: 'Cancelled' },
//           { tripId: 'Shoplift Stores', driver: 'khaled Ali', passengers: 12, status: 'Wait' },
//           { tripId: 'Boostrap Technologies', driver: 'Motaz ahmed', passengers: 14, status: 'Finished' },
//           { tripId: 'Community First', driver: 'heasham ahmed', passengers: 8, status: 'Finished' },
//         ].map((trip, index) => (
//           <tr key={index}>
//             <td>{trip.tripId}</td>
//             <td>{trip.driver}</td>
//             <td>{trip.passengers}</td>
//             <td className={`text-${trip.status === 'Finished' ? 'success' : trip.status === 'Cancelled' ? 'danger' : 'warning'}`}>{trip.status}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </Card>
// </Col>

//       </Container>
//     </>
//   );
// }






import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Dashboard = () => {

  return (
    <Container fluid className="p-4">
      
      {/* Row 1 */}
      <Row className="mb-4">
        <Col md={8}>
          <Card className="h-100 p-3">
            <h5>Total Revenue Chart</h5>
            <div className="bg-light rounded p-5 text-center">
              📊 Chart Placeholder
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 p-3">
            <h5>Visa Premium Card</h5>
            <div className="bg-light rounded p-5 text-center">
              💳 Visa Card Placeholder
            </div>
          </Card>
        </Col>
      </Row>

      {/* Row 2 */}
      <Row className="mb-4">
        <Col md={4}>
          <Card className="h-100 p-3">
            <h6>Platform Commission</h6>
            <div className="bg-light rounded p-4 text-center">
              🥧 Pie Chart Placeholder
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 p-3">
            <h6>Refund & Cancellation Losses</h6>
            <div className="bg-light rounded p-4 text-center">
              📊 Bar Chart Placeholder
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 p-3">
            <h6>Website Visitors & New Passengers</h6>
            <div className="bg-light rounded p-4 text-center">
              👥 Visitors & Passengers Stats Placeholder
            </div>
          </Card>
        </Col>
      </Row>

      {/* Row 3 */}
      <Row>
        <Col md={8}>
          <Card className="h-100 p-3">
            <h6>Recent Trips</h6>
            <div className="bg-light rounded p-4 text-center">
              📋 Recent Trips Table Placeholder
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 p-3">
            <h6>Lost Items</h6>
            <div className="bg-light rounded p-4 text-center">
              🔍 Lost Items List Placeholder
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;






  {/* Main Content */}
        // <Grid container spacing={3} mt={2}>
        //   {/* Left Column */}
        //   <Grid item xs={12} md={2.4}>
        //     {/* Line Chart */}
        //     <Card sx={{ p: 3, mb: 3 }}>
        //       <Typography variant="h6" mb={2}>
        //         Total Revenue
        //       </Typography>
        //       <ResponsiveContainer width="100%" height={200}>
        //         <LineChart data={revenueData}>
        //           <Line
        //             type="monotone"
        //             dataKey="value"
        //             stroke="#4dabf7"
        //             strokeWidth={3}
        //           />
        //           <Tooltip />
        //         </LineChart>
        //       </ResponsiveContainer>
        //     </Card>

        //     {/* Pie & Bar Charts */}
        //     <Grid container spacing={3} mb={3}>
        //       <Grid item xs={12} md={6}>
        //         <Card sx={{ p: 3 }}>
        //           <Typography variant="subtitle1" mb={2}>
        //             Platform Commission
        //           </Typography>
        //           <ResponsiveContainer width="100%" height={200}>
        //             <PieChart>
        //               <Pie
        //                 data={pieData}
        //                 dataKey="value"
        //                 outerRadius={70}
        //                 label
        //               >
        //                 <Cell fill="#4dabf7" />
        //                 <Cell fill="#ffa94d" />
        //               </Pie>
        //             </PieChart>
        //           </ResponsiveContainer>
        //         </Card>
        //       </Grid>
        //       <Grid item xs={12} md={6}>
        //         <Card sx={{ p: 3 }}>
        //           <Typography variant="subtitle1" mb={2}>
        //             Refund & Cancellation
        //           </Typography>
        //           <ResponsiveContainer width="100%" height={200}>
        //             <BarChart data={barData}>
        //               <XAxis dataKey="name" />
        //               <YAxis />
        //               <Tooltip />
        //               <Bar dataKey="value" fill="#20c997" />
        //             </BarChart>
        //           </ResponsiveContainer>
        //         </Card>
        //       </Grid>
        //     </Grid>

        //     {/* Recent Trips */}
        //     <Card sx={{ p: 3 }}>
        //       <Typography variant="h6" mb={2}>
        //         Recent Trips
        //       </Typography>
        //       <table style={{ width: "100%", borderCollapse: "collapse" }}>
        //         <thead>
        //           <tr>
        //             <th align="left">ID</th>
        //             <th align="left">Driver</th>
        //             <th align="left">Status</th>
        //           </tr>
        //         </thead>
        //         <tbody>
        //           <tr>
        //             <td>#1</td>
        //             <td>Nada</td>
        //             <td>Completed</td>
        //           </tr>
        //           <tr>
        //             <td>#2</td>
        //             <td>Ali</td>
        //             <td>Cancelled</td>
        //           </tr>
        //         </tbody>
        //       </table>
        //     </Card>
        //   </Grid>

        //   {/* Right Column */}
        //   <Grid item xs={12} md={4}>
        //     <Card
        //       sx={{
        //         p: 3,
        //         mb: 3,
        //         background: "linear-gradient(to right, #6366f1, #06b6d4)",
        //         color: "#fff",
        //       }}
        //     >
        //       <Typography variant="h6">Visa Card</Typography>
        //       <Typography variant="h5" mt={2}>
        //         **** **** **** 1234
        //       </Typography>
        //       <Typography variant="body2" mt={1}>
        //         Balance: $2,500
        //       </Typography>
        //     </Card>

        //     <Card sx={{ p: 3, mb: 3 }}>
        //       <Typography variant="subtitle1">Website Visitors</Typography>
        //       <Typography variant="h5">4,500</Typography>
        //     </Card>

        //     <Card sx={{ p: 3 }}>
        //       <Typography variant="subtitle1">Lost Items</Typography>
        //       <Box component="ul" sx={{ pl: 2 }}>
        //         <li>Bag</li>
        //         <li>Phone</li>
        //       </Box>
        //     </Card>
        //   </Grid>
        // </Grid>




// import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Line, Bar } from "react-chartjs-2";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { FaCar, FaUsers, FaMoneyBill, FaCalendarCheck } from "react-icons/fa";
// import Header from "../../../Shared/components/Header/Header";

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

// export default function Dashboard() {
//   // Revenue Line Chart
//   const revenueData = {
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

//   const refundData = {
//     labels: ["S", "M", "T", "W", "T", "F", "S"],
//     datasets: [
//       {
//         label: "Refund & Cancellation",
//         data: [60, 90, 50, 120, 80, 95, 70],
//         backgroundColor: "#6C63FF",
//       },
//     ],
//   };

//   return (
//     <div className="p-6">
//       {/* Header */}
//       <Header title="Dashboard Overview" />

//       {/* Top Cards */}
//       <div className="grid grid-cols-5 gap-4 mb-6">
//         <Card title="Total Trips" value="60k" icon={<FaCar />} />
//         <Card title="Trips Today" value="122" icon={<FaCalendarCheck />} />
//         <Card title="All Drivers" value="600" icon={<FaUsers />} />
//         <Card title="All Passengers" value="$150K" icon={<FaUsers />} />
//         <Card title="Revenue" value="$742K" icon={<FaMoneyBill />} />
//       </div>

//       {/* Charts & Visa */}
//       <div className="grid grid-cols-3 gap-6 mb-6">
//         {/* Revenue Chart */}
//         <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
//           <h2 className="text-lg font-semibold mb-4">$855.8K Total Revenue</h2>
//           <Line data={revenueData} />
//         </div>

//         {/* Visa Card */}
//         <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white p-6 rounded-2xl shadow flex flex-col justify-between">
//           <h3 className="text-xl font-bold">VISA</h3>
//           <div className="mt-4 text-lg">**** **** **** 2847</div>
//           <div className="mt-2 text-sm">Wendo CEO</div>
//           <div className="text-sm">06/21</div>
//           <h2 className="text-2xl mt-6 font-bold">$4,050,12,300</h2>
//         </div>
//       </div>

//       {/* Commission & Refund */}
//       <div className="grid grid-cols-2 gap-6 mb-6">
//         {/* Platform Commission */}
//         <div className="bg-white p-6 rounded-2xl shadow">
//           <h3 className="mb-4 font-semibold">Platform Commission</h3>
//           <div className="w-40 mx-auto">
//             <CircularProgressbar
//               value={70}
//               text={`70%`}
//               styles={buildStyles({
//                 pathColor: "#6C63FF",
//                 textColor: "#6C63FF",
//                 trailColor: "#eee",
//               })}
//             />
//           </div>
//           <p className="mt-4 text-gray-500">Cash: 251K | E-payment: 176K</p>
//         </div>

//         {/* Refund & Cancellation */}
//         <div className="bg-white p-6 rounded-2xl shadow">
//           <h3 className="mb-4 font-semibold">Refund & Cancellation Losses</h3>
//           <Bar data={refundData} />
//         </div>
//       </div>

//       {/* Recent Trips Table */}
//       <div className="bg-white p-6 rounded-2xl shadow mb-6">
//         <h3 className="mb-4 font-semibold">Recent Trips</h3>
//         <table className="w-full text-left">
//           <thead>
//             <tr className="text-gray-500 text-sm border-b">
//               <th className="pb-2">Trip ID</th>
//               <th className="pb-2">Driver</th>
//               <th className="pb-2">Passenger Count</th>
//               <th className="pb-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               { id: "Adidas Sportwear", driver: "Mohamed Ahmed", count: 8, status: "Finished" },
//               { id: "Netflix", driver: "Mohamed Mansour", count: 8, status: "Canceled" },
//               { id: "Shopif Stores", driver: "Khaled Ali", count: 12, status: "Waiting" },
//             ].map((trip, index) => (
//               <tr key={index} className="border-b text-sm">
//                 <td className="py-2">{trip.id}</td>
//                 <td>{trip.driver}</td>
//                 <td>{trip.count}</td>
//                 <td>
//                   <span
//                     className={`${
//                       trip.status === "Finished"
//                         ? "text-green-500"
//                         : trip.status === "Canceled"
//                         ? "text-red-500"
//                         : "text-yellow-500"
//                     } font-semibold`}
//                   >
//                     {trip.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Lost Items */}
//       <div className="bg-white p-6 rounded-2xl shadow">
//         <h3 className="mb-4 font-semibold">Lost Items</h3>
//         <ul>
//           {["Passenger Name", "Passenger Name", "Passenger Name"].map((name, index) => (
//             <li key={index} className="flex items-center justify-between py-2 border-b text-sm">
//               <span>{name}</span>
//               <span className="text-green-500">Retrieved</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// // Card Component
// function Card({ title, value, icon }) {
//   return (
//     <div className="bg-white p-4 rounded-2xl shadow flex items-center gap-4">
//       <div className="text-purple-500 text-2xl">{icon}</div>
//       <div>
//         <p className="text-gray-500">{title}</p>
//         <h2 className="text-xl font-bold">{value}</h2>
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import StatCard from "../StatCard";
// import RevenueChart from "../RevenueChart";
// import VisaCard from "../VisaCard";
// import CommissionChart from "../CommissionChart";
// import RefundChart from "../RefundChart";
// import RecentTrips from "../RecentTrips";
// import LostItems from "../LostItems";
// import { FaCar, FaUsers, FaMoneyBill, FaCalendarCheck } from "react-icons/fa";
// import Header from "../../../Shared/components/Header/Header";
// import { Grid } from "@mui/material";

// export default function Dashboard() {
//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* Header */}
//       <Header title="Dashboard Overview" />

//       {/* Top Cards */}
// {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-6">
//   <StatCard title="Total Trips" value="60k" icon={<FaCar />} />
//   <StatCard title="Trips Today" value="122" icon={<FaCalendarCheck />} />
//   <StatCard title="All Drivers" value="600" icon={<FaUsers />} />
//   <StatCard title="All Passengers" value="$150K" icon={<FaUsers />} />
//   <StatCard title="Revenue" value="$742K" icon={<FaMoneyBill />} />
// </div> */}

// {/* <StatCard
//   title="Total Trips"
//   value="60k"
//   icon={<FaCar />}
//   bgColor="#6f42c1" // بنفسجي
// />
// <StatCard
//   title="Trips Today"
//   value="122"
//   icon={<FaCalendarCheck />}
//   bgColor="#198754" // أخضر
// />
// <StatCard
//   title="All Drivers"
//   value="600"
//   icon={<FaUsers />}
//   bgColor="#ffc107" // أصفر
// />
// <StatCard
//   title="Passengers"
//   value="150K"
//   icon={<FaUsers />}
//   bgColor="#0dcaf0" // أزرق فاتح
// />
// <StatCard
//   title="Revenue"
//   value="$742K"
//   icon={<FaMoneyBill />}
//   bgColor="#dc3545" // أحمر
// /> */}



//  <Grid container spacing={3}>
//       <Grid item xs={12} sm={6} md={3}>
//         <StatCard title="Total Trips" value="60k" icon={<FaCar />} color="#6f42c1" />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <StatCard title="Trips Today" value="122" icon={<FaCalendarCheck />} color="#198754" />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <StatCard title="All Drivers" value="600" icon={<FaUsers />} color="#ffc107" />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <StatCard title="Revenue" value="$742K" icon={<FaMoneyBill />} color="#dc3545" />
//       </Grid>
//     </Grid>

//       {/* Charts + Visa */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//         <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
//           <RevenueChart />
//         </div>
//         <VisaCard />
//       </div>

//       {/* Commission & Refund */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         <CommissionChart />
//         <RefundChart />
//       </div>

//       {/* Recent Trips */}
//       <RecentTrips />

//       {/* Lost Items */}
//       <LostItems />
//     </div>
//   );
// }
