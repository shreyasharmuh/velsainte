export default function AboutPage() {
  return (
    <main className="py-24">

      {/* HERO */}

      <section className="mb-40">

        <p
          className="
            text-[10px]
            tracking-[0.2em]
            mb-8
          "
        >
          ABOUT
        </p>

        <h1
          className="
            text-[14vw]
            leading-[0.78]
            tracking-[-0.09em]
          "
        >
          VELSAINTE
        </h1>

      </section>

      {/* MANIFESTO */}

      <section
        className="
          max-w-5xl
          mb-48
        "
      >
        <p
          className="
            text-[3rem]
            leading-[1.15]
            tracking-[-0.05em]
          "
        >
          Velsainte is an independent fashion
          intelligence institution exploring
          the intersection of luxury, sport,
          culture, beauty, retail, hospitality
          and emerging consumer systems.
        </p>
      </section>

      {/* DESCRIPTION */}

      <section
        className="
          grid
          grid-cols-12
          gap-20
          mb-48
        "
      >

        <div className="col-span-12 lg:col-span-7">

          <p
            className="
              text-xl
              leading-relaxed
              max-w-3xl
            "
          >
            Through archival research,
            partnership analysis,
            editorial storytelling and
            cultural observation,
            Velsainte documents how
            modern brands create value,
            influence and relevance in a
            rapidly changing world.
          </p>

        </div>

        <div className="col-span-12 lg:col-span-5">

          <div className="space-y-12">

            <div>
              <p className="text-[10px] tracking-[0.15em] opacity-50 mb-2">
                ESTABLISHED
              </p>

              <p className="text-2xl">
                2026
              </p>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.15em] opacity-50 mb-2">
                LOCATION
              </p>

              <p className="text-2xl">
                Bombay, India
              </p>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.15em] opacity-50 mb-2">
                DISCIPLINES
              </p>

              <p className="text-2xl">
                Luxury
                <br />
                Sport
                <br />
                Beauty
                <br />
                Hospitality
                <br />
                Retail
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PRINCIPLES */}

      <section className="mb-48">

        <p
          className="
            text-[10px]
            tracking-[0.15em]
            opacity-50
            mb-12
          "
        >
          PRINCIPLES
        </p>

        <div className="space-y-10">

          <div className="border-t border-black/10 pt-8">
            <h3 className="text-4xl mb-3">
              Culture First
            </h3>

            <p className="max-w-2xl text-neutral-600">
              Culture creates demand before
              commerce can capture it.
            </p>
          </div>

          <div className="border-t border-black/10 pt-8">
            <h3 className="text-4xl mb-3">
              Luxury Through Meaning
            </h3>

            <p className="max-w-2xl text-neutral-600">
              Modern luxury is built through
              relevance, narrative and identity.
            </p>
          </div>

          <div className="border-t border-black/10 pt-8">
            <h3 className="text-4xl mb-3">
              Systems Thinking
            </h3>

            <p className="max-w-2xl text-neutral-600">
              Every brand exists within a larger
              network of culture, technology,
              commerce and community.
            </p>
          </div>

        </div>

      </section>

      {/* CLOSING */}

      <section
        className="
          border-t
          border-black/10
          pt-20
        "
      >

        <p
          className="
            text-[7vw]
            leading-[0.9]
            tracking-[-0.08em]
            max-w-5xl
          "
        >
          Fashion Intelligence
          for Future Luxury.
        </p>

      </section>

    </main>
  );
}