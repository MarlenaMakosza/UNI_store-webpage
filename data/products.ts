export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductSection {
  title: string;
  content: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  fullDescription?: {
    intro: string;
    sections: ProductSection[];
    outro?: string;
    note?: string;
  };
  specs?: ProductSpec[];
  price: number;
  oldPrice?: number;
  image: string;
  images?: string[];
  category: string;
  categorySlug: string;
  isNew?: boolean;
  isFeatured?: boolean;
  relatedProducts?: string[]; // slugi produktów do crosssellingu
}

export const products: Product[] = [
  {
    id: 1,
    slug: "xiaomi-pad-6",
    name: "Xiaomi Pad 6",
    description: "Wszechstronny tablet 11\" WQHD+ 144Hz do nauki i rozrywki",
    fullDescription: {
      intro: "Szukasz narzędzia, które ułatwi Ci życie na studiach i pozwoli cieszyć się rozrywką na najwyższym poziomie? Xiaomi Pad 6 to idealny wybór dla studentów i uczniów, którzy cenią sobie wydajność, mobilność i funkcjonalność.",
      sections: [
        {
          title: "Wydajność na poziomie laptopa",
          content: "Wyposażony w procesor Snapdragon 870 i 8 GB RAM, Xiaomi Pad 6 radzi sobie bezproblemowo z wielozadaniowością, nawet przy uruchomieniu wielu aplikacji jednocześnie. Przeglądanie notatek, uczestnictwo w zajęciach online czy edycja dokumentów - wszystko działa płynnie i bez opóźnień."
        },
        {
          title: "Ekran WQHD+ 144 Hz - idealny do nauki i rozrywki",
          content: "11-calowy wyświetlacz o wysokiej rozdzielczości i odświeżaniu 144 Hz zapewnia krystalicznie czysty obraz i płynność działania. Dzięki temu prezentacje, notatki i dokumenty są czytelne i szczegółowe, a po zajęciach możesz zanurzyć się w ulubionym serialu czy grze bez kompromisów w jakości obrazu."
        },
        {
          title: "Długi czas pracy na baterii",
          content: "Bateria o pojemności 8840 mAh pozwala na nawet 16 godzin pracy na jednym ładowaniu. Możesz zapomnieć o noszeniu ładowarki na uczelnię - Xiaomi Pad 6 wytrzyma cały dzień intensywnego użytkowania."
        },
        {
          title: "Mobilność i lekkość",
          content: "Waży zaledwie 490 g, więc bez problemu zmieści się w plecaku czy torbie. To idealny sprzęt, który możesz zabrać na wykład, do biblioteki czy na spotkanie z przyjaciółmi."
        },
        {
          title: "Wsparcie dla rysika i klawiatury",
          content: "Dodaj rysik i klawiaturę, aby jeszcze bardziej zwiększyć produktywność. Notowanie na ekranie staje się równie naturalne jak pisanie na papierze, a klawiatura pozwala na szybkie tworzenie i edytowanie dokumentów."
        }
      ],
      outro: "Ułatw sobie życie - korzystaj z nowoczesnych rozwiązań i ucz się efektywniej. Xiaomi Pad 6 łączy w sobie moc laptopa, wygodę tabletu i jakość premium - wszystko w przystępnej cenie. Teraz możesz mieć wszystko pod ręką - na wykładzie, w domu i w podróży.",
      note: "Rysik, klawiatura, etui nie znajdują się w zestawie!"
    },
    specs: [
      { label: "Wyświetlacz", value: "11\" WQHD+ 2880x1800" },
      { label: "Odświeżanie", value: "144 Hz" },
      { label: "Procesor", value: "Snapdragon 870" },
      { label: "Pamięć RAM", value: "8 GB" },
      { label: "Pamięć wewnętrzna", value: "128 GB / 256 GB" },
      { label: "Bateria", value: "8840 mAh" },
      { label: "Czas pracy", value: "Do 16 godzin" },
      { label: "Waga", value: "490 g" },
      { label: "System", value: "MIUI Pad 14 (Android 13)" },
      { label: "Akcesoria", value: "Obsługa rysika i klawiatury" }
    ],
    price: 1299.99,
    oldPrice: 1599.99,
    image: "/products/tablet/tablet_white_ front_on_screen.webp",
    images: [
      "/products/tablet/tablet_white_ front_on_screen.webp",
      "/products/tablet/back.webp",
      "/products/tablet/front.webp",
      "/products/tablet/contrast.webp",
      "/products/tablet/usbc.webp",
      "/products/tablet/plec_2.webp",
      "/products/tablet/accessories3.webp",
    ],
    category: "Tablety",
    categorySlug: "tablety",
    isFeatured: true,
    isNew: true,
  },
  {
    id: 2,
    slug: "logitech-mx-mechanical",
    name: "Logitech MX Mechanical",
    description: "Profesjonalna klawiatura mechaniczna dla wymagających",
    fullDescription: {
      intro: "Szukasz narzędzia, które podniesie Twoją efektywność w pracy i zapewni wygodę podczas wielogodzinnych sesji przy biurku? Logitech MX Mechanical to klawiatura stworzona z myślą o profesjonalistach, którzy cenią jakość, precyzję i ergonomię.",
      sections: [
        {
          title: "Minimalistyczny design i najwyższa jakość wykonania",
          content: "Smukła, aluminiowa obudowa nadaje klawiaturze elegancki, nowoczesny wygląd, który podkreśla profesjonalizm na każdym biurku. To nie tylko narzędzie pracy, ale również element, który robi wrażenie - doskonale wpisując się w estetykę nowoczesnego biura. Odpowiednie wyważenie sprawia, że klawiatura pozostaje stabilna nawet podczas intensywnego pisania."
        },
        {
          title: "Długi czas pracy na baterii",
          content: "Na pełnym naładowaniu klawiatura działa do 15 dni (przy włączonym podświetleniu) lub nawet 10 miesięcy przy wyłączonym podświetleniu. Ładowanie przez USB-C pozwala na szybkie uzupełnienie energii w razie potrzeby."
        },
        {
          title: "Mechaniczne przełączniki klasy premium",
          content: "Dzięki niskoprofilowym przełącznikom mechanicznym, MX Mechanical oferuje idealne połączenie precyzji, szybkości i cichego działania. Wybierz wariant najlepiej pasujący do Twojego stylu pracy: Tactile Quiet (dotykowe) - ciche i precyzyjne, Clicky (klikające) - dostojny klik, Linear (liniowe) - płynne i lekkie."
        },
        {
          title: "Podświetlenie adaptacyjne",
          content: "Inteligentne podświetlenie dostosowuje się automatycznie do warunków oświetleniowych, dzięki czemu klawisze są zawsze dobrze widoczne - bez względu na porę dnia. MX Mechanical oferuje klasyczne białe podświetlenie, które nie rozprasza uwagi i doskonale wpisuje się w profesjonalny charakter stanowiska pracy."
        },
        {
          title: "Łączność z wieloma urządzeniami",
          content: "MX Mechanical pozwala na płynne przełączanie się między trzema urządzeniami jednocześnie - wystarczy jedno naciśnięcie klawisza. Pracuj na komputerze stacjonarnym, laptopie i tablecie bez potrzeby ciągłego parowania urządzeń."
        },
        {
          title: "Niskoprofilowa konstrukcja - większa wygoda i mniejsze zmęczenie",
          content: "Niższy profil klawiszy i minimalny skok sprawiają, że pisanie jest bardziej naturalne i mniej obciążające dla nadgarstków. Dzięki temu możesz pisać szybciej i wygodniej, bez uczucia zmęczenia nawet po wielu godzinach pracy."
        }
      ],
      outro: "Postaw na wydajność i komfort pracy na najwyższym poziomie. Logitech MX Mechanical to klawiatura dla tych, którzy oczekują perfekcji - od pierwszego naciśnięcia klawisza."
    },
    specs: [
      { label: "Typ przełączników", value: "Niskoprofilowe mechaniczne" },
      { label: "Warianty przełączników", value: "Tactile Quiet / Clicky / Linear" },
      { label: "Podświetlenie", value: "Białe, adaptacyjne" },
      { label: "Łączność", value: "Bluetooth + Logi Bolt USB" },
      { label: "Liczba urządzeń", value: "Do 3 jednocześnie" },
      { label: "Czas pracy baterii", value: "15 dni / 10 miesięcy" },
      { label: "Ładowanie", value: "USB-C" },
      { label: "Układ", value: "Full-size" },
      { label: "Kompatybilność", value: "Windows, macOS, Linux" },
      { label: "Waga", value: "828 g" }
    ],
    price: 549.99,
    oldPrice: 699.99,
    image: "/products/keyboard/IMG_20250501_185428_1.webp",
    images: [
      "/products/keyboard/IMG_20250501_185428_1.webp",
      "/products/keyboard/back.webp",
      "/products/keyboard/light1.webp",
      "/products/keyboard/dongle.webp",
      "/products/keyboard/signal-2025-06-01-100052_002.webp",
    ],
    category: "Klawiatury",
    categorySlug: "klawiatury",
    isFeatured: true,
    relatedProducts: ["logitech-mx-master-3s"],
  },
  {
    id: 3,
    slug: "steelseries-arctis-nova-7x",
    name: "SteelSeries Arctis Nova 7X",
    description: "Bezprzewodowe słuchawki gamingowe z dźwiękiem przestrzennym 360",
    fullDescription: {
      intro: "Dźwięk ma kluczowe znaczenie w grze - od dokładnego pozycjonowania przeciwników po immersję w świecie gry. SteelSeries Arctis Nova 7X to słuchawki stworzone z myślą o graczach, którzy oczekują najwyższej jakości dźwięku, wygody i niezawodności. Jeśli zależy Ci na przewadze nad rywalami i pełnym zanurzeniu w grze, Arctis Nova 7X to wybór, który zrobi różnicę.",
      sections: [
        {
          title: "Nova Acoustic System - dźwięk, który stawia Cię krok przed przeciwnikami",
          content: "Arctis Nova 7X wyposażono w przetworniki High Fidelity, które zapewniają niesamowitą szczegółowość i głębię dźwięku. Dzięki technologii 360 Spatial Audio usłyszysz każdy krok przeciwnika i z łatwością zlokalizujesz jego pozycję - to przewaga, która może przesądzić o zwycięstwie."
        },
        {
          title: "Tryb podwójnej łączności - graj bez ograniczeń",
          content: "Arctis Nova 7X pozwala na jednoczesne połączenie bezprzewodowe 2.4 GHz oraz Bluetooth. Możesz słuchać dźwięków z konsoli i jednocześnie rozmawiać na Discordzie z drużyną - bez opóźnień i przerw w połączeniu."
        },
        {
          title: "Kompatybilność z wieloma platformami",
          content: "Jedna para słuchawek, pełna kompatybilność - Arctis Nova 7X działa z Xbox Series X|S, PC, PlayStation, Nintendo Switch oraz urządzeniami mobilnymi. Zmieniaj platformy bez potrzeby konfiguracji - wystarczy jeden przycisk, by kontynuować grę tam, gdzie ją przerwałeś."
        },
        {
          title: "Długi czas pracy na baterii - nawet 38 godzin bez ładowania",
          content: "Arctis Nova 7X zapewnia do 38 godzin ciągłej pracy na jednym ładowaniu. Krótka przerwa? 15 minut szybkiego ładowania wystarczy na 6 godzin rozgrywki - nie musisz się martwić o rozładowanie w kluczowym momencie."
        },
        {
          title: "Wysuwany mikrofon z redukcją szumów",
          content: "Wyposażony w technologię AI mikrofon ClearCast Gen 2 skutecznie eliminuje hałasy w tle, zapewniając czystość głosu podczas komunikacji z drużyną. Dzięki funkcji ChatMix możesz łatwo dostosować proporcje między dźwiękiem z gry a komunikacją głosową."
        },
        {
          title: "Wygoda nawet podczas wielogodzinnych sesji",
          content: "Pałąk ComfortMAX z regulacją na czterech poziomach, piankowe nauszniki AirWeave Memory Foam i lekka konstrukcja sprawiają, że Arctis Nova 7X dopasowuje się do kształtu głowy i nie powoduje dyskomfortu nawet po wielu godzinach gry."
        }
      ],
      outro: "Precyzja dźwięku, wygoda i niezawodność - Arctis Nova 7X to sprzęt, który podniesie Twoje wyniki i pozwoli w pełni zanurzyć się w grze. Graj jak zawodowiec, słuchaj jak mistrz - i wygrywaj."
    },
    specs: [
      { label: "Typ przetworników", value: "High Fidelity 40mm" },
      { label: "Pasmo przenoszenia", value: "20 Hz - 22 000 Hz" },
      { label: "Impedancja", value: "36 Ohm" },
      { label: "Czułość", value: "93 dBSPL" },
      { label: "Łączność bezprzewodowa", value: "2.4 GHz + Bluetooth 5.0" },
      { label: "Czas pracy baterii", value: "Do 38 godzin" },
      { label: "Szybkie ładowanie", value: "15 min = 6 godzin" },
      { label: "Mikrofon", value: "ClearCast Gen 2 z AI" },
      { label: "Kompatybilność", value: "Xbox, PC, PS, Switch, Mobile" },
      { label: "Waga", value: "325 g" }
    ],
    price: 599.99,
    oldPrice: 749.99,
    image: "/products/headphones/headphones_front-1.webp",
    images: [
      "/products/headphones/headphones_front-1.webp",
      "/products/headphones/back2.webp",
      "/products/headphones/gaming.webp",
      "/products/headphones/connectors.webp",
      "/products/headphones/macro1.webp",
    ],
    category: "Słuchawki",
    categorySlug: "sluchawki",
    isFeatured: true,
  },
  {
    id: 4,
    slug: "elgato-stream-deck-mk2",
    name: "Elgato Stream Deck Mk.2",
    description: "Kontroler do streamowania z 15 programowalnymi przyciskami LCD",
    fullDescription: {
      intro: "Stream Deck Mk.2 to nie tylko gadżet - to narzędzie, które zmienia sposób, w jaki prowadzisz transmisje. Dla streamerów liczy się płynność, profesjonalizm i pełna kontrola nad każdym aspektem streamu. Ten kontroler to centrum dowodzenia, które pozwala skupić się na treści, a nie na klikaniu w okienka.",
      sections: [
        {
          title: "Natychmiastowy dostęp do wszystkiego, co ważne",
          content: "15 w pełni konfigurowalnych przycisków LCD umożliwia błyskawiczne uruchamianie scen, efektów dźwiękowych, alertów, kamer czy czatu - bez przełączania się między oknami. Jedno kliknięcie i działasz dalej."
        },
        {
          title: "Pełna personalizacja - Twój stream, Twoje zasady",
          content: "Dostosuj wygląd przycisków, ikony, tła i układy - wszystko po to, by Stream Deck odzwierciedlał Twój styl. Możesz tworzyć profile dla transmisji, różnych typów gier czy nawet konkretnych wydarzeń."
        },
        {
          title: "Integracja z popularnymi narzędziami",
          content: "Stream Deck Mk.2 współpracuje z OBS Studio, Twitch, YouTube, Discord, Spotify, Elgato Game Capture i wieloma innymi aplikacjami. Nie musisz nic kombinować - wszystko działa od razu, prosto z pudełka."
        },
        {
          title: "Funkcjonalność, która wykracza poza stream",
          content: "To nie tylko narzędzie do transmisji. Używaj go jako centrum sterowania do codziennej pracy: skróty klawiszowe, makra, sterowanie oświetleniem, uruchamianie aplikacji - jedno urządzenie, wiele możliwości."
        },
        {
          title: "Nowy design i zdejmowana podstawka",
          content: "Wersja Mk.2 to nie tylko nowe funkcje, ale też nowy wygląd. Obudowa z wymiennym frontem i odpinana podstawka sprawiają, że urządzenie nie tylko dobrze działa, ale i dobrze wygląda - niezależnie od tego, czy stoisz przed kamerą, czy nie."
        }
      ],
      outro: "Jeśli chcesz, by Twoje transmisje były płynne, dynamiczne i technicznie bezbłędne, Stream Deck Mk.2 jest narzędziem, które powinno znaleźć się na Twoim biurku. Wyróżni się jakością, nie komplikacją."
    },
    specs: [
      { label: "Liczba przycisków", value: "15 LCD" },
      { label: "Rozdzielczość przycisków", value: "72x72 piksele" },
      { label: "Łączność", value: "USB 2.0" },
      { label: "Wymiary", value: "118 x 84 x 25 mm" },
      { label: "Waga", value: "145 g" },
      { label: "Podstawka", value: "Zdejmowana, magnetyczna" },
      { label: "Panel przedni", value: "Wymienny" },
      { label: "Kompatybilność", value: "Windows 10+, macOS 10.15+" },
      { label: "Integracje", value: "OBS, Twitch, YouTube, Discord" },
      { label: "Oprogramowanie", value: "Stream Deck Software" }
    ],
    price: 649.99,
    image: "/products/streamdeck/stream.webp",
    images: [
      "/products/streamdeck/stream.webp",
      "/products/streamdeck/IMG_20250601_092319.webp",
      "/products/streamdeck/IMG_20250601_092353.webp",
      "/products/streamdeck/IMG_20250601_092359.webp",
    ],
    category: "Akcesoria",
    categorySlug: "akcesoria",
    isFeatured: true,
    isNew: true,
  },
  {
    id: 5,
    slug: "yubikey-5c-nfc-fips",
    name: "YubiKey 5C NFC FIPS",
    description: "Klucz bezpieczeństwa USB-C z NFC i certyfikatem FIPS 140-2",
    fullDescription: {
      intro: "Dla managera odpowiedzialnego za dostęp do poufnych danych, bezpieczeństwo nie może być opcją - musi być standardem. YubiKey 5C NFC FIPS to sprzętowy klucz uwierzytelniający klasy korporacyjnej, certyfikowany zgodnie z rygorystycznym standardem FIPS 140-2. To nie tylko technologia - to gwarancja, że kontrolujesz dostęp do kluczowych zasobów firmowych z poziomem zabezpieczeń godnym instytucji rządowych i finansowych.",
      sections: [
        {
          title: "Uwierzytelnianie sprzętowe - bez podatności na phishing",
          content: "YubiKey eliminuje ryzyko przejęcia danych logowania przez złośliwe oprogramowanie czy ataki typu phishing. Logowanie wymaga fizycznego klucza, co znacząco podnosi poziom ochrony kont służbowych, systemów firmowych i danych klientów."
        },
        {
          title: "Zgodność z FIPS 140-2 - standard bezpieczeństwa dla instytucji",
          content: "Model FIPS spełnia najwyższe normy bezpieczeństwa wymagane m.in. w sektorze finansowym, prawnym i administracji publicznej. Dla managerów odpowiedzialnych za zgodność i audyty to nie tylko przewaga, ale i wymóg."
        },
        {
          title: "Wsparcie dla wielu protokołów jednocześnie",
          content: "YubiKey 5C NFC obsługuje FIDO2, U2F, OTP, PIV (smart card) i OpenPGP - co pozwala wdrożyć jeden klucz jako uniwersalne narzędzie do autoryzacji w różnych systemach i aplikacjach, w tym Microsoft 365, Google Workspace, VPN, systemy logowania SSO i wiele innych."
        },
        {
          title: "USB-C + NFC - maksymalna elastyczność",
          content: "Dzięki złączom USB-C i technologii NFC klucz działa zarówno z komputerami, jak i urządzeniami mobilnymi. Bez względu na to, czy pracujesz przy biurku, czy logujesz się w terenie - dostęp masz zawsze pod ręką, bez konieczności korzystania z aplikacji czy baterii."
        },
        {
          title: "Brak zależności od chmury i aplikacji",
          content: "YubiKey działa lokalnie - bez potrzeby połączenia z internetem czy instalowania dodatkowego oprogramowania, bez ryzyka, że klucze wyciekną. To szybki i niezawodny sposób na logowanie, który nie generuje dodatkowych ryzyk ani punktów awarii."
        }
      ],
      outro: "Zamiast ufać hasłom, wybierz fizyczne zabezpieczenie, które realnie redukuje ryzyko. Jako manager, odpowiadasz za bezpieczeństwo zespołu, danych i dostępu. YubiKey 5C NFC FIPS pozwala wypełnić tę rolę z pełną odpowiedzialnością - bez zbędnych komplikacji, za to z najwyższym poziomem ochrony.",
      note: "Pendrive nie znajduje się w zestawie. Został użyty WYŁĄCZNIE w celu pokazowym porównania rozmiarów."
    },
    specs: [
      { label: "Złącze", value: "USB-C" },
      { label: "NFC", value: "Tak" },
      { label: "Certyfikat", value: "FIPS 140-2 Level 2" },
      { label: "Protokoły", value: "FIDO2, U2F, OTP, PIV, OpenPGP" },
      { label: "Wymiary", value: "18 x 45 x 5 mm" },
      { label: "Waga", value: "3 g" },
      { label: "Wodoodporność", value: "IP68" },
      { label: "Bateria", value: "Nie wymaga" },
      { label: "Kompatybilność", value: "Windows, macOS, Linux, iOS, Android" },
      { label: "Producent", value: "Yubico (Szwecja)" }
    ],
    price: 399.99,
    image: "/products/yubikey/DSCN0142.webp",
    images: [
      "/products/yubikey/DSCN0142.webp",
      "/products/yubikey/IMG_20250501_185936.webp",
      "/products/yubikey/IMG_20250601_091740.webp",
      "/products/yubikey/IMG_20250601_091823.webp",
    ],
    category: "Bezpieczeństwo",
    categorySlug: "bezpieczenstwo",
    isFeatured: true,
  },
  {
    id: 6,
    slug: "logitech-mx-master-3s",
    name: "Logitech MX Master 3S",
    description: "Bezprzewodowa mysz gamingowa z precyzją na poziomie turniejowym",
    fullDescription: {
      intro: "W świecie gamingu liczy się każda sekunda i każdy ruch. Logitech G502 Lightspeed to mysz stworzona z myślą o graczach, którzy wymagają absolutnej precyzji, niezawodności i szybkości reakcji – bez żadnych kompromisów, również w kwestii łączności.",
      sections: [
        {
          title: "Bezprzewodowa technologia LIGHTSPEED – wolność bez opóźnień",
          content: "Zapomnij o przewodach i opóźnieniach. LIGHTSPEED to ultraszybka technologia bezprzewodowa, która oferuje niezawodność i czas reakcji porównywalny z najlepszymi myszami przewodowymi. Opóźnienie na poziomie 1 ms idealnie sprawdzi się do dynamicznych rozgrywek, gdzie liczy się każda milisekunda."
        },
        {
          title: "Sensor HERO 25K – maksymalna precyzja",
          content: "G502 Lightspeed została wyposażona w sensor HERO 25K, oferujący rozdzielczość do 25 600 DPI bez wygładzania, akceleracji czy filtrów. Niezależnie od stylu gry – agresywnego flickowania czy precyzyjnego celowania – zawsze trafisz dokładnie tam, gdzie chcesz."
        },
        {
          title: "11 programowalnych przycisków – pełna kontrola",
          content: "Możesz przypisać makra, skróty i komendy do każdego z 11 przycisków. G502 Lightspeed daje Ci pełną elastyczność – idealnie sprawdzi się w FPS-ach, MMO i grach strategicznych, gdzie każda funkcja jest na wagę złota."
        },
        {
          title: "Regulowana waga – dopasuj mysz do siebie",
          content: "Dzięki dołączonym ciężarkom możesz precyzyjnie dostosować wagę myszy do własnych preferencji w zakresie od 114g do 130 g. Lżejsza do szybkich ruchów? Cięższa dla stabilności? Ty decydujesz."
        },
        {
          title: "Długi czas pracy na baterii",
          content: "Jedno ładowanie wystarczy nawet na 60 godzin gry. A jeśli korzystasz z bezprzewodowej podkładki Logitech PowerPlay, możesz grać bez przerwy – mysz ładuje się automatycznie podczas użytkowania."
        },
        {
          title: "Kultowy design, legendarna jakość",
          content: "G502 to nie tylko wydajność – to również ergonomia, z której znana jest ta linia. Kształt idealnie dopasowany do dłoni, gumowe uchwyty boczne i solidna konstrukcja sprawiają, że granie jest komfortowe nawet po wielu godzinach."
        }
      ],
      outro: "Jeśli szukasz myszy, która zapewni Ci przewagę na każdym poziomie gry, G502 Lightspeed to pewny wybór. Szybkość, precyzja i niezawodność – bez kabla i bez kompromisów."
    },
    specs: [
      { label: "Typ sensora", value: "HERO 25K (optyczny)" },
      { label: "Zakres DPI", value: "100 – 25 600 DPI" },
      { label: "Częstotliwość raportowania", value: "1000 Hz (1 ms)" },
      { label: "Liczba przycisków", value: "11 (programowalnych)" },
      { label: "Podświetlenie", value: "LIGHTSYNC RGB" },
      { label: "Waga", value: "114 g (bez obciążników)" },
      { label: "Dodatkowe obciążniki", value: "5 × 3,6 g" },
      { label: "Czas pracy na baterii", value: "Do 60 h (z wyłączonym RGB)" },
      { label: "Ładowanie", value: "USB lub POWERPLAY" },
      { label: "Połączenie", value: "Bezprzewodowe Lightspeed 2.4 GHz" },
      { label: "Kompatybilność", value: "Windows, macOS, ChromeOS, Linux" }
    ],
    price: 449.99,
    oldPrice: 549.99,
    image: "/products/mouse/IMG_20250601_092731.webp",
    images: [
      "/products/mouse/IMG_20250601_092731.webp",
      "/products/mouse/IMG_20250601_092738.webp",
      "/products/mouse/IMG_20250601_092640.webp",
      "/products/mouse/IMG_20250601_092822.webp",
      "/products/mouse/DSCN0262.webp",
      "/products/mouse/DSCN0257_2.webp",
    ],
    category: "Myszki",
    categorySlug: "myszki",
    isFeatured: true,
    relatedProducts: ["logitech-mx-mechanical"],
  },
  {
    id: 8,
    slug: "xiaomi-redmi-buds-6-active",
    name: "Xiaomi Redmi Buds 6 Active",
    description: "Bezprzewodowe słuchawki z Bluetooth 5.4 i długim czasem pracy",
    fullDescription: {
      intro: "Szukasz lekkich, wygodnych słuchawek bezprzewodowych, które sprawdzą się zarówno w drodze na uczelnię, podczas pracy, jak i w trakcie treningu? Xiaomi Redmi Buds 6 Active to idealne rozwiązanie dla osób, które chcą połączyć dobrą jakość dźwięku, niezawodną łączność i długi czas pracy w przystępnej cenie.",
      sections: [
        {
          title: "Dynamiczny dźwięk, który dotrzyma Ci kroku",
          content: "Wyposażone w 14,2-milimetrowe przetworniki dynamiczne, Redmi Buds 6 Active oferują wyraźne wokale, zbalansowane tony średnie i przyjemnie podkreślony bas. To brzmienie, które sprawdzi się zarówno przy słuchaniu podcastów, jak i ulubionej muzyki w drodze czy podczas spaceru."
        },
        {
          title: "Stabilne połączenie Bluetooth 5.4",
          content: "Nowoczesna technologia Bluetooth 5.4 zapewnia szybkie parowanie, niskie opóźnienia i stabilne połączenie z telefonem, tabletem czy laptopem. Bez zrywania dźwięku i bez irytujących przerw – po prostu zakładasz słuchawki i słuchasz."
        },
        {
          title: "Czyste rozmowy, gdziekolwiek jesteś",
          content: "Wbudowany mikrofon z redukcją szumów skutecznie eliminuje hałasy z otoczenia, dzięki czemu rozmowy telefoniczne są wyraźne nawet w miejskim zgiełku. Idealne rozwiązanie do szybkich rozmów w biegu lub spotkań online."
        },
        {
          title: "Długi czas pracy – nawet do 28 godzin",
          content: "Na jednym ładowaniu słuchawki działają do 6 godzin, a etui ładujące wydłuża ten czas aż do 28 godzin. To wystarczająco dużo energii na cały dzień słuchania – bez stresu o ładowarkę."
        },
        {
          title: "Lekka i wygodna konstrukcja",
          content: "Ergonomiczny kształt i niewielka waga sprawiają, że Redmi Buds 6 Active wygodnie leżą w uszach nawet podczas dłuższego użytkowania. Możesz nosić je godzinami – bez uczucia zmęczenia."
        },
        {
          title: "Odporność na zachlapania (IPX4)",
          content: "Deszcz, pot czy intensywny trening nie są problemem. Dzięki certyfikatowi IPX4 słuchawki świetnie sprawdzą się podczas aktywności fizycznej i codziennego użytkowania."
        }
      ],
      outro: "Xiaomi Redmi Buds 6 Active – prostota, która działa. To słuchawki stworzone z myślą o codziennym komforcie i niezawodności. Bez zbędnych dodatków, za to z solidnym dźwiękiem, długim czasem pracy i wygodą, której oczekujesz od marki Xiaomi. Jeśli szukasz uniwersalnych słuchawek true wireless do wszystkiego – Redmi Buds 6 Active będą trafnym wyborem."
    },
    specs: [
      { label: "Typ przetworników", value: "Dynamiczne 14,2 mm" },
      { label: "Łączność", value: "Bluetooth 5.4" },
      { label: "Zasięg", value: "Do 10 metrów" },
      { label: "Czas pracy słuchawek", value: "Do 6 godzin" },
      { label: "Czas pracy z etui", value: "Do 28 godzin" },
      { label: "Ładowanie", value: "USB-C" },
      { label: "Mikrofon", value: "Z redukcją szumów" },
      { label: "Odporność", value: "IPX4 (zachlapania)" },
      { label: "Waga słuchawki", value: "~4 g" },
      { label: "Kompatybilność", value: "Android, iOS, Windows" }
    ],
    price: 79.99,
    image: "/products/redmi-buds-6-active/MVIMG_20260111_104444.webp",
    images: [
      "/products/redmi-buds-6-active/MVIMG_20260111_104444.webp",
      "/products/redmi-buds-6-active/MVIMG_20260111_104504.webp",
      "/products/redmi-buds-6-active/MVIMG_20260111_104525.webp",
      "/products/redmi-buds-6-active/MVIMG_20260111_104556.webp",
      "/products/redmi-buds-6-active/MVIMG_20260111_104609.webp",
    ],
    category: "Słuchawki",
    categorySlug: "sluchawki",
    isFeatured: true,
    isNew: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}
