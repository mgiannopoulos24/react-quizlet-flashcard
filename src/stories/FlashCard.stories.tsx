import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("Flashcard", module);
import "./storyStyle.scss";

import Flashcard from "../Components/Flashcard/Flashcard";

stories.add("default", () => {
  return (
    <div className="storyContainer">
      <Flashcard
        style={{
          margin: "auto",
        }}
        frontHTML="<h1>Front</h1>"
        backHTML="<h1>Back</h1>"
      />
    </div>
  );
});
