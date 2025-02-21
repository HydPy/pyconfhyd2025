import React from 'react';
import { BLOGS } from '@/blogs';
import BlogPostItem from '@/components/BlogPostItem';
import Link from 'next/link';

const BlogList = () => {
  return (
    <div className="container mx-auto p-4 ">
      <ul className="space-y-4">
        <section className='w-3/4 mx-auto'>
          <div className="mx-auto text-center lg:mb-16 mb-8">
            <h2 className="my-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-50">
              Blog
            </h2>
          </div>
          {BLOGS.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.slug}`}>
              <li key={blog.id}>
                <BlogPostItem blog={blog} />
              </li>
            </Link>
          ))}
        </section>
      </ul>
    </div>
  );
};

export default BlogList;
