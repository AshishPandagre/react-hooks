import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const [updater, setUpdater] = useState(1);

    return (
        <>
            <input placeholder='Update by ...' onChange={e => setUpdater(e.target.value)} value={updater}></input><br></br>
            <button onClick={e => setCount(count-updater)}>Decrement</button>
            <div> Count : {count}</div>
            <button onClick={e => setCount(parseInt(count)+parseInt(updater))}>Increment</button>
        </>
    )
}

export default Counter