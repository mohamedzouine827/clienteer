import { pgTable, serial, integer, text } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const designArticle = pgTable("DesignArticle", {
	designId: serial("DesignId").primaryKey().notNull(),
	designType: integer("DesignType").notNull(),
	name: text("Name").notNull(),
	description: text("Description").notNull(),
	overview: text("Overview").notNull(),
	objectives: text("Objectives").notNull(),
	budget: integer("Budget").notNull(),
	audience: text("Audience").notNull(),
	key: text("Key").notNull(),
	timeline: text("Timeline").notNull(),
});

export const designType = pgTable("DesignType", {
	id: serial("id").primaryKey().notNull(),
	design: text("design").notNull(),
});