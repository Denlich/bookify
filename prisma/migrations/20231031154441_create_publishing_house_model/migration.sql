/*
  Warnings:

  - Added the required column `publishingHouseId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Book` ADD COLUMN `publishingHouseId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `PublishingHouse` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `biography` VARCHAR(1000) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_publishingHouseId_fkey` FOREIGN KEY (`publishingHouseId`) REFERENCES `PublishingHouse`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
