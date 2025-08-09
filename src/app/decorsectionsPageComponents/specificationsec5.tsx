export default function SpecificationsSection() {
  return (
    <section
      className="min-h-[700px] text-white bg-center bg-no-repeat bg-[url('/imagesForDecorPage/Specifications_bg.png')] px-4 py-[clamp(2rem,5vw,4rem)]"
    >
      <div className="max-w-[1152px] mx-auto text-center relative">
        <h2 className="text-[clamp(1.8rem,4vw,2.25rem)] font-semibold mb-[clamp(2rem,4vw,2.5rem)]">
          Specifications
        </h2>

        <div className="flex flex-wrap gap-[clamp(2rem,4vw,4rem)] text-left">
          {/* Left Column */}
          <div className="flex-1 min-w-[300px] flex flex-col gap-4">
            <h3 className="text-[clamp(1rem,2vw,1.125rem)] font-semibold">
              Style and Sizes
            </h3>
            <p className="text-[clamp(0.9rem,1.8vw,1rem)]">
              Décor Curve 47 x 16 x 3600mm
            </p>
            <p className="text-[clamp(0.9rem,1.8vw,1rem)]">
              Décor Curve 60 x 16 x 3600mm
            </p>
            <p className="text-[clamp(0.9rem,1.8vw,1rem)]">
              Décor Shutter 47 x 16 x 3600mm
            </p>
            <p className="text-[clamp(0.9rem,1.8vw,1rem)]">
              Décor Shutter 61 x 16 x 3600mm
            </p>

            <div className="pt-4">
              <p className="text-[clamp(0.9rem,1.8vw,1rem)] font-medium">
                RRP Per strip shutter or curve 16mm £72.96
              </p>
              <p className="text-[clamp(0.9rem,1.8vw,1rem)] font-medium">
                RRP Per strip shutter or curve 32mm £96.96
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-[clamp(1rem,2vw,1.125rem)] font-semibold">
                Colours
              </h3>
              <p className="text-[clamp(0.9rem,1.8vw,1rem)]">
                Bronze, Carbon and Gold
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 min-w-[300px] flex flex-col gap-4">
            <h3 className="text-[clamp(1rem,2vw,1.125rem)] font-semibold">
              Testing
            </h3>
            <p className="text-[clamp(0.9rem,1.8vw,1rem)]">
              Tested to the rigorous demands of BS EN 13501-1. Envello Décor when used
              in conjunction with the Shadow Line+ system achieves a classification
              of Euroclass C. This testing is carried out by a UKAS accredited lab and
              is tested in accordance with how the cladding will be fitted as per the
              installation guide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
