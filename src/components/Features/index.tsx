import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Built for Real Development Workflows"
            paragraph="Hive's powerful features enable autonomous software development from requirement to production."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/features"
              className="inline-block rounded-lg bg-primary px-8 py-3 text-center font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Explore all features →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
