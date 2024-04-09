import React from "react";
 
function NewsItem(props) {
    let {
        desc, title, imageURL,
        newsUrl, sourceName
    } = props;
    return (
        <div className="col">
            <div className="card my-3">
                <img src={props.imageURL}
                    className="card-img-top" alt="news" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="w-100 fs-6 
                        text-body-secondary 
                        text-end">
                        - {sourceName}
                    </p>
                    <p className="card-text">{desc}</p>
                    <a href={newsUrl}
                        target="_blank"
                        className="btn btn-primary btn-sm py-2 px-2 rounded-3">
                        Прочети статията
                    </a>
                </div>
            </div>
        </div>
    );
}


export default NewsItem;