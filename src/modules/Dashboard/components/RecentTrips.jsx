import { Badge, Card, Table } from "react-bootstrap";

export default function RecentTrips() {
  const recentTrips = [
    { trip: "Addidas Sportwear", driver: "mohamed ahmed", passengers: 8, status: "Finished" },
    { trip: "Netflix", driver: "Mohamed Mansour", passengers: 8, status: "Canceled" },
    { trip: "Shopifi Stores", driver: "khaled Ali", passengers: 12, status: "Wait" },
    { trip: "Boostrap Technologies", driver: "Motaz ahmed", passengers: 14, status: "Finished" },
    { trip: "Community First", driver: "heasham ahmed", passengers: 8, status: "Finished" },
  ];

  return (
    <>
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
    
    </>
  );
}
