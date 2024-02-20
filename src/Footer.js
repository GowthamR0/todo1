import React from "react";
const Footer=({length})=>{
    return(
        <h3 id='Header'>{(length>1)?`${length} works to do`:`work to do`}</h3>
    )
}
export default Footer;