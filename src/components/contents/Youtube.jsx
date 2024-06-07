import React from "react";
import { youtubeText } from "../../data/youtube";
import { Link } from "react-router-dom";

const Youtube = () => {
  return (
    <section id="youtube">
      <div className="video_inner">
        {youtubeText.map((video, key) => (
          <div className="video_thumb play_icon" key={key}>
            <Link to={`/video/${video.videoID}`}>
              <img src={video.img} alt={video.title} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Youtube;
