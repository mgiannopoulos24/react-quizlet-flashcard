import React from "react";

import { storiesOf } from "@storybook/react";

import FlashCard from "../Components/FlashCard/FlashCard";

const stories = storiesOf("Flashcard", module);

stories.add("default", () => {
  return (
    <div className="storyContainer">
      <FlashCard height="340px" width="560px" />
    </div>
  );
});
