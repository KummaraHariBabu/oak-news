import React, { useEffect, useState } from "react";
import "./Search.scss";
import { useLocation } from "react-router-dom";
import NewsCard from "../../components/newscard/NewsCard"
const Search = () => {
  const [news, setNews] = useState("");
  const { state } = useLocation();

  //api key
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?q=${state}&apiKey=${apiKey}`;

  //fetching data
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
      .catch((err) => console.log(err));
  },[]);
  console.log(news)
  return (
    <div className="search-page">
      <h1>
        News About : <span>{state.toUpperCase()}</span>
      </h1>
      <div className="search-news">
        {!news && <h1>The searched word didn't matched</h1>}
        {news && news.map((item,index)=><NewsCard key={index} {...item}/>)}
      </div>
    </div>
  );
};

export default Search;
