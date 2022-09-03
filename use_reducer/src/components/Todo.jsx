import React, { useState } from 'react'
import { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'ADD-TODO':
            return [...state, {body: action.payload, completed: 0}]    
        default:
            return state;
    }
}

const Todo = () => {
    
    const [todos, dispatch] = useReducer(reducer, [{'body': 'hey', 'completed': 0}, {'body': "nahaha", 'completed': 1}]);
    const [newTodo, setNewTodo] = useState('')

    return (
        <>
            <div>
                {todos.map((todo) => <div key={todo.body}>{todo.body} - {todo.completed}</div>)}
            </div>
            <form onSubmit={e => e.preventDefault()}>
                <input onChange={e => {
                    console.log(e.target.value)
                    setNewTodo(e.target.value)
                }}></input>
                <button onClick={e => dispatch({type: 'ADD-TODO', payload: newTodo})}>Add</button>
            </form>
        </>
    )
}

export default Todo