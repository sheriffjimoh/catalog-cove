'use client';
import { use, useState } from 'react';

export const EmailForm = () => {
    const [email, setEmail] = useState('');

  return (
    <div className="max-w-md mx-auto mb-8">
    <div className="flex gap-4 flex-col  md:flex-row">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
      <button onClick={() => alert("hello")} className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors font-medium">
        Join Waitlist
      </button>
    </div>
    <p className="text-sm text-gray-500 mt-2">
      Be the first to know when we launch. No spam, ever.
    </p>
  </div>
  );
}