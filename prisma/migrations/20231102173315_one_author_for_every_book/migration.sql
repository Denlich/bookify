/*
  Warnings:

  - You are about to drop the `_AuthorToBook` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `authorId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_AuthorToBook` DROP FOREIGN KEY `_AuthorToBook_A_fkey`;

-- DropForeignKey
ALTER TABLE `_AuthorToBook` DROP FOREIGN KEY `_AuthorToBook_B_fkey`;

-- AlterTable
ALTER TABLE `Book` ADD COLUMN `authorId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_AuthorToBook`;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Author`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
