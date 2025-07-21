import React, { useState } from 'react'
import { Menu, MenuItem, ProSidebarProvider, Sidebar } from 'react-pro-sidebar'
import logo from '../../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
export default function SideBar() {



  const [isCollapsed ,setIsCollapsed] = useState(false);

  let ToggleCollapsed = () =>
  {
      setIsCollapsed(!isCollapsed);
  }



  return (
    <>
 <div className="sidbarContant" style={{ position: 'relative' }}>
        
        <button
          onClick={ToggleCollapsed}
          className="collapse-toggle"
          title={isCollapsed ? "Expand" : "Collapse"}
        >
          <i
            className={`fa-solid ${isCollapsed ? 'fa-angle-right' : 'fa-angle-left'}`}
          ></i>
        </button>

        <Sidebar collapsed={isCollapsed}>
          <Menu>

            {/* Logo */}
            <MenuItem className="my-5 wendo-title" disabled>
              <img
                src={logo}
                alt="logo"
                style={{ width: 40, marginRight: isCollapsed ? 0 : 10 }}
              />
              {!isCollapsed && <span className="wendo-text">Wendo</span>}
            </MenuItem>

            <div className="sidebar-divider"></div>

                {!isCollapsed && (
                    <MenuItem className="sideBar-title" disabled>
                      Home
                    </MenuItem>
                  )}

            <MenuItem icon={<i className="fa-solid fa-chart-column"></i>} component={<Link to="/dashboard" />}>
              Dashboard
            </MenuItem>

            <div className="sidebar-divider"></div>

           {!isCollapsed && (
             <MenuItem className="sideBar-title" disabled>
              Pages
            </MenuItem>
           )}

            <MenuItem icon={<i className="fa-solid fa-user"></i>} component={<Link to="/dashboard/drivers" />}>
              Drivers
            </MenuItem>

            <MenuItem icon={<i className="fa-solid fa-route"></i>} component={<Link to="/dashboard/trips" />}>
              Trips
            </MenuItem>

            <MenuItem icon={<i className="fa-solid fa-box-open"></i>} component={<Link to="/dashboard/lost-items" />}>
              Lost Items
            </MenuItem>

            <div className="sidebar-divider"></div>
          </Menu>
        </Sidebar>
      </div>
  
    
    </>
  )
}
