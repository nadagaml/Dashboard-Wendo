import { Container, Row, Col, Card, Dropdown, Table, Badge } from "react-bootstrap";
import Header from "../../../Shared/components/Header/Header";
import { Users, Activity, Truck, BarChart2, Star } from "lucide-react";
import StatCard from "../../../Shared/components/StatCard/StatCard";
import CanvasJSReact from '@canvasjs/react-charts';
const { CanvasJSChart } = CanvasJSReact;
import { useState } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  AreaChart, Area,
} from "recharts";
import "./Dashboard.css";

export default function Dashboard() {
  const stats = [
    { title: "Total Drivers", value: 20, icon: <Users size={18} />, color: "#4dabf7" },
    { title: "Active Drivers", value: 12, icon: <Activity size={18} />, color: "#20c997" },
    { title: "Total Trips", value: 158, icon: <Truck size={18} />, color: "#ffa94d" },
    { title: "Success Rate", value: "95%", icon: <BarChart2 size={18} />, color: "#5f3dc4" },
    { title: "Driver Rating", value: 4.7, icon: <Star size={18} />, color: "#fab005" },
  ];

  const [timeRange, setTimeRange] = useState("This Week");

  const data = [
    { name: "Jan", income: 99, operations: 81 },
    { name: "Feb", income: 90, operations: 72 },
    { name: "Mar", income: 99, operations: 90 },
    { name: "Apr", income: 90, operations: 72 },
    { name: "Jun", income: 99, operations: 81 },
    { name: "Jul", income: 90, operations: 72 },
    { name: "Aug", income: 99, operations: 81 },
  ];

  const handleSelect = (eventKey) => {
    if (eventKey) setTimeRange(eventKey);
  };


    const pieData = [
    { name: "Cash", value: 251 },
    { name: "E-payment", value: 176 },
  ];
  const pieColors = ["#6768A7", "#c9c9e1"];

  const barData = [
    { name: "S", value: 60 },
    { name: "M", value: 100 },
    { name: "T", value: 120 },
    { name: "W", value: 80 },
    { name: "T", value: 90 },
    { name: "F", value: 70 },
    { name: "S", value: 110 },
  ];

  const recentTrips = [
    { trip: "Addidas Sportwear", driver: "mohamed ahmed", passengers: 8, status: "Finished" },
    { trip: "Netflix", driver: "Mohamed Mansour", passengers: 8, status: "Canceled" },
    { trip: "Shopifi Stores", driver: "khaled Ali", passengers: 12, status: "Wait" },
    { trip: "Boostrap Technologies", driver: "Motaz ahmed", passengers: 14, status: "Finished" },
    { trip: "Community First", driver: "heasham ahmed", passengers: 8, status: "Finished" },
  ];

  const lostItems = [
    { name: "Passenger Name", status: "Retrieved" },
    { name: "Passenger Name", status: "Retrieved" },
    { name: "Passenger Name", status: "on way" },
    { name: "Passenger Name", status: "Lost" },
    { name: "Passenger Name", status: "Retrieved" },
  ];

    const dataPointsIncome = [
    { label: "Jan", y: 99 },
    { label: "Feb", y: 90 },
    { label: "Mar", y: 99 },
    { label: "Apr", y: 90 },
    { label: "Jun", y: 99 },
    { label: "Jul", y: 90 },
    { label: "Aug", y: 99 },
  ];

  const dataPointsOperations = [
    { label: "Jan", y: 81 },
    { label: "Feb", y: 72 },
    { label: "Mar", y: 90 },
    { label: "Apr", y: 72 },
    { label: "Jun", y: 81 },
    { label: "Jul", y: 72 },
    { label: "Aug", y: 81 },
  ];

  const options = {
    animationEnabled: true,
    height: 200,
    backgroundColor: "#ffffff",
    axisX: {
      labelFontSize: 10,
      lineThickness: 0
    },
    axisY: {
      labelFontSize: 10,
      gridThickness: 0
    },
    data: [
      {
        type: "spline",
        name: "Total income",
        showInLegend: true,
        color: "#6768A7",
        dataPoints: dataPointsIncome
      },
      {
        type: "spline",
        name: "Operations",
        showInLegend: true,
        color: "#85F4FA",
        dataPoints: dataPointsOperations
      }
    ]
  };

  return (
    <>
      <Header title="Dashboard Overview" />
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
            <Card className="dashboard-card">

                <div className="dashboard-card-header d-flex justify-content-between align-items-center mb-2">
                  <div className="left-header">
                    <div className="revenue-info mb-5">
                      <h5 className="fw-bold mb-2">$855.8K</h5>
                      <small className="text-muted">Total Revenue</small>
                      
                    </div>
                    <div className="dashboard-legend mb-5">
                      <span className="income">Total income</span>
                      <span className="operations">Operations</span>
                    </div>
                  </div>
                  <Dropdown onSelect={handleSelect} className="mb-5">
                    <Dropdown.Toggle size="sm" variant="outline-secondary">
                      {timeRange}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="This Week">This Week</Dropdown.Item>
                      <Dropdown.Item eventKey="This Month">This Month</Dropdown.Item>
                      <Dropdown.Item eventKey="This Year">This Year</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>


              {/* Chart */}
              <div style={{ width: "100%", height: 200 }}>
                <ResponsiveContainer>
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6768A7" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#6768A7" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="operationsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#85F4FA" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#85F4FA" stopOpacity={0} />
                      </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" fontSize={10} />
                    <YAxis fontSize={10} />
                    <Tooltip />

                    <Area
                      type="monotone"
                      dataKey="income"
                      stroke="#6768A7"
                      fill="url(#incomeGradient)"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Area
                      type="monotone"
                      dataKey="operations"
                      stroke="#85F4FA"
                      fill="url(#operationsGradient)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </Col>


          

          {/* Right: Visa Card */}
          <Col md={4}>
            <Card className="dashboard-card d-flex flex-column justify-content-between">
              <div className="visa-card">
                <div className="top">
                  <div>
                    <small>VISA</small>
                    <div>PREMIUM ACCOUNT</div>
                  </div>
                  <div>
                    <small>5789 **** **** 2847</small>
                  </div>
                </div>
                <div className="bottom">
                  <div>
                    <small>Card holder</small><br />
                    <span className="fw-bold">Wendo ceo</span>
                  </div>
                  <div>
                    <small>Expire date</small><br />
                    <span className="fw-bold">06/21</span>
                  </div>
                </div>
              </div>
              <div className="balance-section">
                <h6>$4,050,12,300</h6>
                <small>balance</small>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Row 2 */}
 <Row className="mb-4">
<Col md={4}>
  <Card className="dashboard-card">
    {/* Header */}
    <div className="d-flex justify-content-between mb-3 align-items-center">
      <small className="text-muted mb-0">Platform Commission</small>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle size="sm" variant="outline-secondary">
          {timeRange}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="This Week">This Week</Dropdown.Item>
          <Dropdown.Item eventKey="This Month">This Month</Dropdown.Item>
          <Dropdown.Item eventKey="This Year">This Year</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>

    {/* Pie Chart */}
    <ResponsiveContainer width="100%" height={150}>
      <PieChart>
        <Pie data={pieData} dataKey="value" innerRadius={40} outerRadius={55} paddingAngle={3} >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={pieColors[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>

    {/* Legend */}
    <div className="d-flex justify-content-center gap-4 mt-3">
      <div className="d-flex align-items-center gap-2">
        <div className="circle-dot" style={{ backgroundColor: "#6768A7" }}></div>
        <div className="text-start">
          <small>Cash</small><br />
          <span className="fw-bold">251K</span>
        </div>
      </div>

      <div className="d-flex align-items-center gap-2">
        <div className="circle-dot" style={{ backgroundColor: "#c9c9e1" }}></div>
        <div className="text-start">
          <small>E-payment</small><br />
          <span className="fw-bold">176K</span>
        </div>
      </div>
    </div>
  </Card>
</Col>


          <Col md={4}>
            <Card className="dashboard-card">
              <div className="d-flex justify-content-between mb-2">
                <small className="text-muted">Refund & Cancellation Losses</small>
                <Dropdown onSelect={handleSelect}>
                  <Dropdown.Toggle size="sm" variant="outline-secondary">{timeRange}</Dropdown.Toggle>
                </Dropdown>
              </div>
              <ResponsiveContainer width="100%" height={210}>
                <BarChart data={barData}>
                  <XAxis dataKey="name" fontSize={10} />
                  <YAxis fontSize={10} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#6768A7" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
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
            <Card className="dashboard-card">
              <small className="text-muted mb-2">Recent Trips</small>
              <Table size="sm" className="mb-0">
                <thead>
                  <tr>
                    <th>Trip ID</th>
                    <th>Driver</th>
                    <th>Passenger Count</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTrips.map((trip, idx) => (
                    <tr key={idx}>
                      <td>{trip.trip}</td>
                      <td>{trip.driver}</td>
                      <td>{trip.passengers}</td>
                      <td>
                        <Badge bg={
                          trip.status === "Finished" ? "success" :
                          trip.status === "Canceled" ? "danger" :
                          "warning"
                        }>
                          {trip.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="dashboard-card">
              <small className="text-muted mb-2">Lost Item</small>
              <div className="text-success mb-2" style={{ fontSize: "0.75rem" }}>
                ↑ 8 retrieved this month
              </div>
              <ul className="list-unstyled mb-0">
                {lostItems.map((item, idx) => (
                  <li key={idx} className="mb-2 d-flex align-items-center gap-2">
                    <div className="circle-outline"></div>
                    <div>
                      <div className="fw-bold">{item.name}</div>
                      <small className="text-muted">{item.status}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
