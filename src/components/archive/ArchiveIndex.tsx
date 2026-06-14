"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

import { archiveRecords } from "@/data/archive";
import {
  getCategories,
  getArchiveStats,
} from "@/lib/archive-utils";

export default function ArchiveIndex() {
  const stats = getArchiveStats();

  const categories = getCategories();

  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState("All");

  const [active, setActive] = useState(
    archiveRecords[0]
  );

  const filtered = useMemo(() => {
    return archiveRecords.filter((record) => {
      const searchMatch =
        record.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        record.tags.some((tag) =>
          tag
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
        );

      const categoryMatch =
        category === "All"
          ? true
          : record.category === category;

      return (
        searchMatch &&
        categoryMatch
      );
    });
  }, [search, category]);

  return (
    <section className="py-24">

      {/* HEADER */}

      <div className="mb-24">

        <p
          className="
            text-[10px]
            tracking-[0.2em]
            text-neutral-500
            mb-6
          "
        >
          ARCHIVE
        </p>

        <h1
  className="
    text-[11vw]
    leading-[0.82]
    tracking-[-0.10em]
    mb-16
  "
>
  CULTURAL
  <br />
  RECORDS
</h1>

        {/* STATS */}

        <div
          className="
            flex
            gap-12
            text-[11px]
            tracking-[0.15em]
          "
        >
          <span>
            {stats.totalRecords} RECORDS
          </span>

          <span>
            {stats.totalCategories}
            {" "}
            CATEGORIES
          </span>

          <span>
            {stats.latestYear}
          </span>
        </div>

      </div>

      {/* SEARCH */}

      <div className="mb-16">

        <input
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          placeholder="Search records..."
          className="
            w-full
            bg-transparent
            border-b
            border-black/10
            py-5

            text-xl

            outline-none
          "
        />

      </div>

      {/* FILTERS */}

      <div
        className="
          flex
          flex-wrap
          gap-4
          mb-20
        "
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() =>
              setCategory(cat)
            }
            className={`
              text-[11px]
              tracking-[0.18em]
              pb-1

              ${
                category === cat
                  ? "border-b border-black"
                  : "opacity-40"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MAIN */}

      <div className="grid grid-cols-12 gap-24">

     {/* INDEX */}

<div className="col-span-12 xl:col-span-7">

  {filtered.map((record) => (
    <Link
      key={record.id}
      href={`/archive/${record.slug}`}
      onMouseEnter={() =>
        setActive(record)
      }
      className="
        block
        border-t
        border-black/10
        py-10
        group
      "
    >
      <div className="flex justify-between items-end">

        <div>

          <p
            className="
              text-[10px]
              tracking-[0.18em]
              text-neutral-400
              mb-4
            "
          >
            {record.id}
          </p>

          <h2
            className="
              text-[3.8rem]
              leading-[0.92]
              tracking-[-0.06em]

              group-hover:opacity-50
              transition-all
              duration-300
            "
          >
            {record.title}
          </h2>

        </div>

        <div
          className="
            text-right
            text-[10px]
            tracking-[0.18em]
            text-neutral-400
            pb-2
          "
        >
          <p>{record.category}</p>

          <p>{record.year}</p>
        </div>

      </div>

    </Link>
  ))}

  {/* EMPTY STATE */}

  {filtered.length === 0 && (
    <div
      className="
        py-32
        border-t
        border-black/10
      "
    >

      <p
        className="
          text-[7vw]
          leading-none
          tracking-[-0.08em]
        "
      >
        NO RECORDS
      </p>

      <p
        className="
          mt-6
          text-neutral-500
          max-w-md
          leading-relaxed
        "
      >
        No archive records match your current search
        criteria. Try another keyword or category.
      </p>

    </div>
  )}

</div>
        {/* PREVIEW */}

        <div className="col-span-12 xl:col-span-5">

          <div
            className="
              sticky
              top-10
            "
          >

            <div
              className="
                aspect-[4/5]
                overflow-hidden
                mb-8
              "
            >
              <Image
                src={active.image}
                alt={active.title}
                width={1200}
                height={1500}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>

            <p
              className="
                text-[10px]
                tracking-[0.15em]
                text-neutral-500
                mb-3
              "
            >
              {active.category}
            </p>

            <h3
              className="
                text-4xl
                tracking-[-0.04em]
                mb-4
              "
            >
              {active.title}
            </h3>

            <p
              className="
                text-neutral-600
                leading-relaxed
                max-w-md
              "
            >
              {active.description}
            </p>

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-2
              "
            >
              {active.tags.map(
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

    </section>
  );
}