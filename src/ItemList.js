import React from "react";

const ItemList=({newItem,handlechecked,handledelete})=>{
  
    return(
        <div className="ItemList">
            {(newItem.length)?(
                <ul className="item" >
                {newItem.map((item)=>(
                     <li key={item.id}> 
                     <input
                       type="checkbox"
                       onChange={()=>handlechecked(item.id)}
                       checked={item.checked}
                     />
                     <label>{item.todo}</label>
                     <button onClick={()=>handledelete(item.id)}>
                             delete
                     </button>
                   </li>
                ))}
            </ul>
            ):
            (<p>list is Empty</p>)}
                 
        
        </div>
       
        
    )
}
export default ItemList;