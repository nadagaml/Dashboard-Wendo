import React, { useState, useEffect } from "react";
import { Table, Spinner, Form } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import TableHeader from "../TableHeader/TableHeader";

const Loader = () => (
  <div className="text-center py-4">
    <Spinner animation="border" variant="primary" />
  </div>
);

const NoData = () => (
  <div className="text-center py-4">
    <p>No Data Available</p>
  </div>
);

const ReusableTable = ({
  title = "Data Table",
  columns,
  rows,
  onDelete,
  onAddNew,
  idKey = "id",
  loading = false,
}) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  const getInitials = (name) => {
    if (!name) return "NA";
    const parts = name.split(" ");
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  
  const getAvatarColor = () => "#156082";

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(filteredRows.map((r) => r[idKey]));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "badge bg-success";
      case "offline":
        return "badge bg-secondary";
      case "inactive":
        return "badge bg-warning ";
      default:
        return "badge bg-light text-dark";
    }
  };

  return (
    <div className="p-3 mb-4 rounded shadow-sm" style={{ background: "#f8f9fa" }}>
      <TableHeader title={title} search={search} setSearch={setSearch} onAddNew={onAddNew} />

      <div className="table-responsive">
        <Table striped bordered hover responsive className="align-middle custom-table">
          <thead className="table-dark">
            <tr>
              <th>
                <Form.Check
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedRows.length === filteredRows.length && filteredRows.length > 0}
                />
              </th>
              {columns.map((col) => (
                <th key={col.id} className="custom-header">
                  {col.label}
                </th>
              ))}
               
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length + 2}>
                  <Loader />
                </td>
              </tr>
            ) : filteredRows.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 2}>
                  <NoData />
                </td>
              </tr>
            ) : (
              filteredRows.map((row) => (
                <tr key={row[idKey]}>
                  {/* Checkbox */}
                  <td>
                    <Form.Check
                      type="checkbox"
                      checked={selectedRows.includes(row[idKey])}
                      onChange={() => handleSelectRow(row[idKey])}
                    />
                  </td>

                  {columns.map((col) => (
                    <td key={col.id}>
                      {col.id === "name" ? (
                        <div className="d-flex align-items-center gap-2">
                          
                          {row.image ? (
                            <img
                              src={row.image}
                              alt="driver"
                              className="rounded-circle"
                              width="40"
                              height="40"
                            />
                          ) : (
                         
                            <div
                              className="avatar-initials"
                              style={{
                                backgroundColor: getAvatarColor(),
                              }}
                            >
                              {getInitials(row[col.id])}
                            </div>
                          )}
                         
                          <span>{row[col.id]}</span>
                        </div>
                      ) : col.id === "status" ? (
                        <span className={getStatusClass(row[col.id])}>{row[col.id]}</span>
                      ) : (
                        row[col.id]
                      )}
                    </td>
                  ))}

                  <td className="text-center">
                    {onDelete && (
                      <FaTrash
                        style={{ cursor: "pointer", color: "#3b3b3bff" }}
                        onClick={() => onDelete(row[idKey])}
                      />
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ReusableTable;
