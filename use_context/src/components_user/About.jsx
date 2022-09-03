import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../UserContext'

const About = () => {

    const {user, setUser} = useContext(UserContext)

    return (
        <>
            <h2>About</h2>
            User details : {
                JSON.stringify(user)
            }
        </>
    )
}

export default About