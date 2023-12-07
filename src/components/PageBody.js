import React from "react";
import '../styles/page.css'
import Sidebar from "./SideBar";
import Main from "./Main";

const PageBody = () =>{
    return(
        <div className="page-body">
            <Sidebar></Sidebar>
            <Main></Main>
        </div>
    )
}
export default PageBody