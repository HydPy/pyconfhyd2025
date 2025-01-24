import Hero from '@/components/Hero';
import { KeynoteSpeaker } from '@/components/KeynoteSpeaker';
import MeetOrganizers from '@/components/MeetOrganizers';
import SponsorsSection from '@/components/Sponsors';
import Tickets from '@/components/Tickets';
import CommunityPartners from '@/components/CommunityPartners';

export default function Home() {
  return (
    <>
      <Hero />
      <Tickets />
      <KeynoteSpeaker />
      <SponsorsSection />
      <CommunityPartners />
      <MeetOrganizers />
    </>
  );
}
