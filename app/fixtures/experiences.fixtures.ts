export type Experience = {
  company: string
  dateEnded?: Date
  dateStarted: Date
  description: string
  id: string
  imageSrc?: string
  title: string
}

export const experiences: Experience[] = [
  {
    id: '1',
    dateStarted: new Date(2009, 9),
    dateEnded: new Date(2012, 2),
    title: 'Student / Teacher',
    company: 'USAF - Defense Language Institute',
    description:
      'Pursued Arabic language studies at the esteemed Defense Language Institute in Monterey, CA. Achieved fluency in multiple languages by graduation, and subsequently dedicated time to educating future students.',
  },
  {
    id: '2',
    dateStarted: new Date(2012, 2),
    dateEnded: new Date(2015, 6),
    title: 'Direct Support Operator',
    company: 'USAF - 25th Intelligence Squadron',
    description:
      'Selected for a special operations role based on my analytical skills gained from cryptologic training. Utilized my Arabic language skills, cryptology, and data analysis to address complex challenges in high-stress environments. This expertise carries over into my problem-solving ability in engineering.',
  },
  {
    id: '3',
    dateStarted: new Date(2014, 9),
    title: 'Founder',
    company: 'Avail Solutions LLC',
    description:
      'Develop React Native mobile applications for both iOS and Android platforms. I generally utilize TypeScript, Redux (or other flux-based state managers), Postgres, NoSQL, along with various other libraries and infrastructures.',
  },
  {
    id: '4',
    dateStarted: new Date(2019, 11),
    dateEnded: new Date(2020, 11),
    title: 'Software Engineer',
    company: 'Simplifyy (Now BuzzCRS)',
    description:
      'Kansas City based startup aimed at automating property management. Built and integrated with remote locking APIs, payment processing, invoice parsing, and more. Worked in the Google Cloud ecosystem with TypeScript, Node, React, and various other tools, libraries, and infrastructures.',
  },
  {
    id: '5',
    dateStarted: new Date(2020, 11),
    dateEnded: new Date(2022, 10),
    title: 'Chief Technology Officer',
    company: 'Eat to Evolve',
    description:
      'Transitioned Kansas City based brick-and-mortar meal delivery business into a nationwide meal-kit subscription service. Assembled a high-performing team of engineers, designers, and marketers. Built a headless Shopify store on TypeScript and React to expand the enterprise alongside a substantial influencer marketing program to augment business growth.',
  },
  {
    id: '6',
    dateStarted: new Date(2020, 10),
    title: 'Principal Software Engineer',
    company: 'Cortina Platform',
    description:
      'As a tech lead, I establish code standards and best practices while mentoring engineers on their skill development and implementation details. Cortina is an e-commerce platform-agnostic SaaS facilitating drop-shipping supplier and marketplace networks. I design and implement distributed systems infrastructures with AWS and Typescript and integrate with various e-commerce platforms.',
  },
]
