import { sql } from "@vercel/postgres";
import { Animal } from "./types";

export async function fetchAnimals() {
    try {
        const data = await sql<Animal>`select * from animals`
        return data.rows
    } catch (error) {
        throw new Error("Error")
    }
}