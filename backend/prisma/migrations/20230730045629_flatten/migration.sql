/*
  Warnings:

  - Added the required column `action_name` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `action_object` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actor_name` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `object` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Made the column `location` on table `Event` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "action_name" TEXT NOT NULL,
ADD COLUMN     "action_object" TEXT NOT NULL,
ADD COLUMN     "actor_name" TEXT NOT NULL,
ADD COLUMN     "object" TEXT NOT NULL,
ALTER COLUMN "location" SET NOT NULL,
ALTER COLUMN "occurred_at" SET DEFAULT CURRENT_TIMESTAMP;
