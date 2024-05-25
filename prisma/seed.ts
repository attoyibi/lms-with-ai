import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const alice = await prisma.user.upsert({
        where: { email: 'alice@prisma.io' },
        update: {},
        create: {
            email: 'alice@prisma.io',
            name: 'Alice',
            posts: {
                create: {
                    title: 'Check out Prisma with Next.js',
                    content: 'https://www.prisma.io/nextjs',
                    published: true,
                },
            },
        },
    })

    const bob = await prisma.user.upsert({
        where: { email: 'bob@prisma.io' },
        update: {},
        create: {
            email: 'bob@prisma.io',
            name: 'Bob',
            posts: {
                create: [
                    {
                        title: 'Follow Prisma on Twitter',
                        content: 'https://twitter.com/prisma',
                        published: true,
                    },
                    {
                        title: 'Follow Nexus on Twitter',
                        content: 'https://twitter.com/nexusgql',
                        published: true,
                    },
                ],
            },
        },
    })

    const course1 = await prisma.course.upsert({
        where: { id: 'course1' },
        update: {},
        create: {
            id: 'course1',
            title: 'Introduction to Prisma',
            description: 'Learn the basics of Prisma.',
            topics: {
                create: [
                    {
                        id: 'topic1',
                        title: 'What is Prisma?',
                        description: 'An overview of Prisma',
                        essayQuestion: 'Explain the main features of Prisma.',
                        answerKey: 'Prisma is an ORM that simplifies database access...',
                        evaluationCriteria: 'Clarity, completeness, and correctness.',
                    },
                    {
                        id: 'topic2',
                        title: 'Setting up Prisma',
                        description: 'How to set up Prisma in your project.',
                        essayQuestion: 'Describe the steps to set up Prisma.',
                        answerKey: 'To set up Prisma, you need to...',
                        evaluationCriteria: 'Correctness and order of steps.',
                    },
                ],
            },
        },
    })

    const course2 = await prisma.course.upsert({
        where: { id: 'course2' },
        update: {},
        create: {
            id: 'course2',
            title: 'Advanced Prisma',
            description: 'Deep dive into advanced Prisma features.',
            topics: {
                create: [
                    {
                        id: 'topic3',
                        title: 'Prisma Migrations',
                        description: 'Learn about database migrations with Prisma.',
                        essayQuestion: 'What are migrations and how does Prisma handle them?',
                        answerKey: 'Migrations are changes to the database schema...',
                        evaluationCriteria: 'Understanding of migrations and Prisma.',
                    },
                    {
                        id: 'topic4',
                        title: 'Prisma with GraphQL',
                        description: 'Integrating Prisma with GraphQL.',
                        essayQuestion: 'How can Prisma be used with GraphQL?',
                        answerKey: 'Prisma can be used with GraphQL by...',
                        evaluationCriteria: 'Integration steps and usage.',
                    },
                ],
            },
        },
    })

    console.log({ alice, bob, course1, course2 })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
