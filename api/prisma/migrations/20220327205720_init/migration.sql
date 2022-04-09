/*
  Warnings:

  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `courseId` on the `Archive` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `courseId` on the `Link` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Archive" DROP CONSTRAINT "Archive_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_courseId_fkey";

-- DropIndex
DROP INDEX "Archive_name_key";

-- DropIndex
DROP INDEX "Course_name_key";

-- DropIndex
DROP INDEX "Link_name_key";

-- AlterTable
ALTER TABLE "Archive" DROP COLUMN "courseId",
ADD COLUMN     "courseId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Course" DROP CONSTRAINT "Course_pkey",
ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Link" DROP COLUMN "courseId",
ADD COLUMN     "courseId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Archive" ADD CONSTRAINT "Archive_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
