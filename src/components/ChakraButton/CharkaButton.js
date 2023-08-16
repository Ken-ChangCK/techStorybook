import React from "react";
import { Button } from "@chakra-ui/react";

const CharkaButton = ({ colorScheme }) => {
  return (
    <div>
      <Button colorScheme={colorScheme}>{colorScheme}</Button>
    </div>
  );
};

export default CharkaButton;
