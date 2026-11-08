export const siteConfig = {
  name: "Suhanur Rahman Mahin",
  shortName: "RHN",
  title: "Suhanur Rahman Mahin — UI/UX Designer",
  description:
    "I craft thoughtful digital experiences where strategy, usability, and visual design come together.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  locale: "en_US",
  email: "hello@suhan.design",
  bookCallUrl:
    "https://cal.com/suhanur-rahman/30min?user=suhanur-rahman&overlayCalendar=true",
  social: {
    facebook: "https://www.facebook.com/",
    behance: "https://www.behance.net/",
    dribbble: "https://dribbble.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/in/",
    whatsapp: "https://wa.me/",
  },
  creator: "Suhanur Rahman Mahin",
  role: "UI/UX Designer",
} as const;

export type SiteConfig = typeof siteConfig;
