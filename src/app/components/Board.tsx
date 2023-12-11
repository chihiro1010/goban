import React, { Dispatch, SetStateAction, useState } from "react";
import { IState } from "../page";
import { data } from "../data";

import Eye from "./Eye";

interface ITurnProps {
  turn: boolean;
  setTurn: Dispatch<SetStateAction<boolean>>;
}

const Board: React.FC<ITurnProps> = ({ turn, setTurn }) => {
  const [state, setState] = useState<Array<IState>>(data);

  return (
    <div className="flex flex-wrap content-center w-[950px] m-auto h-screen">
      {state.map((item) => (
        <Eye
          key={item.id}
          item={item}
          turn={turn}
          setState={setState}
          setTurn={setTurn}
        ></Eye>
      ))}
    </div>
  );
};

export default Board;
