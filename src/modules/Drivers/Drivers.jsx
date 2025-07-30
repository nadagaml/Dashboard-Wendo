import React from 'react'
import Header from '../Shared/components/Header/Header'
import ReusableTable from '../Shared/components/ReusableTable/ReusableTable';

export default function Drivers() {

 const columns = [
    { id: "name", label: "Driver Name" },
    { id: "Phone_Number", label: "Phone Number" },
    { id: "Total_Trips", label: "Total Trips" },
    { id: "Earnings", label: "Earnings" },
    { id: "status", label: "Status" },
  ];

  const rows = [
    { id: 1, name: "Ahmed Ali", Phone_Number: "01020202123",Total_Trips:"5",Earnings:"100", status: "Active" },
    { id: 2, name: "Nada Gamal", Phone_Number: "01061108437",Total_Trips:"5",Earnings:"100", status: "Inactive" },
    { id: 3, name: "Mohamed Salem", Phone_Number: "01087108437",Total_Trips:"5",Earnings:"100", status: "Inactive" },
    { id: 4, name: "Nour Mostafa", Phone_Number: "01066608437",Total_Trips:"5",Earnings:"100", status: "offline" },
    { id: 5, name: "Hanan Mostafa", Phone_Number: "01064608437",Total_Trips:"5",Earnings:"100", status: "Inactive" },
  ];



  return (
    <>
    <Header />
    
      <ReusableTable
        columns={columns}
        rows={rows}
        onView={(id) => console.log("View", id)}
        onEdit={(id) => console.log("Edit", id)}
        onDelete={(id) => console.log("Delete", id)}
        loading={false}
      />


    </>
  )
}
