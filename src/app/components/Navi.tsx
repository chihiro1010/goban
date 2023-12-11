import React from "react";
import Image from "next/image";

interface INaviProps {
  turn: boolean;
}

const Navi: React.FC<INaviProps> = ({ turn }) => {
  return (
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
  );
};

export default Navi;
