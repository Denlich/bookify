/*
  Warnings:

  - You are about to drop the column `publishingHouseId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the `PublishingHouse` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `publisherId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Book` DROP FOREIGN KEY `Book_publishingHouseId_fkey`;

-- AlterTable
ALTER TABLE `Book` DROP COLUMN `publishingHouseId`,
    ADD COLUMN `publisherId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `PublishingHouse`;

-- CreateTable
CREATE TABLE `Publisher` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `biography` VARCHAR(1000) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_publisherId_fkey` FOREIGN KEY (`publisherId`) REFERENCES `Publisher`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
