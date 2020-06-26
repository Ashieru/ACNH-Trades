import React, {Component} from 'react';
import NavigationBar from './NavigationBar.js';
import Sidebar from './Sidebar.js';
import Content from './Content.js';
import ItemSearch from './ItemSearch.js';
import './App.css';

export default class App extends Component{
  render(){
      return(
          <div>
              <NavigationBar />
              <div>
              <Sidebar />
              <div class="block top-4 left-3 static overflow-y-auto">
                <Content />
                <ItemSearch />
              </div>
              </div>
          </div>
      )
  }
}
