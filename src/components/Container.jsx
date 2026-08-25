export default function Container({ children, className = '', size = 'default' }) {
  const sizes = {
    narrow: 'max-w-4xl lg:max-w-5xl',
    default: 'max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px]',
    wide: 'max-w-7xl xl:max-w-[1600px] 2xl:max-w-[1760px]',
    full: 'max-w-full',
  };

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 ${sizes[size] || sizes.default} ${className}`}>
      {children}
    </div>
  );
}
