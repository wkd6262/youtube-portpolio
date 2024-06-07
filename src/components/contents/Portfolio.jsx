import React from "react";
import { portfolioText } from "../../data/portfolio";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <seciton id="portfolio">
      <h2>포트폴리오</h2>
      <div className="video_inner">
        {portfolioText.map((video, key) => (
          <div className="video" key={key}>
            <div className="video_thumb play_icon">
              <Link to={`/video/${video.videoId}`}>
                <img src={video.img} alt={video.title} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </seciton>
  );
};

export default Portfolio;
