'use client';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeContext';
import { Heading, Paragraph, Span } from '@/components/Typography';
import { KEY_LINKS } from '@/conference';

export default function Tickets() {
  const { theme } = useTheme();

  return (
    <section
      id="tickets"
      className="scroll-mt-20 flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto"
    >
      <Heading
        tagLevel={2}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        Tickets
      </Heading>
      <Paragraph level={3}>
        You can book your tickets directly on the
        <Link
          className="text-gray-950 dark:text-gray-50 underline mx-1"
          href={KEY_LINKS.konfHubEventPage}
          target="_blank"
        >
          <Span>{KEY_LINKS.konfHubEventPageLabel}</Span>
        </Link>
        or through the embedded view here.
      </Paragraph>
      {theme === 'light' ? (
        <iframe
          src="https://konfhub.com/widget/pyconf-hyderabad-2025?desc=false&secondaryBg=fff8f3&ticketBg=fff8f3&borderCl=fff8f3&bg=f9fafb&fontColor=016e6b&ticketCl=016e6b&btnColor=fa8624&fontFamily=Nunito&borderRadius=10"
          id="konfhub-widget"
          title="Register for PyConf Hyderabad 2025"
          width="100%"
          height="500"
        ></iframe>
      ) : (
        <iframe
          src="https://konfhub.com/widget/pyconf-hyderabad-2025?desc=false&secondaryBg=016e6b&ticketBg=016e6b&borderCl=016e6b&bg=1a202c&fontColor=f9fafb&ticketCl=f9fafb&btnColor=c56a1c&fontFamily=Nunito&borderRadius=10"
          id="konfhub-widget"
          title="Register for PyConf Hyderabad 2025"
          width="100%"
          height="500"
        ></iframe>
      )}
    </section>
  );
}
