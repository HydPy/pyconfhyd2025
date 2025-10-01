import { SPEAKERS } from '@/speakers';

export const getSpeaker = (slug) => {
  return SPEAKERS.find((speaker) => speaker.slug === slug);
};

export const SCHEDULE = {};
