-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "actor_id" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "action_id" TEXT NOT NULL,
    "target_id" TEXT NOT NULL,
    "target_name" TEXT NOT NULL,
    "location" TEXT,
    "occurred_at" TIMESTAMP(3) NOT NULL,
    "metadata" JSONB NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);
