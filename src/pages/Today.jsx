import React from "react";
import Main from "../components/section/Main";
import { todayText } from "../data/today";
import { Link } from "react-router-dom";

const Today = () => {
  return (
    <Main title="유튜브 오늘">
      <section className="todayPage">
        <h2>오늘의 추천 영상입니다.</h2>
        {todayText.map((today, key) => (
          <div className="today_inner" key={key}>
            <div className="today_thumb play_icon">
              <Link to={today.page}>
                <img src={today.img} alt={today.title} />
              </Link>
            </div>
            <div className="today_text">
              <span className="today">today!</span>
              <Link to={today.page}>
                <h3 className="title">{today.title}</h3>
              </Link>
              <p className="desc">{today.desc}</p>
              <div className="info">
                <Link to={`/channel/${today.channelId}`}>
                  <span className="author">{today.author}</span>
                </Link>
                <span className="date">{today.date}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Main>
  );
};

export default Today;
