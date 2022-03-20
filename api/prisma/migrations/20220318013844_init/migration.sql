/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Archive` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Link` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `url` to the `Archive` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Link_url_key";

-- AlterTable
ALTER TABLE "Archive" ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Archive_name_key" ON "Archive"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Link_name_key" ON "Link"("name");
