import React, {Component} from 'react';

export default class Content extends Component{
    
    constructor(props) {
        super(props);
        this.state = {currentPage: "Home"};
    }

    setPage(page) {
        this.setState((state, props) => ({
            currentPage: page
          }));
      }
    
    render(){
        return(
            <div class="mt-24 max-w-full w-full lg:max-w-full">

                <div class="mb-8 block ml-32"><p class="text-4xl font-lato">Check if your friends have this</p></div>

                <div class="block ml-32 mr-24">
                    <input class="appearance-none w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-white focus:border-gray-500" type="text" placeholder="Enter item/recipe name"></input>
                </div>

            </div>
    
        )
    }
}