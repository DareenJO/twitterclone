import React from 'react';
import {GrTwitter} from "react-icons/gr"
import {AiFillHome,AiOutlineSearch} from "react-icons/ai"
import {IoMdNotificationsOutline} from "react-icons/io"
import "./Sidebar.css";
import Sidebaroption from './Sidebaroption';
function Sidebar() {
  return (
    <div className='Sidebar'>

        {/**twitter icon */}
            <GrTwitter/>
         {/**sidebar option */}

       <Sidebaroption Icon={AiFillHome} text ="Home"/>
       <Sidebaroption Icon={AiOutlineSearch} text ="Explore"/>
       <Sidebaroption Icon={IoMdNotificationsOutline} text ="Notification"/>
         {/**button */}
         


      
    </div>
  )
}

export default Sidebar
