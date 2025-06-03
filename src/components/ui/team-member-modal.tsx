"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "./button";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  bio: string;
  image: string;
  skills: string[];
  experience: string;
  education: string;
  contact: {
    email?: string;
    phone?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  achievements: string[];
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TeamMemberModal({ member, isOpen, onClose }: TeamMemberModalProps) {
  if (!member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cosmic-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="relative p-8 pb-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-cosmic-light/70 hover:text-cosmic-light"
                  onClick={onClose}
                >
                  <X className="h-5 w-5" />
                </Button>

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-cosmic-purple/30">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cosmic-emerald rounded-full border-2 border-cosmic-dark flex items-center justify-center">
                      <div className="w-3 h-3 bg-cosmic-emerald rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="flex-1">
                    <h2 className="text-3xl font-space-grotesk font-bold text-cosmic-light mb-2">
                      {member.name}
                    </h2>
                    <p className="text-xl text-cosmic-purple mb-1">{member.position}</p>
                    <p className="text-cosmic-cyan mb-4">{member.department}</p>
                    <p className="text-cosmic-light/80 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Skills */}
                    <div>
                      <h3 className="text-lg font-semibold text-cosmic-light mb-3">Skills & Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-cosmic-purple/20 text-cosmic-purple rounded-full text-sm border border-cosmic-purple/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Experience */}
                    <div>
                      <h3 className="text-lg font-semibold text-cosmic-light mb-3">Experience</h3>
                      <p className="text-cosmic-light/80">{member.experience}</p>
                    </div>

                    {/* Education */}
                    <div>
                      <h3 className="text-lg font-semibold text-cosmic-light mb-3">Education</h3>
                      <p className="text-cosmic-light/80">{member.education}</p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Contact */}
                    <div>
                      <h3 className="text-lg font-semibold text-cosmic-light mb-3">Contact</h3>
                      <div className="space-y-3">
                        {member.contact.email && (
                          <a
                            href={`mailto:${member.contact.email}`}
                            className="flex items-center gap-3 text-cosmic-light/80 hover:text-cosmic-cyan transition-colors interactive-element"
                          >
                            <Mail className="h-4 w-4" />
                            {member.contact.email}
                          </a>
                        )}
                        {member.contact.phone && (
                          <a
                            href={`tel:${member.contact.phone}`}
                            className="flex items-center gap-3 text-cosmic-light/80 hover:text-cosmic-cyan transition-colors interactive-element"
                          >
                            <Phone className="h-4 w-4" />
                            {member.contact.phone}
                          </a>
                        )}
                        {member.contact.linkedin && (
                          <a
                            href={member.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-cosmic-light/80 hover:text-cosmic-cyan transition-colors interactive-element"
                          >
                            <Linkedin className="h-4 w-4" />
                            LinkedIn Profile
                          </a>
                        )}
                        {member.contact.twitter && (
                          <a
                            href={member.contact.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-cosmic-light/80 hover:text-cosmic-cyan transition-colors interactive-element"
                          >
                            <Twitter className="h-4 w-4" />
                            Twitter Profile
                          </a>
                        )}
                        {member.contact.github && (
                          <a
                            href={member.contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-cosmic-light/80 hover:text-cosmic-cyan transition-colors interactive-element"
                          >
                            <Github className="h-4 w-4" />
                            GitHub Profile
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h3 className="text-lg font-semibold text-cosmic-light mb-3">Key Achievements</h3>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2 text-cosmic-light/80">
                            <span className="text-cosmic-cyan mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
