"use client";

import Image from "next/image";
import { useState } from "react";

interface State {
  id: number;
  state: string;
}

export default function Home() {
  const [state, setState] = useState<Array<State>>([
    { id: 1, state: "none" },
    { id: 2, state: "none" },
    { id: 3, state: "none" },
    { id: 4, state: "none" },
    { id: 5, state: "none" },
    { id: 6, state: "none" },
    { id: 7, state: "none" },
    { id: 8, state: "none" },
    { id: 9, state: "none" },
    { id: 10, state: "none" },
    { id: 11, state: "none" },
    { id: 12, state: "none" },
    { id: 13, state: "none" },
    { id: 14, state: "none" },
    { id: 15, state: "none" },
    { id: 16, state: "none" },
    { id: 17, state: "none" },
    { id: 18, state: "none" },
    { id: 19, state: "none" },
    { id: 20, state: "none" },
    { id: 21, state: "none" },
    { id: 22, state: "none" },
    { id: 23, state: "none" },
    { id: 24, state: "none" },
    { id: 25, state: "none" },
    { id: 26, state: "none" },
    { id: 27, state: "none" },
    { id: 28, state: "none" },
    { id: 29, state: "none" },
    { id: 30, state: "none" },
    { id: 31, state: "none" },
    { id: 32, state: "none" },
    { id: 33, state: "none" },
    { id: 34, state: "none" },
    { id: 35, state: "none" },
    { id: 36, state: "none" },
    { id: 37, state: "none" },
    { id: 38, state: "none" },
    { id: 39, state: "none" },
    { id: 40, state: "none" },
    { id: 41, state: "none" },
    { id: 42, state: "none" },
    { id: 43, state: "none" },
    { id: 44, state: "none" },
    { id: 45, state: "none" },
    { id: 46, state: "none" },
    { id: 47, state: "none" },
    { id: 48, state: "none" },
    { id: 49, state: "none" },
    { id: 50, state: "none" },
    { id: 51, state: "none" },
    { id: 52, state: "none" },
    { id: 53, state: "none" },
    { id: 54, state: "none" },
    { id: 55, state: "none" },
    { id: 56, state: "none" },
    { id: 57, state: "none" },
    { id: 58, state: "none" },
    { id: 59, state: "none" },
    { id: 60, state: "none" },
    { id: 61, state: "none" },
    { id: 62, state: "none" },
    { id: 63, state: "none" },
    { id: 64, state: "none" },
    { id: 65, state: "none" },
    { id: 66, state: "none" },
    { id: 67, state: "none" },
    { id: 68, state: "none" },
    { id: 69, state: "none" },
    { id: 70, state: "none" },
    { id: 71, state: "none" },
    { id: 72, state: "none" },
    { id: 73, state: "none" },
    { id: 74, state: "none" },
    { id: 75, state: "none" },
    { id: 76, state: "none" },
    { id: 77, state: "none" },
    { id: 78, state: "none" },
    { id: 79, state: "none" },
    { id: 80, state: "none" },
    { id: 81, state: "none" },
  ]);
  const [turn, setTrun] = useState<Boolean>(false);

  const putPiece = (item: State): void => {
    if (item.state === "none") {
      setState((prev) => {
        return [...prev].map((prevItem) => {
          if (prevItem.id === item.id) {
            return {
              id: item.id,
              state: turn ? "black" : "white",
            };
          } else {
            return prevItem;
          }
        });
      });
      setTrun(!turn);
    }
  };

  return (
    <main className="bg-slate-800">
      <div className="flex flex-wrap content-center w-96 m-auto justify-center  h-screen">
        {state.map((item) => (
          <button key={item.id} onClick={() => putPiece(item)}>
            <Image
              src={"/" + item.state + ".svg"}
              alt="黒"
              width={40}
              height={40}
              priority
            ></Image>
          </button>
        ))}
      </div>
    </main>
  );
}
