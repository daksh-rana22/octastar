import { Link } from 'react-router-dom';

const variants = {
  primary: 'gradient-primary text-white hover:shadow-lg hover:shadow-accent-primary/25 hover:scale-[1.02]',
  secondary: 'bg-navy-700 text-text-primary border border-border hover:border-accent-primary hover:bg-navy-600',
  white: 'bg-white hover:bg-slate-100 text-slate-900 font-bold shadow-xl border-none hover:scale-105',
  glass: 'bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md hover:scale-105',
  dark: 'bg-navy-900 hover:bg-navy-800 text-white font-bold shadow-md hover:scale-[1.02]',
  outline: 'bg-transparent text-accent-secondary border border-accent-primary/40 hover:bg-accent-primary/10 hover:border-accent-primary',
  ghost: 'bg-transparent text-accent-secondary hover:text-accent-light hover:bg-navy-700/50',
  text: 'bg-transparent text-accent-secondary hover:text-accent-light',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:ring-offset-2 focus:ring-offset-navy-900 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={18} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
