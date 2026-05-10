const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.course.createMany({
    data: [
      {
        title: 'Deep Learning Foundations',
        description: 'Master neural networks, PyTorch, and build real-world AI applications from scratch.',
        details: '12 modules, 40 hours, Certificate of completion.',
        price: 4999,
      },
      {
        title: 'Generative AI Masterclass',
        description: 'Learn to build LLMs, diffusion models, and advanced RAG architectures.',
        details: '15 modules, 60 hours, Certificate of completion.',
        price: 7999,
      },
    ],
  });
  console.log('Courses seeded.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
