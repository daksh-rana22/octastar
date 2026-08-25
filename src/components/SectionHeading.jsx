import AnimatedSection from './AnimatedSection';

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignment = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  };

  return (
    <AnimatedSection className={`max-w-4xl mb-12 md:mb-16 ${alignment[align]} ${className}`}>
      {label && (
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent-secondary mb-3">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4 ${
          light ? 'text-text-primary' : 'text-text-primary'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
