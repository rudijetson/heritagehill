"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

interface WaitlistModalProps {
  onClose: () => void;
}

export function WaitlistModal({ onClose }: WaitlistModalProps) {
  const [selectedType, setSelectedType] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission
    console.log({ email, selectedType });
    // Show success message
    alert("Thanks for joining! We'll be in touch soon.");
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the Waitlist</h2>
        <p className="text-gray-600 mb-6">Be the first to know when we launch in your area.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 
                focus:ring-2 focus:ring-green-500/20 focus:border-green-500
                placeholder:text-gray-400"
              placeholder="you@example.com"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              I am a...
            </label>
            <div className="grid grid-cols-1 gap-2">
              {['Maker', 'Investor', 'Community Partner'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedType(type)}
                  className={`flex items-center justify-between px-4 py-2 rounded-lg border 
                    ${selectedType === type 
                      ? 'border-green-500 bg-green-50 text-green-700' 
                      : 'border-gray-300 hover:border-gray-400'
                    } transition-all duration-200`}
                >
                  <span>{type}</span>
                  {selectedType === type && (
                    <Check className="w-4 h-4 text-green-500" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={!email || !selectedType}
            className="w-full py-3 rounded-xl font-semibold text-white
              bg-gradient-to-br from-green-500 to-green-600
              hover:shadow-lg hover:shadow-green-500/30
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-300"
          >
            Join Waitlist
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
} 