/*
  Warnings:

  - Made the column `content` on table `Course` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "summary" TEXT NOT NULL DEFAULT E'',
ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "content" SET DEFAULT E'',
ALTER COLUMN "img" SET DEFAULT E'http://localhost:3001/default.jpg';
