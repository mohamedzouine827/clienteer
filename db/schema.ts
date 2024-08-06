import { integer, serial } from "drizzle-orm/pg-core";
import { pgTable, text } from "drizzle-orm/pg-core";


export const DesignType = pgTable("DesignType", {
    id:serial("id").primaryKey(),
    Design: text("design").notNull()
})

export const DesignId = pgTable("DesignArticle", {
    DesignId: serial("DesignId").primaryKey().unique(),
    DesignTypeID: integer("DesignType").notNull(),
    User: text("Name").notNull(),
    Description: text("Description").notNull(),
    Overview: text("Overview").notNull(),
    Objectives: text("Objectives").notNull(),
    Budget: integer("Budget").notNull(),
    Audience: text("Audience").notNull(),
    key: text("Key").notNull(),
    Timeline: text("Timeline").notNull(),
})