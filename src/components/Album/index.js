import React from "react";
import { Text } from "@chakra-ui/react";

function index(props) {
  return (
    <div>
      <Text fontSize="14px" color="rgb(108, 111, 119)" fontWeight="700">
        {props.artist}, {props.album}
      </Text>
    </div>
  );
}

export default index;
