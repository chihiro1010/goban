import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { IState } from "../page";

interface IStateAndTurnProps {
  item: IState;
  turn: boolean;
  setState: Dispatch<SetStateAction<IState[]>>;
  setTurn: Dispatch<SetStateAction<boolean>>;
}

const Eye: React.FC<IStateAndTurnProps> = ({
  item,
  turn,
  setState,
  setTurn,
}) => {
  //碁石を配置
  const putPiece = (item: IState): void => {
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
  const getImagePath = (item: IState): string => {
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
    <button onClick={() => putPiece(item)}>
      <Image
        src={getImagePath(item)}
        alt={item.state}
        width={50}
        height={50}
        priority
        className={getRotate(item.rowCol)}
      ></Image>
    </button>
  );
};

export default Eye;
