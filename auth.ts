import { sql } from "@vercel/postgres";
import { User } from "./app/lib/types";

async function getUser(email: string) {
    try {
        const user = await sql<User>`select * from users where email == ${email}`;
        return user.rows[0]
    } catch (error) {
        throw new Error("Failed to fetch user");
           
    }
}

