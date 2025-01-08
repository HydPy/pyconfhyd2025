'use client';
import { useTheme } from '@/components/ThemeContext';
import { Heading } from '@/components/Typography';
import TicketDescriptionMdx from '@/ticketsDescription.mdx';
import MdxLayout from '@/components/MdxLayout';

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
      <div className="flex flex-row text-center my-2">
        <MdxLayout>
          <TicketDescriptionMdx />
        </MdxLayout>
      </div>
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
