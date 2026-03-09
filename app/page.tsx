import AboutSection from "@/components/AboutSection";
import ContactCTA from "@/components/ContactCTA";
import GalleryPreview from "@/components/GalleryPreview";
import Hero from "@/components/Hero";
import InfoBar from "@/components/InfoBar";
import LocationsSection from "@/components/LocationsSection";
import OfferCards from "@/components/OfferCards";
import ServiceHighlights from "@/components/ServiceHighlights";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5f1] text-neutral-900">
      <Hero />
      <InfoBar />
      <AboutSection />
      <OfferCards />
      <ServiceHighlights />
      <GalleryPreview />
      <TestimonialsSection />
      <LocationsSection />
      <ContactCTA />
    </main>
  );
}