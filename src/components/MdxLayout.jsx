export default function MdxLayout({ children }) {
  return (
    <div className="prose !max-w-none dark:prose-invert text-base md:text-lg lg:text-xl prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg">
      {children}
    </div>
  );
}
