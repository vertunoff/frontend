import React from "react";
import '../styles/page.css'

const MenuButton = (props) =>{
    return(
        <div className={`${props.button_type}-button`}>
            <button>{props.name}</button>
        </div>
    )
}
export default MenuButton