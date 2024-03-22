/*
  Warnings:

  - You are about to drop the `CreditCard` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CreditCard" DROP CONSTRAINT "CreditCard_user_id_fkey";

-- DropTable
DROP TABLE "CreditCard";

-- CreateTable
CREATE TABLE "credit_card" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "name_on_card" TEXT NOT NULL,
    "expiration_date" TEXT NOT NULL,
    "security_code" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "credit_card_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "credit_card" ADD CONSTRAINT "credit_card_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
