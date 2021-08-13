import React from "react";
import Navbar from "../../components/Navbar";
import Style from "./style.module.css";

function index() {
  const handleClick = () => {
    const Client_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const Response_Type = "token";
    const Redirect_URI = "https://generasi-gigih-homework-zeta.vercel.app";
    const Scope = "playlist-modify-private user-library-read";
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${Client_ID}&response_type=${Response_Type}&redirect_uri=${Redirect_URI}&scope=${Scope}&show_dialog=true`;
  };

  return (
    <div>
      <Navbar handleClick={handleClick} />
      <div className={Style.container}>
        <div className={Style.left}>
          <h1>You bring the passion, we bring the music.</h1>
          <p>
            Get playlists and albums inspired by the artists and genres you're
            listening to. 3 months free, then
            <span className={Style.leftPrice}> $9.99 / month</span>.
          </p>
          <div className={Style.btnAction} onClick={handleClick}>
            Get Started
          </div>
        </div>
        <div className={Style.right}>
          <img
            src={process.env.PUBLIC_URL + "/images/valen-music.png"}
            alt="music"
          />
        </div>
      </div>
    </div>
  );
}

export default index;
