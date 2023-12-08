import React from "react";
import '../styles/page.css'
import LeftArticle from "./LeftArticle";
import RightArticle from "./RightArticle";

const RowArticleContainer = (props) => {
    if (props.reversed === 'false') {
        return (
            <div className="row-article-container">
                <LeftArticle src={props.data[7].photo} title={props.data[7].title} topic={props.data[7].topic} resource_name={props.data[7].resource_name}></LeftArticle>
                <div className="small-article-containers">
                    <RightArticle src={props.data[4].photo} title={props.data[4].title} topic={props.data[4].topic} resource_name={props.data[4].resource_name}></RightArticle>
                    <RightArticle src={props.data[6].photo} title={props.data[6].title} topic={props.data[6].topic} resource_name={props.data[6].resource_name}></RightArticle>
                </div>
                <div className="small-article-containers">
                    <RightArticle src={props.data[0].photo} title={props.data[0].title} topic={props.data[0].topic} resource_name={props.data[0].resource_name}></RightArticle>
                    <RightArticle src={props.data[1].photo} title={props.data[1].title} topic={props.data[1].topic} resource_name={props.data[1].resource_name}></RightArticle>
                </div>
            </div>
        )
    }
    else if (props.reversed === 'true') {
        return (
            <div className="row-article-container">
                <div className="small-article-containers">
                    <RightArticle src={props.data[2].photo} title={props.data[2].title} topic={props.data[2].topic} resource_name={props.data[2].resource_name}></RightArticle>
                    <RightArticle src={props.data[3].photo} title={props.data[3].title} topic={props.data[3].topic} resource_name={props.data[3].resource_name}></RightArticle>
                </div>
                
                <LeftArticle src={props.data[5].photo} title={props.data[5].title} topic={props.data[5].topic} resource_name={props.data[5].resource_name}></LeftArticle>

            </div>
        )
    }
}
export default RowArticleContainer