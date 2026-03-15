'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare, FileText } from 'lucide-react';

interface ContactFormProps {
  formType: 'professional' | 'cybersafett';
  accentColor?: string;
}

export default function ContactForm({ formType = 'professional', accentColor = 'blue' }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...(formData ?? {}), formType }),
      });
      const data = await res?.json?.();
      if (data?.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data?.message ?? 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  const btnClass = accentColor === 'red'
    ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
    : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500';

  const borderFocus = accentColor === 'red' ? 'focus:border-red-500 focus:ring-red-500' : 'focus:border-blue-500 focus:ring-blue-500';

  if (status === 'success') {
    return (
      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-300 mb-2">Message Sent!</h3>
        <p className="text-gray-300">Thank you for reaching out. A confirmation has been sent to your email.</p>
        <button
          onClick={() => setStatus('idle')}
          className={`mt-4 px-6 py-2 rounded-md text-white ${btnClass} transition-colors`}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === 'error' && (
        <div className="bg-red-900/30 border border-red-500/30 rounded-md p-3 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
          <p className="text-red-300 text-sm">{errorMsg || 'Something went wrong'}</p>
        </div>
      )}
      <div className="relative">
        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Full Name"
          required
          value={formData?.name ?? ''}
          onChange={(e) => setFormData({ ...(formData ?? {}), name: e?.target?.value ?? '' })}
          className={`w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 ${borderFocus} focus:ring-1 focus:outline-none transition-colors`}
        />
      </div>
      <div className="relative">
        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="email"
          placeholder="Email Address"
          required
          value={formData?.email ?? ''}
          onChange={(e) => setFormData({ ...(formData ?? {}), email: e?.target?.value ?? '' })}
          className={`w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 ${borderFocus} focus:ring-1 focus:outline-none transition-colors`}
        />
      </div>
      <div className="relative">
        <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Subject"
          required
          value={formData?.subject ?? ''}
          onChange={(e) => setFormData({ ...(formData ?? {}), subject: e?.target?.value ?? '' })}
          className={`w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 ${borderFocus} focus:ring-1 focus:outline-none transition-colors`}
        />
      </div>
      <div className="relative">
        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <textarea
          placeholder="Your Message"
          required
          rows={5}
          value={formData?.message ?? ''}
          onChange={(e) => setFormData({ ...(formData ?? {}), message: e?.target?.value ?? '' })}
          className={`w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 ${borderFocus} focus:ring-1 focus:outline-none transition-colors resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full py-3 rounded-md text-white font-medium flex items-center justify-center gap-2 transition-all ${btnClass} disabled:opacity-50`}
      >
        {status === 'loading' ? (
          <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
        ) : (
          <Send className="w-5 h-5" />
        )}
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      <p className="text-xs text-gray-500 text-center">Your information is stored securely and will not be shared.</p>
    </form>
  );
}
