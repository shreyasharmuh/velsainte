import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  getRecord,
  getRelatedRecords,
  getPreviousRecord,
  getNextRecord,
} from "@/lib/archive-utils";

export default function ArchiveRecordPage({
  params,
}: {
  params: { slug: string };
}) {
  const record = getRecord(params.slug);

  if (!record) {
    notFound();
  }

  const related = getRelatedRecords(
    record.category,
    record.slug
  );

  const previous = getPreviousRecord(
    record.slug
  );

  const next = getNextRecord(
    record.slug
  );

  return (
    <main className="py-24">

      {/* META */}

      <div className="mb-16">

        <p
          className="
            text-[10px]
            tracking-[0.2em]
            text-neutral-500
            mb-4
          "
        >
          ARCHIVE RECORD
        </p>

        <p
          className="
            text-[12px]
            tracking-[0.15em]
          "
        >
          {record.id}
        </p>

      </div>

      {/* TITLE */}

      <h1
        className="
          text-[11vw]
          leading-[0.82]
          tracking-[-0.09em]
          mb-20
        "
      >
        {record.title}
      </h1>

      {/* HERO */}

      <div className="grid grid-cols-12 gap-20 mb-32">

        <div className="col-span-12 xl:col-span-8">

          <div className="aspect-[16/10] overflow-hidden">

            <Image
              src={record.image}
              alt={record.title}
              width={1600}
              height={1200}
              className="
                w-full
                h-full
                object-cover
              "
            />

          </div>

        </div>

        <div className="col-span-12 xl:col-span-4">

          <div className="space-y-10">

            <div>
              <p className="text-[10px] text-neutral-500 tracking-[0.15em] mb-2">
                CATEGORY
              </p>

              <p className="text-xl">
                {record.category}
              </p>
            </div>

            <div>
              <p className="text-[10px] text-neutral-500 tracking-[0.15em] mb-2">
                YEAR
              </p>

              <p className="text-xl">
                {record.year}
              </p>
            </div>

            <div>
              <p className="text-[10px] text-neutral-500 tracking-[0.15em] mb-2">
                STATUS
              </p>

              <p className="text-xl">
                Active Record
              </p>
            </div>

            <div>
              <p className="text-[10px] text-neutral-500 tracking-[0.15em] mb-4">
                TAGS
              </p>

              <div className="flex flex-wrap gap-2">

                {record.tags.map(
                  (tag) => (
                    <span
                      key={tag}
                      className="
                        text-[10px]
                        tracking-[0.15em]
                        opacity-50
                      "
                    >
                      #{tag}
                    </span>
                  )
                )}

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* DESCRIPTION */}

      <section className="mb-40">

        <p
          className="
            text-[10px]
            tracking-[0.15em]
            text-neutral-500
            mb-8
          "
        >
          OVERVIEW
        </p>

        <p
          className="
            max-w-4xl
            text-3xl
            leading-[1.4]
            tracking-[-0.03em]
          "
        >
          {record.description}
        </p>

      </section>

      {/* RELATED */}

      <section className="mb-40">

        <p
          className="
            text-[10px]
            tracking-[0.15em]
            text-neutral-500
            mb-10
          "
        >
          RELATED RECORDS
        </p>

        {related.slice(0, 4).map(
          (item) => (
            <Link
              key={item.slug}
              href={`/archive/${item.slug}`}
              className="
                flex
                justify-between
                items-center

                border-t
                border-black/10

                py-8

                group
              "
            >
              <div>

                <p
                  className="
                    text-[10px]
                    tracking-[0.15em]
                    text-neutral-500
                    mb-2
                  "
                >
                  {item.id}
                </p>

                <h3
                  className="
                    text-4xl
                    tracking-[-0.04em]

                    group-hover:opacity-50
                    transition
                  "
                >
                  {item.title}
                </h3>

              </div>

              <span>
                →
              </span>

            </Link>
          )
        )}

      </section>

      {/* RECORD NAVIGATION */}

      <section
        className="
          border-t
          border-black/10
          pt-16
        "
      >

        <div className="grid grid-cols-2 gap-12">

          <div>

            {previous && (
              <>
                <p
                  className="
                    text-[10px]
                    tracking-[0.15em]
                    text-neutral-500
                    mb-4
                  "
                >
                  PREVIOUS RECORD
                </p>

                <Link
                  href={`/archive/${previous.slug}`}
                  className="
                    text-3xl
                    tracking-[-0.04em]
                  "
                >
                  {previous.title}
                </Link>
              </>
            )}

          </div>

          <div className="text-right">

            {next && (
              <>
                <p
                  className="
                    text-[10px]
                    tracking-[0.15em]
                    text-neutral-500
                    mb-4
                  "
                >
                  NEXT RECORD
                </p>

                <Link
                  href={`/archive/${next.slug}`}
                  className="
                    text-3xl
                    tracking-[-0.04em]
                  "
                >
                  {next.title}
                </Link>
              </>
            )}

          </div>

        </div>

      </section>

    </main>
  );
}