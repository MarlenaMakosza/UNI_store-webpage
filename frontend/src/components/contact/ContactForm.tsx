'use client';

import { useState, FormEvent } from 'react';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import { Check } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  sendCopy: boolean;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    sendCopy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Imię i nazwisko jest wymagane';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Imię i nazwisko musi mieć minimum 2 znaki';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Adres e-mail jest wymagany';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Nieprawidłowy format adresu e-mail';
    }

    const phoneRegex = /^[0-9\s\-+()]{9,20}$/;
    if (formData.phone.trim() && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Nieprawidłowy format numeru telefonu';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Temat wiadomości jest wymagany';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Temat musi mieć minimum 5 znaków';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Treść wiadomości jest wymagana';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Wiadomość musi mieć minimum 10 znaków';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:1337/api/contact-messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            subject: formData.subject,
            message: formData.message,
            sendCopy: formData.sendCopy,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Błąd podczas wysyłania wiadomości');
      }

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        sendCopy: false,
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({
        submit: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitSuccess && (
        <div className="bg-green-900/30 border border-green-500 rounded-lg p-4 flex items-start gap-3">
          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-green-400 font-semibold">
              Wiadomość została wysłana!
            </p>
            <p className="text-green-300 text-sm mt-1">
              Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.
              {formData.sendCopy && ' Kopia wiadomości została wysłana na Twój adres e-mail.'}
            </p>
          </div>
        </div>
      )}

      {errors.submit && (
        <div className="bg-red-900/30 border border-red-500 rounded-lg p-4">
          <p className="text-red-400">{errors.submit}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
            Imię i nazwisko <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Jan Kowalski"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
            Adres e-mail <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jan.kowalski@example.com"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
          Numer telefonu
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+48 123 456 789"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
          Temat wiadomości <span className="text-red-500">*</span>
        </label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder="W jakiej sprawie się kontaktujesz?"
          value={formData.subject}
          onChange={handleChange}
          error={!!errors.subject}
          helperText={errors.subject}
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
          Treść wiadomości <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Napisz swoją wiadomość..."
          rows={6}
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          disabled={isSubmitting}
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          id="sendCopy"
          name="sendCopy"
          type="checkbox"
          checked={formData.sendCopy}
          onChange={handleChange}
          disabled={isSubmitting}
          className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-neon-violet focus:ring-2 focus:ring-neon-violet focus:ring-offset-2 focus:ring-offset-deep-black"
        />
        <label htmlFor="sendCopy" className="text-sm text-gray-300">
          Wyślij mi kopię wiadomości na e-mail
        </label>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full md:w-auto"
      >
        {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
      </Button>
    </form>
  );
}
