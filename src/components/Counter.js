const Counter = ({ tab, setTab, copyTab, numero, element }) => {
  console.log(numero);

  const counterI = () => {
    copyTab[numero] = copyTab[numero] + 1;
    setTab(copyTab);
  };

  const counterD = () => {
    copyTab[numero] = copyTab[numero] - 1;
    setTab(copyTab);
  };

  const reset = () => {
    copyTab[numero] = 0;
    setTab(copyTab);
  };

  return (
    <>
      <div className="bloc">
        <div className="horizontal">
          <div className="decrement">
            {element !== 0 && <button onClick={counterD}>-</button>}
          </div>

          <p>{element}</p>

          <div className="increment">
            {element < 10 && <button onClick={counterI}>+</button>}
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
