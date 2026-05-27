export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
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
];
