'use client';

import Image from 'next/image';
import { CDN_IMAGES } from '@/lib/constants';
import Navigation from '../components/navigation';
import SocialIcons from '../components/social-icons';
import Footer from '../components/footer';
import SectionWrapper from '../components/section-wrapper';
import CountUp from '../components/count-up';
import {
  Heart, Users, GraduationCap, Calendar, Building2,
  Globe, Shield, Megaphone, BookOpen, Award, Star
} from 'lucide-react';

const volunteerRoles = [
  {
    org: 'Naparima College Association of Past Students (NAPS Alumni)',
    role: 'President',
    period: 'October 2025 – Present',
    description: 'Leading the alumni association, driving initiatives for fundraising, mentorship, and community engagement. Overseeing public relations, social media strategy, and institutional development.',
    icon: Star,
    highlight: true,
  },
  {
    org: 'Naparima College Association of Past Students',
    role: 'Executive Member, PRO, 1st Vice President, Trustee',
    period: '1999 – 2019',
    description: 'Over two decades of service spanning fundraising, event management, public lectures, mentorship, and public relations including social media and website management for the association.',
    icon: Users,
    highlight: false,
  },
  {
    org: 'Naparima College',
    role: 'Pro Bono IT Support & Webmaster',
    period: 'Ongoing',
    description: 'Providing pro bono IT support, development, social media policy consultancy, webmaster services, networking, and telephony to Naparima College as an alumnus.',
    icon: Globe,
    highlight: false,
  },
  {
    org: 'CyberSafeTT Foundation',
    role: 'Founder & Lead Volunteer',
    period: '2010 – Present',
    description: 'Founded and running a non-profit providing free cyber safety education to the citizens of Trinidad and Tobago, including school presentations, youth camps, and online courses.',
    icon: Shield,
    highlight: false,
  },
  {
    org: 'Ministry of Education',
    role: 'Cyber Safety Trainer (Volunteer)',
    period: 'Ongoing',
    description: 'Conducting Train the Trainer sessions for School Social Workers on Cyberbullying, Social Media Etiquette, and Internet Addiction.',
    icon: GraduationCap,
    highlight: false,
  },
  {
    org: 'Schools & Faith-Based Organizations',
    role: 'Digital Transformation Advisor',
    period: '2020 – 2021',
    description: 'During COVID-19, provided free technical guidance for schools in their Digital Transformation Initiatives including Online Learning, Google Workspace, and Office 365 setup.',
    icon: Building2,
    highlight: false,
  },
  {
    org: 'Government Ministries & NGOs',
    role: 'Guest Speaker & Career Advisor',
    period: 'Ongoing',
    description: 'Presented on Cyber Safety at Government Ministry youth camps and NGOs. Featured as guest speaker and career guidance advisor at events across Trinidad and Tobago.',
    icon: Megaphone,
    highlight: false,
  },
];

const napsHighlights = [
  'Over 20 years of continuous alumni service',
  'Currently serving as President (Oct 2025)',
  'Pro bono IT infrastructure and website management',
  'Social media strategy and digital presence',
  'Event management and fundraising coordination',
  'Student mentorship programs',
];

export default function VolunteerismClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
      <Navigation />
      <SocialIcons />

      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center pt-20 pb-12 bg-gradient-to-br from-indigo-950/60 via-slate-950/80 to-slate-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Image Box - Left Side */}
            <div className="shrink-0">
              <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-blue-500/20 hover:ring-blue-500/40 transition-all duration-300">
                <Image 
                  src="/images/daren-volunteer.png" 
                  alt="Daren Dhoray Volunteering" 
                  fill 
                  className="object-cover" 
                  priority 
                />
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-2 text-blue-400 text-sm mb-3 justify-center md:justify-start">
                <Heart className="w-4 h-4" />
                <span>Community Service & Volunteerism</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                Giving <span className="text-red-500">Back</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                A Lifetime of Service to Community, Education & Digital Safety
              </p>
              <p className="text-gray-400 max-w-2xl">
                25+ years of volunteering | NAPS Alumni President | CyberSafeTT Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* Stats */}
        <SectionWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Years of Volunteering', value: 25, suffix: '+', icon: Calendar },
              { label: 'Organizations Served', value: 10, suffix: '+', icon: Building2 },
              { label: 'Free Training Sessions', value: 500, suffix: '+', icon: GraduationCap },
              { label: 'Lives Impacted', value: 50000, suffix: '+', icon: Users },
            ]?.map?.((stat, i) => {
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

        {/* NAPS Highlight */}
        <SectionWrapper delay={0.1}>
          <div className="bg-gradient-to-br from-blue-950/40 to-red-950/20 rounded-lg p-8 shadow-xl border border-white/5">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-white">Naparima College Alumni</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Daren&apos;s dedication to his alma mater, <strong className="text-white">Naparima College</strong>, spans over two decades of service. Currently serving as <strong className="text-red-400">President</strong> of the Naparima College Association of Past Students, he continues to drive initiatives that benefit current students and the broader school community.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {napsHighlights?.map?.((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 rounded-md p-3">
                  <Star className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="text-gray-300 text-sm">{item ?? ''}</span>
                </div>
              )) ?? []}
            </div>
            <div className="mt-6">
              <a
                href="https://www.facebook.com/napsalumni"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm font-medium transition-colors"
              >
                <Users className="w-4 h-4" /> NAPS Alumni Facebook
              </a>
            </div>
          </div>
        </SectionWrapper>

        {/* Volunteer Roles */}
        <SectionWrapper delay={0.15}>
          <div className="flex items-center gap-2 mb-8">
            <Heart className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Volunteer Experiences</h2>
          </div>
          <div className="space-y-4">
            {volunteerRoles?.map?.((role, i) => {
              const IconComp = role?.icon;
              return (
                <div key={i} className={`rounded-lg p-6 shadow-lg transition-all hover:bg-blue-950/30 ${
                  role?.highlight ? 'bg-gradient-to-r from-red-950/30 to-blue-950/30 border border-red-500/20' : 'bg-blue-950/20'
                }`}>
                  <div className="flex items-start gap-4">
                    {IconComp && <IconComp className={`w-6 h-6 shrink-0 mt-1 ${role?.highlight ? 'text-red-400' : 'text-blue-400'}`} />}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{role?.role ?? ''}</h3>
                          <p className="text-blue-400 text-sm">{role?.org ?? ''}</p>
                        </div>
                        <span className="text-gray-500 text-sm shrink-0">{role?.period ?? ''}</span>
                      </div>
                      <p className="text-gray-400 text-sm mt-2">{role?.description ?? ''}</p>
                    </div>
                  </div>
                </div>
              );
            }) ?? []}
          </div>
        </SectionWrapper>

        {/* Philosophy */}
        <SectionWrapper delay={0.2}>
          <div className="bg-blue-950/20 rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-white">Volunteer Philosophy</h2>
            </div>
            <blockquote className="text-gray-300 text-lg italic border-l-4 border-red-500 pl-6">
              &ldquo;Technology should empower communities, not divide them. Through volunteerism, we bridge the digital divide and ensure that everyone has the knowledge to navigate the online world safely.&rdquo;
            </blockquote>
            <p className="text-gray-500 mt-3">— Daren Dhoray</p>
          </div>
        </SectionWrapper>
      </div>

      <Footer />
    </div>
  );
}
