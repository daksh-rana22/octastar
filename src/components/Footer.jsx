import { Link } from 'react-router-dom';
import { Mail, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import Container from './Container';
import { footerLinks } from '../data/navigation';

function LinkedInIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 0 0-1.66 1.63 1.63 1.63 0 0 0 1.66 1.63 1.63 1.63 0 0 0 1.63-1.63c0-.9-.73-1.63-1.63-1.63Z" />
    </svg>
  );
}

function TwitterIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const columns = [
    { title: 'Company', links: footerLinks.company },
    { title: 'Services', links: footerLinks.services },
    { title: 'Industries', links: footerLinks.industries },
    { title: 'Resources', links: footerLinks.resources },
  ];

  return (
    <footer className="bg-navy-900 border-t border-border">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
              <Logo className="mb-5" />
              <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-xs">
                Technology, talent, and transformation solutions for organizations building what comes next.
              </p>
              <div className="flex items-center gap-3">
                {[
                  { icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
                  { icon: TwitterIcon, label: 'Twitter', href: '#' },
                  { icon: Mail, label: 'Email', href: 'mailto:info@octastargroup.com' },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-navy-700 border border-border text-text-secondary hover:text-accent-secondary hover:border-accent-primary/40 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {columns.map((column) => (
              <div key={column.title}>
                <h4 className="text-sm font-semibold text-text-primary mb-4 tracking-wide">
                  {column.title}
                </h4>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="text-sm text-text-secondary hover:text-accent-secondary transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} OctaStar Group. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-text-muted hover:text-accent-secondary transition-colors duration-200"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </Container>
    </footer>
  );
}
