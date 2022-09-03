import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../UserContext'


const About = () => {

    const {msg, setMsg} = useContext(UserContext)

    return (
        <div>About page..., msg: {msg}</div>
    )
}

export default About
