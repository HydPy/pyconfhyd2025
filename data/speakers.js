export const getActiveSpeakers = () => {
  return SPEAKERS.filter((speaker) => speaker.activeSpeakerPage);
}

export const SPEAKERS = [];