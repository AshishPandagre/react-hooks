import React from 'react'
import { useState } from 'react'
import {useForm} from './useForm'

const Form = () => {

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const [values, handleChange] = useForm();

    return (
        <form>
            <input name='email' type='email' value={values.email} onChange={handleChange}></input>
            <input name='password' type='password' value={values.password} onChange={handleChange}></input>
        </form>
    )

}

export default Form

