import { ALL_SPEAKERS } from '@/speakers';

import Speaker from '@/components/Speaker';
import { Heading } from '@/components/Typography';
import Construction from '@/components/Construction';

export default function Page() {
  return (
    <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
      <Heading
        tagLevel={1}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        Speakers
      </Heading>
      <Construction />
      <div className="mt-8 grid cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center justify-center">
        {ALL_SPEAKERS.map((speaker, index) => (
          <Speaker key={index} speaker={speaker} />
        ))}
      </div>
    </section>
  );
}
