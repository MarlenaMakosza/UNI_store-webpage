import { Shield } from 'lucide-react';

export const metadata = {
  title: 'Polityka Prywatności - TechNest',
  description: 'Polityka prywatności sklepu TechNest',
};

export default function PolitykaPage() {
  return (
    <div className="min-h-screen bg-deep-black">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-deep-black via-gray-900 to-deep-black py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-neon-violet to-electric-blue rounded-full mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-violet to-electric-blue bg-clip-text text-transparent">
                Polityka Prywatności
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Informacje o przetwarzaniu danych osobowych w TechNest
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-gray-900 rounded-xl p-8 md:p-12 border border-gray-800">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus risus massa, posuere feugiat diam commodo in. Integer pharetra egestas lorem. Duis consequat finibus quam. Nam felis odio, pellentesque ac eros quis, finibus lacinia est. Nulla consectetur dui in tempus iaculis. Phasellus viverra metus sit amet fermentum bibendum. Donec mi nibh, dignissim eu efficitur id, imperdiet eget arcu. Mauris tempor est vel tortor gravida placerat. Vivamus mollis massa rutrum mi fermentum pellentesque. Nunc in neque nec nibh vehicula porttitor. Pellentesque cursus dolor ac tellus interdum lobortis. In a dolor dictum, congue nibh in, lobortis mi. Aenean imperdiet cursus velit at ornare. Proin sit amet pharetra dui, at pretium elit. Vestibulum quis convallis leo.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Administrator danych osobowych</h2>
              <p className="text-gray-300 mb-6">
                Nunc tincidunt eget quam at eleifend. Donec a eros vulputate, dapibus quam ac, lacinia nisi. Curabitur semper lacus metus. Suspendisse blandit orci non velit convallis, vel tempor quam lacinia. Suspendisse luctus tellus diam, in fermentum ante cursus vitae. Maecenas mattis orci ut urna auctor facilisis. Integer rutrum, est vitae molestie cursus, lacus mi elementum magna, nec ultrices est turpis eu mi. Duis finibus laoreet lacus nec volutpat. Pellentesque mauris arcu, porttitor suscipit lorem quis, pulvinar eleifend nunc.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Rodzaje przetwarzanych danych</h2>
              <p className="text-gray-300 mb-6">
                Pellentesque lacinia odio ac sem interdum laoreet. Cras molestie, justo a faucibus sodales, turpis est elementum leo, vel viverra lacus nulla ut purus. Proin ornare diam eget leo consectetur iaculis. Curabitur vehicula nisi nec fermentum accumsan. Curabitur vestibulum justo nec ipsum commodo, nec dapibus ex finibus. Quisque nibh ipsum, consectetur eget aliquet et, sagittis ac orci. Nunc lorem quam, porttitor nec eleifend vel, mattis quis massa. Nullam vitae lectus id felis lacinia dignissim et ac lacus. Fusce vel auctor libero, dapibus malesuada augue.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Cele i podstawy prawne przetwarzania</h2>
              <p className="text-gray-300 mb-6">
                Praesent ac lectus sed ipsum pulvinar bibendum id sit amet dolor. Nulla volutpat dignissim lorem, efficitur porttitor ligula ultricies vel. Sed laoreet odio et nibh blandit elementum. Nunc vel nibh id sapien mattis aliquam ac sed nunc. Praesent ut rutrum ligula. Maecenas eget enim sit amet erat aliquam commodo a in mi. Maecenas porttitor nibh at diam vulputate, hendrerit interdum ipsum gravida. Quisque diam dui, rutrum accumsan augue sit amet, pretium facilisis erat. Cras purus mi, tempor id pulvinar et, interdum ac est. Aliquam erat volutpat. Morbi est felis, malesuada tincidunt interdum id, sagittis eu tortor. Vestibulum nec blandit tellus. Morbi tempus lectus neque, a dignissim turpis mollis sit amet.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Okres przechowywania danych</h2>
              <p className="text-gray-300 mb-6">
                Proin elementum massa sed est ornare, sed convallis purus accumsan. Suspendisse placerat venenatis dolor, quis gravida quam tincidunt porttitor. Ut lobortis lobortis bibendum. Nunc quis consequat enim. Cras nec tincidunt tortor. Donec eget lacus elementum, pharetra lacus sed, convallis risus. Phasellus scelerisque tortor lacus, ut gravida velit fermentum non. Nulla at elit ullamcorper, consectetur turpis vitae, egestas libero.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Udostępnianie danych osobowych</h2>
              <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus risus massa, posuere feugiat diam commodo in. Integer pharetra egestas lorem. Duis consequat finibus quam. Nam felis odio, pellentesque ac eros quis, finibus lacinia est. Nulla consectetur dui in tempus iaculis. Phasellus viverra metus sit amet fermentum bibendum.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Prawa osób, których dane dotyczą</h2>
              <p className="text-gray-300 mb-6">
                Nunc tincidunt eget quam at eleifend. Donec a eros vulputate, dapibus quam ac, lacinia nisi. Curabitur semper lacus metus. Suspendisse blandit orci non velit convallis, vel tempor quam lacinia. Suspendisse luctus tellus diam, in fermentum ante cursus vitae.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Pliki cookies</h2>
              <p className="text-gray-300 mb-6">
                Pellentesque lacinia odio ac sem interdum laoreet. Cras molestie, justo a faucibus sodales, turpis est elementum leo, vel viverra lacus nulla ut purus. Proin ornare diam eget leo consectetur iaculis. Curabitur vehicula nisi nec fermentum accumsan.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Bezpieczeństwo danych</h2>
              <p className="text-gray-300 mb-6">
                Praesent ac lectus sed ipsum pulvinar bibendum id sit amet dolor. Nulla volutpat dignissim lorem, efficitur porttitor ligula ultricies vel. Sed laoreet odio et nibh blandit elementum. Nunc vel nibh id sapien mattis aliquam ac sed nunc.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Zmiany w polityce prywatności</h2>
              <p className="text-gray-300">
                Proin elementum massa sed est ornare, sed convallis purus accumsan. Suspendisse placerat venenatis dolor, quis gravida quam tincidunt porttitor. Ut lobortis lobortis bibendum. Nunc quis consequat enim.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Ostatnia aktualizacja: 3 stycznia 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
