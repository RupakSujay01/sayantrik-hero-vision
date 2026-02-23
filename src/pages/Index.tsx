import Hero from "@/components/Hero";
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
      <CoreValues />
    </main>
  );
};

export default Index;
