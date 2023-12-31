/*
  Warnings:

  - You are about to drop the column `userrname` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `User_userrname_key` ON `User`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `userrname`,
    ADD COLUMN `username` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_username_key` ON `User`(`username`);
