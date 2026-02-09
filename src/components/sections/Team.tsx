"use client";

import { motion } from 'framer-motion';

const team = [
  {
    name: "Can Erden",
    role: "Co-Founder",
    initials: "CE",
    bio: "M&A and product growth background. Leads methodology design and corporate partnerships.",
  },
  {
    name: "Robbe Seghers",
    role: "Co-Founder",
    initials: "RS",
    bio: "Community builder and former PwC consultant. Runs Habitat operations across 3 cities.",
  },
  {
    name: "Kashyap Yechuri",
    role: "Co-Founder",
    initials: "KY",
    bio: "Business economics and strategy specialist. Drives corporate program design and participant experience.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-4 bg-slate-50/50 section-divider">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-habitat-indigo text-sm font-bold uppercase tracking-wider">
            The Team
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-4">
            Built by operators, not consultants.
          </h2>
          <p className="text-slate-500">Based in Brussels & Leuven.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              {/* TODO: Replace placeholder circles with actual headshots in /public/team/ */}
              <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-4">
                <span className="text-slate-500 font-bold text-lg">
                  {member.initials}
                </span>
              </div>
              <h3 className="font-bold text-lg text-slate-900">
                {member.name}
              </h3>
              <p className="text-sm text-habitat-indigo font-semibold mb-2">
                {member.role}
              </p>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
