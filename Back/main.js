import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/suggestion", async (req, res) => {
  console.log(req.body)

  const { nome, email, whatsapp, assunto, mensagem } = req.body;
  try {
    const newUser = await prisma.Suggestion.create({
      data: {
        nome,
        email,
        whatsapp,
        assunto,
        mensagem,
      },
    });
    res.json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
