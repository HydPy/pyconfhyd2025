import Volunteer from '@/components/Volunteer';
import { Heading } from '@/components/Typography';
import { VOLUNTEERS } from '@/volunteers';

export default function Page() {
  return (
    <div className="py-12 w-11/12 lg:w-5/6 mx-auto">
      {/* OurTeam Section */}
      <section className="mb-16">
        <Heading
          tagLevel={3}
          level={3}
          className="text-center mb-12 text-secondary-600 dark:text-secondary-400"
        >
          Our Team
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VOLUNTEERS.map((volunteer, index) => (
            <Volunteer key={index} volunteer={volunteer} />
          ))}
        </div>
      </section>
    </div>
  );
}