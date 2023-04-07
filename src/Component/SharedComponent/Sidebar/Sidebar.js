import React from 'react'
import '../../../Style/Sidebar.css'
import { Link } from "react-router-dom";


import * as SideBarIcons_im from "react-icons/im";
import * as SideBarIcons_Ai from "react-icons/ai";
import * as SideBarIcons_Bi from "react-icons/bi";






const Sidebar = () => {
  return (
    <div className='navbar'>
      
      <ul className='SidebarList'>
          <div className='IconStyle'><SideBarIcons_im.ImBooks /></div>
          <div className='TextStyle'> <li>  <Link to={"/course"}>  Courses </Link> </li></div>
          <div className='IconStyle'><SideBarIcons_Bi.BiDisc /></div>
          <div className='TextStyle'><li>  <Link to={"/register"}>  Register </Link> </li> </div>
          <div className='IconStyle'><SideBarIcons_Ai.AiOutlineSetting /></div>
          <div className='TextStyle'><li>  <Link to={"/Allc"}> Settings</Link> </li></div>
          <div className='IconStyle'> <SideBarIcons_Bi.BiLogIn/>    </div> 
          <div className='TextStyle'><li>  <Link to={"/"}>  Logout </Link> </li></div>


      </ul>


    </div>
  );
}

export default Sidebar;