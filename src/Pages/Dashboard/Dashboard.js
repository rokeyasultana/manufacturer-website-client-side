import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
   
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <h2 className='text-2xl font-bold text-green-400 uppercase'>Welcome to Dashboard</h2>
            <Outlet></Outlet>
        </div>
        <div class="drawer-side">
            <label for="dashboard-sidebar" class="drawer-overlay"></label>
            <li><Link to="/dashboard">My Order</Link></li>

            <li><Link to="/dashboard/review">Add Review</Link></li>
            <li><Link to="/dashboard/profile">My Profile</Link></li>
        </div>
    </div>
    );
};

export default Dashboard;