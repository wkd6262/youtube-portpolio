import React from "react";

import { todayText } from "../../data/today";
import { Link } from "react-router-dom";

const Today = () => {
  return (
    <section id="today">
      <div className="today_inner">
        <div className="today_thumb play_icon">
          <Link to={todayText[0].page}>
            <img src={todayText[0].img} alt={todayText[0].title} />
          </Link>
        </div>
        <div className="today_text">
          <span className="today">today!</span>
          <Link to={todayText[0].page}>
            <h3 className="title">{todayText[0].title}</h3>
          </Link>
          <p className="desc">{todayText[0].desc}</p>
          <div className="info">
            <Link to={`/channel/${todayText[0].channelId}`}>
              <span className="author">{todayText[0].author}</span>
            </Link>
            <span className="date">{todayText[0].date}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Today;
