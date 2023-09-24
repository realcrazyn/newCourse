import { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
  const [c, sC] = useState(1)

  return (
    <div>
      <button className={classes.btn} onClick={() => sC(c + 1)}>
        +
      </button>
      <div>{c}</div>
      <button onClick={() => sC(c - 1)}>-</button>
    </div>
  )
}
