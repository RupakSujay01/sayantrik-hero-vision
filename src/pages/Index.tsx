import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import CoreValues from "@/components/CoreValues";
import { SEO } from "@/components/SEO";


const Index = () => {
  return (
    <main>
      <SEO
        title="Home"
        description="Sayantrik Engineers - Global engineering and integration partner delivering excellence in the energy and chemicals sector."
      />
      <Hero />
      <WelcomeSection />
      <CoreValues />
    </main>
  );
};

export default Index;
