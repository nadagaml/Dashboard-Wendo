export default function LostItems() {
  const items = [
    { name: "Passenger Name", status: "Retrieved" },
    { name: "Passenger Name", status: "On Way" },
    { name: "Passenger Name", status: "Lost" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-4">Lost Items</h3>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-3 border-b last:border-b-0 text-sm"
          >
            <span>{item.name}</span>
            <span
              className={`${
                item.status === "Retrieved"
                  ? "text-green-500"
                  : item.status === "On Way"
                  ? "text-yellow-500"
                  : "text-red-500"
              } font-semibold`}
            >
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
