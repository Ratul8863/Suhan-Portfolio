export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  tone: "navy" | "slate";
};

export const servicesIntro =
  "Thoughtful design services crafted to turn ideas and real-world problems into simple, intuitive digital experiences.";

export const services: ServiceItem[] = [
  {
    id: "ux-strategy",
    title: "UX Strategy",
    description:
      "I turn complex product problems into clear, user-focused experiences. Through research, structure, and strategic thinking, I define the right problems to solve and create a strong foundation for better digital products.",
    skills: [
      "User Research",
      "User Flows",
      "Information Architecture",
      "UX Audit",
      "Problem Definition",
      "Journey Mapping",
    ],
    tone: "navy",
  },
  {
    id: "ui-design",
    title: "UI Design",
    description:
      "I create refined interfaces that balance usability with visual clarity. Every screen is designed with a strong focus on hierarchy, consistency, accessibility, and creating an experience that feels natural to use.",
    skills: [
      "Web & App Design",
      "Responsive Design",
      "Interaction Design",
      "Visual Design",
      "Prototyping",
      "Design Systems",
    ],
    tone: "slate",
  },
  {
    id: "product-design",
    title: "Product Design",
    description:
      "From early ideas to polished interfaces, I design digital products with both users and business goals in mind. I bring UX thinking and visual design together to turn ideas into meaningful, usable experiences.",
    skills: [
      "Product Design",
      "Wireframing",
      "High-Fidelity UI",
      "Interactive Prototypes",
      "Usability Testing",
      "Design Handoff",
    ],
    tone: "navy",
  },
];

export const certificationsIntro =
  "Thoughtful design services crafted to turn ideas and real-world problems into simple, intuitive digital experiences.";

export const ctaCopy =
  "Got a product idea or design challenge? Let’s turn it into something people enjoy using.";
