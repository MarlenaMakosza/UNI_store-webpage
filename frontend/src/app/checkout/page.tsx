'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/lib/utils';
import { ArrowLeft, CreditCard } from 'lucide-react';

export default function CheckoutPage() {
  const { items, total } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Polska',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Imię jest wymagane';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Nazwisko jest wymagane';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email jest wymagany';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Nieprawidłowy format email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon jest wymagany';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Adres jest wymagany';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'Miasto jest wymagane';
    }
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Kod pocztowy jest wymagany';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert('Zamówienie zostało złożone! (Demo - integracja płatności będzie dodana później)');
    setIsProcessing(false);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-deep-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Brak produktów w koszyku</h1>
          <p className="text-gray-400 mb-6">
            Dodaj produkty do koszyka przed przejściem do kasy
          </p>
          <Link href="/products">
            <Button variant="primary" size="lg">
              Przeglądaj produkty
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-black py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/cart" className="inline-flex items-center text-gray-400 hover:text-neon-violet mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Wróć do koszyka
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">Finalizacja zamówienia</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Dane do wysyłki
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="firstName"
                    placeholder="Imię"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                  />

                  <Input
                    name="lastName"
                    placeholder="Nazwisko"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                  />

                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                  />

                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Telefon"
                    value={formData.phone}
                    onChange={handleChange}
                    error={!!errors.phone}
                    helperText={errors.phone}
                  />

                  <div className="md:col-span-2">
                    <Input
                      name="address"
                      placeholder="Adres (ulica i numer)"
                      value={formData.address}
                      onChange={handleChange}
                      error={!!errors.address}
                      helperText={errors.address}
                    />
                  </div>

                  <Input
                    name="city"
                    placeholder="Miasto"
                    value={formData.city}
                    onChange={handleChange}
                    error={!!errors.city}
                    helperText={errors.city}
                  />

                  <Input
                    name="postalCode"
                    placeholder="Kod pocztowy"
                    value={formData.postalCode}
                    onChange={handleChange}
                    error={!!errors.postalCode}
                    helperText={errors.postalCode}
                  />

                  <div className="md:col-span-2">
                    <Input
                      name="country"
                      placeholder="Kraj"
                      value={formData.country}
                      onChange={handleChange}
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Metoda płatności
                </h2>

                <div className="text-gray-400">
                  <p className="mb-2">
                    Integracja płatności będzie dodana w kolejnym etapie projektu.
                  </p>
                  <p className="text-sm">
                    Na razie jest to tylko demo interfejsu.
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isProcessing}
              >
                <CreditCard className="w-5 h-5 mr-2" />
                {isProcessing ? 'Przetwarzanie...' : 'Złóż zamówienie'}
              </Button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 sticky top-20">
              <h2 className="text-xl font-semibold text-white mb-4">
                Podsumowanie
              </h2>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Produkty ({items.length})</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Dostawa</span>
                  <span className="text-green-500">Gratis</span>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Razem</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item.documentId} className="flex justify-between text-sm">
                    <span className="text-gray-400 truncate mr-2">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="text-white font-medium whitespace-nowrap">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
