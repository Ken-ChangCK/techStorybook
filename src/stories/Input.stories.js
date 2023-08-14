import React from "react";
import Input from "components/Input/Input";

export default {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
};

export const Small = () => <Input size="small" placeholder="Small size" />;
Small.storyName = "Small Input";

export const Medium = () => <Input size="medium" placeholder="Medium size" />;

export const Large = () => <Input size="large" placeholder="Large size" />;
