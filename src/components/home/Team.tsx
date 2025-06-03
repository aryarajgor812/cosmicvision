"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TeamMemberModal } from "@/components/ui/team-member-modal";

// Sample team data
const teamMembers = [
  {
    id: "1",
    name: "Alex Chen",
    position: "Creative Director",
    department: "Design & Strategy",
    bio: "Visionary creative leader with 10+ years of experience in brand design and digital innovation. Passionate about creating meaningful connections between brands and their audiences.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    skills: ["Brand Strategy", "Creative Direction", "UI/UX Design", "Team Leadership", "Design Systems"],
    experience: "10+ years in creative leadership roles at top agencies including Pentagram and IDEO. Led rebranding projects for Fortune 500 companies.",
    education: "MFA in Graphic Design from Art Center College of Design, BA in Visual Communications from UCLA",
    contact: {
      email: "alex.chen@cosmicvision.com",
      phone: "+1 (555) 123-4567",
      linkedin: "https://linkedin.com/in/alexchen",
      twitter: "https://twitter.com/alexchen"
    },
    achievements: [
      "Led rebranding for 3 Fortune 500 companies",
      "Winner of 15+ international design awards",
      "Featured speaker at Design Week conferences",
      "Published author on design thinking methodologies"
    ]
  },
  {
    id: "2",
    name: "Sarah Johnson",
    position: "Lead Developer",
    department: "Technology",
    bio: "Full-stack developer and tech innovator specializing in cutting-edge web technologies and performance optimization. Believes in creating digital experiences that are both beautiful and blazingly fast.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Cloud Architecture", "Performance Optimization"],
    experience: "8+ years in full-stack development with expertise in modern web technologies. Previously at Google and Vercel.",
    education: "MS in Computer Science from Stanford University, BS in Software Engineering from MIT",
    contact: {
      email: "sarah.johnson@cosmicvision.com",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      github: "https://github.com/sarahjohnson"
    },
    achievements: [
      "Built scalable systems serving 10M+ users",
      "Open source contributor with 50K+ GitHub stars",
      "Tech conference speaker and workshop leader",
      "Certified AWS Solutions Architect"
    ]
  },
  {
    id: "3",
    name: "Marcus Rodriguez",
    position: "Brand Strategist",
    department: "Strategy & Research",
    bio: "Strategic thinker who transforms complex business challenges into compelling brand narratives. Expert in market research, consumer psychology, and brand positioning.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    skills: ["Brand Strategy", "Market Research", "Consumer Psychology", "Data Analysis", "Strategic Planning"],
    experience: "12+ years in brand strategy and marketing consulting. Former strategy director at Ogilvy and McKinsey & Company.",
    education: "MBA from Harvard Business School, BA in Psychology from Yale University",
    contact: {
      email: "marcus.rodriguez@cosmicvision.com",
      phone: "+1 (555) 234-5678",
      linkedin: "https://linkedin.com/in/marcusrodriguez"
    },
    achievements: [
      "Developed strategies for 50+ global brands",
      "Increased brand value by $2B+ across portfolio",
      "Published researcher in consumer behavior",
      "Harvard Business Review contributor"
    ]
  },
  {
    id: "4",
    name: "Emily Zhang",
    position: "UX Designer",
    department: "Design & Research",
    bio: "User experience designer passionate about creating intuitive and accessible digital experiences. Combines data-driven insights with human-centered design principles.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    skills: ["User Research", "Interaction Design", "Prototyping", "Accessibility", "Design Systems", "Figma"],
    experience: "6+ years in UX design with focus on enterprise and consumer applications. Previously at Airbnb and Spotify.",
    education: "MS in Human-Computer Interaction from Carnegie Mellon, BA in Cognitive Science from UC Berkeley",
    contact: {
      email: "emily.zhang@cosmicvision.com",
      linkedin: "https://linkedin.com/in/emilyzhang",
      twitter: "https://twitter.com/emilyzhang"
    },
    achievements: [
      "Improved user engagement by 300% across products",
      "Led accessibility initiatives reaching 1M+ users",
      "Design mentor for underrepresented communities",
      "UX research published in ACM conferences"
    ]
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = (member: typeof teamMembers[0]) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 300);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-cosmic-dark to-cosmic-midnight relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-cosmic-purple/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-cosmic-cyan/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">
              Meet Our <span className="text-gradient">Cosmic Team</span>
            </h2>
            <p className="text-xl text-cosmic-light/70 max-w-2xl mx-auto">
              Talented individuals united by a passion for creating extraordinary digital experiences that push the boundaries of what's possible.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cosmic-card p-6 interactive-element group"
              onClick={() => handleMemberClick(member)}
            >
              <div className="relative mb-4">
                <div className="w-full aspect-square rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-cosmic-emerald rounded-full border-2 border-cosmic-dark" />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-space-grotesk font-semibold text-cosmic-light mb-1 group-hover:text-cosmic-purple transition-colors">
                  {member.name}
                </h3>
                <p className="text-cosmic-purple mb-1">{member.position}</p>
                <p className="text-sm text-cosmic-light/60">{member.department}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-sm text-cosmic-light/70 line-clamp-3">
                  {member.bio}
                </p>
              </div>

              <div className="mt-4 text-center">
                <span className="text-sm text-cosmic-cyan group-hover:text-cosmic-violet transition-colors">
                  Click to view profile →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Member Modal */}
      <TeamMemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
