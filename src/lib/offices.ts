/** Single source of truth for ProspectOutreach office addresses (footer, contact, about, legal, schema). */
export type Office = {
  id: "india" | "uk" | "us";
  label: string;
  city: string;
  country: string;
  flag: string;
  /** Address lines, already formatted for display. */
  lines: string[];
  schema: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode: string;
    addressCountry: string;
  };
};

export const offices: Office[] = [
  {
    id: "india",
    label: "Head Office – India",
    city: "Pune",
    country: "India",
    flag: "🇮🇳",
    lines: [
      "ProspectOutreach Private Limited",
      "Kharadi, Near World Trade Centre",
      "Pune, Maharashtra 411014",
      "India",
    ],
    schema: {
      streetAddress: "Kharadi, Near World Trade Centre",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411014",
      addressCountry: "IN",
    },
  },
  {
    id: "uk",
    label: "UK Business Office",
    city: "Edinburgh",
    country: "United Kingdom",
    flag: "🇬🇧",
    lines: ["3F1, Third Floor, 3 Hill Street", "Edinburgh EH2 3JP", "United Kingdom"],
    schema: {
      streetAddress: "3F1, Third Floor, 3 Hill Street",
      addressLocality: "Edinburgh",
      postalCode: "EH2 3JP",
      addressCountry: "GB",
    },
  },
  {
    id: "us",
    label: "US Business Office",
    city: "Milltown, New Jersey",
    country: "USA",
    flag: "🇺🇸",
    lines: ["21 N Main St #1022", "Milltown, NJ 08850", "United States"],
    schema: {
      streetAddress: "21 N Main St #1022",
      addressLocality: "Milltown",
      addressRegion: "NJ",
      postalCode: "08850",
      addressCountry: "US",
    },
  },
];

/** One-line address, e.g. for compact lists. */
export const officeOneLine = (o: Office) => o.lines.join(", ");
