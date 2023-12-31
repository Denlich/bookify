-- AlterTable
ALTER TABLE `Book` ADD COLUMN `cost` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `description` VARCHAR(1000) NULL,
    ADD COLUMN `image` VARCHAR(191) NULL,
    ADD COLUMN `type` ENUM('AUDIOBOOK', 'PAPERBACK', 'EBOOK') NOT NULL DEFAULT 'PAPERBACK';
