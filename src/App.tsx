import "./App.css";
import { Control1 } from "./control1/control1";
import { observer } from "mobx-react-lite";
import Control1Store from "./store/control1-store";

const contol1Store = new Control1Store();
const App = observer(() => (
  <div>
    <Control1
      countBtn={contol1Store.countBtn}
      setCountBtn={contol1Store.setCountBtn}
      getfunc={contol1Store.getfunc}
    />
  </div>
));

export default App;
