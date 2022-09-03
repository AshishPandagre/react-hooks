import { useState } from "react"

export const useForm = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        console.log(`changing ${e.target.name} to ${e.target.value}`)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return [values, handleChange]
}

