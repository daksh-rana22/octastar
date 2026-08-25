export default function Logo({ className = '', size = 'default', showText = true }) {
  const sizes = {
    small: 'h-8 w-auto max-w-[140px]',
    default: 'h-10 md:h-12 w-auto max-w-[180px]',
    large: 'h-14 md:h-16 w-auto max-w-[240px]',
  };

  const imgClass = sizes[size] || sizes.default;

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      <img
        src="/pyulg7-hXQvD5T0pxex1xNn.avif"
        alt="OctaStar Group"
        className={`${imgClass} object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(88,101,242,0.3)]`}
        loading="eager"
      />
      {showText && (
        <div className="flex flex-col">
          <span className="text-lg md:text-xl font-bold tracking-tight text-text-primary leading-tight">
            OctaStar
          </span>
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-accent-light leading-tight">
            Group
          </span>
        </div>
      )}
    </div>
  );
}
