import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
// import "./Button.css";

function index({ text }) {
  return (
    <ButtonGroup size="sm" isAttached variant="outline">
      <Button mr="-px"> {text}</Button>
    </ButtonGroup>
  );
}

export default index;
