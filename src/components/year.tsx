"use client";

import { useSyncExternalStore } from "react";

/**
 * Current year for the footer. `new Date()` can't run during prerender under
 * Cache Components, so the server snapshot is a stable fallback and the client
 * snapshot is the real year.
 */
const BUILD_YEAR = 2026;

const subscribe = () => () => {};
const getClientYear = () => new Date().getFullYear();
const getServerYear = () => BUILD_YEAR;

export function Year() {
  const year = useSyncExternalStore(subscribe, getClientYear, getServerYear);
  return <span>{year}</span>;
}
