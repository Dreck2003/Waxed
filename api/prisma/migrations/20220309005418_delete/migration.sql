/*
  Warnings:

  - You are about to drop the column `file` on the `Archive` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `Course` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Archive_file_key";

-- AlterTable
ALTER TABLE "Archive" DROP COLUMN "file";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "img";
