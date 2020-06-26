import React, {useState} from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import Container from './Container.js';

export default function Sidebar(){
    const [page, setPage] = useState("");
    
    
    return(
        <Router>
            <div class="sidebar max-h-full bg-gray-900">
                
                <div class="mt-16 fixed top-0 content-center justify-between w-12">
                    <ul class="list-reset flex flex-row md:flex-col py-1 px-1 text-center">
                        
                        <li class="flex-1 hover:bg-blue-300" onClick={() => setPage("Home")}><Link to="/">
                            <a href="#" class="block py-2 px-1 align-middle text-white border-gray-800 hover:border-purple-500">
                                <i class="fas fa-home"></i>
                            </a></Link>
                        </li>
                        <li class="flex-1 hover:bg-blue-300">
                            <a href="#" class="block py-2 px-1 align-middle text-white border-gray-800 hover:border-purple-500">
                                <i class="fas fa-user-friends"></i>
                            </a>
                        </li>
                        <li class="flex-1 hover:bg-blue-300" onClick={() => setPage("ItemCollection")}><Link to="/item-collection">
                            <a href="#" class="block py-2 px-1 align-middle text-white border-gray-800 hover:border-purple-500">
                                <i class="fas fa-chair"></i>
                            </a></Link>
                        </li>
                        <li class="flex-1 hover:bg-blue-300">
                        <a href="#" class="block py-2 px-1 align-middle text-white border-gray-800 hover:border-purple-500">
                            <i class="fas fa-file"></i>
                        </a>
                        </li>
                        <li class="flex-1 hover:bg-blue-300">
                        <a href="#" class="block py-2 px-1 align-middle text-white border-gray-800 hover:border-purple-500">
                            <i class="fas fa-cog"></i>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
                
            <Container/>

        </Router>

    )
}

