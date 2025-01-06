import React from 'react'
import { fetchAnimals } from '../lib/dashboard/data'
import Link from 'next/link';
import { signOut } from '@/auth';

export default async function Page() {
    const animals = await fetchAnimals();

    return (
        <div>
            <nav>
            <ul className='flex justify-between'>
                <li><Link href='/home'>Home</Link></li>
                <li>
                    <form action={async () => {
                        'use server'
                        await signOut()
                    }}>
                        <button>Sign Out</button>
                    </form>
                </li>
            </ul>
        </nav>
            <ul>
                {animals.map((animal) => (
                    <li key={animal.id}>{animal.name}</li>
                ))}
            </ul>
        </div>
    )
}
