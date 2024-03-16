/*
  Warnings:

  - Added the required column `is_default_billing_address` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_default_shipping_address` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "address" ADD COLUMN     "is_default_billing_address" BOOLEAN NOT NULL,
ADD COLUMN     "is_default_shipping_address" BOOLEAN NOT NULL;
