"use client";

import { useState } from "react";

import Board from "./components/Board";
import Navi from "./components/Navi";

export interface IState {
  id: number;
  state: string; //碁石の色
  rowCol: number[]; //行・列
  corner?: boolean; //角
  tip?: boolean; //縁
  star?: boolean; //星
}

const Home: React.FC = () => {
  const [turn, setTurn] = useState<boolean>(false);

  return (
    <div className="box-border h-[100vh] bg-slate-800">
      <Board turn={turn} setTurn={setTurn} />
      <Navi turn={turn} />
    </div>
  );
};

export default Home;
