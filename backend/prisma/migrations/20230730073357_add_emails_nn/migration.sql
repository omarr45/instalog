/*
  Warnings:

  - Made the column `actor_email` on table `Event` required. This step will fail if there are existing NULL values in that column.
  - Made the column `target_email` on table `Event` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "actor_email" SET NOT NULL,
ALTER COLUMN "target_email" SET NOT NULL;
