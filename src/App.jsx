import React, { useEffect, useState } from "react";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https:/api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
};
function Message({ count }) {
  return (
    <p>
      you have read <strong>{count}</strong> piece(s) of advice(s)
    </p>
  );
}

export default App;
