// src/hooks/useSound.ts
"use client";

import { useCallback } from "react";

export function useSound(src: string) {
  const play = useCallback(() => {
    const audio = new Audio(src);
    audio.volume = 0.3;
    audio.play().catch(() => {}); // éviter les erreurs silencieuses
  }, [src]);

  return play;
}
