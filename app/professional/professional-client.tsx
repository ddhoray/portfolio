'use client';

import Image from 'next/image';
import { CDN_IMAGES } from '@/lib/constants';
import Navigation from '../components/navigation';
import SocialIcons from '../components/social-icons';
import Footer from '../components/footer';
import SectionWrapper from '../components/section-wrapper';
import CountUp from '../components/count-up';
import ContactForm from '../components/contact-form';
import AiJobChecker from '../components/ai-job-checker';
import {
  Briefcase, GraduationCap, Award, Building2, Code, Users,
  Globe, Shield, BookOpen, Lightbulb, ChevronRight, MapPin, Calendar
} from 'lucide-react';

const stats = [
  { label: 'Years IT Experience', value: 25, suffix: '+', icon: Code },
  { label: 'Years in Education', value: 20, suffix: '+', icon: GraduationCap },
  { label: 'Years Cyber Safety', value: 15, suffix: '+', icon: Shield },
  { label: 'IT Team Members Led', value: 17, suffix: '', icon: Users },
];

const experience = [
  {
    title: 'Manager, Enterprise Applications Support',
    company: 'The University of the West Indies (UWI)',
    location: 'St. Augustine, Trinidad & Tobago',
    period: '2021 – Present',
    description: 'Leading a team of 17 IT Professionals. Overseeing all Enterprise Applications including Power BI, Argos, and custom analytics. Supporting the CIO in strategic relations, vendor management, procurement, and digital transformation.',
  },
  {
    title: 'Founder',
    company: 'CyberSafeTT Foundation (NGO)',
    location: 'Trinidad & Tobago',
    period: '2010 – Present',
    description: 'Founded the go-to resource for Cyber Security Awareness in Trinidad and Tobago. Conducting education sessions on Cyber Safety, Cyberbullying, Internet Addiction. Developed online learning platform with free certificate courses.',
  },
  {
    title: 'Webmaster & IT Officer',
    company: 'The University of the West Indies',
    location: 'St. Augustine',
    period: '2004 – 2021',
    description: 'Led the web team for UWI St. Augustine Campus. Managed campus online infrastructure, regional team coordination across Jamaica and Barbados, and Green IT initiatives.',
  },
  {
    title: 'Board of Directors Member',
    company: 'Accreditation Council of Trinidad and Tobago',
    location: 'Trinidad & Tobago',
    period: '2014 – 2015',
    description: 'Provided direction and oversight to digital transformation initiatives including review of electronic Records Management System.',
  },
  {
    title: 'Software Developer',
    company: 'Florida Logic Corp.',
    location: 'USA (Offshore)',
    period: '1999 – 2004',
    description: 'Led a team of 5 developers for a US offshore company. Worked on Y2K debugging for ABN Amro, backend systems for 1-800-FLOWERS, and websites for global suppliers.',
  },
];

const education = [
  { degree: 'MBA – Digital Transformation (Ongoing)', school: 'UWI Cave Hill, Barbados', year: '2024 – 2027' },
  { degree: 'MA Creative Design & Entrepreneurship (Honors)', school: 'UWI St. Augustine', year: '2013' },
  { degree: 'B.Sc. Computer Science & Management', school: 'UWI St. Augustine', year: '1999' },
];

const certifications = [
  'Certified Internet Systems Security Professional – UDEMY (2024)',
  'Digital Transformation – Stanford University (2021)',
  'Data Analysis for Managers – London School of Economics (2020)',
  'Cyber Security Training – Commonwealth of Learning (2020)',
  'Foundations for Excellence in Teaching Online – Arizona State University (2020)',
];

const awards = [
  { title: 'Cyber Heroes of the Caribbean', org: 'Get Safe Online (UK)', year: '2020', desc: 'Inaugural award – Highly Commended for efforts to keep Trinidad and Tobago citizens safe online.' },
  { title: 'Country Representative – Meta HQ', org: 'Meta (Facebook)', year: '2022', desc: 'Represented Trinidad and Tobago at Meta Community Standards Roundtable, Mexico City.' },
];

export default function ProfessionalClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
      <Navigation />
      <SocialIcons />

      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center pt-20 pb-12 bg-gradient-to-br from-blue-950/60 via-slate-950/80 to-slate-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Image Box - Left Side */}
            <div className="shrink-0">
              <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-blue-500/20 hover:ring-blue-500/40 transition-all duration-300">
                <Image 
                  src="/images/daren-professional.png" 
                  alt="Daren Dhoray Professional" 
                  fill 
                  className="object-cover" 
                  priority 
                />
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-2 text-blue-400 text-sm mb-3 justify-center md:justify-start">
                <Briefcase className="w-4 h-4" />
                <span>Professional Profile</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                Daren <span className="text-red-500">Dhoray</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Digital Anthropologist &bull; IT Leader &bull; Cybersecurity Advocate
              </p>
              <p className="text-gray-400 max-w-2xl">
                25+ years of IT experience | 20+ years in Education | 15+ years of Cyber Safety training
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
                <div key={i} className="bg-blue-950/40 rounded-lg p-6 text-center shadow-lg hover:shadow-blue-500/10 transition-shadow">
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
          <div className="bg-blue-950/20 rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-white">Professional Bio</h2>
            </div>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                Daren Dhoray is a technology, business, and academic professional with hands-on experience managing IT projects of various sizes across the Caribbean region. With <strong className="text-white">25+ years</strong> of Internet-related work experience, <strong className="text-white">20+ years</strong> in the Education sector, and <strong className="text-white">15+ years</strong> of Cyber Safety & Online Technologies Awareness training, he brings a unique blend of technical expertise and educational vision.
              </p>
              <p>
                Currently serving as Manager of Enterprise Applications Support at The University of the West Indies, St. Augustine Campus, Daren leads a team of 17 IT professionals responsible for all enterprise applications. He is also the founder of the <strong className="text-red-400">CyberSafeTT Foundation</strong>, a non-profit organization dedicated to educating citizens of Trinidad and Tobago about safe online practices.
              </p>
              <p>
                His career spans software development, web management, digital transformation, and cybersecurity — having worked with organizations from US-based tech firms to Caribbean academic institutions. He holds an ongoing MBA in Digital Transformation from UWI Cave Hill, an MA in Creative Design & Entrepreneurship (Honors), and a B.Sc. in Computer Science & Management.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Experience */}
        <SectionWrapper delay={0.15}>
          <div className="flex items-center gap-2 mb-8">
            <Building2 className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Career Experience</h2>
          </div>
          <div className="space-y-4">
            {experience?.map?.((exp, i) => (
              <div key={i} className="bg-blue-950/20 rounded-lg p-6 shadow-lg hover:shadow-blue-500/10 transition-all hover:bg-blue-950/30">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{exp?.title ?? ''}</h3>
                    <p className="text-blue-400">{exp?.company ?? ''}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400 shrink-0">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{exp?.location ?? ''}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{exp?.period ?? ''}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{exp?.description ?? ''}</p>
              </div>
            )) ?? []}
          </div>
        </SectionWrapper>

        {/* Education & Certs */}
        <SectionWrapper delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-6 h-6 text-red-500" />
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>
              <div className="space-y-4">
                {education?.map?.((edu, i) => (
                  <div key={i} className="bg-blue-950/20 rounded-lg p-5 shadow-lg">
                    <h3 className="text-white font-semibold">{edu?.degree ?? ''}</h3>
                    <p className="text-blue-400 text-sm">{edu?.school ?? ''}</p>
                    <p className="text-gray-500 text-xs mt-1">{edu?.year ?? ''}</p>
                  </div>
                )) ?? []}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-6 h-6 text-red-500" />
                <h2 className="text-2xl font-bold text-white">Certifications</h2>
              </div>
              <div className="space-y-3">
                {certifications?.map?.((cert, i) => (
                  <div key={i} className="bg-blue-950/20 rounded-lg p-4 shadow-lg flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    <p className="text-gray-300 text-sm">{cert ?? ''}</p>
                  </div>
                )) ?? []}
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Awards */}
        <SectionWrapper delay={0.25}>
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Awards & Recognition</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {awards?.map?.((award, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-950/40 to-red-950/20 rounded-lg p-6 shadow-lg border border-white/5">
                <h3 className="text-lg font-semibold text-white mb-1">{award?.title ?? ''}</h3>
                <p className="text-red-400 text-sm">{award?.org ?? ''} &bull; {award?.year ?? ''}</p>
                <p className="text-gray-400 text-sm mt-2">{award?.desc ?? ''}</p>
              </div>
            )) ?? []}
          </div>
        </SectionWrapper>

        {/* Papers */}
        <SectionWrapper delay={0.3}>
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Papers & Presentations</h2>
          </div>
          <div className="space-y-3">
            <div className="bg-blue-950/20 rounded-lg p-5 shadow-lg">
              <h3 className="text-white font-medium">Transforming University Websites – AI Enhanced Interactivity for Personalized Student Engagement</h3>
              <p className="text-gray-400 text-sm mt-1">The University of the West Indies, Five Islands AI Conference &bull; July 2025</p>
            </div>
            <div className="bg-blue-950/20 rounded-lg p-5 shadow-lg">
              <h3 className="text-white font-medium">4 Webmasters & the Drupal Shining Star</h3>
              <p className="text-gray-400 text-sm mt-1">DrupalCon Los Angeles &bull; May 2015</p>
            </div>
          </div>
        </SectionWrapper>

        {/* AI Job Checker */}
        <SectionWrapper delay={0.35}>
          <div className="bg-gradient-to-br from-blue-950/40 to-slate-900/40 rounded-lg p-8 shadow-xl border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-white">Will AI Take My Job?</h2>
            </div>
            <p className="text-gray-400 mb-6">Enter a job title to discover the likelihood of AI automation affecting that role.</p>
            <AiJobChecker />
          </div>
        </SectionWrapper>

        {/* Contact */}
        <SectionWrapper delay={0.4}>
          <div className="bg-blue-950/20 rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
            </div>
            <p className="text-gray-400 mb-6">Interested in collaboration, speaking engagements, or professional inquiries? Send a message below.</p>
            <ContactForm formType="professional" accentColor="blue" />
          </div>
        </SectionWrapper>
      </div>

      <Footer />
    </div>
  );
}
