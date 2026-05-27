export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  location: string;
  dates: string;
  responsibilities: string[];
  achievements: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "quality-control-lab-technician",
    role: "Quality Control Lab Technician",
    company: "IKO North America",
    location: "Calgary, Alberta",
    dates: "Apr 2024 - Aug 2024",
    responsibilities: [
      "Conducted performance and durability testing on raw materials and finished products.",
      "Operated specialized lab equipment and recorded detailed data to support quality standards.",
      "Collaborated with production teams to identify and communicate quality concerns.",
    ],
    achievements: [
      "Built practical experience working around industrial equipment, lab equipment, and production-support environments.",
      "Strengthened accuracy, documentation habits, and attention to detail through repeated testing and record keeping.",
      "Maintained a clean, organized, and safety-focused workspace.",
    ],
  },
  {
    id: "engineering-science-intern",
    role: "Engineering/Science Intern",
    company: "IKO Industries North America",
    location: "Calgary, Alberta",
    dates: "May 2022 - Aug 2022",
    responsibilities: [
      "Interpreted mechanical and electrical schematics to support documentation of industrial machinery.",
      "Used Excel and AutoCAD to catalogue equipment components and organize maintenance information.",
      "Verified component specifications against live industrial hardware to support data accuracy.",
    ],
    achievements: [
      "Built a structured database covering more than 500 critical machinery components.",
      "Improved access to machine-component information for maintenance and troubleshooting.",
      "Gained practical exposure to industrial equipment, technical documentation, and safety-focused production environments.",
    ],
  },
  {
    id: "guarddog-prototype-team-member",
    role: "GuardDog Prototype Team Member",
    company: "Mount Royal University HealthTech Challenge",
    location: "Calgary, Alberta",
    dates: "2024",
    responsibilities: [
      "Helped engineer a portable real-time sensor array to detect carbon dioxide, carbon monoxide, methane, and ambient temperature.",
      "Designed a custom protective enclosure in OnShape for the sensor array and user interface.",
      "Coordinated hardware procurement, project timelines, and team communication.",
    ],
    achievements: [
      "Applied software, hardware, and engineering-style problem-solving to a practical industrial safety concept.",
      "Strengthened experience with prototyping, CAD design, materials planning, and team-based technical delivery.",
      "Presented and communicated the project clearly in a challenge-based environment.",
    ],
  },
  {
    id: "administrative-assistant-mru",
    role: "Administrative Assistant",
    company: "Mount Royal University",
    location: "Calgary, Alberta",
    dates: "Sep 2022 - Apr 2023",
    responsibilities: [
      "Provided frontline administrative and technical support to staff and prospective students.",
      "Managed schedules, databases, digital files, and student-facing information.",
      "Delivered accurate information and system guidance to 30+ students daily.",
    ],
    achievements: [
      "Strengthened communication, organization, and public-facing professionalism.",
      "Led campus tours and presentations for students and visitors.",
      "Built experience explaining information clearly to people with different needs and levels of familiarity.",
    ],
  },
  {
    id: "apprentice-electrician",
    role: "Apprentice Electrician",
    company: "JEB Electric",
    location: "Calgary, Alberta",
    dates: "May 2021 - Nov 2021",
    responsibilities: [
      "Used hand tools, power tools, ladders, fixtures, hardware, and construction materials in active job-site environments.",
      "Assisted with installation, maintenance, repair, and site cleanup tasks.",
      "Lifted, transported, and installed heavy electrical equipment and materials while following safe work practices.",
    ],
    achievements: [
      "Built hands-on experience in electrical, construction, and crew-based work environments.",
      "Strengthened practical tool use, job-site safety awareness, and physical work capacity.",
      "Supported team-based work through reliability, clear communication, and attention to hazards.",
    ],
  },
  {
    id: "esl-teacher",
    role: "English as a Second Language Teacher",
    company: "Suppaphanya School",
    location: "Chiang Rai, Thailand",
    dates: "May 2024 - Aug 2024",
    responsibilities: [
      "Planned and delivered English lessons for students with varying proficiency levels.",
      "Created lesson materials, classroom activities, and assessments aligned with learning goals.",
      "Supported student progress through feedback, coaching, and individualized guidance.",
    ],
    achievements: [
      "Improved classroom engagement through interactive activities and group work.",
      "Built stronger public speaking, communication, and cross-cultural adaptability.",
      "Collaborated with local staff to adapt lessons to classroom needs.",
    ],
  },
];
