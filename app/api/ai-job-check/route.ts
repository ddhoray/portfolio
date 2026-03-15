export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';

// Comprehensive job automation risk database
const jobDatabase: Record<string, { risk: number; level: string; desc: string; skills: string[]; outlook: string }> = {
  'accountant': { risk: 65, level: 'High Risk', desc: 'Many accounting tasks like bookkeeping, data entry, and basic tax preparation are highly automatable. However, strategic financial advisory and complex auditing still require human judgment.', skills: ['Financial Strategy', 'Client Relations', 'Forensic Accounting', 'AI-Augmented Analysis'], outlook: 'Routine accounting roles will decline, but demand for strategic financial advisors will grow.' },
  'nurse': { risk: 12, level: 'Low Risk', desc: 'Nursing requires empathy, physical care, critical thinking in unpredictable situations, and human connection that AI cannot replicate.', skills: ['Patient Advocacy', 'Telehealth', 'Health Informatics', 'Specialized Care'], outlook: 'Healthcare demand is increasing globally, making nursing one of the most secure professions.' },
  'teacher': { risk: 20, level: 'Low Risk', desc: 'While AI can assist with content delivery and grading, the mentorship, emotional support, and adaptive teaching that educators provide is irreplaceable.', skills: ['EdTech Integration', 'Social-Emotional Learning', 'Personalized Instruction', 'Digital Literacy'], outlook: 'Teachers who embrace technology will be more valuable than ever.' },
  'software developer': { risk: 35, level: 'Medium Risk', desc: 'AI coding assistants can handle routine programming tasks, but complex system design, creative problem-solving, and understanding business requirements remain human strengths.', skills: ['AI/ML Engineering', 'System Architecture', 'Human-AI Collaboration', 'Cybersecurity'], outlook: 'Developers who work alongside AI tools will see increased productivity and demand.' },
  'graphic designer': { risk: 55, level: 'Medium-High Risk', desc: 'AI image generation tools are rapidly advancing, handling many routine design tasks. However, brand strategy, creative direction, and understanding client vision still need humans.', skills: ['Brand Strategy', 'UX/UI Design', 'AI Tool Mastery', 'Creative Direction'], outlook: 'Designers who leverage AI tools will produce more while those doing template work face displacement.' },
  'lawyer': { risk: 38, level: 'Medium Risk', desc: 'AI can handle document review, legal research, and contract analysis efficiently. Courtroom advocacy, negotiation, and complex legal strategy remain human domains.', skills: ['Legal Tech', 'Negotiation', 'Regulatory Compliance', 'AI Ethics & Law'], outlook: 'Paralegals and junior associates face more risk than experienced attorneys.' },
  'truck driver': { risk: 72, level: 'High Risk', desc: 'Self-driving technology is advancing rapidly for highway driving. Last-mile delivery and complex urban navigation still present challenges for full automation.', skills: ['Fleet Management', 'Logistics Technology', 'Specialized Transport', 'Maintenance Tech'], outlook: 'Long-haul routes will be automated first; local and specialized driving will persist longer.' },
  'doctor': { risk: 18, level: 'Low Risk', desc: 'While AI excels at diagnostics and pattern recognition in medical imaging, the physician-patient relationship, complex decision-making, and physical examinations are irreplaceable.', skills: ['AI-Assisted Diagnostics', 'Telemedicine', 'Precision Medicine', 'Patient Communication'], outlook: 'Doctors who integrate AI into practice will deliver better outcomes.' },
  'cashier': { risk: 85, level: 'Very High Risk', desc: 'Self-checkout systems, automated stores, and contactless payment are rapidly replacing traditional cashier roles across retail.', skills: ['Customer Experience', 'Tech Support', 'Inventory Management', 'Digital Payments'], outlook: 'Traditional cashier roles are declining; transition to customer experience roles recommended.' },
  'data entry': { risk: 90, level: 'Very High Risk', desc: 'AI and OCR technology can process documents faster and more accurately than humans. This is one of the most automatable job categories.', skills: ['Data Analysis', 'Process Automation', 'Quality Assurance', 'Database Management'], outlook: 'Data entry roles are rapidly being automated. Upskilling to data analysis is recommended.' },
  'cybersecurity': { risk: 15, level: 'Low Risk', desc: 'As AI creates new attack vectors, the need for cybersecurity professionals grows. Human intuition and creative problem-solving are essential for defending against novel threats.', skills: ['Threat Intelligence', 'AI Security', 'Incident Response', 'Security Architecture'], outlook: 'One of the fastest-growing fields. Demand far exceeds supply globally.' },
  'writer': { risk: 48, level: 'Medium Risk', desc: 'AI can generate content at scale, but authentic voice, investigative journalism, creative storytelling, and nuanced cultural commentary remain human strengths.', skills: ['AI-Augmented Writing', 'Investigative Skills', 'Personal Branding', 'Multimedia Storytelling'], outlook: 'Content mills will be automated; distinctive voices and investigative work will thrive.' },
  'chef': { risk: 22, level: 'Low Risk', desc: 'While robotic cooking exists, the creativity, sensory judgment, and artistry of culinary arts are difficult to automate. Cultural understanding and innovation keep chefs relevant.', skills: ['Culinary Innovation', 'Food Science', 'Restaurant Management', 'Brand Building'], outlook: 'Demand for creative and specialized culinary experiences continues to grow.' },
  'electrician': { risk: 15, level: 'Low Risk', desc: 'Electrical work requires physical dexterity, problem-solving in varied environments, and adherence to safety codes that make it very difficult to automate.', skills: ['Smart Home Tech', 'Solar/EV Installation', 'Industrial Automation', 'Energy Management'], outlook: 'Green energy transition is creating massive demand for skilled electricians.' },
  'marketing manager': { risk: 40, level: 'Medium Risk', desc: 'AI handles data analysis, ad optimization, and content generation, but brand strategy, creative campaigns, and understanding human psychology remain essential.', skills: ['AI Marketing Tools', 'Data-Driven Strategy', 'Brand Storytelling', 'Customer Psychology'], outlook: 'Marketers who master AI tools will manage larger portfolios with better results.' },
  'pharmacist': { risk: 55, level: 'Medium-High Risk', desc: 'Automated dispensing and AI drug interaction checking are reducing routine tasks. Patient counseling and specialized pharmaceutical care remain important.', skills: ['Clinical Pharmacy', 'Pharmacogenomics', 'Patient Education', 'Healthcare IT'], outlook: 'Routine dispensing will be automated; clinical roles will expand.' },
};

function analyzeJob(title: string): { job: string; riskLevel: string; riskPercent: number; description: string; skills: string[]; outlook: string } {
  const normalizedTitle = (title ?? '').toLowerCase().trim();

  // Direct match
  for (const [key, data] of Object.entries(jobDatabase ?? {})) {
    if (normalizedTitle.includes(key) || key.includes(normalizedTitle)) {
      return {
        job: title ?? 'Unknown',
        riskLevel: data?.level ?? 'Unknown',
        riskPercent: data?.risk ?? 50,
        description: data?.desc ?? '',
        skills: data?.skills ?? [],
        outlook: data?.outlook ?? '',
      };
    }
  }

  // Keyword-based estimation
  const highRiskKeywords = ['data entry', 'clerk', 'cashier', 'telemarketer', 'receptionist', 'bookkeeper', 'typist', 'filing', 'assembly'];
  const mediumRiskKeywords = ['analyst', 'manager', 'coordinator', 'administrator', 'assistant', 'operator', 'technician'];
  const lowRiskKeywords = ['therapist', 'counselor', 'surgeon', 'artist', 'scientist', 'researcher', 'firefighter', 'police', 'nurse', 'plumber', 'carpenter'];

  let riskPercent = 45;
  let riskLevel = 'Medium Risk';

  for (const kw of highRiskKeywords) {
    if (normalizedTitle.includes(kw)) { riskPercent = 70 + Math.floor(Math.random() * 15); riskLevel = 'High Risk'; break; }
  }
  for (const kw of lowRiskKeywords) {
    if (normalizedTitle.includes(kw)) { riskPercent = 10 + Math.floor(Math.random() * 15); riskLevel = 'Low Risk'; break; }
  }
  for (const kw of mediumRiskKeywords) {
    if (normalizedTitle.includes(kw)) { riskPercent = 35 + Math.floor(Math.random() * 20); riskLevel = 'Medium Risk'; break; }
  }

  return {
    job: title ?? 'Unknown',
    riskLevel,
    riskPercent,
    description: `Based on our analysis of similar roles, ${title} has a ${riskLevel.toLowerCase()} of being automated by AI. Jobs that involve routine, predictable tasks face higher automation risk, while roles requiring creativity, empathy, complex problem-solving, and physical dexterity tend to be more resilient.`,
    skills: ['Adaptability', 'AI Literacy', 'Critical Thinking', 'Digital Skills', 'Continuous Learning'],
    outlook: `The key to staying relevant in any field is continuous learning and adapting to new technologies. Consider how AI tools might augment your role rather than replace it.`,
  };
}

export async function POST(request: Request) {
  try {
    const data = await request?.json?.();
    const jobTitle = data?.jobTitle ?? '';

    if (!jobTitle?.trim?.()) {
      return NextResponse.json({ success: false, message: 'Job title is required.' }, { status: 400 });
    }

    const result = analyzeJob(jobTitle);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('AI job check error:', error);
    return NextResponse.json({ success: false, message: 'Failed to analyze job.' }, { status: 500 });
  }
}
