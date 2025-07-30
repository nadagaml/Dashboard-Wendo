import React from "react";
import { Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

const TableHeader = ({ title, search, setSearch, onAddNew }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h5 className="m-0">{title}</h5>
      <div className="d-flex align-items-center gap-2">
        <Form.Control
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "200px" }}
        />
        {onAddNew && (
          <Button variant="primary" onClick={onAddNew}>
            <FaPlus className="me-2" /> Add New
          </Button>
        )}
      </div>
    </div>
  );
};

export default TableHeader;
