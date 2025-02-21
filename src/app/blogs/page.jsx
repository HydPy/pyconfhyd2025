import React from 'react';
import { BLOGS } from '@/blogs';
import BlogPostItem from '@/components/BlogPostItem';
import Link from 'next/link';
import { Heading } from '@/components/Typography';

const BlogList = () => {
  return (
    <section className=" container w-3/4 mx-auto">
      <ul className="space-y-4">
        <div className="mx-auto text-center lg:mb-16 mb-8">
          {/* <h2 className="my-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-50">
            Blog
          </h2> */}
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
