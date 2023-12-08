import React from "react";
import '../styles/page.css'

const RightArticle = (props) => {
    return (
        <div className="small-article">
            <img src={props.src} alt="article"></img>
            <div className="article-topic">{props.topic}</div>
            <div className="article-title">{props.title}</div>
            <div className="article-resource">{props.resource_name}</div>
        </div>
    )
}
export default RightArticle