/*
  Warnings:

  - You are about to drop the column `file` on the `Archive` table. All the data in the column will be lost.
  - Added the required column `url` to the `Archive` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Archive" DROP COLUMN "file",
ADD COLUMN     "url" TEXT NOT NULL;
