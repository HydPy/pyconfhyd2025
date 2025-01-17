import Image from 'next/image';
import { ALL_SPEAKERS } from '@/speakers';
import Icon from '@/components/Icon';

const Page = () => {
  return (
    <>
    <div className='py-10' >
      <h1 className='text-5xl font-[600] text-center text-[#016E6B]'>Speakers</h1>
      <div className='mt-5 flex-wrap flex items-center justify-center gap-10 py-10' >

        {ALL_SPEAKERS.map((speaker, index) => (
          <div key={index} className='mt-10 border rounded-3xl w-[85%] xl:w-[30%] md:w-[40%] h-[570px] text-center flex flex-col items-center relative shadow-xl'>
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
            <h1 className='mt-[-20px] text-[4vh] font-semibold text-[#016E6B]' >{speaker.name}</h1>
            <p className='font-semibold px-10' >{speaker.title}</p>
          </div>
          <p className=' px-10 py-5' >{speaker.about}</p>
          <div className="w-full  flex gap-5 items-center justify-center text-[#016E6B]" >
            {speaker.socials.map((social, index) => (
            <a key={index} href={social.url}>
              <Icon name={social.name} />
            </a>

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
