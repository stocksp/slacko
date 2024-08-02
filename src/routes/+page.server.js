import { error } from '@sveltejs/kit';
import data from '../data.js';
import { writeToDatabase, readFromDatabase } from './database.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    try {
        // Try to read from the database first
        let messages = await readFromDatabase();

        // If no messages in the database, fetch from data.js and write to database
        if (!messages || messages.length === 0) {
            messages = data.map(message => ({
                user: message.user,
                ts: message.ts,
                text: message.text
            }));

            await writeToDatabase(messages);
        }

        return {
            messages
        };
    } catch (err) {
        console.error('Failed to load messages:', err);
        throw error(500, 'Failed to load messages');
    }
}