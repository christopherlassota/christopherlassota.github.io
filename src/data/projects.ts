export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "instock",
    title: "InStock",
    description:
      "A full-stack inventory management application focused on clear CRUD workflows, responsive UI, and practical warehouse data organization.",
    tags: ["React", "TypeScript", "Sass"],
    image: "/images/InStock.png",
    featured: true,
  },
  {
    id: "bandsite",
    title: "Bandsite",
    description:
      "A responsive marketing website built from design mockups, with emphasis on layout accuracy, reusable styling, and clean content structure.",
    tags: ["JavaScript", "HTML", "CSS"],
    image: "/images/Bandsite.png",
    featured: true,
  },
  {
    id: "coffeeshop",
    title: "Coffee Shop",
    description:
      "A single-page landing page focused on HTML/CSS fundamentals, spacing, typography, visual rhythm, and responsive layout.",
    tags: ["HTML", "CSS"],
    image: "/images/CoffeeShop.png",
    featured: false,
  },
  {
    id: "guarddog",
    title: "GuardDog",
    description:
      "Project placeholder for the GuardDog sensor-array prototype. Details, screenshots, and links will be added when available.",
    tags: ["Placeholder"],
    featured: false,
  },
  {
    id: "kennedy-austin-wedding",
    title: "Kennedy & Austin's Wedding Website",
    description:
      "Project placeholder for Kennedy & Austin's wedding website. Details, screenshots, and links will be added when available.",
    tags: ["Placeholder"],
    featured: false,
  },
  {
    id: "spanish-conversation-simulator",
    title: "Spanish Conversation Simulator",
    description:
      "Project placeholder for the Spanish conversation simulator. Details, screenshots, and links will be added when available.",
    tags: ["Placeholder"],
    featured: false,
  },
  {
    id: "motorcycle-rental-website",
    title: "Motorcycle Rental Website",
    description:
      "Project placeholder for the motorcycle rental website. Details, screenshots, and links will be added when available.",
    tags: ["Placeholder"],
    featured: false,
  },
  {
    id: "imdb-replicate",
    title: "IMDb Replicate",
    description:
      "Project placeholder for the IMDb replicate. Details, screenshots, and links will be added when available.",
    tags: ["Placeholder"],
    featured: false,
  },
];
