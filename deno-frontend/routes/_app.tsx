import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html lang="pl">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TechNest - Sklep z elektronika</title>
        <meta name="description" content="Twoj sklep z elektronika najwyzszej jakosci. Oferujemy szeroka game produktow w konkurencyjnych cenach." />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-gray-50 text-gray-800 min-h-screen">
        <Component />
      </body>
    </html>
  );
}
