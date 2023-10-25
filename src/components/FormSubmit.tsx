import React, { useState } from 'react'
import { clearScreenDown } from 'readline'

const FormSubmit = () => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Show, setShow] = useState('')

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' onChange={handleName} value={Name} placeholder='enter your name' /><br />
                <input type="email" name='email' onChange={handleEmail} value={Email} placeholder='enter your email' />
                <button type='submit'>Enter</button>
            </form>
        </div>
    )
}

export default FormSubmit