import React from "react";
import '../styles/page.css'

const Icon = (props) =>{
    return(
        <div className="icon">
          <img src={require("../icons/name.png")} alt="icon"></img>
        </div>
    )
}
export default Icon