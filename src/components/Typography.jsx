export const Heading = ({
  tagLevel = 1,
  level = 1,
  children,
  className = '',
}) => {
  const Tag = `h${tagLevel}`;
  const baseStyle = 'font-heading font-semibold';
  const responsiveStyle =
    {
      1: 'text-4xl md:text-5xl lg:text-6xl',
      2: 'text-3xl md:text-4xl lg:text-5xl',
      3: 'text-2xl md:text-3xl lg:text-4xl',
      4: 'text-xl md:text-2xl lg:text-3xl',
      5: 'text-lg md:text-xl lg:text-2xl',
      6: 'text-base md:text-lg lg:text-xl',
    }[level] || '';

  return (
    <Tag className={`${baseStyle} ${responsiveStyle} ${className}`}>
      {children}
    </Tag>
  );
};

export const Paragraph = ({ level = 3, children, className = '' }) => {
  const baseStyle = 'text-base';
  const responsiveStyle =
    {
      1: 'text-xl md:text-2xl lg:text-3xl',
      2: 'text-lg md:text-xl lg:text-2xl',
      3: 'text-base md:text-lg lg:text-xl',
      4: 'text-sm md:text-base lg:text-lg',
      5: 'text-xs md:text-sm lg:text-base',
    }[level] || '';
  return (
    <p className={`${baseStyle} ${responsiveStyle} ${className}`}>{children}</p>
  );
};

export const Span = ({ level = 3, children, className = '' }) => {
  const baseStyle = 'text-base';
  const responsiveStyle =
    {
      1: 'text-xl md:text-2xl lg:text-3xl',
      2: 'text-lg md:text-xl lg:text-2xl',
      3: 'text-base md:text-lg lg:text-xl',
      4: 'text-sm md:text-base lg:text-lg',
      5: 'text-xs md:text-sm lg:text-base',
    }[level] || '';
  return (
    <span className={`${baseStyle} ${responsiveStyle} ${className}`}>
      {children}
    </span>
  );
};
