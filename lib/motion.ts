/**
 * Shared Motion Design System
 * Unified easings, durations, and viewport configuration.
 */

export const MOTION_EASINGS = {
  entrance: [0.16, 1, 0.3, 1] as const, // Expo out
  wipe: [0.76, 0, 0.24, 1] as const,     // Cinematic wipe
  easeOut: [0.25, 1, 0.5, 1] as const,
};

export const MOTION_DURATIONS = {
  snappy: 0.6,
  standard: 0.9,
  deliberate: 1.2,
};

