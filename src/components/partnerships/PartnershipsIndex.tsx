"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

import { partnerships } from "@/data/partnerships";

import {
  getPartnershipStats,
  getPartnershipCategories,
} from "@/lib/partnerships-utils";

export default function PartnershipsIndex() {
  const stats = getPartnershipStats();

  const categories =
    getPartnershipCategories();

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [active, setActive] =
    useState(partnerships[0]);

  const filtered = useMemo(() => {
    return partnerships.filter(
      (item) => {
        const searchMatch =
          item.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          item.tags.some((tag) =>
            tag
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )
          );

        const categoryMatch =
          category === "All"
            ? true
            : item.category ===
              category;

        return (
          searchMatch &&
          categoryMatch
        );
      }
    );
  }, [search, category]);

  return (
    <section className="py-24">

      {/* HERO */}

      <div className="mb-40">

        <p
          className="
            text-[10px]
            tracking-[0.2em]
            mb-8
          "
        >
          VELSAINTE
        </p>

        <h1
          className="
            text-[14vw]
            leading-[0.78]
            tracking-[-0.09em]
          "
        >
          PARTNERSHIPS
        </h1>

      </div>

      {/* STATEMENT */}

      <div
        className="
          max-w-4xl
          mb-32
        "
      >
        <p
          className="
            text-[2rem]
            leading-[1.25]
            tracking-[-0.04em]
          "
        >
          Strategic alliances shaping
          the future of luxury, sport,
          beauty, hospitality,
          retail and culture.
        </p>
      </div>

      {/* STATS */}

      <div
        className="
          grid
          grid-cols-3
          gap-16
          mb-32
        "
      >
        <div>
          <p
            className="
              text-[5rem]
              leading-none
            "
          >
            {stats.totalRecords}
          </p>

          <p
            className="
              text-[10px]
              tracking-[0.15em]
              mt-3
            "
          >
            RECORDS
          </p>
        </div>

        <div>
          <p
            className="
              text-[5rem]
              leading-none
            "
          >
            {stats.totalCategories}
          </p>

          <p
            className="
              text-[10px]
              tracking-[0.15em]
              mt-3
            "
          >
            CATEGORIES
          </p>
        </div>

        <div>
          <p
            className="
              text-[5rem]
              leading-none
            "
          >
            3
          </p>

          <p
            className="
              text-[10px]
              tracking-[0.15em]
              mt-3
            "
          >
            PROGRAM TYPES
          </p>
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
          placeholder="Search partnerships..."
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
          gap-8
          mb-24
        "
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() =>
              setCategory(cat)
            }
            className={`
              text-[10px]
              tracking-[0.2em]
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

        {/* LEFT */}

        <div className="col-span-12 xl:col-span-8">

          {filtered.map((item) => (

            <Link
              key={item.id}
              href={`/partnerships/${item.slug}`}
              onMouseEnter={() =>
                setActive(item)
              }
              className="
                block
                border-t
                border-black/10
                py-12
                group
              "
            >

              <p
                className="
                  text-[10px]
                  tracking-[0.2em]
                  mb-5
                  opacity-50
                "
              >
                {item.id}
              </p>

              <h2
                className="
                  text-[4rem]
                  leading-[0.92]
                  tracking-[-0.05em]

                  group-hover:opacity-50
                  transition
                "
              >
                {item.title}
              </h2>

              <div
                className="
                  flex
                  gap-6
                  mt-5

                  text-[10px]
                  tracking-[0.15em]
                  opacity-50
                "
              >
                <span>
                  {item.status}
                </span>

                <span>
                  {item.category}
                </span>
              </div>

            </Link>

          ))}

        </div>

        {/* RIGHT */}

        <div className="col-span-12 xl:col-span-4">

          <div
            className="
              sticky
              top-24
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
                opacity-50
                mb-3
              "
            >
              {active.status}
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
              "
            >
              {active.description}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}