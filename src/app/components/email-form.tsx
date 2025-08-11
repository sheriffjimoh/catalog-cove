'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;
    
    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);
      
      if (error) throw error;
      
      setSuccess(true);
      setEmail('');
    } catch (error) {
        console.error('Error adding email to waitlist:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-md mx-auto mb-8 text-center">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 font-medium">
            🎉 You're on the list! We'll notify you when we launch.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mb-8">
      <div className="flex gap-4 flex-col md:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <button 
          onClick={handleSubmit}
          disabled={loading}
          className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors font-medium disabled:opacity-50"
        >
          {loading ? 'Joining...' : 'Join Waitlist'}
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Be the first to know when we launch. No spam, ever.
      </p>
    </div>
  );
};