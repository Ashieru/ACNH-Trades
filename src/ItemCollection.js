import React, {Component} from 'react';

export default class HomePage extends Component{
    
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div class="mt-32 justify-center max-w-full w-full lg:max-w-full lg:flex flex-wrap">

                <div class="px-10 pb-5">
                <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                    <img class="w-full h-full object-cover object-center" src="https://acnhcdn.com/latest/FtrIcon/FtrAcorsticguitar_Remake_0_0.png" alt="avatar" />
                    
                    <div class="py-4 px-6">
                        <h1 class="text-2xl font-semibold text-gray-800">Acoustic Guitar</h1>
                        <div class="flex items-center mt-4 text-gray-700">
                            <i class="fas fa-palette"></i>
                            <h1 class="px-2 text-sm">Natural</h1>
                        </div>
                        
                    </div>
                </div>
                <div class="px-4 flex items-center text-gray-700">
                    <i class="fas fa-user-friends"></i>
                    <h1 class="px-2 text-sm">Your friend has this!</h1>
                </div>
                </div>

                <div class="px-10">
                <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4 opacity-50">
                    <img class="w-full h-full object-cover object-center" src="https://acnhcdn.com/latest/FtrIcon/FtrAcorsticguitar_Remake_1_0.png" alt="avatar" />
                    
                    <div class="py-4 px-6">
                        <h1 class="text-2xl font-semibold text-gray-800">Acoustic Guitar</h1>
                        <div class="flex items-center mt-4 text-gray-700">
                            <i class="fas fa-palette"></i>
                            <h1 class="px-2 text-sm">Cherry</h1>
                        </div>
                        {/* <div class="flex items-center mt-4 text-gray-700">
                            <i class="fas fa-user-friends"></i>
                            <h1 class="px-2 text-sm">Your friend has this!</h1>
                        </div> */}
                    </div>
                </div>
                </div>
                

            </div>
    
        )
    }
}