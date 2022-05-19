import "./App.css";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import StateTutorial from "./UseState/StateTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import RefTutorial from "./UseRef/RefTutorial";
import MemoTutorial from "./UseMemo/MemoTutorial";
import CallBackTutorial from "./UseCallback/CallbackTutorial";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <StateTutorial />
          </div>
          <div className="col">
            <ReducerTutorial />
          </div>
        </div>  
      </div>
    </div>
  );
}

export default App;
