import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
// import "./Button.css";

function index({ text }) {
  return (
    <ButtonGroup size="sm" isAttached variant="outline">
      <Button mr="-px"> {text}</Button>
      <IconButton aria-label="Add to friends" icon={<AddIcon />} />
    </ButtonGroup>
  );
}

export default index;
