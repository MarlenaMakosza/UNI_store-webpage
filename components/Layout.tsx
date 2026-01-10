import { ComponentChildren } from "preact";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

interface LayoutProps {
  children: ComponentChildren;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
