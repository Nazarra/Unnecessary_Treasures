import React from "react";

const ThreePartArticle = (props) => {
    return(
        <>
            <div className={props.articleClassName}>
                {props.imageLocation === "imageTop" ? <img src={props.imagePath} /> : <h2>{props.articleTitle}</h2>}
                {props.imageLocation === "imageMiddle" ? <img src={props.imagePath} /> : <h3>{props.articleHeader}</h3>}
                {props.imageLocation === "imageBottom" ? <img src={props.imagePath} /> : <p>{props.articleContent}</p>}
            </div>
        </>
    )
}

export default ThreePartArticle;