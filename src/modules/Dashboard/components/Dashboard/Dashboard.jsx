import { Container, Row, Col, Card, Dropdown, Table, Badge } from "react-bootstrap";
import Header from "../../../Shared/components/Header/Header";
import { Users, Activity, Truck, BarChart2, Star } from "lucide-react";
import StatCard from "../../../Shared/components/StatCard/StatCard";
import CanvasJSReact from '@canvasjs/react-charts';
const { CanvasJSChart } = CanvasJSReact;

import "./Dashboard.css";
import VisaCard from "../VisaCard";
import RevenueChart from "../RevenueChart";
import CommissionChart from "../CommissionChart";
import RefundChart from "../RefundChart";
import RecentTrips from "../RecentTrips";
import LostItems from "../LostItems";

export default function Dashboard() {
  const stats = [
    { title: "Total Drivers", value: 20, icon: <Users size={18} />, color: "#4dabf7" },
    { title: "Active Drivers", value: 12, icon: <Activity size={18} />, color: "#20c997" },
    { title: "Total Trips", value: 158, icon: <Truck size={18} />, color: "#ffa94d" },
    { title: "Success Rate", value: "95%", icon: <BarChart2 size={18} />, color: "#5f3dc4" },
    { title: "Driver Rating", value: 4.7, icon: <Star size={18} />, color: "#fab005" },
  ];





  //   const dataPointsIncome = [
  //   { label: "Jan", y: 50 },
  //   { label: "Feb", y: 90 },
  //   { label: "Mar", y: 50 },
  //   { label: "Apr", y: 25 },
  //   { label: "Jun", y: 50 },
  //   { label: "Jul", y: 25},
  //   { label: "Aug", y: 99 },
  // ];

  // const dataPointsOperations = [
  //   { label: "Jan", y: 81 },
  //   { label: "Feb", y: 72 },
  //   { label: "Mar", y: 75 },
  //   { label: "Apr", y: 50 },
  //   { label: "Jun", y: 81 },
  //   { label: "Jul", y: 0 },
  //   { label: "Aug", y: 25 },
  // ];

  // const options = {
  //   animationEnabled: true,
  //   height: 200,
  //   backgroundColor: "#ffffff",
  //   axisX: {
  //     labelFontSize: 10,
  //     lineThickness: 0
  //   },
  //   axisY: {
  //     labelFontSize: 10,
  //     gridThickness: 0
  //   },
  //   data: [
  //     {
  //       type: "spline",
  //       name: "Total income",
  //       showInLegend: true,
  //       color: "#6768A7",
  //       dataPoints: dataPointsIncome
  //     },
  //     {
  //       type: "spline",
  //       name: "Operations",
  //       showInLegend: true,
  //       color: "#85F4FA",
  //       dataPoints: dataPointsOperations
  //     }
  //   ]
  // };

  return (
    <>
      <Header title="" />
      <Container fluid className="px-4">
        {/* Stats */}
        <Row style={{ marginTop: "-15px" }}>
          {stats.map((stat, index) => (
            <Col xs={6} sm={4} md={2} key={index} className="mb-3">
              <StatCard
                title={stat.title}
                value={stat.value}
                color={stat.color}
                icon={stat.icon}
              />
            </Col>
          ))}
        </Row>

        {/* Main Row */}
        <Row className="mb-4">
          {/* Left: Chart */}

                <Col md={8}>
                      <RevenueChart/>
                </Col>
          

          {/* Right: Visa Card */}
          <Col md={4}>
          
            <VisaCard/>
          </Col>
        </Row>

        {/* Row 2 */}
 <Row className="mb-4">
<Col md={4}>



  <Card className="dashboard-card">
    <CommissionChart/>
  </Card>
</Col>


<Col md={4} lg={4}> 
   

      <RefundChart/>
    </Col>



          

          <Col md={4}>
            <Card className="dashboard-card text-center">
              <small className="text-muted mb-2">Website Visitors & New Passengers</small>
              <div className="d-flex justify-content-around">
                <div>
                  <h5 className="fw-bold mb-0">750K</h5>
                  <small>Website Visitors</small>
                </div>
                <div>
                  <h5 className="fw-bold mb-0">7,500</h5>
                  <small>New Passengers</small>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Row 3 */}
        <Row>
          <Col md={8}>
           

            <RecentTrips/>
          </Col>

          <Col md={4}>
           
            <LostItems/>
          </Col>
        </Row>
      </Container>
    </>
  );
}
