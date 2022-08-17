import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("Flashcard", module);
import "./storyStyle.scss";

import FlashCard from "../Components/FlashCard/FlashCard";

stories.add("default", () => {
  return (
    <div className="storyContainer">
      <FlashCard height="340px" width="560px" />
    </div>
  );
});
