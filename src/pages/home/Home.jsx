import React, { useEffect } from "react";
import "../home/Home.scss";
import Slider from "../../components/slider/Slider";
import NewsCard from "../../components/newscard/NewsCard";
import Spinner from "../../components/spinner/Spinner";
import Theme from "../../components/theme/Theme";
import useNews from "../../hooks/useNews";

const Home = () => {
  const {news, loading, theme} = useNews("", "us");
  const darkMode = theme.state.darkMode;
  const sliderNews = news?.splice(0, 3);
  useEffect(() => {}, [darkMode]);
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
        {news.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
