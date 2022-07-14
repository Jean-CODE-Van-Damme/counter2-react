import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";

function App() {
  const [tab, setTab] = useState([0]);

  const copyTab = [...tab];

  const addAZero = () => {
    if (copyTab.length < 3) {
      copyTab.push(0);
      setTab(copyTab);
    }
  };

  const removeAZero = () => {
    if (copyTab.length > 1) {
      copyTab.pop();
      setTab(copyTab);
    }
  };

  // setTab(copyTab);

  return (
    <div>
      <Header title="React Counter v2" />

      {copyTab.length < 3 && (
        <section className="add-counter">
          <button onClick={addAZero}>Add Counter</button>
        </section>
      )}

      <section className="counter">
        {tab.map((element, index) => {
          return (
            <Counter tab={tab} setTab={setTab} copyTab={copyTab} key={index} />
          );
        })}
      </section>

      <section className="remove">
        {copyTab.length > 1 && (
          <button onClick={removeAZero}>Remove Counter</button>
        )}
      </section>
    </div>
  );
}

export default App;
