import React from "react";
import "./Categories.scss";
import { useLocation } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import NewsCard from "../../components/newscard/NewsCard";
import useNews from "../../hooks/useNews";
const Categories = () => {
  const { state } = useLocation();

  const { news, loading, filter, setFilter, handleSubmit } = useNews(
    state.category
  );

  return (
    <div className="categories-container">
      <div className="search-by-country">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="ex:us,tr,jp,mx.."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <button type="submit">Filter Country</button>
        </form>
      </div>

      <div className="categories-list">
        {loading && <Spinner />}
        {!loading && news.length === 0 && (
          <p>No news Found for this {state.category} country</p>
        )}
        {news.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
