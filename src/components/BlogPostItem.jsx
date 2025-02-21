import React from 'react';
import Icon from '@/components/Icon';

const BlogPostItem = ({ blog }) => {
  return (
    <article className="p-6 my-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
          <Icon name="Annoucement" size={16} className="mr-2" />
          {blog.category || 'Annoucement'}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-100">
          {new Date(blog.publishedAt)
            .toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })
            .replace(',', '')}
        </span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-secondary-600 dark:text-secondary-400">
        {blog.title}
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {blog.description}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="font-medium dark:text-white">
            Author: {blog.author}
          </span>
        </div>
        <p className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
          Read more
          <Icon name="ArrowCircleRight" size={16} className="ml-2" />
        </p>
      </div>
    </article>
  );
};

export default BlogPostItem;
