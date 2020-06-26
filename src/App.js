import React, {useState} from 'react';
import NavigationBar from './NavigationBar.js';
import Sidebar from './Sidebar.js';
import './App.css';

export default function App() {
    return(
        <div>
            <NavigationBar />
            <div>
            <Sidebar />
            </div>
        </div>
    );
}

