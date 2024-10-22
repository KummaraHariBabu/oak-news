import React, { useContext, useEffect, useState } from "react";
import "../home/Home.scss";
import Slider from "../../components/slider/Slider";
import axios from "axios";
import NewsCard from "../../components/newscard/NewsCard";
import Spinner from "../../components/spinner/Spinner";
import { ThemeContext } from "../../context/ThemeContext";
import Theme from "../../components/theme/Theme";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  //imported themecontext for theme change
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  useEffect(() => {
    const cachedNews = localStorage.getItem("newsData");
    if (cachedNews) {
      setNews(JSON.parse(cachedNews));
    } else {
      getNews();
    }
  }, []);

  const getNews = async () => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      setNews(data.articles);
      localStorage.setItem("newsData", JSON.stringify(data.articles));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const sliderNews = news?.splice(0, 3);
  return (
    <div
      className="home-container"
      style={{ backgroundColor: darkMode ? "orange" : "#cbc8c8" }}
    >
      <Theme />
      <div className="slider">
        <Slider sliderNews={sliderNews} />
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
