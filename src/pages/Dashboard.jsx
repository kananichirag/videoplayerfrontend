import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import SideBar from '../components/SideBar'
import DashUploaded from '../components/DashUploaded';
import DashUpload from '../components/DashUpload';
import DashProfile from '../components/DashProfile';

const Dashboard = () => {
  
  const location = useLocation();  
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row" >
       <div className='md:w-56'>
            <SideBar/>
       </div>
       {tab === "uploaded" && <DashUploaded/>}
       {tab === "upload" && <DashUpload/>}
       {tab === "profile" && <DashProfile/>}
    </div>
  )
}

export default Dashboard
