"use client"
import React, { useLayoutEffect, useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Github, Mail, Facebook, Instagram, ExternalLink, Code, User, Target } from 'lucide-react';
import { gsap } from 'gsap';
import meImage from "../assets/me.jpg";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const Portfolio: React.FC = () => {
  const [showStats, setShowStats] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const skillBarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const skillLabelRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initial entrance animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      });

      gsap.from(aboutRef.current, {
        duration: 1,
        y: 80,
        opacity: 0,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(contactRef.current, {
        duration: 1,
        y: 80,
        opacity: 0,
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.fromTo(
      ".bg-pulse-1",
      { scale: 1, opacity: 0 },
      {
        scale: 1.1,
        opacity: 0.2,
        duration: 2,
        ease: "sine.inOut"
      }
    );

    gsap.fromTo(
      ".bg-pulse-2",
      { scale: 1, opacity: 0 },
      {
        scale: 1.15,
        opacity: 0.2,
        duration: 2.5,
        ease: "sine.inOut",
        delay: 0.3
      }
    );

    });

    return () => ctx.revert();
  }, []);

  // Stats animation when revealed
  useEffect(() => {
    if (showStats && statsRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(statsRef.current, {
          duration: 0.8,
          y: 50,
          opacity: 0,
          ease: "power3.out",
        });

        gsap.from(skillBarRefs.current, {
          duration: 1.2,
          scaleX: 0,
          transformOrigin: "left center",
          stagger: 0.2,
          delay: 0.3,
          ease: "power3.out",
        });

        gsap.from(skillLabelRefs.current, {
          duration: 0.8,
          x: -30,
          opacity: 0,
          stagger: 0.15,
          delay: 0.2,
          ease: "power3.out",
        });
      }, statsRef);

      return () => ctx.revert();
    }
  }, [showStats]);

  const skills: Skill[] = [
    { name: 'HTML', level: 95, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { name: 'CSS', level: 85, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 85, color: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
    { name: 'React', level: 80, color: 'bg-gradient-to-r from-red-500 to-pink-500' },
    { name: 'Tailwind', level: 80, color: 'bg-gradient-to-r from-green-400 to-blue-500' },
    { name: 'Mern', level: 65, color: 'bg-gradient-to-r from-green-500 to-lime-500' }
  ];

  const socialLinks: SocialLink[] = [
    {
      name: 'Email',
      url: 'mailto:jananashvilidachi@gmail.com',
      icon: Mail,
      color: 'hover:text-red-500'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100088764846055',
      icon: Facebook,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dachi_jey/',
      icon: Instagram,
      color: 'hover:text-pink-500'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/d-jey66',
      icon: Github,
      color: 'hover:text-gray-300'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-pulse-1 absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="bg-pulse-2 absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-gradient-to-r from-red-600 to-red-700 shadow-2xl">
        <div className="container mx-auto px-3 py-6">
          <div 
            ref={heroRef}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-4">
              Dachi Jananashvili
            </h1>
            <p className="text-xl md:text-2xl text-red-100 font-light">
              Aspiring Web Developer & Student
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-12 space-y-12">
        
        {/* About Section */}
        <Card 
          ref={aboutRef}
          className="bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-2xl"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl text-white">
              <User className="w-8 h-8 text-red-500" />
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-64 h-78 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center shadow-2xl">
                  <img
                    src={meImage.src}
                    alt="profile" 
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg leading-relaxed text-gray-300">
                    Hi! I'm <strong className="text-white">Dachi Jananashvili</strong>, a 17-year-old aspiring web developer currently studying at 
                    <Badge variant="secondary" className="mx-2 bg-red-600 text-white hover:bg-red-700">
                      Goal-Oriented Academy
                    </Badge>
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300">
                    I've already participated in <strong className="text-red-400">3 hackathon</strong> and I'm passionate about becoming a professional web developer. 
                    My journey in tech has just begun, but I'm excited about the possibilities ahead!
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 text-sm">
                    <Code className="w-4 h-4 mr-2" />
                    Web Development Student
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 text-sm">
                    <Target className="w-4 h-4 mr-2" />
                    3 Hackathon Completed
                  </Badge>
                </div>

                <Button 
                  onClick={() => setShowStats(!showStats)}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {showStats ? 'Hide My Skills' : 'Reveal My Skills'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        {showStats && (
          <Card 
            ref={statsRef}
            className="bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-2xl"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl text-white">
                <Code className="w-8 h-8 text-red-500" />
                Technical Skills
              </CardTitle>
              <CardDescription className="text-gray-400 text-lg">
                My current proficiency levels in various technologies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {skills.map((skill: Skill, index: number) => (
                <div key={skill.name} className="space-y-3">
                  <div 
                    ref={(el: HTMLDivElement | null) => {skillLabelRefs.current[index] = el!; }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-lg font-semibold text-white">{skill.name}</span>
                    <Badge variant="outline" className="text-gray-300 border-gray-600">
                      {skill.level}%
                    </Badge>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-700 rounded-full h-3 shadow-inner">
                      <div 
                        ref={(el: HTMLDivElement | null) => {skillBarRefs.current[index] = el!; }}
                        className={`h-3 rounded-full ${skill.color} shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Contact Section */}
        <Card 
          ref={contactRef}
          className="bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-2xl"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl text-white">
              <Mail className="w-8 h-8 text-red-500" />
              Let's Connect
            </CardTitle>
            <CardDescription className="text-gray-400 text-lg">
              Feel free to reach out through any of these platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialLinks.map((link: SocialLink) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="flex items-center gap-4 p-6 bg-gray-700/50 rounded-xl border border-gray-600 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105">
                      <IconComponent className={`w-8 h-8 text-gray-400 group-hover:text-red-500 transition-colors duration-300`} />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                          {link.name}
                        </h3>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          {link.name === 'Email' ? 'jananashvilidachi@gmail.com' : `Connect on ${link.name}`}
                        </p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-red-500 transition-colors duration-300" />
                    </div>
                    
                  </a>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-red-600 to-red-700 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-red-100 text-lg">
              Dachi Jananashvili - Aspiring Web Developer
            </p>
            <p className="text-red-200 text-sm mt-2">
              Built with next.js, Tailwind CSS and GSAP.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;