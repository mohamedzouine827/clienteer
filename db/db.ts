import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
const sql = neon("postgresql://clienteer_owner:Ki5eyfo3PzFX@ep-proud-king-a2822e8s.eu-central-1.aws.neon.tech/clienteer?sslmode=require");
export const db = drizzle(sql);