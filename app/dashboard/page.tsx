import React from 'react'
import { fetchAnimals } from '../lib/dashboard/data'

export default async function Page() {
    const animals = await fetchAnimals();

    return (
        <div>
            <ul>
                {animals.map((animal) => (
                    <li key={animal.id}>{animal.name}</li>
                ))}
            </ul>
        </div>
    )
}
