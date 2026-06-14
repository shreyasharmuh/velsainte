import { partnerships } from "@/data/partnerships";

/* -------------------------------- */
/* SINGLE PARTNERSHIP */
/* -------------------------------- */

export function getPartnership(
  slug: string
) {
  return partnerships.find(
    (item) => item.slug === slug
  );
}

/* -------------------------------- */
/* RELATED PARTNERSHIPS */
/* -------------------------------- */

export function getRelatedPartnerships(
  category: string,
  currentSlug?: string
) {
  return partnerships.filter(
    (item) =>
      item.category === category &&
      item.slug !== currentSlug
  );
}

/* -------------------------------- */
/* PREVIOUS */
/* -------------------------------- */

export function getPreviousPartnership(
  slug: string
) {
  const index = partnerships.findIndex(
    (item) => item.slug === slug
  );

  if (index <= 0) return null;

  return partnerships[index - 1];
}

/* -------------------------------- */
/* NEXT */
/* -------------------------------- */

export function getNextPartnership(
  slug: string
) {
  const index = partnerships.findIndex(
    (item) => item.slug === slug
  );

  if (index === -1) return null;

  if (
    index >=
    partnerships.length - 1
  )
    return null;

  return partnerships[index + 1];
}

/* -------------------------------- */
/* SEARCH */
/* -------------------------------- */

export function searchPartnerships(
  query: string
) {
  const q = query.toLowerCase();

  return partnerships.filter(
    (item) =>
      item.title
        .toLowerCase()
        .includes(q) ||
      item.category
        .toLowerCase()
        .includes(q) ||
      item.status
        .toLowerCase()
        .includes(q) ||
      item.tags.some((tag) =>
        tag
          .toLowerCase()
          .includes(q)
      )
  );
}

/* -------------------------------- */
/* CATEGORY FILTER */
/* -------------------------------- */

export function getPartnershipsByCategory(
  category: string
) {
  if (category === "All")
    return partnerships;

  return partnerships.filter(
    (item) =>
      item.category === category
  );
}

/* -------------------------------- */
/* STATUS FILTER */
/* -------------------------------- */

export function getPartnershipsByStatus(
  status: string
) {
  if (status === "All")
    return partnerships;

  return partnerships.filter(
    (item) =>
      item.status === status
  );
}

/* -------------------------------- */
/* UNIQUE CATEGORIES */
/* -------------------------------- */

export function getPartnershipCategories() {
  return [
    "All",
    ...new Set(
      partnerships.map(
        (item) => item.category
      )
    ),
  ];
}

/* -------------------------------- */
/* UNIQUE STATUSES */
/* -------------------------------- */

export function getPartnershipStatuses() {
  return [
    "All",
    ...new Set(
      partnerships.map(
        (item) => item.status
      )
    ),
  ];
}

/* -------------------------------- */
/* DIE PROGRAMS */
/* -------------------------------- */

export function getDiePrograms() {
  return partnerships.filter(
    (item) =>
      item.category === "DIE"
  );
}

/* -------------------------------- */
/* ACTIVE ALLIANCES */
/* -------------------------------- */

export function getActiveAlliances() {
  return partnerships.filter(
    (item) =>
      item.status ===
      "Active Alliance"
  );
}

/* -------------------------------- */
/* FUTURE OPPORTUNITIES */
/* -------------------------------- */

export function getFutureOpportunities() {
  return partnerships.filter(
    (item) =>
      item.status ===
      "Future Opportunity"
  );
}

/* -------------------------------- */
/* CONCEPT PROGRAMS */
/* -------------------------------- */

export function getConceptPrograms() {
  return partnerships.filter(
    (item) =>
      item.status ===
      "Concept Program"
  );
}

/* -------------------------------- */
/* PARTNERSHIP STATS */
/* -------------------------------- */

export function getPartnershipStats() {
  const categories = new Set(
    partnerships.map(
      (item) => item.category
    )
  );

  const statuses = new Set(
    partnerships.map(
      (item) => item.status
    )
  );

  return {
    totalRecords:
      partnerships.length,

    totalCategories:
      categories.size,

    totalPrograms:
      statuses.size,

    latestYear: "2026",
  };
}