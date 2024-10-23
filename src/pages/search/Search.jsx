import React, { useEffect, useState } from "react";
import "./Search.scss";
import { useLocation } from "react-router-dom";
import NewsCard from "../../components/newscard/NewsCard";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";

const Search = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();

  //api key
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?q=${state}&apiKey=${apiKey}`;

  //fetching data
  const afterSearchedData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url); // Correct destructuring here
      setNews(data.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    afterSearchedData();
  }, [url]);

  return (
    <div className="search-page">
      <h1>
        News About : <span>{state.toUpperCase()}</span>
      </h1>
      <div className="search-news">
        <div className="loading">{loading && <Spinner />}</div>
        <div className="error">
          {!news.length && <h1>The searched word didn't match any results.</h1>}
        </div>

        {news.length > 0 && news.map((item, index) => <NewsCard key={index} {...item} />)}
      </div>
    </div>
  );
};

export default Search;
