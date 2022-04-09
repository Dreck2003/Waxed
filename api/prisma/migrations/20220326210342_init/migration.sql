/*
  Warnings:

  - Added the required column `date` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "date" TEXT NOT NULL;
