import React from "react";
import './index.css'
import SideNavBar from "../SideNavBar";
import { MdInfoOutline } from "react-icons/md";
import PieChart from "../PieChart";
import LinedGraph from "../LinedGraph";

const Home = () => {
    return(
        <div className="Home-container">
            <SideNavBar />
            <div className="home-content-container">
                <header className="dashboard-header-card">
                    <h3 className="dashboard-header-text">Dashboard</h3>
                </header>
                <div className="graph-main-card">
                    <div className="garph-content-card">
                        <div className='graph-header-card'>
                            <h3 className='graph-header-title'>Sales vs Orders</h3>
                            <MdInfoOutline size={20} />
                        </div>
                        <LinedGraph />
                    </div>
                    <div className="circle-garph-content-card">
                        <div className='graph-header-card'>
                            <h3 className='graph-header-title'>Ponint of Sales</h3>
                            <MdInfoOutline size={20} />
                        </div>
                        <PieChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home