"use client";

import Image from "next/image";
import { useState } from "react";

import { data } from "./data";

export interface State {
  id: number;
  state: string; //碁石の色
  rowCol: number[]; //行・列
  corner?: boolean; //角
  tip?: boolean; //縁
  star?: boolean; //星
}

const Home: React.FC = () => {
  const [state, setState] = useState<Array<State>>(data);
  const [turn, setTurn] = useState<Boolean>(false);

  //碁石を配置
  const putPiece = (item: State): void => {
    //碁石配置前の場合
    if (item.state === "none") {
      setState((prev) =>
        prev.map((prevItem) =>
          prevItem.id === item.id
            ? //ターンに応じた碁石を配置
              { ...prevItem, state: turn ? "black" : "white" }
            : prevItem
        )
      );
      setTurn((prevTurn) => !prevTurn);
    } else {
      //碁石配置済みの場合
      setState((prev) =>
        prev.map((prevItem) =>
          //配置済みの碁石を撤去
          prevItem.id === item.id ? { ...prevItem, state: "none" } : prevItem
        )
      );
      //撤去した碁石をターンにセット
      setTurn(item.state !== "white");
    }
  };

  //四隅・縁など状況に応じた盤の画像パスを取得
  const getImagePath = (item: State): string => {
    const { state, star, corner, tip } = item;
    return (
      "/" +
      state +
      (state === "none" ? (star ? "_star" : "") : "") +
      (corner ? "_corner" : tip ? "_tip" : "") +
      ".svg"
    );
  };

  //四隅・縁を回転させ、表示を調整 - Tailwind
  const getRotate = (rowCol: number[]): string => {
    return rowCol[1] === 19 && rowCol[0] !== 19
      ? " transform rotate-90"
      : rowCol[0] === 19 && rowCol[1] !== 1
      ? " transform rotate-180"
      : rowCol[1] === 1 && rowCol[0] !== 1
      ? " transform -rotate-90"
      : "";
  };

  return (
    <main className="bg-slate-800 h-full">
      <div className="flex flex-wrap content-center w-[950px] m-auto h-screen ">
        {state.map((item) => (
          <button key={item.id} onClick={() => putPiece(item)}>
            <Image
              src={getImagePath(item)}
              alt={item.state}
              width={50}
              height={50}
              priority
              className={getRotate(item.rowCol)}
            ></Image>
          </button>
        ))}
      </div>
      <div className="fixed flex flex-row top-8 left-8 m-auto py-2 px-5 items-center rounded-xl bg-slate-800 bg-opacity-50">
        <h3 className="text-white mr-3 font-semibold">次は</h3>
        <Image
          src={"/" + (turn ? "black" : "white") + "_piece.svg"}
          alt={turn ? "black" : "white"}
          width={40}
          height={40}
          priority
        ></Image>
      </div>
    </main>
  );
};

export default Home;
