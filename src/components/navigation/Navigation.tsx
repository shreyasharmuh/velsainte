import Link from "next/link";

const navItems = [
  {
    title: "Archive",
    href: "/archive",
    meta: "001–248 Cultural Records",
  },
  {
    title: "Signals",
    href: "/signals",
    meta: "Emerging Luxury Intelligence",
  },
  {
    title: "Reports",
    href: "/reports",
    meta: "Forecasts & Research",
  },
  {
    title: "Partnerships",
    href: "/partnerships",
    meta: "Active & Future Collaborations",
  },
  {
    title: "Lab",
    href: "/lab",
    meta: "Experimental Systems",
  },
  {
    title: "About",
    href: "/about",
    meta: "Institution Profile",
  },
];

export default function Navigation() {
  return (
    <section className="border-b border-black/10">

      {/* Editorial Metadata */}

      <div className="pt-10">

        <p
          className="
            text-[10px]
            tracking-[0.25em]
            text-neutral-500
          "
        >
          FASHION INTELLIGENCE FOR FUTURE LUXURY
        </p>

      </div>

      {/* Masthead */}

      <div className="py-10 md:py-16 lg:py-20">

        <h1
          className="
            text-[14vw]
            leading-[0.78]
            tracking-[-0.11em]
            max-w-[1800px]
          "
        >
          VELSAINTE
        </h1>

      </div>

      {/* Navigation Index */}

      <div className="pb-20">

        <div className="grid grid-cols-12 gap-8">

          <div className="col-span-12 lg:col-span-2">

            <p
              className="
                text-[10px]
                tracking-[0.25em]
                text-neutral-500
              "
            >
              EST.2026
            </p>

          </div>

          <div className="col-span-12 lg:col-span-10">

            <div className="space-y-0">

              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="
                    group
                    grid
                    grid-cols-12
                    items-center

                    py-6

                    border-t
                    border-black/10
                  "
                >
                  <div className="col-span-6">

                    <span
                      className="
                        text-[3rem]
                        md:text-[4rem]
                        lg:text-[4.5rem]

                        leading-[0.9]
                        tracking-[-0.06em]

                        transition-opacity
                        duration-300

                        group-hover:opacity-40
                      "
                    >
                      {item.title}
                    </span>

                  </div>

                  <div className="col-span-6 text-right">

                    <span
                      className="
                        text-[10px]
                        md:text-[11px]

                        tracking-[0.18em]
                        text-neutral-500
                      "
                    >
                      {item.meta}
                    </span>

                  </div>

                </Link>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}