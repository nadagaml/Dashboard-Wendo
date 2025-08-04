import { Dropdown} from "react-bootstrap";
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

export default function CommissionChart() {
    const pieData = [
    { name: "Cash", value: 251 },
    { name: "E-payment", value: 176 },
  ];
  const pieColors = ["#6768A7", "#c9c9e1"];
  
 const [timeRange, setTimeRange] = useState("This Week");

   const handleSelect = (eventKey) => {
    if (eventKey) setTimeRange(eventKey);
  };

  return (
   <>
   
   
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
   
   </>
  );
}

