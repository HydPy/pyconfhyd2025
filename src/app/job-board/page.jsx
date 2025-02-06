import Link from 'next/link';

import MdxLayout from '@/components/MdxLayout';
import { Heading, Span } from '@/components/Typography';
import { KEY_LINKS } from '@/conference';
import JobBoardMdx from '@/job-board.md';

export default function JobBoard() {
  return (
    <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
      <Heading
        tagLevel={1}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        Job Board
      </Heading>
      <MdxLayout>
        <JobBoardMdx />
      </MdxLayout>
      <div className="flex flex-col sm:flex-row justify-center items-center my-2">
        <Link
          href={KEY_LINKS.jobBoardFormUrl}
          target="_blank"
          className="mt-2 sm:mr-4 px-5 py-3 bg-secondary-600 hover:bg-secondary-700 border rounded-lg"
          rel="noopener noreferrer"
        >
          <div className="inline-flex items-center font-medium text-gray-50">
            <Span>{KEY_LINKS.jobBoardFormLabel}</Span>
          </div>
        </Link>
      </div>
    </section>
  );
}
