import { archiveRecords } from "@/data/archive";

/* -------------------------------- */
/* GET SINGLE RECORD */
/* -------------------------------- */

export function getRecord(slug: string) {
  return archiveRecords.find(
    (record) => record.slug === slug
  );
}

/* -------------------------------- */
/* RELATED RECORDS */
/* -------------------------------- */

export function getRelatedRecords(
  category: string,
  currentSlug?: string
) {
  return archiveRecords.filter(
    (record) =>
      record.category === category &&
      record.slug !== currentSlug
  );
}

/* -------------------------------- */
/* PREVIOUS RECORD */
/* -------------------------------- */

export function getPreviousRecord(
  slug: string
) {
  const index = archiveRecords.findIndex(
    (record) => record.slug === slug
  );

  if (index <= 0) return null;

  return archiveRecords[index - 1];
}

/* -------------------------------- */
/* NEXT RECORD */
/* -------------------------------- */

export function getNextRecord(
  slug: string
) {
  const index = archiveRecords.findIndex(
    (record) => record.slug === slug
  );

  if (index === -1) return null;

  if (index >= archiveRecords.length - 1)
    return null;

  return archiveRecords[index + 1];
}

/* -------------------------------- */
/* SEARCH */
/* -------------------------------- */

export function searchRecords(
  query: string
) {
  const q = query.toLowerCase();

  return archiveRecords.filter(
    (record) =>
      record.title.toLowerCase().includes(q) ||
      record.category
        .toLowerCase()
        .includes(q) ||
      record.tags.some((tag) =>
        tag.toLowerCase().includes(q)
      )
  );
}

/* -------------------------------- */
/* FILTER CATEGORY */
/* -------------------------------- */

export function getRecordsByCategory(
  category: string
) {
  if (category === "All")
    return archiveRecords;

  return archiveRecords.filter(
    (record) =>
      record.category === category
  );
}

/* -------------------------------- */
/* UNIQUE CATEGORIES */
/* -------------------------------- */

export function getCategories() {
  return [
    "All",
    ...new Set(
      archiveRecords.map(
        (record) => record.category
      )
    ),
  ];
}

/* -------------------------------- */
/* ARCHIVE STATS */
/* -------------------------------- */

export function getArchiveStats() {
  const categories = new Set(
    archiveRecords.map(
      (record) => record.category
    )
  );

  return {
    totalRecords:
      archiveRecords.length,

    totalCategories:
      categories.size,

    latestYear: "2026",
  };
}