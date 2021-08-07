import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardTrack from "../../components/Track";
import Data from "../../Constants/DataDummy";
import Bubble from "../../components/Button/Bubble";
import Form from "../../components/Form";
import { getTrackData, filterData, createPlaylist } from "../../Util/Services";
import { trackSelect, trackDeselect } from "../../Redux/selectedSlice";
import { storeTrack } from "../../Redux/trackSlice";
import Style from "./style.module.css";
import Search from "../../components/Search/Index";
import Profile from "../../components/Profile/Profile";
import { Skeleton, Text } from "@chakra-ui/react";

function Index() {
  const Tracks = useSelector(state => state.track.track);
  const TrackSelected = useSelector(state => state.selected.selected);
  const [Create, setCreate] = useState(false);
  const Token = useSelector(state => state.token.token);
  const User = useSelector(state => state.user.user);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    if (query !== "") {
      getTrackData(query, Token)
        .then(data =>
          TrackSelected.length > 0
            ? dispatch(storeTrack(filterData(data.tracks.items, TrackSelected)))
            : dispatch(storeTrack(data.tracks.items))
        )
        .then(() => setLoading(false));
    } else {
      dispatch(storeTrack(filterData(Data, TrackSelected)));
      setLoading(false);
    }
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
        <Text
          fontSize="xl"
          fontWeight="600"
          color="rgb(143, 145, 179)"
          fontFamily="Poppins, sans-serif"
          mb={1}
        >
          Create Playlist
        </Text>
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
            <CardTrack
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
            <Skeleton isLoaded={!loading} speed="1.2">
              <CardTrack
                key={Track.uri}
                image={Track.album.images[0].url}
                title={Track.name}
                artist={Track.artists[0].name}
                album={Track.album.name}
                url={Track.album.external_urls.spotify}
                btnText="select"
                handleSelect={() => handleSelect(Track)}
              />
            </Skeleton>
          )
        )}
      </div>
    </div>
  );
}

export default Index;
