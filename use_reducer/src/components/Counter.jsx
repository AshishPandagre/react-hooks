import React, { useReducer } from 'react'
import '../App.css'

function reducer (state, action) {
    switch (action) {
        case 'INCREMENT':
            return state+1;
        
        case 'DECREMENT':
            return state-1;

        default:
            return state;
    }
}

const Counter = () => {

    const [count, dispatch] = useReducer(reducer, 1000);

    return (
        <div className='main'>
            <button onClick={e => dispatch('DECREMENT')}>Decrement</button>
            <div className='value'>{count}</div>
            <button onClick={e => dispatch('INCREMENT')}>Increment</button>
        </div>
        )
}

export default Counter