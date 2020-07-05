import React, {useState, useEffect} from 'react';
import axios from 'axios';
import stamp from './img/stamp.png';

export default function HomePage(){

    const [items, setItems] = useState([]);
    const [ spinner, setSpinner ] = useState(true);
    const [isFetching, setIsFetching] = useState(false);
    const [listItems, setListItems] = useState([]);
    const [searchedItem, setSearchedItem] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [listView, setListView] = useState(false);

    // Equivalent of componentDidMount
    useEffect(()=>{
        setTimeout(() => setSpinner(false), 3000)
        axios.get('https://acnhapi.com/v1/houseware/')
        .then(res=>{
            const itemList = res.data;

            let itemListArray = [];

            Object.keys(itemList).forEach(function(key,index) {
                // key: the name of the object key
                // index: the ordinal position of the key within the object 

                itemList[key].length > 1 ? itemList[key].forEach((obj) => {
                    itemListArray.push(obj);
                }) : itemListArray.push(itemList[key]);

            });
            
            const filteredItemList = itemListArray.filter((obj) => {
                return obj['buy-price'] != null;
            })

            setItems(filteredItemList);
            setListItems(filteredItemList.slice(0,20));
        })
    },[])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            setIsFetching(true);
    }

    const fetchMoreListItems = () => {
        setTimeout(() => {
            setListItems(prevState => ([...prevState, ...items.slice(listItems.length + 1, listItems.length + 20)]));
            setIsFetching(false);
          }, 2000);
    }

    useEffect(() => {
        if (!isFetching && searchTerm.length > 1) return;
        fetchMoreListItems();
    }, [isFetching]);

    const toggleHidden = (id) => {
        const elem = document.getElementById(id);
        if(elem != null){elem.classList.toggle("hidden")};

        const elem2 = document.getElementById(id + " img")
        if(elem != null){elem2.classList.toggle("transparent-overlay")};
    }

    const handleKeyPress = (evt) => {
        if (evt.key === 'Enter') {
            const temp = items.filter((item) => {
                return item.name['name-USen'].includes(searchTerm);
            })
            temp.length < 1 ? setSearchedItem([{"name": {"name-USen":"Item not found" }, "image_uri":"https://acnhcdn.com/latest/ManpuIcon/Oops.png", "variant": "?????"}]): setSearchedItem(temp);
        }
    }

    return(
        spinner ? 
            <div class="loader"></div> 
            :
            <div class="pt-32 max-w-full w-screen lg:max-w-full">
                <div class="flex flex-wrap pb-8">
                    <div class="w-3/5">
                    <h2 class="text-4xl ml-32 inline"> Item Collection </h2>
                    <div class="inline-block my-auto ml-3">
                        <input 
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" 
                            id="item-collection-search" 
                            type="text" 
                            placeholder="Search for an item" 
                            onChange = {e => setSearchTerm(e.target.value)}
                            onKeyPress= {e => handleKeyPress(e)}
                        />
                    </div>
                    </div>
                    {/* Toggle button */}
                    <label 
                        for="toogleA"
                        class="content-center cursor-pointer ml-3 text-sm my-auto justify-end flex w-1/5 font-lato"
                    >
                        {/* toggle */}
                        <div class="relative inline-block">
                        {/* input */}
                        <input id="toogleA" type="checkbox" class="hidden" 
                        onClick={() => setListView(!listView)} 
                        />
                        {/* line */}
                        <div
                            class="toggle__line w-10 h-4 bg-grey-400 rounded-full shadow-inner"
                        ></div>
                        {/* dot */}
                        <div
                            class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
                        ></div>
                        </div>
                        {/* Text */}
                        <div
                        class="ml-3 text-gray-700 inline-block"
                        >
                        List View
                        </div>
                    </label>
                </div>
            <div class="justify-center flex-wrap lg:flex pl-16 pr-5">

                { listView ? 
                    <table class="table-auto w-full pb-32">
                        <thead>
                            <tr>
                            <th class="text-left border-b-4 border-gray-900 px-4 py-2 bg-gray-500 w-1/4">Item Name</th>
                            <th class="border-b-4 border-gray-900 px-4 py-2 bg-gray-500 w-1/4">Variant</th>
                            <th class="border-b-4 border-gray-900 px-4 py-2 bg-gray-500 w-1/4">Pattern</th>
                            <th class="border-b-4 border-gray-900 px-4 py-2 bg-gray-500 w-1/4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                        {listItems.map((item)=>{
                            return(
                                <tr>
                                {/* <td class="border-b border-gray-900 px-4 py-2 bg-gray-300">
                                    <img class="mx-auto img-icon object-cover object-center" src={item.image_uri} alt="avatar" />
                                </td> */}
                                <td class="border-b border-gray-900 px-4 py-2 bg-gray-300">
                                    <h1 class="text-xl font-semibold text-gray-800">{item.name['name-USen']}</h1>
                                </td>
                                <td class="text-center border-b border-gray-900 px-4 py-2 bg-gray-300">{item.variant !== null ? item.variant : "☓"}</td>
                                <td class="text-center border-b border-gray-900 px-4 py-2 bg-gray-300">{item.pattern !== null ? item.pattern : "☓"}</td>
                                <td class=" text-right border-b border-gray-900 px-4 py-2 bg-gray-300"><span class="text-2xl"><i class="fas fa-user-friends"></i><input class="ml-2" type="checkbox" /></span></td>
                                </tr>
                            )
                        })}
                            
                        </tbody>
                    </table>
                :

                    searchTerm !== "" ? 
                    searchedItem.map((item) => {
                        return(
                            <div class="px-10 pb-5" key={item.name['name-USen'] + " " + item.variant + " " + item.pattern} onClick={() => toggleHidden(item.name['name-USen'] + " " + item.variant + " " + item.pattern)} >
                            <div class="relative max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                                
                                <div class="absolute collected hidden" id={item.name['name-USen'] + " " + item.variant + " " + item.pattern}>
                                    <img src={stamp} />
                                </div>
                                <div class="" id={item.name['name-USen'] + " " + item.variant + " " + item.pattern + " img"}>
                                <img class="mx-auto object-cover object-center" src={item.image_uri} alt="avatar" />
                                
                                <div class="py-4 px-6">
                                    <h1 class="text-2xl font-semibold text-gray-800">{item.name['name-USen']}</h1>
                                    <div class="flex items-center mt-4 text-gray-700">
                                        { item.variant !== null ? <span class="flex"><i class="fas fa-palette"></i>
                                        <h1 class="px-2 text-sm">{item.variant}</h1></span> : null}
                                        { item.pattern !== null ? <span class="flex"><i class="fas fa-tint"></i>
                                        <h1 class="px-2 text-sm">{item.pattern}</h1></span> : null }
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                            <div class="px-4 flex items-center text-gray-700">
                                <i class="fas fa-user-friends"></i>
                                <h1 class="px-2 text-sm">Your friend has this!</h1>
                            </div>
                            </div>
                        )
                    })
                    : listItems.map((item)=>{
                        return (
                            <div class="px-10 pb-5" key={item.name['name-USen'] + " " + item.variant + " " + item.pattern} onClick={() => toggleHidden(item.name['name-USen'] + " " + item.variant + " " + item.pattern)} >
                            <div class="relative max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                                
                                <div class="absolute collected hidden" id={item.name['name-USen'] + " " + item.variant + " " + item.pattern}>
                                    <img src={stamp} />
                                </div>
                                <div class="" id={item.name['name-USen'] + " " + item.variant + " " + item.pattern + " img"}>
                                <img class="mx-auto object-cover object-center" src={item.image_uri} alt="avatar" />
                                
                                <div class="py-4 px-6">
                                    <h1 class="text-2xl font-semibold text-gray-800">{item.name['name-USen']}</h1>
                                    <div class="flex items-center mt-4 text-gray-700">
                                        { item.variant !== null ? <span class="flex"><i class="fas fa-palette"></i>
                                        <h1 class="px-2 text-sm">{item.variant}</h1></span> : null}
                                        { item.pattern !== null ? <span class="flex"><i class="fas fa-tint"></i>
                                        <h1 class="px-2 text-sm">{item.pattern}</h1></span> : null }
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                            <div class="px-4 flex items-center text-gray-700">
                                <i class="fas fa-user-friends"></i>
                                <h1 class="px-2 text-sm">Your friend has this!</h1>
                            </div>
                            </div>)
                    })
                }
                    
            
            
                
            {/* <div class="px-10 pb-5">
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
                    
                </div>
            </div>
            </div> */}
            

        </div>
        {isFetching && searchTerm.length < 1 ? <div class="my-4 flex w-1/5 ml-auto mr-auto justify-center bg-blue-900 text-white font-bold py-2 px-4 rounded">Loading more items...</div> : null}
        </div>

    )

}