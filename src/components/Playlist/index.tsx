import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../Redux/hooks";
import Style from "./style.module.css";
// import { getPlaylistUser } from "../../Util/Services";

function Index() {
  const Token = useAppSelector(state => state.token.token);

  useEffect(() => {
    // getPlaylistUser(Token).then(res => console.log(res));
  }, [Token]);

  return (
    <div>
      <li>
        <Link to="/create-playlist" className={Style.menuLink}>
          <i className="fas fa-headphones-alt" />
          Lofi Hipho
        </Link>
      </li>
      <li>
        <Link to="/liked-song" className={Style.menuLink}>
          <i className="fas fa-headphones-alt" />
          Jepun
        </Link>
      </li>
    </div>
  );
}

export default Index;
