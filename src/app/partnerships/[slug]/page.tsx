import { notFound } from "next/navigation";

import {
  getPartnership,
  getRelatedPartnerships,
  getPreviousPartnership,
  getNextPartnership,
} from "@/lib/partnerships-utils";

export default function PartnershipPage({
  params,
}: {
  params: { slug: string };
}) {

  const partnership =
    getPartnership(params.slug);

  if (!partnership) {
    notFound();
  }

  const related =
    getRelatedPartnerships(
      partnership.category,
      partnership.slug
    );

  const previous =
    getPreviousPartnership(
      partnership.slug
    );

  const next =
    getNextPartnership(
      partnership.slug
    );

  return (
    <main className="py-24">

      <p className="mb-6">
        {partnership.id}
      </p>

      <h1
        className="
          text-[11vw]
          leading-[0.82]
          tracking-[-0.09em]
          mb-24
        "
      >
        {partnership.title}
      </h1>

      <div className="grid grid-cols-12 gap-20">

        <div className="col-span-8">

          <p
            className="
              text-3xl
              leading-[1.4]
              max-w-4xl
            "
          >
            {partnership.description}
          </p>

        </div>

        <div className="col-span-4">

          <div className="space-y-8">

            <div>
              <p className="text-[10px] opacity-50">
                STATUS
              </p>

              <p>
                {partnership.status}
              </p>
            </div>

            <div>
              <p className="text-[10px] opacity-50">
                CATEGORY
              </p>

              <p>
                {partnership.category}
              </p>
            </div>

            <div>
              <p className="text-[10px] opacity-50">
                YEAR
              </p>

              <p>
                {partnership.year}
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}