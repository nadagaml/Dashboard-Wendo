export default function RecentTrips() {
  const trips = [
    { id: "Adidas Sportwear", driver: "Mohamed Ahmed", count: 8, status: "Finished" },
    { id: "Netflix", driver: "Mohamed Mansour", count: 8, status: "Canceled" },
    { id: "Shopify Stores", driver: "Khaled Ali", count: 12, status: "Waiting" },
    { id: "Bootstrap Technologies", driver: "Motaz Ahmed", count: 14, status: "Finished" },
    { id: "Community First", driver: "Hesham Ahmed", count: 8, status: "Finished" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow mb-6">
      <h3 className="text-lg font-semibold mb-4">Recent Trips</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-500 text-sm border-b">
            <th className="pb-3">Trip ID</th>
            <th className="pb-3">Driver</th>
            <th className="pb-3">Passenger Count</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip, index) => (
            <tr key={index} className="border-b text-sm hover:bg-gray-50">
              <td className="py-3">{trip.id}</td>
              <td>{trip.driver}</td>
              <td>{trip.count}</td>
              <td>
                <span
                  className={`${
                    trip.status === "Finished"
                      ? "text-green-500"
                      : trip.status === "Canceled"
                      ? "text-red-500"
                      : "text-yellow-500"
                  } font-semibold`}
                >
                  {trip.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
