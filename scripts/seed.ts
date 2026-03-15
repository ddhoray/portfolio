import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const blogPosts = [
  {
    id: 'post-linkedin-1',
    title: 'Transforming University Websites with AI-Enhanced Interactivity',
    summary: 'Exploring how AI can personalize student engagement on university websites, presented at the UWI Five Islands AI Conference.',
    content: '',
    source: 'LinkedIn',
    sourceUrl: 'https://www.linkedin.com/in/ddhoray/recent-activity/all/',
    imageUrl: '',
    publishedAt: new Date('2025-07-15'),
  },
  {
    id: 'post-cybersafett-1',
    title: 'US Visa Social Media Review: What International Students Need to Know',
    summary: 'The U.S. State Department considers expanding social media screening for international student visa applicants. What this means for your digital footprint.',
    content: '',
    source: 'CyberSafeTT',
    sourceUrl: 'https://cybersafett.com/us-visa-social-media-review/',
    imageUrl: '',
    publishedAt: new Date('2025-05-27'),
  },
  {
    id: 'post-linkedin-2',
    title: 'Digital Anthropology: Understanding Human Behavior in the Digital Age',
    summary: 'How the study of digital anthropology helps organizations better understand and serve their online communities.',
    content: '',
    source: 'LinkedIn',
    sourceUrl: 'https://www.linkedin.com/in/ddhoray/recent-activity/all/',
    imageUrl: '',
    publishedAt: new Date('2025-04-10'),
  },
  {
    id: 'post-cybersafett-2',
    title: 'Cyberbullying in Schools: A Growing Concern in Trinidad and Tobago',
    summary: 'Understanding the rise of cyberbullying in Caribbean schools and practical steps for parents, teachers, and students to combat it.',
    content: '',
    source: 'CyberSafeTT',
    sourceUrl: 'https://cybersafett.com/category/latest-news/',
    imageUrl: '',
    publishedAt: new Date('2025-03-15'),
  },
  {
    id: 'post-linkedin-3',
    title: 'Enterprise Application Management in Higher Education',
    summary: 'Lessons learned from managing enterprise applications at a major Caribbean university, including Power BI adoption and data analytics.',
    content: '',
    source: 'LinkedIn',
    sourceUrl: 'https://www.linkedin.com/in/ddhoray/recent-activity/all/',
    imageUrl: '',
    publishedAt: new Date('2025-02-20'),
  },
  {
    id: 'post-cybersafett-3',
    title: 'Internet Addiction: Recognizing the Signs in Your Family',
    summary: 'A guide for parents on identifying internet addiction behaviors in children and practical strategies for establishing healthy digital habits.',
    content: '',
    source: 'CyberSafeTT',
    sourceUrl: 'https://cybersafett.com/category/latest-news/',
    imageUrl: '',
    publishedAt: new Date('2025-01-08'),
  },
  {
    id: 'post-linkedin-4',
    title: 'Representing Trinidad & Tobago at Meta Community Standards Roundtable',
    summary: 'Reflections on participating in the Meta Community Standards Roundtable in Mexico City as the T&T country representative.',
    content: '',
    source: 'LinkedIn',
    sourceUrl: 'https://www.linkedin.com/in/ddhoray/recent-activity/all/',
    imageUrl: '',
    publishedAt: new Date('2024-11-15'),
  },
  {
    id: 'post-cybersafett-4',
    title: 'Protecting Your Digital Footprint: A Caribbean Perspective',
    summary: 'How Caribbean citizens can protect their online presence and understand what information is publicly available about them.',
    content: '',
    source: 'CyberSafeTT',
    sourceUrl: 'https://cybersafett.com/category/latest-news/',
    imageUrl: '',
    publishedAt: new Date('2024-10-01'),
  },
];

async function main() {
  console.log('Seeding blog posts...');
  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { id: post.id },
      update: {
        title: post.title,
        summary: post.summary,
        content: post.content,
        source: post.source,
        sourceUrl: post.sourceUrl,
        imageUrl: post.imageUrl,
        publishedAt: post.publishedAt,
      },
      create: post,
    });
  }
  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
