import React, { useState, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import { getTrackData, filterData, createPlaylist } from "../../Util/Services";
import { storeTrack, trackSelect } from "../../Redux/trackSlice";
import { Text, Box } from "@chakra-ui/react";

import Tracks from "../../components/Tracks/";
import Form from "../../components/Form";
import Style from "./style.module.css";
import Search from "../../components/Search/Index";
import Profile from "../../components/Profile/Profile";

function Index() {
  const TrackSelected = useAppSelector(state => state.track.selected);
  const Token = useAppSelector(state => state.token.token);
  const User = useAppSelector(state => state.token.user);
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(storeTrack([]));
    dispatch(trackSelect([]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    if (query !== "") {
      getTrackData(query, Token)
        .then(data =>
          TrackSelected.length > 0
            ? dispatch(storeTrack(filterData(data.tracks.items, TrackSelected)))
            : dispatch(storeTrack(data.tracks.items))
        )
        .then(() => setLoading(false));
    }
  };

  const handleCreate = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (TrackSelected.length > 0) {
      createPlaylist(e, User, Token, TrackSelected);
      alert("Playlist Created!");
      dispatch(trackSelect([]));
    } else {
      alert("You need songs to make a playlist, choose some!");
    }
  };

  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <Text
          fontSize="xl"
          fontWeight="600"
          color="rgb(143, 145, 179)"
          fontFamily="Poppins, sans-serif"
          mb={1}
        >
          Create Playlist
        </Text>
        <Profile />
      </div>
      <Form handleCreate={handleCreate} />
      <Box p={5}>
        <Search
          handleSubmit={handleSubmit}
          handleChange={e => setQuery(e.target.value)}
        />
      </Box>
      <div className={Style.cardItem}>
        <Tracks loading={isLoading} />
      </div>
    </div>
  );
}

export default Index;
