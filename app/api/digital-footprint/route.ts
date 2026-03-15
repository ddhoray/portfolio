export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';

function analyzeEmail(email: string) {
  const safeEmail = email ?? '';
  const domain = safeEmail.split('@')?.[1] ?? '';
  const username = safeEmail.split('@')?.[0] ?? '';

  const isCommonProvider = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com', 'live.com', 'msn.com'].includes(domain.toLowerCase());
  const hasNumbers = /\d/.test(username);
  const isShortUsername = (username?.length ?? 0) < 6;
  const hasFullName = /[a-z]+[._][a-z]+/i.test(username);

  const findings: { category: string; status: string; detail: string; icon: string }[] = [];
  let riskScore = 0;

  // Social media presence
  if (hasFullName || !hasNumbers) {
    findings.push({
      category: 'Social Media Profiles',
      status: 'Likely Found',
      detail: `Email patterns suggest linked social media accounts. Usernames similar to "${username}" may exist on major platforms.`,
      icon: 'users',
    });
    riskScore += 20;
  } else {
    findings.push({
      category: 'Social Media Profiles',
      status: 'Less Likely',
      detail: 'Your email pattern makes it harder to associate with social media profiles directly.',
      icon: 'users',
    });
    riskScore += 8;
  }

  // Data breaches
  findings.push({
    category: 'Data Breach Exposure',
    status: isCommonProvider ? 'Potential Risk' : 'Lower Risk',
    detail: isCommonProvider
      ? `Emails on ${domain} are frequently found in data breach databases. We recommend checking haveibeenpwned.com for specific breach history.`
      : `Custom domain emails are less common in mass breaches, but targeted attacks remain a risk.`,
    icon: 'shield',
  });
  riskScore += isCommonProvider ? 22 : 12;

  // Public records
  if (hasFullName) {
    findings.push({
      category: 'Public Records & Directories',
      status: 'Found',
      detail: 'Email format suggests association with real-name public records, business directories, or professional listings.',
      icon: 'file',
    });
    riskScore += 18;
  } else {
    findings.push({
      category: 'Public Records & Directories',
      status: 'Not Found',
      detail: 'Email format does not clearly map to public record databases.',
      icon: 'file',
    });
    riskScore += 5;
  }

  // Professional networks
  findings.push({
    category: 'Professional Networks (LinkedIn, etc.)',
    status: hasFullName ? 'Likely Discoverable' : 'Possibly Discoverable',
    detail: hasFullName
      ? 'Professional email patterns are commonly indexed by professional networking platforms and recruitment databases.'
      : 'Your email may be linked to professional profiles depending on registration history.',
    icon: 'briefcase',
  });
  riskScore += hasFullName ? 15 : 8;

  // Email metadata
  findings.push({
    category: 'Email Provider Security',
    status: isCommonProvider ? 'Standard' : 'Enhanced',
    detail: isCommonProvider
      ? `${domain} provides standard security features. Ensure 2FA is enabled.`
      : `Custom domain email suggests business or personal server management. Verify SPF, DKIM, and DMARC records are configured.`,
    icon: 'mail',
  });
  riskScore += isCommonProvider ? 10 : 5;

  // Marketing databases
  findings.push({
    category: 'Marketing & Mailing Lists',
    status: 'Likely Subscribed',
    detail: 'Most active email addresses are present in marketing databases from online registrations, purchases, and newsletter subscriptions.',
    icon: 'inbox',
  });
  riskScore += 10;

  // Cap the score
  riskScore = Math.min(riskScore, 95);

  let overallRisk = 'Low Exposure';
  if (riskScore >= 60) overallRisk = 'High Exposure';
  else if (riskScore >= 35) overallRisk = 'Moderate Exposure';

  const recommendations = [
    'Enable two-factor authentication (2FA) on all accounts linked to this email.',
    'Check haveibeenpwned.com to see if your email appears in known data breaches.',
    'Use unique, strong passwords for each online service.',
    'Review and update privacy settings on social media platforms.',
    'Consider using email aliases for online signups to reduce exposure.',
    'Regularly Google your email address to monitor your digital footprint.',
    'Be cautious of phishing emails that reference personal information found online.',
  ];

  return {
    email: safeEmail,
    overallRisk,
    riskScore,
    findings,
    recommendations,
  };
}

export async function POST(request: Request) {
  try {
    const data = await request?.json?.();
    const email = data?.email ?? '';

    if (!email?.trim?.()) {
      return NextResponse.json({ success: false, message: 'Email is required.' }, { status: 400 });
    }

    const result = analyzeEmail(email);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Digital footprint error:', error);
    return NextResponse.json({ success: false, message: 'Failed to analyze.' }, { status: 500 });
  }
}
