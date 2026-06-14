import Container from "@/components/layout/Container";

import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/editorial/Hero";
import HeroImage from "@/components/editorial/HeroImage";
import EditorialIntro from "@/components/editorial/EditorialIntro";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main>

      <Container>

        <Navigation />

        <Hero />

        <HeroImage />

        <EditorialIntro />

        <Footer />

      </Container>

    </main>
  );
}