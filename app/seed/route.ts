import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users } from '../lib/placeholder-data';

const client = await db.connect();

// USERS Schema
async function createUsers() {

    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
        );
    `;
    /*
    const insertedUsers = await Promise.all(users.map(async (user) => {

        const hashPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        Insert INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.username}, ${user.email}, ${hashPassword})
        ON CONFLICT (id) DO NOTHING
        `;
    })
    );

    return insertedUsers;
    */
    
    }

export async function GET(){

    console.log("attempting to create user table");
    try{
        await client.sql`BEGIN`;
        await createUsers();
        await client.sql`
        INSERT INTO users (id, username, email, password)
        VALUES ('410544b2-4001-4271-9855-fec4b6a6442a', 'sheperton','barry@btt.com', '123')
        ON CONFLICT (id) DO NOTHING`;
       
        await client.sql `COMMIT`;

        return Response.json( {message: 'Database seeded successfully' });
    } catch(error){
        await client.sql`ROLLBACK`;
        return Response.json({ error }, {status: 500});
    }
}

/* 

// Teams Schema
async function createTeam() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS teams (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        teamname VARCHAR(255) NOT NULL,
        userid FORIEGN KEY
        );
    `;
}

// Session Schema
async function createSession() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS sessions (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        FOREIGN KEY (gameid)
        REFERENCES games(id),
        FOREIGN KEY (teamid)
        REFERENCES teams(id)
        );
    `;
}

// game (trivia) schema
async function createGame() {
    
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        await client.sql`
            CREATE TABLE IF NOT EXISTS games (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255),
            points INT,
            rounds INT NOT NULL,
            );
        `;
    }

// rounds schema
async function createRound(){
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS rounds (
        number PRIMARY KEY,
        points INT,
        rounds INT NOT NULL,
        FORIEGN KEY (questionid)
        REFERENCES questions(id),
        FORIEGN KEY (gameid)
        REFERENCES games(id)
        );
    `;

}


// Question  Schema
async function createQuestions() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS questions (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        points INT,
        rounds INT,
        type TEXT,
        correct_answer VARCHAR(255),
        picture BLOB,
        select1 TEXT,
        select2 TEXT,
        select3 TEXT,
        select4 TEXT,
        hint1 TEXT,
        hint2 TEXT
        );
    `;
}



export async function GET(){

    try{
        await client.sql`BEGIN`;
        await createUsers();
        await createTeam();
        await createSession();
        await createGame();
        await createRound();
        await createQuestions();
        await client.sql `COMMIT`;

        return Response.json( {message: 'Database seeded successfully' });
    } catch(error){
        await client.sql`ROLLBACK`;
        return Response.json({ error }, {status: 500});
    }
}

*/