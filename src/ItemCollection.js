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
                <h2 class="text-4xl ml-32 inline"> Item Collection </h2>
                <div class="pb-4 inline-block">
                    <input 
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" 
                        id="item-collection-search" 
                        type="text" 
                        placeholder="Search for an item" 
                        onChange = {e => setSearchTerm(e.target.value)}
                        onKeyPress= {e => handleKeyPress(e)}
                    />
                </div>
            <div class="justify-center flex-wrap lg:flex pl-10 ">
            
            {
                searchTerm !== "" ? 
                searchedItem.map((item) => {
                    return(
                        <div class="px-10 pb-5" key={item.name['name-USen'] + " " + item.variant + " " + item.pattern} onClick={() => toggleHidden(item.name['name-USen'] + " " + item.variant + " " + item.pattern)} >
                        <div class="relative max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                            
                            <div class="absolute collected hidden" id={item.name['name-USen'] + " " + item.variant + " " + item.pattern}>
                                {/* <i class="far fa-check-circle"></i> */}
                                <img src={stamp} />
                            </div>
                            <div class="" id={item.name['name-USen'] + " " + item.variant + " " + item.pattern + " img"}>
                            <img class="mx-auto object-cover object-center" src={item.image_uri} alt="avatar" />
                            
                            <div class="py-4 px-6">
                                <h1 class="text-2xl font-semibold text-gray-800">{item.name['name-USen']}</h1>
                                <div class="flex items-center mt-4 text-gray-700">
                                    <i class="fas fa-palette"></i>
                                    <h1 class="px-2 text-sm">{item.variant}</h1>
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
                                {/* <i class="far fa-check-circle"></i> */}
                                <img src={stamp} />
                            </div>
                            <div class="" id={item.name['name-USen'] + " " + item.variant + " " + item.pattern + " img"}>
                            <img class="mx-auto object-cover object-center" src={item.image_uri} alt="avatar" />
                            
                            <div class="py-4 px-6">
                                <h1 class="text-2xl font-semibold text-gray-800">{item.name['name-USen']}</h1>
                                <div class="flex items-center mt-4 text-gray-700">
                                    <i class="fas fa-palette"></i>
                                    <h1 class="px-2 text-sm">{item.variant}</h1>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                        <div class="px-4 flex items-center text-gray-700">
                            <i class="fas fa-user-friends"></i>
                            <h1 class="px-2 text-sm">Your friend has this!</h1>
                        </div>
                        </div>)
            })}
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