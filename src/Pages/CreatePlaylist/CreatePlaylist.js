import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/Card";
import Bubble from "../../components/Button/Bubble";
import Form from "../../components/Form";
import { getTrackData, filterData, createPlaylist } from "../../Util/Services";
import { trackSelect, trackDeselect } from "../../Redux/selectedSlice";
import {storeTrack} from "../../Redux/trackSlice";
import Style from "./style.module.css";
import Search from "../../components/Search/Index";
import Profile from "../../components/Profile/Profile";

function Index() {
  const Tracks = useSelector(state => state.track.track);
  const TrackSelected = useSelector(state => state.selected.selected);
  const [Create, setCreate] = useState(false);
  const Token = useSelector(state => state.token.token);
  const User = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const handleDeselect = data => {
    dispatch(trackDeselect(TrackSelected.filter(T => T.uri !== data.uri)));
  };

  const handleSelect = data => {
    dispatch(trackSelect([data, ...TrackSelected]));
  };

  const handleSearch = e => {
    e.preventDefault();
    const query = e.target.query.value;
    getTrackData(query, Token).then(data =>
      TrackSelected.length > 0
        ? dispatch(storeTrack(filterData(data.tracks.items, TrackSelected)))
        : dispatch(storeTrack(data.tracks.items))
    );
  };

  const handleForm = () => {
    setCreate(!Create);
  };

  const handleCreate = async e => {
    e.preventDefault();
    if (TrackSelected.length > 0) {
      createPlaylist(e, User, Token, TrackSelected);
      alert("Playlist Created!");
      dispatch(trackSelect([]));
      setCreate(false);
    } else {
      alert("You need songs to make a playlist, choose some!");
    }
  };

  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <Search handleSubmit={handleSearch} />
        <Profile />
      </div>
      <div className={Style.title}>
        <p>Create Playlist</p>
        {TrackSelected.length > 0 && (
          <Bubble
            handleForm={handleForm}
            text={Create ? "Cancel" : "Create Playlist"}
          />
        )}
      </div>
      {Create && <Form handleCreate={handleCreate} />}
      <div className={Style.cardItem}>
        {Tracks.map(Track =>
          TrackSelected.find(S => S.uri === Track.uri) ? (
            <Card
              key={Track.uri}
              image={Track.album.images[0].url}
              title={Track.name}
              artist={Track.artists[0].name}
              album={Track.album.name}
              url={Track.album.external_urls.spotify}
              btnText="deselect"
              handleSelect={() => handleDeselect(Track)}
            />
          ) : (
            <Card
              key={Track.uri}
              image={Track.album.images[0].url}
              title={Track.name}
              artist={Track.artists[0].name}
              album={Track.album.name}
              url={Track.album.external_urls.spotify}
              btnText="select"
              handleSelect={() => handleSelect(Track)}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Index;
