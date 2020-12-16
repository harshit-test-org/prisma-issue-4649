import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient({
    log: ["query"],
  });
  const data = await Promise.all([
    prisma.$transaction([
      prisma.user.findFirst(),
      prisma.user.create({ data: { email: "test@t.com" } }),
      prisma.user.findFirst(),
    ]),
    prisma.$transaction([
      prisma.post.findFirst(),
      prisma.post.create({
        data: {
          title: "This is some test",
          content: "this is some content",
          published: false,
          author: {
            create: {
              email: "test@test.com",
            },
          },
        },
      }),
      prisma.user.findFirst(),
    ]),
  ]);
  console.log(data);
  prisma.$disconnect();
}

main();
