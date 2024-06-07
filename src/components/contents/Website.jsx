import React from "react";
import { Link } from "react-router-dom";
import { websiteText } from "../../data/website";

const Website = () => {
  return (
    <section id="website">
      <h2>웹 사이트 만들기</h2>
      <div className="video_inner">
        {websiteText.map((video, key) => (
          <div className="video" key={key}>
            <div className="video_thumb play_icon">
              <Link to={`/video/${video.videoId}`}>
                <img src={video.img} alt={video.title} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Website;
