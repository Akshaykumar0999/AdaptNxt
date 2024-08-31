import React, { useState } from "react";
import './index.css'
import NavItem from "../NavItem";

const navBarListDetails = [
    {
        id: 1,
        name: 'Dashboard',
        toLink: '/',
    },
    {
        id: 2,
        name: 'Inventory',
        toLink: '/inventory',
    },
    {
        id: 3,
        name: 'Order',
        toLink: '/order',
    },
    {
        id: 4,
        name: 'Returns',
        toLink: '/returns',
    },

    {
        id: 5,
        name: 'Customers',
        toLink: '/customers',
    },
    {
        id: 6,
        name: 'Shipping',
        toLink: '/shipping',
    },
    {
        id: 7,
        name: 'Chanell',
        toLink: '/chanell',
    },
    {
        id: 8,
        name: 'Integrations',
        toLink: '/integrations',
    },
    {
        id: 9,
        name: 'Calculators',
        toLink: '/calculators',
    },
    {
        id: 10,
        name: 'Reports',
        toLink: '/raports',
    },
    {
        id: 11,
        name: 'Accounts',
        toLink: '/accounts',
    },
]

const SideNavBar = () => {
    const [activeTab, setActiveTab] = useState(navBarListDetails[0].id)
    const updateActiveTab =(id) => {
        setActiveTab(id)
    }
    return(
        <div className="sidenavbar-container">
            <ul className="sidebar-Nav-links-card">
                {
                    navBarListDetails.map((item) => <NavItem details={item} key={item.id} updateActiveTab={updateActiveTab} isActive={activeTab === item.id} />)
                }
            </ul>
        </div>
    )
}

export default SideNavBar