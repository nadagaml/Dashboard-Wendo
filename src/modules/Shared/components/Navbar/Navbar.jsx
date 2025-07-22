import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { FaBell, FaEnvelope, FaSearch, FaUser } from "react-icons/fa";
import { AuthContext } from "../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'; 

export default function Navbar() {
  let { setLoginData } = useContext(AuthContext);
  let navigate = useNavigate();

  
  function logOut() {
    Cookies.remove("token"); 
    setLoginData(null);
    navigate("/login"); 
  }

  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-2 bg-white shadow-sm" style={{ height: "60px" }}>
      
      <div className="d-flex align-items-center">
        <FaSearch className="me-2 text-muted" />
        <input
          type="text"
          placeholder="Search..."
          className="form-control border-0 shadow-none"
          style={{ width: "200px" }}
        />
      </div>

      <div className="d-flex align-items-center gap-3">
        <img
          src="https://flagcdn.com/w40/sa.png"
          alt="lang"
          width="24"
          height="16"
          className="me-2"
        />

        <FaBell className="text-muted cursor-pointer" size={18} />
        <FaEnvelope className="text-muted cursor-pointer" size={18} />

        <Dropdown align="end">
          <Dropdown.Toggle
            variant="light"
            id="dropdown-basic"
            className="d-flex align-items-center border-0 bg-transparent"
          >
            <img
              src="https://i.pravatar.cc/30"
              alt="user"
              className="rounded-circle me-2"
              width="30"
              height="30"
            />
            <span className="fw-bold text-muted">Nada</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item> 
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
