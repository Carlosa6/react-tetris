import React from "react";
import { createStage } from '../gameHelpers'

//Components
import Display from "./Display";
import StartButton from "./StartButton";
import Stage from "./Stage";

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
    </div>
  );
};
export default Tetris;
