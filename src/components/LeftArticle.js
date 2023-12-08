import React from "react";
import '../styles/page.css'

const LeftArticle = (props) => {
    return (
        <div className="big-article-container">
            <img src={props.src} alt="article"></img>
            <div className="article-topic">{props.topic}</div>
            <div className="article-title">{props.title}</div>
            <div className="article-resource">{props.resource_name}</div>
        </div>
    )
}
export default LeftArticle