import AnimatedSection from './AnimatedSection';

export default function SectionHeading({
  label,
  title,
  subtitle,
  description,
  align = 'center',
  darkText = false,
  light = false,
  className = '',
}) {
  const alignment = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  };

  const isDarkText = darkText || light;

  return (
    <AnimatedSection className={`max-w-4xl mb-12 md:mb-16 ${alignment[align]} ${className}`}>
      {label && (
        <span
          className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
            isDarkText ? 'text-purple-700 font-bold' : 'text-accent-secondary'
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4 ${
          isDarkText ? 'text-slate-900' : 'text-text-primary'
        }`}
      >
        {title}
      </h2>
      {(description || subtitle) && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            isDarkText ? 'text-slate-600' : 'text-text-secondary'
          }`}
        >
          {description || subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}

