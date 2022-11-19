import React, {useState} from 'react'
import './Counter.scss'
import clsx from 'clsx'

let base = null;

export default function Counter() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count+1);
   }

   const handleDecrement = () => {
    setCount(count-1);
   }

   if (count > 10){
    base = 100 + count-10
   }

  return (
    <div>
        <h1>Count: <span style={{fontSize: base??base+'%'}} className={clsx('count', count>=10 && 'highlight')}>{count}</span></h1>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
    </div>
  )
}
