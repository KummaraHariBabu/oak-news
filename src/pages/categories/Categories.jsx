import React, { useEffect, useState } from "react";
import "./Categories.scss";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
import NewsCard from "../../components/newscard/NewsCard";
const Categories = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  console.log(state.category);
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${state.category}&apiKey=${apiKey}`;

  const getNews = async () => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      setNews(data.articles);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getNews();
  }, []);
  console.log(news);

  //accessing key value

  return (
    <div className="categories-container">
      <div className="search-by-country">
        <form className="form">
          <input type="text" placeholder="ex:us,tr,jp,mx.."/>
          <button type="submit">Filter Country</button>
        </form>
      </div>

      <div className="categories-list">
        {loading && <Spinner />}
        {news.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
