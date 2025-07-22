import React, { useContext } from 'react'
import { AuthContext } from '../../../../context/AuthContext'
import SideBar from '../Sidebar/Sidebar'

import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function MasterLayout() {


  let {loginData} = useContext(AuthContext)

  return (
    <>

    <div className='d-flex'>

      <div className='position-sticky top-0 vh-100' >
          <SideBar />
        </div>
        <div className="w-100 content-container ">
          <Navbar loginData={loginData} />
       
          <Outlet />
        </div>

    </div>
    
    </>
  )
}
    
    // <div className='layout-container'>
    //    <div className="sideBar-cont">
    //       <SideBar/>
    //    </div>

    //      <div className="main-content w-100">
    //       <Navbar loginData={loginData} />
    //       <Outlet />
    //     </div>



    // </div>