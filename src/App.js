import React, {useState} from 'react';
import NavigationBar from './NavigationBar.js';
import Sidebar from './Sidebar.js';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

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

