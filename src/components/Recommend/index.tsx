import React, { useEffect, useState } from "react";
import CardTrack from "../Tracks/CardTrack";
import { getRecommend } from "../../Util/Services";
import { useAppSelector } from "../../Redux/hooks";
import { Grid, Skeleton } from "@chakra-ui/react";
import { Track } from "../../Types/trackType";

function Index() {
  const Token = useAppSelector(state => state.token.token);
  const [Recommend, setRecommend] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRecommend(Token)
      .then(res => setRecommend(res.tracks))
      .then(() => setLoading(false));
  }, [Token]);

  return (
    <Grid templateColumns="1ft" rowGap={3} py={3}>
      {Recommend.map((rec: Track) => (
        <Skeleton isLoaded={!loading}>
          <CardTrack
            key={rec.uri}
            image={rec.album.images[0].url}
            title={rec.name}
            artist={rec.artists[0].name}
            album={rec.album.name}
            url={rec.external_urls.spotify}
            btnText="Play"
          />
        </Skeleton>
      ))}
    </Grid>
  );
}

export default Index;
