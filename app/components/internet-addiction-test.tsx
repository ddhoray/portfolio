'use client';

import { useState } from 'react';
import { Wifi, AlertTriangle, CheckCircle, AlertCircle, RotateCcw } from 'lucide-react';

const questions = [
  'When using the internet do you find that you lose track of time and feel surprised when you realize the time spent surfing the web?',
  'Have you been ashamed of or tried to hide how much time you spend on your internet-connected device?',
  'Have you tried to spend less time using your internet-connected device (desktop, smartphone, or tablet) but found it challenging?',
  'Do you find yourself wondering about things on the internet e.g. (chat, status updates) when you are not able to be online?',
  'Do you fall asleep while browsing the internet and/or are you waking frequently to check your internet-connected device?',
  'Has anyone in your personal life expressed concerns about the amount of time you spend on the internet?',
  'Do you find yourself using the internet in inappropriate places like during class, work, at an event e.g. (party, church, movie, etc.)?',
];

const options = [
  { label: 'Never', value: 1 },
  { label: 'Rarely', value: 2 },
  { label: 'Sometimes', value: 3 },
  { label: 'Often', value: 4 },
  { label: 'Very Often', value: 5 },
];

function getResult(score: number) {
  const s = score ?? 0;
  if (s <= 10) return { level: 'Not Addicted', color: 'text-green-400', bg: 'bg-green-500', icon: CheckCircle, desc: 'Your internet usage appears healthy. You maintain a good balance between online and offline activities.' };
  if (s <= 19) return { level: 'Borderline Addiction', color: 'text-yellow-400', bg: 'bg-yellow-500', icon: AlertCircle, desc: 'You show some signs of problematic internet use. Consider setting time limits and being more mindful of your online habits.' };
  return { level: 'Addicted', color: 'text-red-400', bg: 'bg-red-500', icon: AlertTriangle, desc: 'Your internet usage shows signs of addiction. Consider speaking with a counselor about developing healthier digital habits. Visit learn.cybersafett.com for free courses on managing internet addiction.' };
}

export default function InternetAddictionTest() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const allAnswered = Object.keys(answers ?? {}).length === questions.length;
  const totalScore = Object.values(answers ?? {}).reduce((sum, val) => (sum ?? 0) + (val ?? 0), 0);
  const result = getResult(totalScore);
  const ResultIcon = result?.icon ?? CheckCircle;

  const handleAnswer = (qIndex: number, value: number) => {
    setAnswers((prev) => ({ ...(prev ?? {}), [qIndex]: value }));
    setShowResult(false);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResult(false);
  };

  return (
    <div>
      <div className="space-y-6">
        {questions?.map?.((q, i) => (
          <div key={i} className="bg-white/5 rounded-lg p-5 border border-white/10">
            <p className="text-white text-sm mb-3">
              <span className="text-red-400 font-bold mr-2">{i + 1}.</span>
              {q ?? ''}
            </p>
            <div className="flex flex-wrap gap-2">
              {options?.map?.((opt) => (
                <button
                  key={opt?.value ?? 0}
                  onClick={() => handleAnswer(i, opt?.value ?? 0)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    (answers ?? {})[i] === opt?.value
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {opt?.label ?? ''} ({opt?.value ?? 0})
                </button>
              )) ?? []}
            </div>
          </div>
        )) ?? []}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => setShowResult(true)}
          disabled={!allAnswered}
          className="flex-1 py-3 bg-red-600 hover:bg-red-700 rounded-md text-white font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
        >
          <Wifi className="w-5 h-5" />
          Get My Score
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-3 bg-white/10 hover:bg-white/20 rounded-md text-gray-300 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {showResult && allAnswered && (
        <div className="mt-6 bg-white/5 rounded-lg p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <ResultIcon className={`w-8 h-8 ${result?.color ?? ''}`} />
            <div>
              <h3 className={`text-xl font-bold ${result?.color ?? ''}`}>{result?.level ?? ''}</h3>
              <p className="text-gray-400 text-sm">Score: {totalScore} / 35</p>
            </div>
          </div>
          {/* Score bar */}
          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden mb-4">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${result?.bg ?? ''}`}
              style={{ width: `${((totalScore ?? 0) / 35) * 100}%` }}
            />
          </div>
          <p className="text-gray-300 text-sm">{result?.desc ?? ''}</p>
          <div className="mt-4 p-3 bg-blue-900/30 rounded-md">
            <p className="text-blue-300 text-xs">
              <strong>Scoring:</strong> 7–10 = Not Addicted &bull; 11–19 = Borderline Addiction &bull; 20–35 = Addicted
            </p>
            <p className="text-blue-300/70 text-xs mt-1">
              Take the full test at <a href="https://learn.cybersafett.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200">learn.cybersafett.com</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
