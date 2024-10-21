import React, { useContext, useEffect, useState } from "react";
import "../home/Home.scss";
import Slider from "../../components/slider/Slider";
import axios from "axios";
import NewsCard from "../../components/newscard/NewsCard";
import Spinner from "../../components/spinner/Spinner";
import { ThemeContext } from "../../context/ThemeContext";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  //imported themecontext for theme change
  const theme = useContext(ThemeContext);
  console.log(theme);

  const getNews = async () => {
    setLoading(true);
    try {
      const {data} = await axios(url);
      setNews(data.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNews();
  }, []);
  const slidernews = news?.splice(0, 3);
  return (
    <div className="home-container">
      <div className="slider">
        <Slider slidernews={slidernews} />
      </div>
      <div className="news">
        {loading && <Spinner />}
        {news?.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
