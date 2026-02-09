import { Icons } from "@/components/icons";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Cpu, Target, Shield, Zap, Layers, BarChart3 } from "lucide-react";

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
        href: "/solutions",
        label: "Solutions",
    },
    {
        href: "/methodology",
        label: "Methodology",
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
  features: [
    {
      name: "Venture OS",
      description: "Functional, AI-native prototypes validated in high-velocity 5-hour sprints.",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      name: "Strategic Discovery",
      description: "Identifying high-TAM white spaces and opportunities within corporate ecosystems.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      name: "Banking-Grade Compliance",
      description: "Governance frameworks designed for the world's most regulated environments.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      name: "Build Velocity",
      description: "Moving from hypothesis to functional prototype 10x faster than traditional R&D.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      name: "Governance & Scale",
      description: "Enterprise infrastructure designed for seamless integration and global deployment.",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      name: "Venture Analytics",
      description: "Real-time data visualization and validation for your internal venture portfolio.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ],
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
