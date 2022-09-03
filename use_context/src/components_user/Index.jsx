import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../UserContext'



const Index = () => {

    const {user, setUser} = useContext(UserContext)

    function login() {
        setUser({
            username: 'ashish'
        })
    }

    function logout() {
        setUser(null)
    }

    return (
        <>

        <h2>User details:</h2>
        <div>{ JSON.stringify(user) }</div>

            {
                user ? (
                        <button onClick={logout}>Logout</button>
                    ) : (
                        <button onClick={login}>Login</button>
                    )
            }
        </>
    )
}

export default Index