import React, { useActionState } from 'react'
import { authenticate } from '../lib/actions'

export default function LoginForm() {
    const [errorMessage, formAcion, isPendding] = useActionState(
        authenticate,
        undefined
    )
    return (
        <div>
            <form action={formAcion}></form>
        </div>
    )
}
