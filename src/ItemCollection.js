import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function HomePage(){

    const [items, setItems] = useState([]);
    const [ spinner, setSpinner ] = useState(true);
    const [isFetching, setIsFetching] = useState(false);
    const [listItems, setListItems] = useState([]);

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
            console.log(filteredItemList.slice(0,20));
        })
    },[])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
        console.log('Loading more items!');
    }

    const fetchMoreListItems = () => {
        setTimeout(() => {
            setListItems(prevState => ([...prevState, ...items.slice(listItems.length + 1, listItems.length + 20)]));
            setIsFetching(false);
            console.log(listItems)
          }, 2000);
    }

    useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
    }, [isFetching]);

    return(
        spinner ? 
            <div class="loader"></div> 
            :
            <div class="pt-32 max-w-full w-screen lg:max-w-full">
                <h2 class="text-4xl ml-32 "> Item Collection </h2>
            <div class="justify-center flex-wrap lg:flex pl-10 ">
            
            
            {listItems.map((item)=>{
                    return (<div class="px-10 pb-5">
                    <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                        <img class="w-full h-full object-cover object-center" src={item.image_uri} alt="avatar" />
                        
                        <div class="py-4 px-6">
                            <h1 class="text-2xl font-semibold text-gray-800">{item.name['name-USen']}</h1>
                            <div class="flex items-center mt-4 text-gray-700">
                                <i class="fas fa-palette"></i>
                                <h1 class="px-2 text-sm">{item.variant}</h1>
                            </div>
                            
                        </div>
                    </div>
                    </div>)
            })}
            {isFetching && 'Loading more items...'}
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
        </div>

    )

}