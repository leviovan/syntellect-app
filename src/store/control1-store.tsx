import { makeAutoObservable } from "mobx";

class Control1Store {
  countBtn = "";
  constructor() {
    makeAutoObservable(this);
  }
  setCountBtn = (value: string) => {
    this.countBtn = value;
  };

  arrayFunc = {
    fun1: () => (this.countBtn = ""),
    fun2: () => (this.countBtn = "hello World"),
    fun3: () => alert(this.countBtn),
    fun4: () => +this.countBtn % 2 === 0 && alert(this.countBtn),
  };

  getfunc = (index: unknown) => {
    return this.arrayFunc[index as keyof typeof this.arrayFunc];
  };
}
export default Control1Store;
