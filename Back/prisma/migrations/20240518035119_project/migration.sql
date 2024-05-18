-- CreateTable
CREATE TABLE "Suggestion" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "assunto" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,

    CONSTRAINT "Suggestion_pkey" PRIMARY KEY ("id")
);
