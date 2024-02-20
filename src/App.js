import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import './App.css';
import Header from './Header';
import ItemList from './ItemList';
import Footer from './Footer';


function App() {
  const[addNewitem,setAddnewitem]=useState('');
  const[newItem,setnewItem]=useState([])
    const API_URL="http://localhost:3000/newItem";
    useEffect(()=>{
        const fetchdata=async()=>{
            try{
                    const receiveurl=await fetch(API_URL);
                    console.log(receiveurl);
                    const convertData=await receiveurl.json();
                    setnewItem(convertData)
            }
            catch(err){
                    console.log(err);
            }
        }
        (async()=>await fetchdata())()
    },[])
const handlechecked=(id)=>{
    const updateItems=newItem.map((item)=>item.id===id ?{...item,checked : !item.checked}:item);
    setnewItem(updateItems);
}
const handledelete=(id)=>{
    const del=newItem.filter((item)=>item.id!==id)
    setnewItem(del)
}
const handlesumbit=(e)=>{
    e.preventDefault()
    if(!addNewitem) return;
    insertItems(addNewitem)
    setAddnewitem('')
}
const insertItems=(todo)=>{
    const id=newItem.length ? newItem[newItem.length-1].id+1:1
    const ai={id,checked:false,todo}
    const insitem=[...newItem,ai]
    setnewItem(insitem)
}
  return (
    <div>
       <Header/>
       <AddItem 
          addNewitem={addNewitem}
          setAddnewitem={setAddnewitem}
          handlesumbit={handlesumbit}
       />
       <ItemList
          newItem={newItem}
          setnewItem={setnewItem}
          handlechecked={handlechecked}
          handledelete={handledelete}
       />
       <Footer
        length={newItem.length}
       />
    </div>
  );
}

export default App;
