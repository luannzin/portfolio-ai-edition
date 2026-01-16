"use client";

/**
 * Hook to detect if component has mounted on client.
 * Returns false on server and during first render, true after hydration.
 * Used to enable motion only after mount to avoid hydration mismatch.
 */

import { useState, useEffect } from "react";

export function useHasMounted(): boolean {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}
