'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSuccess(true);
    localStorage.setItem('newsletter-subscribed', 'true');
    setEmail('');

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);

    setIsSubmitting(false);
  };

  return (
    <section className="py-16 newsletter-section">
      <style jsx global>{`
        /* Dark mode (default) */
        .newsletter-section {
          background: #1F2937 !important;
        }
        .newsletter-section .newsletter-title {
          color: #FFFFFF !important;
        }
        .newsletter-section .newsletter-text {
          color: #D1D5DB !important;
        }
        .newsletter-success {
          background: linear-gradient(90deg, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%) !important;
          border-color: #8B5CF6 !important;
        }
        .newsletter-input-wrapper input {
          background: #1F2937 !important;
          border-color: #374151 !important;
          color: white !important;
        }
        .newsletter-input-wrapper input::placeholder {
          color: #9CA3AF !important;
        }
        .newsletter-input-wrapper svg {
          color: #9CA3AF !important;
        }

        /* Light mode */
        .light .newsletter-section {
          background: linear-gradient(135deg, rgb(245 243 255) 0%, white 50%, rgb(239 246 255) 100%) !important;
        }
        .light .newsletter-section .newsletter-title {
          color: #111827 !important;
        }
        .light .newsletter-section .newsletter-text {
          color: #374151 !important;
        }
        .light .newsletter-success {
          background: linear-gradient(90deg, rgb(237 233 254) 0%, rgb(219 234 254) 100%) !important;
          border-color: rgb(196 181 253) !important;
        }
        .light .newsletter-input-wrapper input {
          background: white !important;
          border-color: #D1D5DB !important;
          color: #111827 !important;
        }
        .light .newsletter-input-wrapper input::placeholder {
          color: #6B7280 !important;
        }
        .light .newsletter-input-wrapper svg {
          color: #6B7280 !important;
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-neon-violet to-electric-blue rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold newsletter-title mb-4">
            Bądź na bieżąco
          </h2>

          <p className="newsletter-text mb-8">
            Zapisz się do naszego newslettera i otrzymuj informacje o nowościach,
            promocjach i ekskluzywnych ofertach prosto na swoją skrzynkę.
          </p>

          {isSuccess ? (
            <div className="newsletter-success border rounded-lg p-6">
              <p className="newsletter-title font-semibold text-lg">
                ✓ Dziękujemy za zapis do newslettera!
              </p>
              <p className="newsletter-text text-sm mt-2">
                Wkrótce otrzymasz od nas wiadomość powitalną.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative newsletter-input-wrapper">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Twój adres e-mail"
                    required
                    className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:border-neon-violet transition-colors"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="sm:w-auto"
                >
                  {isSubmitting ? 'Zapisywanie...' : 'Zapisz się'}
                </Button>
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
              <p className="text-xs newsletter-text mt-3">
                Szanujemy Twoją prywatność. Możesz zrezygnować z subskrypcji w każdej chwili.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
