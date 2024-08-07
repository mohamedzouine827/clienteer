import { Pool } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
const pool = new Pool({ connectionString: "postgresql://clienteer_owner:Ki5eyfo3PzFX@ep-lucky-art-a25zes8u.eu-central-1.aws.neon.tech/clienteer?sslmode=require"});
export const db = drizzle(pool)