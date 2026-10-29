/**
 * Identity facts used by every legal page. Fill these in ONCE, here.
 * Keep these in sync with the registered company details.
 */
export const LEGAL = {
  /** Legal entity that operates the app, e.g. "Acme Labs LLC". */
  entity: "SimpleBudgets Tech Inc",
  /** Registered address of that entity. */
  address: "314-120 Parliament St, Toronto, ON M5A 0N6, Canada",
  /** Support inbox. Also receives account-deletion requests made on the web. */
  supportEmail: "team@simplebudgets.io",
  /** Minimum age to use the app, in years. */
  minAge: "16",
  /** Law and courts that govern the Terms, e.g. "the laws of the State of Delaware, USA". */
  governingLaw: "the laws of the Province of Ontario and the federal laws of Canada applicable there, and the courts of Ontario",
  /** Shown as "Last updated" on the privacy policy and terms. */
  updated: "October 29, 2026",
  /** Days between a deletion request and the permanent purge (backend ACCOUNT_DELETION_GRACE_DAYS). */
  graceDays: 7,
  /** Receipt photos are removed automatically after this many days (backend RECEIPT_RETENTION_DAYS). */
  receiptDays: 90,
} as const;
