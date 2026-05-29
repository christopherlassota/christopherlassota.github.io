export type EducationEntry = {
  id: string;
  school: string;
  logo: string;
  degree: string;
  dates: string;
  description: string;
};

export const education: EducationEntry[] = [
  {
    id: "ucalgary-engineering",
    school: "University of Calgary",
    logo: "UofC",
    degree: "Bachelor of Science in Engineering",
    dates: "2026 - 2030",
    description:
      "Beginning the common first-year engineering program with an interest in electrical engineering, technical systems, and software-driven problem-solving.",
  },
  {
    id: "mru-bsc",
    school: "Mount Royal University",
    logo: "MRU",
    degree: "Bachelor of Science in Cellular and Molecular Biology",
    dates: "2018-2024",
    description:
      "Earned a BSc in Cellular and Molecular Biology with a focus on genetics, biochemistry, and lab research.",
  },
];
