import { React, useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Image1 from "../Images/news2.png";
import Image2 from "../Images/news3.png";
import Image3 from "../Images/news4.png";
import Image4 from "../Images/news5.png";
import Image5 from "../Images/news6.png";
import InfiniteScroll
    from "react-infinite-scroll-component";

function News(props) {
    let category = props.category;
    let [articles, setArticles] = useState([]);
    let [totalResults, setTotalResults] = useState(0);
    let [page, setPage] = useState(1);

    let resultNews = async () => {
        const url =
            `https://newsapi.org/v2/top-headlines?country=bg&category=${category}&page=${page}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
    };

    useEffect(() => {
        resultNews();
    }, []);

    let fetchData = async () => {
        const url =
            `https://newsapi.org/v2/top-headlines?country=bg&category=${category}&page=${page + 1
            }&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
    };
    const fallbackImages = [Image1, Image2, Image3, Image4, Image5];

    return (
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchData}
            hasMore={
                articles.length < totalResults
            }
            loader={
                <h4 className="text-center">
                    Зареждане...
                </h4>}
            endMessage={
                <p style={{ textAlign: "center" }}>
                    <b>Ура! Успя да прочетеш всичко.</b>
                </p>
            }
        >
           <div className="container my-3">
                <div className="row">
                    {articles.map((element, index) => {
                        const fallbackImage = fallbackImages[index % fallbackImages.length];

                        return (
                            <div className="col-md-4 d-flex my-3" key={element.url}>
                                <NewsItem
                                    sourceName={element.source.name}
                                    title={element.title}
                                    desc={element.description}
                                    imageURL={element.urlToImage || fallbackImage}
                                    newsUrl={element.url}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </InfiniteScroll>
    );
}

export default News;