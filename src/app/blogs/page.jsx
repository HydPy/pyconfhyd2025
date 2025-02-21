import React from 'react';
import { BLOGS } from '@/blogs';
import BlogPostItem from '@/components/BlogPostItem';
import Link from 'next/link';
import { Heading } from '@/components/Typography';

const BlogList = () => {
  return (
    <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
      <ul className="space-y-4">
        <div className="mx-auto text-center lg:mb-16 mb-8">
          <Heading
            tagLevel={1}
            level={1}
            className="text-center md:my-6 my-0 text-secondary-600 dark:text-secondary-400"
          >
            Blog
          </Heading>
        </div>
        {BLOGS.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.slug}`}>
            <li>
              <BlogPostItem blog={blog} />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default BlogList;
