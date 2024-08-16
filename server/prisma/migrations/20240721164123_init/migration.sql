-- CreateTable
CREATE TABLE `Payment` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `account` VARCHAR(191) NOT NULL,
    `behalf` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
