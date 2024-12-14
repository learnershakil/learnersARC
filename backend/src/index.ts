import { Hono } from 'hono'
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>()

app.get("/", (c) => {
  return c.json({ message: "Welcome to winter of code!!" });
});

app.post("/signup", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    if (
      await prisma.user.findUnique({
        where: {
          email: body.email,
        },
      })
    ) {
      return c.json({ error: "User already exists" });
    }

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        github: body.github,
        password: body.password,
        linkedin: body.linkedin,
        college: body.college,
        course: body.course,
        year: body.year,
        phone: body.phone,
        question1: body.question1,
        question2: body.question2,
        question3: body.question3,
      },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ jwt: token });
  } catch (error) {
    return c.json({
      error: "Error in creating the user",
      message: (error as Error).message,
    });
  }
});

app.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const user = await prisma.user.findFirst({
    where: {
      email: body.username,
    },
  });

  if (!user) {
    c.status(404);
    return c.json({ error: "User not found" });
  }

  if (user.password !== body.password) {
    c.status(403);
    return c.json({ error: "Invalid password" });
  }

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({ jwt: token });
});

app.post("/check", async (c) => {
  const authHeader = c.req.header("Authorization") || "";
  const user = await verify(authHeader, c.env.JWT_SECRET) as { id: string };
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const check = await prisma.user.findFirst({
      where: {
        id: user.id,
      },
      });

      if (check) {
        return c.json({ value: false });
      }

      return c.json({ value: true });
});

export default app