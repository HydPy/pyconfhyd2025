const createMDX = require('@next/mdx');

const nextConfig = {
  output: 'export',
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  extension: /\.mdx?$/, // Include .mdx files
});

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig);
