import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import Style from "./style.module.css";
import CreatePlaylist from "../CreatePlaylist/CreatePlaylist";
import LikedSong from "../LikedSong";
import Home from "../Home";
import Library from "../Library";

const routes = [
  {
    path: "/home",
    main: () => <Home />
  },
  {
    path: "/library",
    main: () => <Library />
  },
  {
    path: "/create-playlist",
    main: () => <CreatePlaylist />
  },
  {
    path: "/liked-song",
    main: () => <LikedSong />
  }
];

function Index() {
  return (
    <div className={Style.container}>
      <div className={Style.sidebar}>
        <Link className={Style.logo} to="/">
          J
          <i className="fas fa-compact-disc" />
          FY
        </Link>
        <ul className={Style.menu}>
          <li className={Style.menuTitle}>Recomend</li>
          <li>
            <Link to="/home" className={Style.menuLink}>
              <i className="fas fa-home" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/library" className={Style.menuLink}>
              <i className="fas fa-book" />
              Library
            </Link>
          </li>
        </ul>
        <ul className={Style.menu}>
          <li className={Style.menuTitle}>My Music</li>
          <li>
            <Link to="/create-playlist" className={Style.menuLink}>
              <i className="fas fa-plus-square" />
              Create Playlist
            </Link>
          </li>
          <li>
            <Link to="/liked-song" className={Style.menuLink}>
              <i className="fas fa-heart" />
              Liked Song
            </Link>
          </li>
        </ul>
        {/* <ul className={Style.menu}>
          <li className={Style.menuTitle}>Playlist</li>
          <Playlist />
        </ul> */}
      </div>
      <div className={Style.content}>
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route key={index} path={route.path} children={<route.main />} />
          ))}
        </Switch>
      </div>
    </div>
  );
}

export default Index;
