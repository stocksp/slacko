// src/lib/server/database.js
import { createClient } from '@libsql/client';

const db = createClient({
    url: "file:local.db",
});

const TABLE_NAME = 'messages';

/**
 * Ensures the messages table exists
 * @returns {Promise<void>}
 */
async function ensureTable() {
  try {
    await db.execute({
      sql: `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
        ts TEXT PRIMARY KEY,
        user TEXT NOT NULL,
        text TEXT NOT NULL
      )`,
      args: []
    });
    console.log("Table ensured");
  } catch (e) {
    console.error("Error creating table:", e instanceof Error ? e.message : String(e));
    throw e;
  }
}

/**
 * Writes messages to the database
 * @param {Array<{ user: string, ts: string, text: string }>} messages
 * @returns {Promise<void>}
 */
export async function writeToDatabase(messages) {
  await ensureTable();

  const insertQueries = messages.map(message => ({
    sql: `INSERT OR REPLACE INTO ${TABLE_NAME} (ts, user, text) VALUES (?, ?, ?)`,
    args: [message.ts, message.user, message.text]
  }));

  try {
    await db.batch(insertQueries);
    console.log("Batch write successful");
  } catch (e) {
    console.error("Error writing to database:", e instanceof Error ? e.message : String(e));
    throw e;
  }
}

/**
 * Reads messages from the database
 * @returns {Promise<Array<{ user: string, ts: string, text: string }>>}
 */
export async function readFromDatabase() {
  await ensureTable();

  try {
    const result = await db.execute({
      sql: `SELECT ts, user, text FROM ${TABLE_NAME} ORDER BY ts DESC`,
      args: []
    });

    return result.rows.map(row => ({
      ts: String(row.ts),
      user: String(row.user),
      text: String(row.text)
    }));
  } catch (e) {
    console.error("Error reading from database:", e instanceof Error ? e.message : String(e));
    throw e;
  }
}
