export default function Manifesto() {
  return (
    <section className="py-48 border-t border-black/10">

      <div className="grid grid-cols-12 gap-8">

        <div className="col-span-2">
          <p className="text-[11px] tracking-[0.2em]">
            MANIFESTO
          </p>
        </div>

        <div className="col-span-10">

          <p
            className="
              text-4xl
              md:text-7xl
              leading-[0.95]
              tracking-[-0.05em]
              max-w-6xl
            "
          >
            Luxury is becoming culture.
            Culture is becoming data.
            Data is becoming intelligence.
            Intelligence is becoming the
            foundation of modern fashion systems.
          </p>

          <div className="mt-24">

            <p
              className="
                text-lg
                md:text-2xl
                max-w-3xl
                leading-relaxed
                text-neutral-600
              "
            >
              Velsainte exists to understand,
              archive, forecast and shape
              the future of luxury,
              fashion, sport, culture,
              architecture and creative systems.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}