import React from "react";
import "./NewsCard.scss";

const NewsCard = ({ title, url, urlToImage, content }) => {
  const randomImg = "path/to/default/image.jpg"; // Default image if no URL is provided

  return (
    <div className="news-card">
      <img src={urlToImage ? urlToImage : randomImg} alt={title || "News image"} />
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
