/*
  Warnings:

  - Added the required column `ip` to the `devices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `privateKey` to the `devices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "devices" ADD COLUMN     "ip" TEXT NOT NULL,
ADD COLUMN     "privateKey" TEXT NOT NULL;
