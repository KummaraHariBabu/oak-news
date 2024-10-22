import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const useNews = ( initialCategory = "", initialCountry = "us" ) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [country, setCountry] = useState(initialCountry);

  const apiKey = process.env.REACT_APP_API_KEY;

  //imported themecontext for theme change
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
  const filterUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
  
  const getNews = async (API) => {
    setLoading(true);
    try {
      const { data } = await axios(API);
      setNews(data.articles);
      //   localStorage.setItem("newsData", JSON.stringify(data.articles));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // const cachedNews = localStorage.getItem("newsData");
    // if (cachedNews) {
    //   setNews(JSON.parse(cachedNews));
    // } else {
    getNews(url);
  }, [url, theme.state.darkMode]);

  useEffect(() => {
    setCategory(initialCategory);
    setCountry(initialCountry);
  }, [initialCategory, initialCountry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getNews(filterUrl);
    setFilter("");
  };

  return {
    news,
    loading,
    filter,
    setFilter,
    country,
    setCountry,
    theme,
    handleSubmit,
    category,
    setCategory,
  };
};

export default useNews;
