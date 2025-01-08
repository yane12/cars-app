import { sql } from "@vercel/postgres";
import { Invoice } from "./types";

const ITEMS_PER_PAGE = 6;
export async function fetchFilterdInvoices(query: string, currentPage: number) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {
        const data = await sql<Invoice>`Select * FROM invoices 
        JOIN customers ON invoices.customer_id = customers.id
        WHERE customers.name ILIKE ${`%${query}%`} LiMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;

        return data.rows

    } catch (error) {
       throw new Error("Failed to fetch Filtered fetch");
    }
}

export async function fetchInvoicePages(query: string) {
    try {
        const count = await sql`select COUNT(*) FROM invoices 
        JOIN customers ON invoices.customer_id = customers.id 
        WHERE customers.name ILIKE ${`%${query}%`}
        `;

        const total = count.rows[0].count;

        return Math.ceil(total / ITEMS_PER_PAGE)
    } catch (error) {
        throw new Error("Failed to fetch total number of invoice");

    }
}