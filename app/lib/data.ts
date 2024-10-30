import { sql } from "@vercel/postgres";


// function to grab user info 
export async function fetchUserInfo(
    user_id: number
) {
  try {
    const data = await sql`
      SELECT *
      FROM users
      where id = ${user_id};
    `;

    console.log(data);

    return data;

  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}