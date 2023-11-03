/*
  Warnings:

  - You are about to drop the column `menuId` on the `accesses` table. All the data in the column will be lost.
  - You are about to drop the column `roleName` on the `accesses` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[permissionId]` on the table `accesses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `permissionId` to the `accesses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `accesses` DROP FOREIGN KEY `accesses_menuId_fkey`;

-- DropForeignKey
ALTER TABLE `accesses` DROP FOREIGN KEY `accesses_roleName_fkey`;

-- AlterTable
ALTER TABLE `accesses` DROP COLUMN `menuId`,
    DROP COLUMN `roleName`,
    ADD COLUMN `permissionId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `permissions` (
    `id` VARCHAR(191) NOT NULL,
    `roleName` VARCHAR(191) NOT NULL,
    `menuId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `accesses_permissionId_key` ON `accesses`(`permissionId`);

-- AddForeignKey
ALTER TABLE `permissions` ADD CONSTRAINT `permissions_roleName_fkey` FOREIGN KEY (`roleName`) REFERENCES `roles`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `permissions` ADD CONSTRAINT `permissions_menuId_fkey` FOREIGN KEY (`menuId`) REFERENCES `menus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `accesses` ADD CONSTRAINT `accesses_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `permissions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
