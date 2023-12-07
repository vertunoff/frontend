import React from "react";
import '../styles/page.css'
import PageBody from "./PageBody";
import PageFooter from "./PageFooter";

const MainPage = () =>{
    return(
        <div className="page">
            <PageBody></PageBody>
            <PageFooter></PageFooter>
        </div>
    )
}
export default MainPage