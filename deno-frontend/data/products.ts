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
}

export const products: Product[] = [
  {
    id: 1,
    slug: "xiaomi-pad-6",
    name: "Xiaomi Pad 6",
    description: "Wszechstronny tablet 11\" WQHD+ 144Hz do nauki i rozrywki",
    fullDescription: {
      intro: "Szukasz narzedzia, ktore ulatwi Ci zycie na studiach i pozwoli cieszyc sie rozrywka na najwyzszym poziomie? Xiaomi Pad 6 to idealny wybor dla studentow i uczniow, ktorzy cenia sobie wydajnosc, mobilnosc i funkcjonalnosc.",
      sections: [
        {
          title: "Wydajnosc na poziomie laptopa",
          content: "Wyposazony w procesor Snapdragon 870 i 8 GB RAM, Xiaomi Pad 6 radzi sobie bezproblemowo z wielozadaniowoscia, nawet przy uruchomieniu wielu aplikacji jednoczesnie. Przegladanie notatek, uczestnictwo w zajeciach online czy edycja dokumentow - wszystko dziala plynnie i bez opoznien."
        },
        {
          title: "Ekran WQHD+ 144 Hz - idealny do nauki i rozrywki",
          content: "11-calowy wyswietlacz o wysokiej rozdzielczosci i odswiezaniu 144 Hz zapewnia krystalicznie czysty obraz i plynnosc dzialania. Dzieki temu prezentacje, notatki i dokumenty sa czytelne i szczegolowe, a po zajeciach mozesz zanurzyc sie w ulubionym serialu czy grze bez kompromisow w jakosci obrazu."
        },
        {
          title: "Dlugi czas pracy na baterii",
          content: "Bateria o pojemnosci 8840 mAh pozwala na nawet 16 godzin pracy na jednym ladowaniu. Mozesz zapomniec o noszeniu ladowarki na uczelnie - Xiaomi Pad 6 wytrzyma caly dzien intensywnego uzytkowania."
        },
        {
          title: "Mobilnosc i lekkosc",
          content: "Wazy zaledwie 490 g, wiec bez problemu zmiesci sie w plecaku czy torbie. To idealny sprzet, ktory mozesz zabrac na wyklad, do biblioteki czy na spotkanie z przyjaciolmi."
        },
        {
          title: "Wsparcie dla rysika i klawiatury",
          content: "Dodaj rysik i klawiature, aby jeszcze bardziej zwiekszyc produktywnosc. Notowanie na ekranie staje sie rownie naturalne jak pisanie na papierze, a klawiatura pozwala na szybkie tworzenie i edytowanie dokumentow."
        }
      ],
      outro: "Ulatwij sobie zycie - korzystaj z nowoczesnych rozwiazan i ucz sie efektywniej. Xiaomi Pad 6 laczy w sobie moc laptopa, wygode tabletu i jakosc premium - wszystko w przystepnej cenie. Teraz mozesz miec wszystko pod reka - na wykladzie, w domu i w podrozy.",
      note: "Rysik, klawiatura, etui nie znajduja sie w zestawie!"
    },
    specs: [
      { label: "Wyswietlacz", value: "11\" WQHD+ 2880x1800" },
      { label: "Odswiezanie", value: "144 Hz" },
      { label: "Procesor", value: "Snapdragon 870" },
      { label: "Pamiec RAM", value: "8 GB" },
      { label: "Pamiec wewnetrzna", value: "128 GB / 256 GB" },
      { label: "Bateria", value: "8840 mAh" },
      { label: "Czas pracy", value: "Do 16 godzin" },
      { label: "Waga", value: "490 g" },
      { label: "System", value: "MIUI Pad 14 (Android 13)" },
      { label: "Akcesoria", value: "Obsluga rysika i klawiatury" }
    ],
    price: 1299.99,
    oldPrice: 1599.99,
    image: "/products/tablet/front.JPG",
    images: [
      "/products/tablet/front.JPG",
      "/products/tablet/back.png",
      "/products/tablet/tablet_white_ front_on_screen.png",
      "/products/tablet/accessories3.JPG",
      "/products/tablet/contrast.jpg",
      "/products/tablet/usbc.jpg",
      "/products/tablet/plec_2.JPG",
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
    description: "Profesjonalna klawiatura mechaniczna dla wymagajacych",
    fullDescription: {
      intro: "Szukasz narzedzia, ktore podniesie Twoja efektywnosc w pracy i zapewni wygode podczas wielogodzinnych sesji przy biurku? Logitech MX Mechanical to klawiatura stworzona z mysla o profesjonalistach, ktorzy cenia jakosc, precyzje i ergonomie.",
      sections: [
        {
          title: "Minimalistyczny design i najwyzsza jakosc wykonania",
          content: "Smukla, aluminiowa obudowa nadaje klawiaturze elegancki, nowoczesny wyglad, ktory podkresla profesjonalizm na kazdym biurku. To nie tylko narzedzie pracy, ale rowniez element, ktory robi wrazenie - doskonale wpisujac sie w estetyka nowoczesnego biura. Odpowiednie wywaznie sprawia, ze klawiatura pozostaje stabilna nawet podczas intensywnego pisania."
        },
        {
          title: "Dlugi czas pracy na baterii",
          content: "Na pelnym naladowaniu klawiatura dziala do 15 dni (przy wlaczonym podswietleniu) lub nawet 10 miesiecy przy wylaczonym podswietleniu. Ladowanie przez USB-C pozwala na szybkie uzupelnienie energii w razie potrzeby."
        },
        {
          title: "Mechaniczne przelaczniki klasy premium",
          content: "Dzieki niskoprofilowym przelacznikam mechanicznym, MX Mechanical oferuje idealne polaczenie precyzji, szybkosci i cichego dzialania. Wybierz wariant najlepiej pasujacy do Twojego stylu pracy: Tactile Quiet (dotykowe) - ciche i precyzyjne, Clicky (klikajace) - dostojny klik, Linear (liniowe) - plynne i lekkie."
        },
        {
          title: "Podswietlenie adaptacyjne",
          content: "Inteligentne podswietlenie dostosowuje sie automatycznie do warunkow oswietleniowych, dzieki czemu klawisze sa zawsze dobrze widoczne - bez wzgledu na pore dnia. MX Mechanical oferuje klasyczne biale podswietlenie, ktore nie rozprasza uwagi i doskonale wpisuje sie w profesjonalny charakter stanowiska pracy."
        },
        {
          title: "Lacznosc z wieloma urzadzeniami",
          content: "MX Mechanical pozwala na plynne przelaczanie sie miedzy trzema urzadzeniami jednoczesnie - wystarczy jedno nacisniecie klawisza. Pracuj na komputerze stacjonarnym, laptopie i tablecie bez potrzeby ciaglego parowania urzadzen."
        },
        {
          title: "Niskoprofilowa konstrukcja - wieksza wygoda i mniejsze zmeczenie",
          content: "Nizszy profil klawiszy i minimalny skok sprawiaja, ze pisanie jest bardziej naturalne i mniej obciazajace dla nadgarstkow. Dzieki temu mozesz pisac szybciej i wygodniej, bez uczucia zmeczenia nawet po wielu godzinach pracy."
        }
      ],
      outro: "Postaw na wydajnosc i komfort pracy na najwyzszym poziomie. Logitech MX Mechanical to klawiatura dla tych, ktorzy oczekuja perfekcji - od pierwszego nacisniecia klawisza."
    },
    specs: [
      { label: "Typ przelacznikow", value: "Niskoprofilowe mechaniczne" },
      { label: "Warianty przelacznikow", value: "Tactile Quiet / Clicky / Linear" },
      { label: "Podswietlenie", value: "Biale, adaptacyjne" },
      { label: "Lacznosc", value: "Bluetooth + Logi Bolt USB" },
      { label: "Liczba urzadzen", value: "Do 3 jednoczesnie" },
      { label: "Czas pracy baterii", value: "15 dni / 10 miesiecy" },
      { label: "Ladowanie", value: "USB-C" },
      { label: "Uklad", value: "Full-size" },
      { label: "Kompatybilnosc", value: "Windows, macOS, Linux" },
      { label: "Waga", value: "828 g" }
    ],
    price: 549.99,
    oldPrice: 699.99,
    image: "/products/keyboard/IMG_20250501_185428_1.png",
    images: [
      "/products/keyboard/IMG_20250501_185428_1.png",
      "/products/keyboard/back.png",
      "/products/keyboard/light1.JPG",
      "/products/keyboard/dongle.JPG",
      "/products/keyboard/signal-2025-06-01-100052_002.jpeg",
    ],
    category: "Klawiatury",
    categorySlug: "klawiatury",
    isFeatured: true,
  },
  {
    id: 3,
    slug: "steelseries-arctis-nova-7x",
    name: "SteelSeries Arctis Nova 7X",
    description: "Bezprzewodowe sluchawki gamingowe z dzwiekiem przestrzennym 360",
    fullDescription: {
      intro: "Dzwiek ma kluczowe znaczenie w grze - od dokladnego pozycjonowania przeciwnikow po immersje w swiecie gry. SteelSeries Arctis Nova 7X to sluchawki stworzone z mysla o graczach, ktorzy oczekuja najwyzszej jakosci dzwieku, wygody i niezawodnosci. Jesli zalezy Ci na przewadze nad rywalami i pelnym zanurzeniu w grze, Arctis Nova 7X to wybor, ktory zrobi roznice.",
      sections: [
        {
          title: "Nova Acoustic System - dzwiek, ktory stawia Cie krok przed przeciwnikami",
          content: "Arctis Nova 7X wyposazono w przetworniki High Fidelity, ktore zapewniaja niesamowita szczegolowsc i glebie dzwieku. Dzieki technologii 360 Spatial Audio uslyszysz kazdy krok przeciwnika i z latwoscia zlokalizujesz jego pozycje - to przewaga, ktora moze przesadzic o zwycięstwie."
        },
        {
          title: "Tryb podwojnej lacznosci - graj bez ograniczen",
          content: "Arctis Nova 7X pozwala na jednoczesne polaczenie bezprzewodowe 2.4 GHz oraz Bluetooth. Mozesz sluchac dzwiekow z konsoli i jednoczesnie rozmawiac na Discordzie z druzyna - bez opoznien i przerw w polaczeniu."
        },
        {
          title: "Kompatybilnosc z wieloma platformami",
          content: "Jedna para sluchawek, pelna kompatybilnosc - Arctis Nova 7X dziala z Xbox Series X|S, PC, PlayStation, Nintendo Switch oraz urzadzeniami mobilnymi. Zmieniaj platformy bez potrzeby konfiguracji - wystarczy jeden przycisk, by kontynuowac gre tam, gdzie ja przerwales."
        },
        {
          title: "Dlugi czas pracy na baterii - nawet 38 godzin bez ladowania",
          content: "Arctis Nova 7X zapewnia do 38 godzin ciaglej pracy na jednym ladowaniu. Krotka przerwa? 15 minut szybkiego ladowania wystarczy na 6 godzin rozgrywki - nie musisz sie martwic o rozladowanie w kluczowym momencie."
        },
        {
          title: "Wysuwany mikrofon z redukcja szumow",
          content: "Wyposazony w technologie AI mikrofon ClearCast Gen 2 skutecznie eliminuje halasy w tle, zapewniajac czystosc glosu podczas komunikacji z druzyna. Dzieki funkcji ChatMix mozesz latwo dostosowac proporcje miedzy dzwiekiem z gry a komunikacja glosowa."
        },
        {
          title: "Wygoda nawet podczas wielogodzinnych sesji",
          content: "Palak ComfortMAX z regulacja na czterech poziomach, piankowe nauszniki AirWeave Memory Foam i lekka konstrukcja sprawiaja, ze Arctis Nova 7X dopasowuje sie do ksztaltu glowy i nie powoduje dyskomfortu nawet po wielu godzinach gry."
        }
      ],
      outro: "Precyzja dzwieku, wygoda i niezawodnosc - Arctis Nova 7X to sprzet, ktory podniesie Twoje wyniki i pozwoli w pelni zanurzyc sie w grze. Graj jak zawodowiec, sluchaj jak mistrz - i wygrywaj."
    },
    specs: [
      { label: "Typ przetwornikow", value: "High Fidelity 40mm" },
      { label: "Pasmo przenoszenia", value: "20 Hz - 22 000 Hz" },
      { label: "Impedancja", value: "36 Ohm" },
      { label: "Czulosc", value: "93 dBSPL" },
      { label: "Lacznosc bezprzewodowa", value: "2.4 GHz + Bluetooth 5.0" },
      { label: "Czas pracy baterii", value: "Do 38 godzin" },
      { label: "Szybkie ladowanie", value: "15 min = 6 godzin" },
      { label: "Mikrofon", value: "ClearCast Gen 2 z AI" },
      { label: "Kompatybilnosc", value: "Xbox, PC, PS, Switch, Mobile" },
      { label: "Waga", value: "325 g" }
    ],
    price: 599.99,
    oldPrice: 749.99,
    image: "/products/headphones/headphones_front-1.JPG",
    images: [
      "/products/headphones/headphones_front-1.JPG",
      "/products/headphones/back2.JPG",
      "/products/headphones/gaming.jpg",
      "/products/headphones/connectors.JPG",
      "/products/headphones/macro1.JPG",
    ],
    category: "Sluchawki",
    categorySlug: "sluchawki",
    isFeatured: true,
  },
  {
    id: 4,
    slug: "elgato-stream-deck-mk2",
    name: "Elgato Stream Deck Mk.2",
    description: "Kontroler do streamowania z 15 programowalnymi przyciskami LCD",
    fullDescription: {
      intro: "Stream Deck Mk.2 to nie tylko gadżet - to narzedzie, ktore zmienia sposob, w jaki prowadzisz transmisje. Dla streamerow liczy sie plynnosc, profesjonalizm i pelna kontrola nad kazdym aspektem streamu. Ten kontroler to centrum dowodzenia, ktore pozwala skupic sie na tresci, a nie na klikaniu w okienka.",
      sections: [
        {
          title: "Natychmiastowy dostep do wszystkiego, co wazne",
          content: "15 w pelni konfigurowalnych przyciskow LCD umozliwia blyskawiczne uruchamianie scen, efektow dzwiekowych, alertow, kamer czy czatu - bez przelaczania sie miedzy oknami. Jedno klikniecie i dzialasz dalej."
        },
        {
          title: "Pelna personalizacja - Twoj stream, Twoje zasady",
          content: "Dostosuj wyglad przyciskow, ikony, tla i uklady - wszystko po to, by Stream Deck odzwierciedlal Twoj styl. Mozesz tworzyc profile dla transmisji, roznych typow gier czy nawet konkretnych wydarzen."
        },
        {
          title: "Integracja z popularnymi narzedziami",
          content: "Stream Deck Mk.2 wspolpracuje z OBS Studio, Twitch, YouTube, Discord, Spotify, Elgato Game Capture i wieloma innymi aplikacjami. Nie musisz nic kombinowac - wszystko dziala od razu, prosto z pudelka."
        },
        {
          title: "Funkcjonalnosc, ktora wykracza poza stream",
          content: "To nie tylko narzedzie do transmisji. Uzywaj go jako centrum sterowania do codziennej pracy: skroty klawiszowe, makra, sterowanie oswietleniem, uruchamianie aplikacji - jedno urzadzenie, wiele mozliwosci."
        },
        {
          title: "Nowy design i zdejmowana podstawka",
          content: "Wersja Mk.2 to nie tylko nowe funkcje, ale tez nowy wyglad. Obudowa z wymiennym frontem i odpinana podstawka sprawiaja, ze urzadzenie nie tylko dobrze dziala, ale i dobrze wyglada - niezaleznie od tego, czy stoisz przed kamera, czy nie."
        }
      ],
      outro: "Jesli chcesz, by Twoje transmisje byly plynne, dynamiczne i technicznie bezbledne, Stream Deck Mk.2 jest narzedziem, ktore powinno znalezc sie na Twoim biurku. Wyrozni sie jakoscia, nie komplikacja."
    },
    specs: [
      { label: "Liczba przyciskow", value: "15 LCD" },
      { label: "Rozdzielczosc przyciskow", value: "72x72 piksele" },
      { label: "Lacznosc", value: "USB 2.0" },
      { label: "Wymiary", value: "118 x 84 x 25 mm" },
      { label: "Waga", value: "145 g" },
      { label: "Podstawka", value: "Zdejmowana, magnetyczna" },
      { label: "Panel przedni", value: "Wymienny" },
      { label: "Kompatybilnosc", value: "Windows 10+, macOS 10.15+" },
      { label: "Integracje", value: "OBS, Twitch, YouTube, Discord" },
      { label: "Oprogramowanie", value: "Stream Deck Software" }
    ],
    price: 649.99,
    image: "/products/streamdeck/stream.jpg",
    images: [
      "/products/streamdeck/stream.jpg",
      "/products/streamdeck/IMG_20250601_092319.jpg",
      "/products/streamdeck/IMG_20250601_092353.jpg",
      "/products/streamdeck/IMG_20250601_092359.jpg",
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
    description: "Klucz bezpieczenstwa USB-C z NFC i certyfikatem FIPS 140-2",
    fullDescription: {
      intro: "Dla managera odpowiedzialnego za dostep do poufnych danych, bezpieczenstwo nie moze byc opcja - musi byc standardem. YubiKey 5C NFC FIPS to sprzetowy klucz uwierzytelniajacy klasy korporacyjnej, certyfikowany zgodnie z rygorystycznym standardem FIPS 140-2. To nie tylko technologia - to gwarancja, ze kontrolujesz dostep do kluczowych zasobow firmowych z poziomem zabezpieczen godnym instytucji rzadowych i finansowych.",
      sections: [
        {
          title: "Uwierzytelnianie sprzetowe - bez podatnosci na phishing",
          content: "YubiKey eliminuje ryzyko przejecia danych logowania przez zlosliwe oprogramowanie czy ataki typu phishing. Logowanie wymaga fizycznego klucza, co znaczaco podnosi poziom ochrony kont sluzbowych, systemow firmowych i danych klientow."
        },
        {
          title: "Zgodnosc z FIPS 140-2 - standard bezpieczenstwa dla instytucji",
          content: "Model FIPS spelnia najwyzsze normy bezpieczenstwa wymagane m.in. w sektorze finansowym, prawnym i administracji publicznej. Dla managerow odpowiedzialnych za zgodnosc i audyty to nie tylko przewaga, ale i wymog."
        },
        {
          title: "Wsparcie dla wielu protokolow jednoczesnie",
          content: "YubiKey 5C NFC obsluguje FIDO2, U2F, OTP, PIV (smart card) i OpenPGP - co pozwala wdrozyc jeden klucz jako uniwersalne narzedzie do autoryzacji w roznych systemach i aplikacjach, w tym Microsoft 365, Google Workspace, VPN, systemy logowania SSO i wiele innych."
        },
        {
          title: "USB-C + NFC - maksymalna elastycznosc",
          content: "Dzieki zlaczom USB-C i technologii NFC klucz dziala zarowno z komputerami, jak i urzadzeniami mobilnymi. Bez wzgledu na to, czy pracujesz przy biurku, czy logujesz sie w terenie - dostep masz zawsze pod reka, bez koniecznosci korzystania z aplikacji czy baterii."
        },
        {
          title: "Brak zaleznosci od chmury i aplikacji",
          content: "YubiKey dziala lokalnie - bez potrzeby polaczenia z internetem czy instalowania dodatkowego oprogramowania, bez ryzyka, ze klucze wycieka. To szybki i niezawodny sposob na logowanie, ktory nie generuje dodatkowych ryzyk ani punktow awarii."
        }
      ],
      outro: "Zamiast ufac haslom, wybierz fizyczne zabezpieczenie, ktore realnie redukuje ryzyko. Jako manager, odpowiadasz za bezpieczenstwo zespolu, danych i dostepu. YubiKey 5C NFC FIPS pozwala wypelnic te role z pelna odpowiedzialnoscia - bez zbednych komplikacji, za to z najwyzszym poziomem ochrony.",
      note: "Pendrive nie znajduje sie w zestawie. Zostal uzyty WYLACZNIE w celu pokazowym porownania rozmiarow."
    },
    specs: [
      { label: "Zlacze", value: "USB-C" },
      { label: "NFC", value: "Tak" },
      { label: "Certyfikat", value: "FIPS 140-2 Level 2" },
      { label: "Protokoly", value: "FIDO2, U2F, OTP, PIV, OpenPGP" },
      { label: "Wymiary", value: "18 x 45 x 5 mm" },
      { label: "Waga", value: "3 g" },
      { label: "Wodoodpornosc", value: "IP68" },
      { label: "Bateria", value: "Nie wymaga" },
      { label: "Kompatybilnosc", value: "Windows, macOS, Linux, iOS, Android" },
      { label: "Producent", value: "Yubico (Szwecja)" }
    ],
    price: 399.99,
    image: "/products/yubikey/DSCN0142.jpg",
    images: [
      "/products/yubikey/DSCN0142.jpg",
      "/products/yubikey/IMG_20250501_185936.jpg",
      "/products/yubikey/IMG_20250601_091740.jpg",
      "/products/yubikey/IMG_20250601_091823.jpg",
    ],
    category: "Bezpieczenstwo",
    categorySlug: "bezpieczenstwo",
    isFeatured: true,
  },
  {
    id: 6,
    slug: "logitech-mx-master-3s",
    name: "Logitech MX Master 3S",
    description: "Zaawansowana mysz bezprzewodowa dla profesjonalistow",
    price: 449.99,
    oldPrice: 549.99,
    image: "/products/mouse/DSCN0257_2.jpg",
    images: [
      "/products/mouse/DSCN0257_2.jpg",
      "/products/mouse/DSCN0262.jpg",
      "/products/mouse/IMG_20250601_092640.jpg",
      "/products/mouse/IMG_20250601_092731.jpg",
      "/products/mouse/IMG_20250601_092738.jpg",
      "/products/mouse/IMG_20250601_092822.jpg",
    ],
    category: "Myszki",
    categorySlug: "myszki",
    isFeatured: true,
  },
  {
    id: 7,
    slug: "samsung-odyssey-g5-27",
    name: "Samsung Odyssey G5 27\"",
    description: "Monitor gamingowy 144Hz WQHD z zakrzywionym ekranem",
    price: 1299.99,
    oldPrice: 1499.99,
    image: "/images/monitor.svg",
    category: "Monitory",
    categorySlug: "monitory",
    isFeatured: true,
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
