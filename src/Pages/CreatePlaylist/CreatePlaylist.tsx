import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import CardTrack from "../../components/Track";
import Data from "../../Constants/DataDummy";
import Button from "../../components/Button";
import Form from "../../components/Form";
import { getTrackData, filterData, createPlaylist } from "../../Util/Services";
import { storeTrack, trackSelect, trackDeselect } from "../../Redux/trackSlice";
import Style from "./style.module.css";
import Search from "../../components/Search/Index";
import Profile from "../../components/Profile/Profile";
import { Skeleton, Text } from "@chakra-ui/react";
import { Track } from "../../Types/trackType";

function Index() {
  const Tracks = useAppSelector(state => state.track.track);
  const TrackSelected = useAppSelector(state => state.track.selected);
  const [Create, setCreate] = useState(false);
  const Token = useAppSelector(state => state.token.token);
  const User = useAppSelector(state => state.token.user);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();

  const handleDeselect = (data: Track) => {
    dispatch(
      trackDeselect(TrackSelected.filter((T: Track) => T.uri !== data.uri))
    );
  };

  const handleSelect = (data: Track) => {
    dispatch(trackSelect([data, ...TrackSelected]));
  };

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
    } else {
      dispatch(storeTrack(filterData(Data, TrackSelected)));
      setLoading(false);
    }
  };

  const handleForm = () => {
    setCreate(!Create);
  };

  const handleCreate = async (e: React.SyntheticEvent) => {
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
        <Search
          handleSubmit={handleSubmit}
          handleChange={e => setQuery(e.target.value)}
        />
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
          <Button
            handleForm={handleForm}
            text={Create ? "Cancel" : "Create Playlist"}
          />
        )}
      </div>
      {Create && <Form handleCreate={handleCreate} />}
      <div className={Style.cardItem}>
        {Tracks.map((Track: any) =>
          TrackSelected.find((S: Track) => S.uri === Track.uri) ? (
            <CardTrack
              key={Track.uri}
              image={Track.album.images[0].url}
              title={Track.name}
              artist={Track.artists[0].name}
              album={Track.album.name}
              btnText="Deselect"
              handleSelect={() => handleDeselect(Track)}
            />
          ) : (
            <Skeleton isLoaded={!loading}>
              <CardTrack
                key={Track.uri}
                image={Track.album.images[0].url}
                title={Track.name}
                artist={Track.artists[0].name}
                album={Track.album.name}
                btnText="Select"
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
