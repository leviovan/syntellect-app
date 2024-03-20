import { observer } from "mobx-react-lite";

import style from "./constol1.module.css";
import { useState } from "react";
import Button from "./button/button";
type Props = {
  countBtn: string;
  setCountBtn: (value: string) => void;
  getfunc: (index: unknown) => void;
};

export const Control1 = observer(
  ({ countBtn, setCountBtn, getfunc }: Props) => {
    const [side, setSide] = useState<"left" | "right" | string>("left");
    const [countButton, setCountButton] = useState("");
    const [position, setPosition] = useState({ left: 0, right: 0 });
    let pos = position;

    const handlerinput = (value: string, side: "left" | "right" | string) => {
      setCountButton(value);
      if (!Number.isNaN(+value) && /\S/.test(value)) {
        setCountBtn(value);
        pos[side as keyof typeof position] = +value;
        setPosition(pos);
      }
    };

    return (
      <div className={style.main}>
        <div>
          {[...Array(position.left)].map((i: any) => (
            <>
              <Button getfunc={getfunc} />
            </>
          ))}
        </div>
        <div className={style.container}>
          Введите число кнопок
          <input
            placeholder="5"
            className={style.input}
            type="text"
            value={countBtn}
            onChange={(e) => handlerinput(e.currentTarget.value, side)}
          />
          <label htmlFor="left">
            <input
              type="radio"
              name="side"
              id="left"
              value="left"
              onClick={(e) => setSide(e.currentTarget.value)}
              checked={side === "left"}
            />
            Left
          </label>
          <label htmlFor="right">
            <input
              type="radio"
              name="side"
              id="right"
              value="right"
              onClick={(e) => setSide(e.currentTarget.value)}
              checked={side === "right"}
            />
            Right
          </label>
        </div>
        <div>
          {[...Array(position.right)].map((i: any) => (
            <Button getfunc={getfunc} />
          ))}
        </div>
      </div>
    );
  }
);
