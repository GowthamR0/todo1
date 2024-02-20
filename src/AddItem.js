import React from "react";
const AddItem=({addNewitem,setAddnewitem,handlesumbit})=>{
    return(
        <form onSubmit={handlesumbit}>
            <input
            type="text"
            placeholder="Add new Items"
            value={addNewitem}
            onChange={(e)=>setAddnewitem(e.target.value)}
            />
            <button
            type="submit"
            >
                ADD
            </button>
        </form>
    )
}
export default AddItem;