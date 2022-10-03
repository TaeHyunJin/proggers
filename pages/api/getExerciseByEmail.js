import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const email = req.query["email"].toString();
      const exercises = await prisma.exercise.findMany({
        where: { authorId: email },
      });
      res.status(200).json(exercises);
    } catch (e) {
      console.log(e);
    }
  } else res.status(405).json({ message: "soemthing went wrong" });
}
