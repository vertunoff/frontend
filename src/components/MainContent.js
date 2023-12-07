import React, { useEffect, useState } from "react";
import '../styles/page.css'
import SearchBar from "./SearchBar";
import RowArticleContainer from "./RowArticleContainer";
import axios from "axios";
const MainContent = () => {
    const [articles, setArcticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isLoading2, setIsLoading2] = useState(true)
    useEffect(fetchData, [])
    function fetchData(){
        axios
        .get('http://127.0.0.1:8000/')
        .then(data =>{
            // localStorage.setItem('news', JSON.stringify(data))
            setArcticles(data.data)
            console.log(data)
            setIsLoading(false)
        })
    }
    if (isLoading){
        return(
            <div>asdasd</div>
        )
    }
    return(
        <div className="main-content">
            <SearchBar></SearchBar>
            <RowArticleContainer reversed='false' data={articles}></RowArticleContainer>
            <RowArticleContainer reversed='true' data={articles}></RowArticleContainer>
        </div>
    )
}
export default MainContent