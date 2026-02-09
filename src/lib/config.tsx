import { Icons } from "@/components/icons";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export const BLUR_FADE_DELAY = 0.04;

export const siteConfig = {
  name: "Habitat Enterprise",
  description: "The OS for Internal Ventures. Build ventures with startup velocity and banking-grade security.",
  url: "https://joinhabitat.eu",
  keywords: ["Venture Builder", "Corporate Innovation", "AI Ventures", "Habitat"],
  links: {
    twitter: "https://twitter.com/joinhabitat",
    github: "https://github.com/ycanerden/habitat-enterprise-web",
    linkedin: "https://linkedin.com/company/habitat",
    instagram: "https://instagram.com/joinhabitat",
  },
  header: [
    {
      trigger: "Solutions",
      content: {
        main: {
          title: "Venture OS",
          description: "Our core framework for rapid venture building in complex enterprises.",
          href: "/solutions/venture-os",
        },
        items: [
          {
            title: "Discovery",
            href: "/solutions/discovery",
            description: "Identify high-TAM white spaces in your market.",
          },
          {
            title: "Security",
            href: "/solutions/security",
            description: "Banking-grade compliance for high-risk ventures.",
          },
          {
            title: "Growth",
            href: "/solutions/growth",
            description: "Scale your internal venture to global markets.",
          },
        ],
      },
    },
    {
      trigger: "Company",
      content: {
        items: [
          {
            title: "About Us",
            href: "/about",
            description: "The team behind Habitat Venture Group.",
          },
          {
            title: "Methodology",
            href: "/methodology",
            description: "The 5-hour sprint that changed everything.",
          },
          {
            title: "Contact",
            href: "/contact",
            description: "Start your strategic briefing.",
          },
        ],
      },
    },
    {
        href: "/blog",
        label: "Blog",
    },
  ],
  hero: {
    title: "The OS for Internal Ventures.",
    description: "Habitat Enterprise empowers global organizations to build and scale AI-native ventures with the velocity of a founder and the security of a bank.",
    cta: "Initiate Strategic Briefing",
    ctaDescription: "No decks. Just functional MVPs in 5-hour sprints.",
  },
  pricing: [
    {
      name: "Pilot Sprint",
      price: "Enquire",
      description: "A high-octane 5-hour sprint to validate your core hypothesis.",
      features: ["Market Validation", "AI-Native Prototype", "Strategic Roadmap", "Security Audit"],
      cta: "Book a Sprint",
    },
    {
      name: "Enterprise Studio",
      price: "Custom",
      description: "Full-cycle venture building from discovery to global scale.",
      features: ["Dedicated Build Team", "Global Regulatory Compliance", "Infrastructure as a Service", "Ongoing Ops"],
      cta: "Contact Sales",
      featured: true,
    },
  ],
  footer: [
    {
      title: "Solutions",
      links: [
        { href: "#", label: "Venture Discovery" },
        { href: "#", label: "AI Transformation" },
        { href: "#", label: "Corporate Sprints" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Social",
      links: [
        { href: "#", label: "Twitter" },
        { href: "#", label: "LinkedIn" },
        { href: "#", label: "GitHub" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;