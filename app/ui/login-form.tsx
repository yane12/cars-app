'use client'
import React, { useActionState } from 'react'
import { authenticate } from '../lib/actions'

export default function LoginForm() {
    const [errorMessage, formAcion, isPendding] = useActionState(
        authenticate,
        undefined
    )
    return (
        <div>
            <form action={formAcion}>
                <h1>Login</h1>
                <div>
                    <div><label htmlFor="email">Email</label></div>
                    <div><input type="email" name='email' id='email' /></div>
                </div>
                <div>
                    <div><label htmlFor="password">Password</label></div>
                    <div><input type="password" minLength={6} id='password' name='password' /></div>
                </div>
                <div>
                    <button type='submit' aria-disabled={isPendding}>Login</button>
                </div>
                <div>
                    {errorMessage && <div>{errorMessage}</div>}
                </div>
            </form>
        </div>
    )
}



