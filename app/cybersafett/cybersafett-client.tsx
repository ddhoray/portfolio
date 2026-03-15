'use client';

import Image from 'next/image';
import { CDN_IMAGES } from '@/lib/constants';
import Navigation from '../components/navigation';
import SocialIcons from '../components/social-icons';
import Footer from '../components/footer';
import SectionWrapper from '../components/section-wrapper';
import CountUp from '../components/count-up';
import ContactForm from '../components/contact-form';
import InternetAddictionTest from '../components/internet-addiction-test';
import {
  Shield, Users, BookOpen, Award, GraduationCap, Globe, Megaphone,
  MapPin, ExternalLink, Wifi, FileText, Lightbulb, Building2
} from 'lucide-react';

const stats = [
  { label: 'Years of Cyber Safety Education', value: 15, suffix: '+', icon: Shield },
  { label: 'Schools & Organizations Reached', value: 200, suffix: '+', icon: Building2 },
  { label: 'Students & Citizens Trained', value: 50000, suffix: '+', icon: Users },
  { label: 'Locations Across T&T', value: 100, suffix: '+', icon: MapPin },
];

const activities = [
  { icon: GraduationCap, title: 'Education Presentations', desc: 'Cyber Safety, Cyberbullying, Internet Addiction, and Social Media Etiquette sessions for schools, non-profits, and faith-based organizations.' },
  { icon: Globe, title: 'Online Learning Platform', desc: 'Developed learn.cybersafett.com with free certificate courses on Online Safety and Internet Addiction.' },
  { icon: Users, title: 'Train the Trainer', desc: 'Sessions for School Social Workers (Ministry of Education) on Cyberbullying, Social Media Etiquette & Internet Addiction.' },
  { icon: Shield, title: 'Phishing Simulation', desc: 'Deployed Phishing Simulation using KnowB4 PhishER Plus for corporate security awareness.' },
  { icon: Lightbulb, title: 'Cyber Escape Room', desc: 'Designed the CyberSafeTT Cyber Escape Room Simulation for interactive learning experiences.' },
  { icon: FileText, title: 'Policy Development', desc: 'Developed the Social Media Etiquette Policy for the Ministry of Labor, OJT Program Office (2022).' },
  { icon: Megaphone, title: 'Government Contributions', desc: 'Contributed to the Cyber Crime Bill (2017) and National Youth Policy 2020.' },
  { icon: Building2, title: 'Corporate Training', desc: 'Cyber Security Awareness Sessions for Oil & Gas, Health & Safety, and Education sectors.' },
];

export default function CyberSafeTTClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-red-950/20 to-gray-950">
      <Navigation />
      <SocialIcons />

      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center pt-20 pb-12 bg-gradient-to-br from-red-950/60 via-gray-950/80 to-gray-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Image Box - Left Side */}
            <div className="shrink-0">
              <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-red-500/20 hover:ring-red-500/40 transition-all duration-300">
                <Image 
                  src="/images/daren-cybersafett.jpg" 
                  alt="Daren Dhoray CyberSafeTT" 
                  fill 
                  className="object-cover" 
                  priority 
                />
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                <div className="relative w-12 h-12">
                  <Image src={CDN_IMAGES.cybersafettLogo} alt="CyberSafeTT Logo" fill className="object-contain rounded" />
                </div>
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>CyberSafeTT Foundation</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                Cyber<span className="text-red-500">Safe</span>TT
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Keeping Trinidad & Tobago Safe Online Since 2010
              </p>
              <p className="text-gray-400 max-w-2xl">
                15+ years of Cyber Safety Education | 200+ Schools & Organizations | 50,000+ Citizens Trained
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* Stats */}
        <SectionWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats?.map?.((stat, i) => {
              const IconComp = stat?.icon;
              return (
                <div key={i} className="bg-red-950/30 rounded-lg p-6 text-center shadow-lg hover:shadow-red-500/10 transition-shadow">
                  {IconComp && <IconComp className="w-8 h-8 text-red-500 mx-auto mb-3" />}
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    <CountUp end={stat?.value ?? 0} suffix={stat?.suffix ?? ''} />
                  </div>
                  <p className="text-gray-400 text-sm mt-1">{stat?.label ?? ''}</p>
                </div>
              );
            }) ?? []}
          </div>
        </SectionWrapper>

        {/* Bio */}
        <SectionWrapper delay={0.1}>
          <div className="bg-red-950/20 rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-white">About CyberSafeTT</h2>
            </div>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                Daren Dhoray is a <strong className="text-white">Digital Anthropologist</strong> and the founder of <strong className="text-red-400">CyberSafeTT</strong> and the CyberSafeTT Foundation. With over <strong className="text-white">15 years</strong> of experience in research and presenting on topics related to CyberSafety, he is Trinidad and Tobago&apos;s leading voice on cyberbullying, social media etiquette, internet addiction, device safety, and cybersecurity awareness.
              </p>
              <p>
                CyberSafeTT was started in 2010 as a personal project with the mission of providing <strong className="text-white">free cyber safety education</strong> to the citizens of Trinidad and Tobago. It has since evolved into the country&apos;s go-to resource for Cyber Security Awareness, reaching thousands of students, parents, teachers, and professionals.
              </p>
              <p>
                Through school presentations, corporate training, online courses, and policy development, CyberSafeTT has made a lasting impact on digital safety practices across the Caribbean region.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Activities Grid */}
        <SectionWrapper delay={0.15}>
          <div className="flex items-center gap-2 mb-8">
            <Megaphone className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-white">What We Do</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {activities?.map?.((act, i) => {
              const IconComp = act?.icon;
              return (
                <div key={i} className="bg-red-950/20 rounded-lg p-5 shadow-lg hover:shadow-red-500/10 transition-all hover:bg-red-950/30">
                  <div className="flex items-start gap-3">
                    {IconComp && <IconComp className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />}
                    <div>
                      <h3 className="text-white font-semibold mb-1">{act?.title ?? ''}</h3>
                      <p className="text-gray-400 text-sm">{act?.desc ?? ''}</p>
                    </div>
                  </div>
                </div>
              );
            }) ?? []}
          </div>
        </SectionWrapper>

        {/* Recognition */}
        <SectionWrapper delay={0.2}>
          <div className="bg-gradient-to-br from-red-950/30 to-blue-950/20 rounded-lg p-8 shadow-lg border border-white/5">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-white">Recognition & Impact</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Cyber Heroes of the Caribbean</h3>
                <p className="text-gray-400 text-sm">Inaugural award from Get Safe Online (UK) – Highly Commended for efforts to keep Trinidad and Tobago citizens safe online (Dec 2020).</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Meta Community Standards</h3>
                <p className="text-gray-400 text-sm">Member of the Regional Facebook Community Standards Committee (2021, 2022). Country representative at Meta HQ, Mexico City.</p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* External links */}
        <SectionWrapper delay={0.25}>
          <div className="flex flex-wrap gap-4">
            <a href="https://cybersafett.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 rounded-md text-white font-medium transition-colors">
              <Globe className="w-5 h-5" /> Visit CyberSafeTT.com <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://learn.cybersafett.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition-colors">
              <GraduationCap className="w-5 h-5" /> Online Courses <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </SectionWrapper>

        {/* Internet Addiction Test */}
        <SectionWrapper delay={0.3}>
          <div className="bg-gradient-to-br from-red-950/40 to-gray-900/40 rounded-lg p-8 shadow-xl border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <Wifi className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-white">Internet Addiction Test</h2>
            </div>
            <p className="text-gray-400 mb-6">Answer these 7 questions honestly to assess your internet usage habits. Score range: 7–35.</p>
            <InternetAddictionTest />
          </div>
        </SectionWrapper>

        {/* Contact */}
        <SectionWrapper delay={0.35}>
          <div className="bg-red-950/20 rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-white">Contact CyberSafeTT</h2>
            </div>
            <p className="text-gray-400 mb-6">Book a presentation, request training, or inquire about CyberSafeTT services.</p>
            <ContactForm formType="cybersafett" accentColor="red" />
          </div>
        </SectionWrapper>
      </div>

      <Footer />
    </div>
  );
}
