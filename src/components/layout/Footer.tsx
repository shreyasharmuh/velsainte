import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-[30rem] border-t border-black/10">

      {/* Masthead */}

      <div className="pt-16 pb-32">

        <p className="text-[10px] tracking-[0.25em] text-neutral-500 mb-10">
          FASHION INTELLIGENCE FOR FUTURE LUXURY
        </p>

        <h2
          className="
            text-[18vw]
            leading-[0.8]
            tracking-[-0.11em]
          "
        >
          VELSAINTE
        </h2>

      </div>

      {/* Metadata */}

      <div className="border-t border-black/10 py-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">

          {/* INDEX */}

          <div>

            <p className="text-[10px] tracking-[0.2em] text-neutral-500 mb-8">
              INDEX
            </p>

            <div className="flex flex-col gap-4 text-[1.15rem]">

              <Link href="/archive">Archive</Link>
              <Link href="/signals">Signals</Link>
              <Link href="/reports">Reports</Link>
              <Link href="/partnerships">Partnerships</Link>
              <Link href="/lab">Lab</Link>
              <Link href="/about">About</Link>

            </div>

          </div>

          {/* CONNECT */}

          <div>

            <p className="text-[10px] tracking-[0.2em] text-neutral-500 mb-8">
              CONNECT
            </p>

            <div className="flex flex-col gap-4 text-[1.15rem]">

              <a
                href="https://instagram.com/shreyasharmuh"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/in/shreyash-sharma-562a333a5/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a href="mailto:deadpoison75@gmail.com">
                Email
              </a>

            </div>

          </div>

          {/* LOCATION */}

          <div>

            <p className="text-[10px] tracking-[0.2em] text-neutral-500 mb-8">
              LOCATION
            </p>

            <div className="text-[1.15rem] flex flex-col gap-2">

              <p>Bombay</p>
              <p>India</p>

              <div className="h-10" />

              <p className="text-[10px] tracking-[0.2em] text-neutral-500">
                EST.
              </p>

              <p>2026</p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-black/10 py-8">

        <div className="flex justify-between items-center text-[10px] tracking-[0.15em]">

          <p>© 2026 VELSAINTE</p>

          <p className="text-neutral-500">
            CULTURE · LUXURY · SPORT · INTELLIGENCE
          </p>

        </div>

      </div>

    </footer>
  );
}