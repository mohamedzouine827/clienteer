
import { defineConfig } from "drizzle-kit";


export default defineConfig({
  schema: "./db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://clienteer_owner:Ki5eyfo3PzFX@ep-lucky-art-a25zes8u.eu-central-1.aws.neon.tech/clienteer?sslmode=require",
  },
});