import React from "react";
import "./NewsCard.scss";
import randomImg from "../../assets/randomImg.jpeg"
const NewsCard = ({ title, url, urlToImage, content }) => {

  return (
    <div className="news-card">
      <img src={urlToImage ? urlToImage : randomImg} alt={title ||"News image"} />
      <div className="news-card-details">
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="card-details">
          <a href={url} rel="noreferrer" target="_blank" className="link">
            Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
