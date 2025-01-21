// src/app/page.tsx
import HowItWorks from "./components/HowItWorks";
import Herosection from "./components/Herosection";
import FeatureSection from "./components/FeatureSection";
import BackgroundPattern from "./components/BackgroundPattern";
import Footer from "./components/Footer";
import BlogSection from "./components/BlogSection";
import ContactForm from "./components/ContactForm";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-gray-900">
      <BackgroundPattern />
      <main className="relative">
        <Herosection />
        <BlogSection />
        <FeatureSection />
        <HowItWorks />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}
