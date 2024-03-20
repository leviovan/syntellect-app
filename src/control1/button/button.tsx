import { useState } from "react";
import style from "./button.module.css";
import { observer } from "mobx-react-lite";

type Props = {
  getfunc: (index: unknown) => void;
};

const Button = observer(({ getfunc }: Props) => {
  const [textBtn, setTextBtn] = useState("");
  // const [activeFun, setActiveFun] = useState(0);

  const selectHandler = (i: string) => {
    // setActiveFun(i);
    const b = getfunc(i);
    //@ts-ignore
    b();
  };

  return (
    <div className={style.button}>
      <input
        type="text"
        value={textBtn}
        onChange={(e) => setTextBtn(e.currentTarget.value)}
      />
      <select
        onChange={(e) => selectHandler(e.currentTarget.value)}
        name="selectFunction"
        id="selectFun"
      >
        <option value="fun1">clear control</option>
        <option value="fun2">Hello World</option>
        <option value="fun3">alert control</option>
        <option value="fun4">alert with check on number</option>
      </select>
    </div>
  );
});

export default Button;
