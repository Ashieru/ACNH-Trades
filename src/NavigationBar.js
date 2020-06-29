import React, {useState} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function NavigationBar() {

    const [page, setPage] = useState("");
    
        return(
            <Router>
                <nav class="bg-gray-900 pt-3 pb-3 px-1 mt-0 h-auto fixed w-screen z-20 top-0 shadow-md fixed">

                    <div class="flex flex-wrap items-center">
                        <div class="w-2/5">
                            {/* Title */}
                            <div class="inline-block flex-shrink px-2 justify-center md:justify-start text-white">
                                <p class="text-base title-font">ACNH Trades v1.0</p>
                            </div>

                            {/* Dropdown */}
                            <div class="dropdown inline-block relative">
                                <button class="bg-gray-900 text-white font-semibold py-1 px-2 rounded inline-flex items-center border-gray-200 border">
                                    <span class="mr-1 text-sm">EN</span>
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                                </button>
                                <ul class="dropdown-menu absolute hidden text-white pt-1">
                                    <li class=""><a class=" bg-gray-800 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap text-sm" href="#">EN</a></li>
                                    <li class=""><a class="rounded-b bg-gray-800 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap text-sm" href="#">JP</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div class="flex content-center w-3/5 md:justify-end">
                            <Link to="/Settings">
                                <ul class="hover:bg-blue-300 list-reset flex justify-between flex-1 md:flex-none items-center">
                                    <li class="flex-1 md:flex-none">
                                        <img class="dp-size" src="https://acnhcdn.com/latest/ManpuIcon/Smiling.png" />
                                    </li>
                                    <li class="flex-1 md:flex-none">
                                        <p class="text-white hover:text-gray-200 py-2 px-4 font-lato" onClick={() => setPage("Settings")}>Username</p>
                                    </li>
                                </ul>
                            </Link>
                        </div>
                    </div>

                </nav>

                {/* <Route exact path="/hybridsitesurvey" component={HybridSiteSurveyPage} />
                <Route exact path="/testpage1" component={TestPage1} /> */}
                {/* <div class="pl-32">{this.state.currentPage}</div> */}
            </Router>
        )
}