import Image from 'next/image';
import { ALL_SPEAKERS } from '@/speakers';
import Icon from '@/components/Icon';
import { Heading } from '@/components/Typography';
import Link from 'next/link';

const Page = () => {
  return (
    <>
    <div className='py-5 flex items-center flex-col' >
      <Heading 
        tagLevel={3}
        level={2}
        className="text-center md:text-start my-4 text-secondary-600 dark:text-secondary-400">
          Speakers
      </Heading>
      <div className='flex-wrap flex items-center justify-center gap-10 py-10' >

        {ALL_SPEAKERS.map((speaker, index) => (
          <div key={index} className='mt-10 border rounded-3xl w-[85%] xl:w-[30%]  md:w-[40%] h-fit text-center flex flex-col items-center relative shadow-xl'>
          <div className=" w-64 h-64 relative">
            <div className="relative shadow-md top-[-10%] h-full w-full rounded-xl">
              <Image
              className="object-cover rounded-xl"
              src={speaker.imgUrl}
              alt={speaker.imgAlt}
              fill/>
            </div>
          </div>
          <div >
            <Heading
                tagLevel={3}
                level={5}
                className=" mt-[-20px] text-center text-secondary-600 dark:text-secondary-400">
                {speaker.name}
            </Heading>
            <p className='font-semibold px-16 text-md text-zinc-800' >{speaker.title}</p>
          </div>
          <p className=' px-10 py-2 text-sm text-zinc-700' >{speaker.about}</p>
          <div className="w-full py-4  flex gap-5 items-center justify-center text-[#016E6B]" >
            {speaker.socials.map((social, index) => (
            <Link
            key={index}
            className="text-secondary-600 hover:text-secondary-950 dark:text-secondary-400 dark:hover:text-gray-50 mr-2"
            href={social.url}
            target="_blank"
            aria-label={social.ariaLabel}
            rel="noopener noreferrer"
            >
              <Icon name={social.name} />
          </Link>
            ))}
          </div>
        </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Page;
