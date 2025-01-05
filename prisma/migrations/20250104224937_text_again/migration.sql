/*
  Warnings:

  - You are about to drop the column `text` on the `Checkin` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Checkin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text2" TEXT
);
INSERT INTO "new_Checkin" ("id") SELECT "id" FROM "Checkin";
DROP TABLE "Checkin";
ALTER TABLE "new_Checkin" RENAME TO "Checkin";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
