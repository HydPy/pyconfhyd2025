import MdxLayout from '@/components/MdxLayout';
import { Heading } from '@/components/Typography';
import Link from 'next/link';
import Icon from '@/components/Icon';
import Image from 'next/image';
import { SPONSORS } from '@/sponsors';

// Create flattened array of all sponsors with their categories
const sponsorsList = Object.entries(SPONSORS).reduce(
  (acc, [category, sponsors]) => {
    const sponsorsWithCategory = sponsors.map((sponsor) => ({
      ...sponsor,
      category,
      id:
        sponsor.slug?.split('-')[0]?.toLowerCase() ||
        sponsor.name.toLowerCase().replace(/[^a-z0-9]/g, ''),
    }));
    return [...acc, ...sponsorsWithCategory];
  },
  []
);

export function generateStaticParams() {
  return sponsorsList.map((sponsor) => ({ slug: sponsor.slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  const sponsor = sponsorsList.find((s) => s.slug === slug);

  if (!sponsor) {
    return <div>Sponsor not found</div>;
  }

  return (
    <section className="flex flex-col items-center justify-center py-6 w-10/12 lg:w-9/12 mx-auto">
      <Heading
        tagLevel={1}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        Announcing {sponsor.name} as our {sponsor.category} Sponsor
      </Heading>
      <div className="flex w-full mx-auto justify-center my-4">
        <MdxLayout>
          We are excited to announce {sponsor.name} as our {sponsor.category}{' '}
          sponsor!
        </MdxLayout>
      </div>
      <div className="flex flex-col w-full my-4 justify-center">
        <figure className="h-40 lg:w-50% lg:h-60 p-6 bg-gray-50 dark:bg-gray-100 rounded-lg shadow-xl">
          <div className="relative h-full w-full">
            <Image
              className="object-contain"
              src={sponsor.lightLogoUrl}
              alt={sponsor.logoAlt}
              fill
            />
          </div>
          <figcaption className="sr-only"></figcaption>
        </figure>
      </div>
      {/* #TODO: use better approaach to render MDX here instead html */}
      {sponsor?.description && <MdxLayout>

      <div dangerouslySetInnerHTML={{ __html: sponsor.description }}></div> </MdxLayout>}
      <div className="flex mt-8 mb-4 gap-4">
        {sponsor.socials?.map((social, index) => (
          <Link
            key={social.name}
            title={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
            className="text-secondary-600 hover:text-secondary-950 dark:text-secondary-400 dark:hover:text-gray-50"
          >
            <Icon name={social.name} />
          </Link>
        ))}
      </div>
      <div className="flex w-full">
        <MdxLayout>
          {/* Dynamic import of MDX content based on sponsor ID would go here */}
        </MdxLayout>
      </div>
    </section>
  );
}
