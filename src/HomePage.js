import React, {Component} from 'react';

export default class HomePage extends Component{
    
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div class="block top-4 left-3 static overflow-y-auto">
                <div class="mt-32 justify-center max-w-full w-full lg:max-w-full flex flex-wrap">
                {/* <div class="h-48 lg:h-auto lg:w-36 flex-none rounded-md text-center overflow-hidden">
                </div> */}
                <div class="p-10">
                <div class="pointer-cursor hover:bg-orange-300 border-r-8 border-b-8 hover:border-orange-300 border-yellow-600 bg-orange-200 rounded-lg p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                    
                        <div class="text-center text-gray-900 font-bold text-5xl my-1 font-kalam">Items Collected</div> 
                        <img class="mx-32 block" src="https://acnhcdn.com/latest/FtrIcon/FtrWoodenChairS_Remake_3_0.png" />
                    
                    </div>
                    
                    
                    <p class="text-lg text-gray-700 flex items-center font-lato">
                        <svg class="fill-current text-gray-700 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        1/100
                    </p>
                </div>
                </div>
                {/* <div class="h-48 lg:h-auto lg:w-40 flex-none bg-cover rounded text-center overflow-hidden">
                </div> */}

                <div class="p-10">
                <div class="pointer-cursor hover:bg-orange-300 border-r-8 border-b-8 hover:border-orange-300 border-yellow-600 bg-orange-200 rounded-lg p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                    
                    <div class="text-center text-gray-900 font-bold text-5xl my-1 font-kalam">Recipies Collected</div> 
                    <img class="mx-32 block" src="https://acnhcdn.com/latest/MenuIcon/BookRecipe.png" />
                    
                    </div>
                    
                    
                    <p class="text-lg text-gray-700 flex items-center font-lato">
                        <svg class="fill-current text-gray-700 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        1/60
                    </p>
                </div>
                </div>

                {/* <div class="h-48 lg:h-auto lg:w-auto flex-none rounded-md text-center overflow-hidden">
                </div> */}
                
                </div>


                    <div class="mt-24 max-w-full w-full lg:max-w-full">

                    <div class="mb-8 block ml-32"><p class="text-4xl font-lato">Check if your friends have it</p></div>

                    <div class="block ml-32 mr-24">
                        <input class="appearance-none w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-white focus:border-gray-500" type="text" placeholder="Enter item/recipe name" select></input>
                    </div>

                </div>
            </div>
    
        )
    }
}