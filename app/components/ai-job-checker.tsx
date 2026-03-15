'use client';

import { useState } from 'react';
import { Search, Bot, TrendingUp, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';

interface JobResult {
  job: string;
  riskLevel: string;
  riskPercent: number;
  description: string;
  skills: string[];
  outlook: string;
}

export default function AiJobChecker() {
  const [jobTitle, setJobTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<JobResult | null>(null);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!(jobTitle?.trim?.())) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('/api/ai-job-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobTitle: jobTitle?.trim?.() ?? '' }),
      });
      const data = await res?.json?.();
      if (data?.success) {
        setResult(data?.result ?? null);
      }
    } catch (err) {
      console.error('AI job check error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getRiskColor = (percent: number) => {
    const p = percent ?? 0;
    if (p < 30) return 'text-green-400';
    if (p < 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getRiskBg = (percent: number) => {
    const p = percent ?? 0;
    if (p < 30) return 'bg-green-500';
    if (p < 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getRiskIcon = (percent: number) => {
    const p = percent ?? 0;
    if (p < 30) return CheckCircle;
    if (p < 60) return TrendingUp;
    return AlertTriangle;
  };

  return (
    <div>
      <form onSubmit={handleCheck} className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={jobTitle ?? ''}
            onChange={(e) => setJobTitle(e?.target?.value ?? '')}
            placeholder="Enter a job title (e.g., Accountant, Nurse, Graphic Designer)"
            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={loading || !(jobTitle?.trim?.())}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md text-white font-medium flex items-center gap-2 transition-colors disabled:opacity-50 shrink-0"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Bot className="w-5 h-5" />}
          Check
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-white/5 rounded-lg p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">{result?.job ?? 'Unknown Job'}</h3>
            {(() => {
              const RiskIcon = getRiskIcon(result?.riskPercent ?? 0);
              return (
                <div className={`flex items-center gap-2 ${getRiskColor(result?.riskPercent ?? 0)}`}>
                  <RiskIcon className="w-5 h-5" />
                  <span className="font-bold text-lg">{result?.riskPercent ?? 0}%</span>
                </div>
              );
            })()}
          </div>

          {/* Risk bar */}
          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden mb-4">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${getRiskBg(result?.riskPercent ?? 0)}`}
              style={{ width: `${result?.riskPercent ?? 0}%` }}
            />
          </div>

          <p className={`text-sm font-semibold mb-3 ${getRiskColor(result?.riskPercent ?? 0)}`}>
            {result?.riskLevel ?? 'Unknown Risk'}
          </p>

          <p className="text-gray-300 text-sm mb-4">{result?.description ?? ''}</p>

          {(result?.skills?.length ?? 0) > 0 && (
            <div className="mb-4">
              <p className="text-gray-400 text-xs font-semibold uppercase mb-2">Future-Proof Skills</p>
              <div className="flex flex-wrap gap-2">
                {result?.skills?.map?.((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                    {skill ?? ''}
                  </span>
                )) ?? []}
              </div>
            </div>
          )}

          <p className="text-gray-400 text-sm italic">{result?.outlook ?? ''}</p>
        </div>
      )}
    </div>
  );
}
