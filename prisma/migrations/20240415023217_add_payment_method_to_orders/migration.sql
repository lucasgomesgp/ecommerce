-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('CASH', 'CARD', 'PAYPAL');

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "payment_method" "PaymentType" NOT NULL DEFAULT 'CASH';
