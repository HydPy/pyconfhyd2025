import Hero from '@/components/Hero';
import { KeynoteSpeaker } from '@/components/KeynoteSpeaker';
import MeetOrganizers from '@/components/MeetOrganizers';
import SponsorsSection from '@/components/Sponsors';
import Tickets from '@/components/Tickets';
import CommunityPartners from '@/components/CommunityPartners';
import InfoAlert from '@/components/InfoAlert';
import { CONFERENCE } from '@/conference';

export default function Home() {
  return (
    <>
      <InfoAlert text={CONFERENCE.infoText} />
      <Hero />
      <Tickets />
      <KeynoteSpeaker />
      <SponsorsSection />
      <CommunityPartners />
      <MeetOrganizers />
    </>
  );
}
