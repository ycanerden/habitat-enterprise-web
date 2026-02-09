import { Icons } from "@/components/icons";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Rocket, ListChecks, GraduationCap, CheckCircle, Presentation, Wrench } from "lucide-react";

export const BLUR_FADE_DELAY = 0.04;

export const siteConfig = {
  name: "Habitat Enterprise",
  description: "AI-powered innovation sprints for corporate teams.",
  url: "https://enterprise.joinhabitat.eu",
  keywords: ["Innovation Sprint", "Corporate Innovation", "AI Prototyping", "Habitat", "No-Code", "Rapid Prototyping"],
  links: {
    linkedin: "https://linkedin.com/company/joinhabitat",
    github: "https://github.com/ycanerden",
  },
  header: [
    {
      href: "#features",
      label: "How It Works",
    },
    {
      href: "#pricing",
      label: "Offerings",
    },
    {
      href: "https://joinhabitat.eu",
      label: "Community",
    },
  ],
  hero: {
    title: "Your teams have ideas. We help them build.",
    description: "Structured AI sprints that take corporate teams from concept to working prototype in a single session. No months of planning. Just real output.",
    cta: "Book a Pilot Session",
    ctaDescription: "100+ participants. 20+ MVPs launched. 4.4/5 satisfaction.",
  },
  features: [
    {
      name: "Rapid Prototyping",
      description: "Build functional prototypes using AI and no-code tools in hours, not months.",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      name: "Structured Methodology",
      description: "A proven 4-phase sprint: Idea & Business Model, Build, Demo & Pitch, Extra Mile.",
      icon: <ListChecks className="w-6 h-6" />,
    },
    {
      name: "Team Upskilling",
      description: "Your people learn modern AI and no-code tools they can use in their daily work.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      name: "Validated Concepts",
      description: "Business model mapped, customer discovery initiated, clear next steps defined.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      name: "Management-Ready Output",
      description: "Tangible demos and pitches ready for leadership review and internal approval.",
      icon: <Presentation className="w-6 h-6" />,
    },
    {
      name: "20+ AI Tools",
      description: "Lovable, Cursor, Claude Code, Framer, V0, Antigravity — we teach your team the right ones.",
      icon: <Wrench className="w-6 h-6" />,
    },
  ],
  pricing: [
    {
      name: "Exploration Sprint",
      price: "Half-day / Full-day",
      description: "A fast-paced innovation day to validate ideas and build rough prototypes.",
      features: [
        "Innovation day format",
        "Idea validation workshop",
        "Rough working prototypes",
        "Team alignment & energy",
      ],
      cta: "Book a Sprint",
    },
    {
      name: "Prototyping Workshop",
      price: "1–2 Days",
      description: "Deep-dive into a specific challenge. Walk out with a demo-ready product.",
      features: [
        "Specific challenge focus",
        "Demo-ready product",
        "Management presentation",
        "Customer discovery plan",
      ],
      cta: "Book a Workshop",
      featured: true,
    },
    {
      name: "Innovation Partnership",
      price: "Recurring Monthly",
      description: "Embed innovation sprints into your organization as an ongoing capability.",
      features: [
        "Embedded team sprints",
        "Innovation muscle building",
        "Output tracking & reporting",
        "Long-term culture change",
      ],
      cta: "Contact Us",
    },
  ],
  footer: [
    {
      title: "Solutions",
      links: [
        { href: "#pricing", label: "Corporate Sprints" },
        { href: "#pricing", label: "Prototyping Workshops" },
        { href: "#pricing", label: "Innovation Partnership" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "https://joinhabitat.eu", label: "About Habitat" },
        { href: "https://joinhabitat.eu", label: "Community" },
        { href: "mailto:ycanerden@gmail.com", label: "Contact" },
      ],
    },
    {
      title: "Social",
      links: [
        { href: "https://linkedin.com/company/joinhabitat", label: "LinkedIn" },
        { href: "https://github.com/ycanerden", label: "GitHub" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
