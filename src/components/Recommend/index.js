import React, { useEffect, useState } from "react";
import Card from "../Card";
import { getRecommend } from "../../Util/Services";
import { useSelector } from "react-redux";
import { Grid, Skeleton } from "@chakra-ui/react";

function Index() {
  const Token = useSelector(state => state.token.token);
  const [Recommend, setRecommend] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRecommend(Token)
      .then(res => setRecommend(res.tracks))
      .then(() => setLoading(false));
  }, [Token]);

  return (
    <Grid templateColumns="1ft" rowGap={3}>
      {Recommend.map(rec => (
        <Skeleton isLoaded={!loading} speed="1.2">
          <Card
            key={rec.uri}
            image={rec.album.images[0].url}
            title={rec.name}
            artist={rec.artists[0].name}
            album={rec.album.name}
            url={rec.album.external_urls.spotify}
            btnText="Play"
          />
        </Skeleton>
      ))}
    </Grid>
  );
}

export default Index;
