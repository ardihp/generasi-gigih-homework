import React from "react";
import { Text } from "@chakra-ui/react";

function index(props: {artist: string, album: string}) {
  return (
    <div>
      <Text fontSize="14px" color="rgb(108, 111, 119)" fontWeight="700" width="500px" isTruncated>
        {props.artist}, {props.album}
      </Text>
    </div>
  );
}

export default index;
