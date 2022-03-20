/*
  Warnings:

  - You are about to drop the column `url` on the `Archive` table. All the data in the column will be lost.
  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[name]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `file` to the `Archive` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Archive" DROP CONSTRAINT "Archive_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_courseId_fkey";

-- AlterTable
ALTER TABLE "Archive" DROP COLUMN "url",
ADD COLUMN     "file" TEXT NOT NULL,
ALTER COLUMN "courseId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Course" DROP CONSTRAINT "Course_pkey",
ADD COLUMN     "img" TEXT NOT NULL,
ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("name");

-- AlterTable
ALTER TABLE "Link" ALTER COLUMN "courseId" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Course_name_key" ON "Course"("name");

-- AddForeignKey
ALTER TABLE "Archive" ADD CONSTRAINT "Archive_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
