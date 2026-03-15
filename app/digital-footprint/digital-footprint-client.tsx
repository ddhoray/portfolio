'use client';

import { useState } from 'react';
import Navigation from '../components/navigation';
import SocialIcons from '../components/social-icons';
import Footer from '../components/footer';
import SectionWrapper from '../components/section-wrapper';
import {
  Search, Shield, Globe, Mail, AlertTriangle, CheckCircle,
  Loader2, Eye, EyeOff, ExternalLink, User, AtSign, Info
} from 'lucide-react';

interface FootprintResult {
  email: string;
  overallRisk: string;
  riskScore: number;
  findings: {
    category: string;
    status: string;
    detail: string;
    icon: string;
  }[];
  recommendations: string[];
}

export default function DigitalFootprintClient() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FootprintResult | null>(null);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!(email?.trim?.())) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('/api/digital-footprint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email?.trim?.() ?? '' }),
      });
      const data = await res?.json?.();
      if (data?.success) {
        setResult(data?.result ?? null);
      }
    } catch (err) {
      console.error('Digital footprint check error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    const s = (status ?? '').toLowerCase();
    if (s === 'found' || s === 'exposed') return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    if (s === 'safe' || s === 'not found') return <CheckCircle className="w-5 h-5 text-green-400" />;
    return <Info className="w-5 h-5 text-blue-400" />;
  };

  const getRiskColor = (score: number) => {
    const s = score ?? 0;
    if (s < 30) return 'text-green-400';
    if (s < 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getRiskBg = (score: number) => {
    const s = score ?? 0;
    if (s < 30) return 'bg-green-500';
    if (s < 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900/30 to-gray-950">
      <Navigation />
      <SocialIcons />

      <div className="pt-24 pb-16 max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionWrapper>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm mb-4">
              <Shield className="w-4 h-4" />
              Powered by CyberSafeTT
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Digital Footprint Checker</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover what information about you is publicly available online. Enter your email to get an analysis of your digital presence and exposure.
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleCheck} className="flex gap-3">
              <div className="relative flex-1">
                <AtSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email ?? ''}
                  onChange={(e) => setEmail(e?.target?.value ?? '')}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading || !(email?.trim?.())}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md text-white font-medium flex items-center gap-2 transition-colors disabled:opacity-50 shrink-0"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                Scan
              </button>
            </form>

            {result && (
              <div className="mt-8 space-y-6">
                {/* Risk Score */}
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-gray-400 text-sm">Exposure Score</p>
                      <p className={`text-3xl font-bold ${getRiskColor(result?.riskScore ?? 0)}`}>
                        {result?.riskScore ?? 0}/100
                      </p>
                    </div>
                    <div className={`text-right ${getRiskColor(result?.riskScore ?? 0)}`}>
                      <p className="text-lg font-semibold">{result?.overallRisk ?? 'Unknown'}</p>
                    </div>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${getRiskBg(result?.riskScore ?? 0)}`}
                      style={{ width: `${result?.riskScore ?? 0}%` }}
                    />
                  </div>
                </div>

                {/* Findings */}
                <div className="space-y-3">
                  <h3 className="text-white font-semibold flex items-center gap-2">
                    <Eye className="w-5 h-5 text-red-500" />
                    Findings
                  </h3>
                  {result?.findings?.map?.((finding, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-4 flex items-start gap-3 border border-white/5">
                      {getStatusIcon(finding?.status ?? '')}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-white font-medium text-sm">{finding?.category ?? ''}</p>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            (finding?.status ?? '').toLowerCase() === 'found' || (finding?.status ?? '').toLowerCase() === 'exposed'
                              ? 'bg-yellow-500/20 text-yellow-300'
                              : 'bg-green-500/20 text-green-300'
                          }`}>
                            {finding?.status ?? ''}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">{finding?.detail ?? ''}</p>
                      </div>
                    </div>
                  )) ?? []}
                </div>

                {/* Recommendations */}
                {(result?.recommendations?.length ?? 0) > 0 && (
                  <div>
                    <h3 className="text-white font-semibold flex items-center gap-2 mb-3">
                      <Shield className="w-5 h-5 text-red-500" />
                      Recommendations
                    </h3>
                    <div className="bg-blue-950/30 rounded-lg p-5 space-y-2">
                      {result?.recommendations?.map?.((rec, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <p className="text-gray-300 text-sm">{rec ?? ''}</p>
                        </div>
                      )) ?? []}
                    </div>
                  </div>
                )}

                <div className="bg-red-950/20 rounded-lg p-4 border border-red-500/10">
                  <p className="text-gray-400 text-xs">
                    <strong className="text-red-400">Disclaimer:</strong> This tool provides an educational estimate of your digital exposure based on common patterns. For a comprehensive assessment, consult a cybersecurity professional. Learn more at{' '}
                    <a href="https://cybersafett.com" target="_blank" rel="noopener noreferrer" className="text-red-400 underline hover:text-red-300">cybersafett.com</a>.
                  </p>
                </div>
              </div>
            )}
          </div>
        </SectionWrapper>
      </div>

      <Footer />
    </div>
  );
}
