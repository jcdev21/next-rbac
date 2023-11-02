/*
  Warnings:

  - You are about to drop the `permissionMenus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `permissions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `permissionMenus` DROP FOREIGN KEY `permissionMenus_menuId_fkey`;

-- DropForeignKey
ALTER TABLE `permissionMenus` DROP FOREIGN KEY `permissionMenus_permissionId_fkey`;

-- DropForeignKey
ALTER TABLE `permissions` DROP FOREIGN KEY `permissions_roleId_fkey`;

-- AlterTable
ALTER TABLE `accesses` MODIFY `create` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `update` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `delete` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `view` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `approve` BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE `permissionMenus`;

-- DropTable
DROP TABLE `permissions`;
