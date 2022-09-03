import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { UserContext } from './UserContext'
import { useState } from 'react'

// import About from './components_test/About'
// import Index from './components_test/Index'

import About from './components_user/About'
import Index from './components_user/Index'

const App = () => {

    // components_test

    // const [msg, setMessage] = useState('heyoooo')

    // return (
    //     <Router>
    //         <ul>
    //             <li><Link to='/'>Home</Link></li>
    //             <li><Link to='/about'>About</Link></li>
    //         </ul>
            
    //         <UserContext.Provider value={{msg, setMessage}}>
    //             <Routes>
    //                 <Route path='/' element={<Index/>}/>
    //                 <Route path='/about' exact element={<About/>}/>
    //             </Routes>
    //         </UserContext.Provider>
            
    //     </Router>
    // )

    // components_user

    const [user, setUser] = useState(null);

    return (
        <Router>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>

            <UserContext.Provider value={{user, setUser}}>
                <Routes>
                    <Route path='/' element={<Index/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
            </UserContext.Provider>
        </Router>
    )

}

export default App

