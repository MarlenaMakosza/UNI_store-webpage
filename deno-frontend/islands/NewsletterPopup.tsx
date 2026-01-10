import { useEffect, useState } from "preact/hooks";

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const hasClosedPopup = localStorage.getItem("newsletter-popup-closed");
    const hasSubscribed = localStorage.getItem("newsletter-subscribed");

    if (!hasClosedPopup && !hasSubscribed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("newsletter-popup-closed", "true");
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSuccess(true);
    localStorage.setItem("newsletter-subscribed", "true");

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
        class="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 animate-fade-in"
        onClick={handleClose}
      />

      {/* Popup */}
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div class="bg-white border-2 border-primary rounded-2xl shadow-2xl max-w-md w-full pointer-events-auto animate-scale-in relative overflow-hidden">
          {/* Background gradient effect */}
          <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-blue-50 pointer-events-none" />

          {/* Close button */}
          <button
            onClick={handleClose}
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors z-10"
            aria-label="Zamknij"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="relative p-8">
            {!isSuccess ? (
              <>
                {/* Icon */}
                <div class="flex justify-center mb-6">
                  <div class="w-16 h-16 btn-gradient rounded-full flex items-center justify-center">
                    <span class="text-3xl">✨</span>
                  </div>
                </div>

                {/* Header */}
                <h2 class="text-2xl md:text-3xl font-bold text-center mb-3">
                  <span class="gradient-text">Dolacz do nas!</span>
                </h2>

                <p class="text-gray-600 text-center mb-6">
                  Zapisz sie do newslettera i otrzymuj informacje o nowosciach, promocjach i ekskluzywnych ofertach.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} class="space-y-4">
                  <div class="relative">
                    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <input
                      type="email"
                      value={email}
                      onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
                      placeholder="Twoj adres e-mail"
                      required
                      class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    class="w-full px-6 py-3 rounded-lg btn-gradient text-white font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? "Zapisywanie..." : "Zapisz sie"}
                  </button>
                </form>

                <p class="text-xs text-gray-500 text-center mt-4">
                  Mozesz zrezygnowac z subskrypcji w kazdej chwili. Szanujemy Twoja prywatnosc.
                </p>
              </>
            ) : (
              <div class="text-center py-4">
                <div class="w-16 h-16 btn-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-2">Dziekujemy!</h3>
                <p class="text-gray-600">Zostales pomyslnie zapisany do newslettera.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
