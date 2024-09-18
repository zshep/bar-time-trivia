import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';

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
}

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