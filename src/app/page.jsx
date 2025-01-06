import Hero from '@/components/Hero';
import MeetOrganizers from '@/components/MeetOrganizers';
import SponsorsSection from '@/components/Sponsors';
import Tickets from '@/components/Tickets';

export default function Home() {
  return (
    <>
      <Hero />
      <Tickets />
      <SponsorsSection />
      <MeetOrganizers />
    </>
  );
}
