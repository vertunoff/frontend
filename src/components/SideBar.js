import React from "react";
import '../styles/page.css'
import Icon from "./Icon";
import MenuButton from "./MenuButton";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <Icon></Icon>
            <MenuButton name="ПОСЛЕДНИЕ" button_type='menu'></MenuButton>
            <MenuButton name="ЭКОНОМИКА" button_type='menu'></MenuButton>
            <MenuButton name="СПОРТ" button_type='menu'></MenuButton>
            <MenuButton name="НАУКА" button_type='menu'></MenuButton>
            
        </div>
    )
}
export default Sidebar