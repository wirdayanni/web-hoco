/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `menu` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `menu` DROP COLUMN `imageUrl`,
    ADD COLUMN `image` VARCHAR(191) NULL;
