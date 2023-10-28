/*
  Warnings:

  - A unique constraint covering the columns `[userrname]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `surname` VARCHAR(191) NULL,
    ADD COLUMN `userrname` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_userrname_key` ON `User`(`userrname`);
