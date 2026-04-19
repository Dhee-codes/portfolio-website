"use client";

import { useReducedMotion } from "framer-motion";

export function useAnimationConfig() {
  const prefersReducedMotion = useReducedMotion();
  return { shouldAnimate: !prefersReducedMotion };
}