import React from "react";
import '../styles/page.css'
import Icon from "./Icon";
import MenuButton from "./MenuButton";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <Icon></Icon>
            <MenuButton name="последние"></MenuButton>
            <MenuButton name="политика"></MenuButton>
            <MenuButton name="экономика"></MenuButton>
            <MenuButton name="спорт"></MenuButton>
            <MenuButton name="наука"></MenuButton>
        </div>
    )
}
export default Sidebar