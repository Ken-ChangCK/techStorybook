import React from "react";
import CharkaButton from "../components/ChakraButton/CharkaButton";

export default {
  title: "Chakra/Button",
  component: CharkaButton,
};

export const Success = () => (
  <CharkaButton colorScheme="green">Green</CharkaButton>
);
export const Danger = () => <CharkaButton colorScheme="red">Red</CharkaButton>;
