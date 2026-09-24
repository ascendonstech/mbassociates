import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileDock from "@/components/MobileDock";
import { ClientTicker, Clients, Footer, Hazardous, Process, Services } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientTicker />
        <Services />
        <Hazardous />
        <Clients />
        <Process />
        <Contact />
      </main>
      <Footer />
      <MobileDock />
    </>
  );
}
