CREATE TABLE IF NOT EXISTS "DesignArticle" (
	"DesignId" serial PRIMARY KEY NOT NULL,
	"DesignType" integer NOT NULL,
	"Name" text NOT NULL,
	"Description" text NOT NULL,
	"Overview" text NOT NULL,
	"Objectives" text NOT NULL,
	"Budget" integer NOT NULL,
	"Audience" text NOT NULL,
	"Key" text NOT NULL,
	"Timeline" text NOT NULL,
	CONSTRAINT "DesignArticle_DesignId_unique" UNIQUE("DesignId")
);
--> statement-breakpoint
ALTER TABLE "Articles" RENAME TO "DesignType";--> statement-breakpoint
ALTER TABLE "DesignType" DROP COLUMN IF EXISTS "full_name";