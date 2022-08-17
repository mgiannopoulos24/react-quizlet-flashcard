import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("Flashcard", module);
import "./storyStyle.scss";

import FlashCard from "../Components/FlashCard/FlashCard";

stories.add("default", () => {
  return (
    <div className="storyContainer">
      <FlashCard
        style={{
          margin: "auto",
        }}
        frontHTML="<h1>Front</h1>"
        backHTML="<h1>Back</h1>"
      />
    </div>
  );
});
