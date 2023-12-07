import React from "react";
import '../styles/page.css'
import LeftArticle from "./LeftArticle";
import RightArticle from "./RightArticle";

const RowArticleContainer = (props) => {
    if (props.reversed == 'false') {
        return (
            <div className="row-article-container">
                <LeftArticle src={props.data[0].photo} title={props.data[0].title} topic={props.data[0].topic}></LeftArticle>
                <RightArticle src={props.data[1].photo} title={props.data[1].title} topic={props.data[1].topic}></RightArticle>
                <RightArticle src={props.data[2].photo} title={props.data[2].title} topic={props.data[2].topic}></RightArticle>
            </div>
        )
    }
    else if (props.reversed == 'true') {
        return (
            <div className="row-article-container">
                <RightArticle src={props.data[0].photo} title={props.data[0].title} topic={props.data[0].topic}></RightArticle>
                <RightArticle src={props.data[1].photo} title={props.data[1].title} topic={props.data[1].topic}></RightArticle>
                <LeftArticle src={props.data[2].photo} title={props.data[2].title} topic={props.data[2].topic}></LeftArticle>

            </div>
        )
    }
}
export default RowArticleContainer