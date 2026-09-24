"use client";

import { useEffect } from "react";

export function NameMorphReady() {
  useEffect(() => {
    const page = window as Window & { __nameMorphHydrated?: boolean };
    page.__nameMorphHydrated = true;
    window.dispatchEvent(new Event("name-morph-hydrated"));
  }, []);

  return null;
}
