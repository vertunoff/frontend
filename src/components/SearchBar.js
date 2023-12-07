import React from "react";
import '../styles/page.css'

const SearchBar = () =>{
    return(
        <div className="search-bar">
            <img src={require("../icons/searchbar.png")}></img>
        </div>
    )
}
export default SearchBar