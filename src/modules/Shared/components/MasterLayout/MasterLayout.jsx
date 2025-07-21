import React, { useContext } from 'react'
import { AuthContext } from '../../../../context/AuthContext'
import Sidebar from '../Sidebar/Sidebar'

export default function MasterLayout() {


  let {loginData} = useContext(AuthContext)

  return (
    <>
    
    <div className='layout-container'>
       <div className="sideBar-cont">
          <sideBar/>
       </div>

         <div className="main-content w-100">
          <Navbar loginData={loginData} />
          <Outlet />
        </div>



    </div>
    
    </>
  )
}
