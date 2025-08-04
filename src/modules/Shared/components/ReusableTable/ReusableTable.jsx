import React, { useState, useEffect } from "react";
import { Table, Form } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import TableHeader from "../TableHeader/TableHeader";


const ReusableTable = ({
  title = "All Drivers",
  columns,
  rows,
  onDelete,
  onAddNew,
  idKey = "id",
  loading = false,
  pagination,
}) => {
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

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

  const getInitials = (name) => {
    if (!name) return "NA";
    const parts = name.split(" ");
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  const getAvatarColor = () => "#156082";

  const getStatusBadge = (status) => {
    const s = status.toLowerCase();
  if (s === "active")
    return <span className="badge-custom badge-active">● Active</span>;

  if (s === "offline")
    return <span className="badge-custom badge-offline">● Offline</span>;

  if (s === "inactive" || s === "wait" || s === "waiting")
    return <span className="badge-custom badge-wait">● Wait</span>;
    return <span className="badge bg-light text-dark">{status}</span>;
  };

  return (
    <div className="custom-card">
      <TableHeader title={title} search={search} setSearch={setSearch} onAddNew={onAddNew} />
      <div className="table-responsive">
        <Table hover className="mb-2 custom-table">
          <thead>
            <tr>
              <th>
                <Form.Check
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedRows.length === filteredRows.length && filteredRows.length > 0}
                />
              </th>
              {columns.map((col) => (
                <th key={col.id}>{col.label}</th>
              ))}
              <th></th> {/* للحذف */}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row) => (
              <tr key={row[idKey]}>
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
                            alt=""
                            className="rounded-circle"
                            width="32"
                            height="32"
                          />
                        ) : (
                          <div className="avatar-initials" style={{ backgroundColor: getAvatarColor() }}>
                            {getInitials(row[col.id])}
                          </div>
                        )}
                        {row[col.id]}
                      </div>
                    ) : col.id === "status" ? (
                      getStatusBadge(row[col.id])
                    ) : (
                      row[col.id]
                    )}
                  </td>
                ))}
                <td>
                  {onDelete && (
                    <FaTrash
                      style={{ cursor: "pointer", color: "#6b7280" }}
                      onClick={() => onDelete(row[idKey])}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {pagination && <div className="mt-3">{pagination}</div>}
    </div>
  );
};

export default ReusableTable;
