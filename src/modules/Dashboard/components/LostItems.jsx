import { Card } from "react-bootstrap";

export default function LostItems() {
   const lostItems = [
    { name: "Passenger Name", status: "Retrieved" },
    { name: "Passenger Name", status: "Retrieved" },
    { name: "Passenger Name", status: "on way" },
    { name: "Passenger Name", status: "Lost" },
    { name: "Passenger Name", status: "Retrieved" },
  ];
  return (
    <>
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
    
    </>
 
  );
}
