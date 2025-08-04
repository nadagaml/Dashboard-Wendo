import React from "react";
import { Button, Form } from "react-bootstrap";
import { FaPlus, FaFilter } from "react-icons/fa";


const TableHeader = ({ title, search, setSearch, onAddNew, onFilter }) => {
  return (
    <div className="table-header mb-3">
      <h5 className="mb-2 fw-semibold">{title}</h5>
      <div className="d-flex justify-content-between align-items-center">
        <Form.Control
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: "220px" }}
        />
        <div className="d-flex align-items-center gap-2">
          <Button  className="custom-btn" onClick={onAddNew}>
            <FaPlus className="me-2" /> Add Driver
          </Button>
          <Button  className="filter-btn" variant="outline-secondary" onClick={onFilter}>
            <FaFilter className="me-2" /> Filter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
