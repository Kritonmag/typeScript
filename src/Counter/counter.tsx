import React from 'react';

const CounterApp = () => {
  const [count, setCount] = React.useState(10)

  const onClickPlus = () => {
    setCount(count + 1)
  }

  const onClickMinus = () => {
    setCount(count - 1)
  }

  return(
    <div>
      <h2>Счечик</h2>
      <h1>{count}</h1>
      <button onClick={onClickMinus}>Минус</button>
      <button onClick={onClickPlus}>Плюс</button>
    </div>
  )
}

export default CounterApp