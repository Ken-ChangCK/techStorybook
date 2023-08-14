// Subscription.stories.js
import React from "react";
import { Button } from "../components/Button/Button";
import { Large } from "./Input.stories";

export default {
  title: "Form/Subscription",
};

// export const PrimarySubscription = () => (
//   <>
//     <Large />
//     <Primary />
//   </>
// );

export const PrimarySubscription = () => (
  <section>
    <Large />
    <Button primary label="Primary" />
  </section>
);
PrimarySubscription.storyName = "Primary Subscription";
