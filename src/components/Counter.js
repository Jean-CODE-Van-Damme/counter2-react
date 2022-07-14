const Counter = ({ tab, setTab, copyTab, key }) => {
  console.log(key);
  const counterI = () => {
    for (let i = 0; i < copyTab.length; i++) {
      copyTab[i] = copyTab[i] + 1;
      setTab(copyTab);
    }
  };

  const counterD = () => {
    for (let i = 0; i < copyTab.length; i++) {
      copyTab[i] = copyTab[i] - 1;
      setTab(copyTab);
    }
  };

  const reset = () => {
    for (let i = 0; i < copyTab.length; i++) {
      copyTab[i] = 0;
      setTab(copyTab);
    }
  };

  return (
    <>
      <div className="bloc">
        <div className="horizontal">
          <div className="decrement">
            {tab[0] !== 0 && <button onClick={counterD}>-</button>}
          </div>

          <p>{tab[0]}</p>

          <div className="increment">
            {tab[0] < 10 && <button onClick={counterI}>+</button>}
          </div>
        </div>
        <div className="reset">
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
