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
export default function RevenueChart() {

 const [timeRange, setTimeRange] = useState("This Week");
   const data = [
    { name: "Jan", income: 50, operations: 50 },
    { name: "Feb", income: 50, operations: 50 },
    { name: "Mar", income: 99, operations: 90 },
    { name: "Apr", income: 50, operations: 20 },
    { name: "Jun", income: 99, operations: 81 },
    { name: "Jul", income: 50, operations: 30 },
    { name: "Aug", income: 99, operations: 81 },
  ];

  const handleSelect = (eventKey) => {
    if (eventKey) setTimeRange(eventKey);
  };


  return (
 <>
 <Card className="dashboard-card">
                        <div className="dashboard-card-header mb-3">
                            <div className="left-header">
                              <div className="revenue-info">
                                <h5 className="fw-bold mb-0">$855.8K</h5>
                                <small className="text-muted">Total Revenue</small>
                              </div>
                              <div className="dashboard-legend ms-5">
                                <span className="income">Total income</span>
                                <span className="operations">Operations</span>
                              </div>
                            </div>

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

                        {/* Chart */}
                        <div style={{ width: "100%", height: 250 }}>
                          <ResponsiveContainer>
                            <AreaChart data={data}>
                              <defs>
                                {/* Gradient لـ income */}
                                <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#6768A7" stopOpacity={0.2} />
                                  <stop offset="100%" stopColor="#6768A7" stopOpacity={0} />
                                </linearGradient>

                                {/* Gradient لـ operations */}
                                <linearGradient id="operationsGradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#85F4FA" stopOpacity={0.2} />
                                  <stop offset="100%" stopColor="#85F4FA" stopOpacity={0} />
                                </linearGradient>
                              </defs>

                              <CartesianGrid strokeDasharray="3 3" vertical={false} />
                              <XAxis dataKey="name" fontSize={11} />
                              <YAxis fontSize={11} />
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

 </>
  );
}
