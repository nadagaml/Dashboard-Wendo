
import { Container, Row, Col, Card, Dropdown, Table, Badge } from "react-bootstrap";
import { Users, Activity, Truck, BarChart2, Star } from "lucide-react";
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
export default function RefundChart() {


    const barData = [
    { name: "S", value: 60 },
    { name: "M", value: 100 },
    { name: "T", value: 120 },
    { name: "W", value: 80 },
    { name: "T", value: 90 },
    { name: "F", value: 70 },
    { name: "S", value: 110 },
  ];

  
 const [timeRange, setTimeRange] = useState("This Week");

   const handleSelect = (eventKey) => {
    if (eventKey) setTimeRange(eventKey);
  };

  return (
  <>
  
     <Card className="dashboard-card">
        <div className="d-flex justify-content-between mb-2">
          <small className="text-muted">Refund & Cancellation Losses</small>
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle size="sm" variant="outline-secondary">{timeRange}</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Last 7 Days">Last 7 Days</Dropdown.Item>
              <Dropdown.Item eventKey="Last 30 Days">Last 30 Days</Dropdown.Item>
              <Dropdown.Item eventKey="This Month">This Month</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={barData}>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c9c9e1" stopOpacity={1} />
                <stop offset="100%" stopColor="#6768A7" stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" fontSize={10} />
            <YAxis fontSize={10} />
            <Tooltip />
            
            {/* First Bar: Light color */}
            <Bar dataKey="value" fill="#c9c9e1" radius={[4, 4, 0, 0]} barSize={30} />
            
            {/* Second Bar: Dark color (representing actual data part) */}
            <Bar dataKey="value" fill="#6768A7" radius={[4, 4, 0, 0]} barSize={30} background={{ fill: '#c9c9e1' }} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
  </>
  );
}
