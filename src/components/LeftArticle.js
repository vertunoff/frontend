import React from "react";
import '../styles/page.css'

const LeftArticle = (props) => {
    return (
        <div className="left-article-container">
            <img src={props.src} alt="article"></img>
            <div className="article-topic">{props.topic}</div>
            <div className="article-title">{props.title}</div>
        </div>
    )
}
export default LeftArticle