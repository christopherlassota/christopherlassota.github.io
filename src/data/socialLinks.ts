export type SocialLinkId = "github" | "linkedin";

export type SocialLink = {
  id: SocialLinkId;
  label: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/christopherlassota",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/christopherlassota/",
  },
];
