// seed.js
import { PrismaClient } from '@prisma/client';
import supabase from './supabase';

const prisma = new PrismaClient();

async function main() {
    // Data dummy untuk Course
    const courseData = {
        title: 'Course 1',
        description: 'This is a description for Course 1',
        topics: {
            create: [
                {
                    title: 'Topic 1',
                    description: 'This is a description for Topic 1',
                    essayQuestion: 'What is Topic 1?',
                    answerKey: 'Topic 1 is ...',
                    evaluationCriteria: 'Criteria for Topic 1'
                },
                {
                    title: 'Topic 2',
                    description: 'This is a description for Topic 2',
                    essayQuestion: 'What is Topic 2?',
                    answerKey: 'Topic 2 is ...',
                    evaluationCriteria: 'Criteria for Topic 2'
                }
                // Tambahkan lebih banyak topik jika diperlukan
            ]
        }
    };

    // Membuat Course dan Topik
    const course = await prisma.course.create({
        data: courseData
    });

    console.log('Course and topics created:', course);

    // Data dummy untuk User
    const { data: user, error } = await supabase.auth.signUp({
        email: 'user@example.com',
        password: 'password'
    });

    if (error) {
        console.error('Error creating user:', error);
        return;
    }

    console.log('User created:', user);

    // Update User dengan courseId
    await prisma.user.update({
        where: { email: 'user@example.com' },
        data: { courseId: course.id }
    });

    console.log('User updated with courseId');
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
