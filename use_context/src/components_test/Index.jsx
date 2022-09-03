import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../UserContext'


const Index = () => {
    const {msg, setMsg} = useContext(UserContext);
    return (
        <div>Index, msg: {msg}</div>
    )
}

export default Index