-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "question1" TEXT NOT NULL,
    "question2" TEXT NOT NULL,
    "question3" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_github_key" ON "User"("github");

-- CreateIndex
CREATE UNIQUE INDEX "User_linkedin_key" ON "User"("linkedin");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
