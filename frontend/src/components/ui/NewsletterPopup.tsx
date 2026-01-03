'use client';

import { useState, useEffect } from 'react';
import { X, Mail, Sparkles } from 'lucide-react';
import Button from './Button';

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Check if user has already closed the popup
    const hasClosedPopup = localStorage.getItem('newsletter-popup-closed');
    const hasSubscribed = localStorage.getItem('newsletter-subscribed');

    if (!hasClosedPopup && !hasSubscribed) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newsletter-popup-closed', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSuccess(true);
    localStorage.setItem('newsletter-subscribed', 'true');

    // Close popup after showing success message
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    setIsSubmitting(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 dark:bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white dark:bg-gray-900 border-2 border-violet-300 dark:border-neon-violet rounded-2xl shadow-2xl max-w-md w-full pointer-events-auto animate-scale-in relative overflow-hidden">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-100/50 via-transparent to-blue-100/50 dark:from-neon-violet/10 dark:via-transparent dark:to-electric-blue/10 pointer-events-none" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors z-10"
            aria-label="Zamknij"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative p-8">
            {!isSuccess ? (
              <>
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-violet to-electric-blue rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Header */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
                  <span className="bg-gradient-to-r from-neon-violet to-electric-blue bg-clip-text text-transparent">
                    Dołącz do nas!
                  </span>
                </h2>

                <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
                  Zapisz się do newslettera i otrzymuj informacje o nowościach, promocjach i ekskluzywnych ofertach.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Twój adres e-mail"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-neon-violet transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Zapisywanie...' : 'Zapisz się'}
                  </Button>
                </form>

                <p className="text-xs text-gray-600 dark:text-gray-500 text-center mt-4">
                  Możesz zrezygnować z subskrypcji w każdej chwili. Szanujemy Twoją prywatność.
                </p>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-violet to-electric-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Dziękujemy!</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Zostałeś pomyślnie zapisany do newslettera.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
