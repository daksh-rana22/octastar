import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * InteractiveCardAccordion
 *
 * A horizontal expanding/collapsing card accordion inspired by NLB Services'
 * "How We Support Organizations" section. On desktop, cards are displayed in
 * a single row; hovering a card expands it while the others smoothly collapse.
 * On mobile the layout becomes a vertical accordion activated by tap.
 *
 * Props:
 *   cards – Array of { title, description, icon (Lucide component), image (URL string), items (optional string[]) }
 *   className – optional wrapper className
 */
export default function InteractiveCardAccordion({ cards = [], className = '' }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!cards.length) return null;

  return (
    <div className={className}>
      {/* ── Desktop / Tablet: Horizontal Accordion ── */}
      <div className="hidden md:flex w-full rounded-[20px] overflow-hidden border border-white/15 shadow-2xl h-[520px] lg:h-[560px]">
        {cards.map((card, index) => {
          const Icon = card.icon;
          const isActive = activeIndex === index;

          return (
            <div
              key={card.title}
              className="relative overflow-hidden cursor-pointer group"
              style={{
                flex: isActive ? '2.8 1 0%' : '0.65 1 0%',
                transition: 'flex 700ms cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* ── Background Image ── */}
              <div className="absolute inset-0 z-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center"
                  style={{
                    transform: isActive ? 'scale(1.03)' : 'scale(1)',
                    transition: 'transform 800ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                />
                {/* Darkening Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: isActive
                      ? 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.25) 100%)'
                      : 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.45) 100%)',
                    transition: 'background 700ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                />
              </div>

              {/* ── Subtle Separator Line ── */}
              {index !== 0 && (
                <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-white/10 z-10" />
              )}

              {/* ── Card Content ── */}
              <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-6 lg:p-7">
                {/* Top: Icon Badge */}
                <div>
                  <div
                    className="w-11 h-11 rounded-xl border backdrop-blur-md flex items-center justify-center mb-4"
                    style={{
                      background: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
                      borderColor: isActive ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.2)',
                      transition: 'all 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    {Icon && <Icon size={20} className="text-white" />}
                  </div>

                  {/* Card Number (inactive only) */}
                  <span
                    className="block font-mono text-xs font-bold tracking-widest text-white/40 mb-1"
                    style={{
                      opacity: isActive ? 0 : 1,
                      transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Bottom: Title + Expandable Content */}
                <div>
                  {/* Title (always visible) */}
                  <h4
                    className="font-bold text-white leading-snug"
                    style={{
                      fontSize: isActive ? '1.35rem' : '0.95rem',
                      transition: 'font-size 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    {card.title}
                  </h4>

                  {/* Description (active only) */}
                  <div
                    style={{
                      maxHeight: isActive ? '200px' : '0px',
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateY(0px)' : 'translateY(12px)',
                      transition: 'max-height 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms cubic-bezier(0.22, 1, 0.36, 1) 100ms, transform 500ms cubic-bezier(0.22, 1, 0.36, 1) 100ms',
                      overflow: 'hidden',
                    }}
                  >
                    {card.description && (
                      <p className="text-sm text-white/80 leading-relaxed mt-2.5 mb-3">
                        {card.description}
                      </p>
                    )}

                    {/* Tech items / tags */}
                    {card.items && card.items.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {card.items.map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 text-[11px] font-semibold bg-white/15 text-white/90 rounded-lg border border-white/20 backdrop-blur-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Arrow Button */}
                  <div className="flex justify-end mt-2">
                    <div
                      className="w-9 h-9 rounded-full border flex items-center justify-center"
                      style={{
                        background: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)',
                        borderColor: isActive ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.15)',
                        transition: 'all 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    >
                      <ArrowRight
                        size={15}
                        className="text-white"
                        style={{
                          transform: isActive ? 'translateX(2px)' : 'translateX(0px)',
                          transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Mobile: Vertical Accordion ── */}
      <div className="md:hidden rounded-[18px] overflow-hidden border border-white/15 shadow-xl bg-navy-900">
        {cards.map((card, index) => {
          const Icon = card.icon;
          const isActive = activeIndex === index;

          return (
            <div
              key={card.title}
              className="relative overflow-hidden cursor-pointer select-none transition-all duration-500 ease-out"
              style={{
                maxHeight: isActive ? '420px' : '76px',
                minHeight: isActive ? '280px' : '76px',
                WebkitTapHighlightColor: 'transparent',
              }}
              onClick={() => setActiveIndex(isActive ? -1 : index)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center"
                  style={{
                    transform: isActive ? 'scale(1.04)' : 'scale(1)',
                    transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: isActive
                      ? 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.35) 100%)'
                      : 'rgba(0,0,0,0.72)',
                    transition: 'background 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                />
              </div>

              {/* Separator */}
              {index !== 0 && (
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/15 z-10" />
              )}

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-5">
                {/* Collapsed Header Row */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg border backdrop-blur-md flex items-center justify-center flex-shrink-0"
                    style={{
                      background: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
                      borderColor: isActive ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.2)',
                      transition: 'all 400ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    {Icon && <Icon size={18} className="text-white" />}
                  </div>
                  <h4
                    className="font-bold text-white leading-tight flex-1"
                    style={{
                      fontSize: isActive ? '1.15rem' : '0.9rem',
                      transition: 'font-size 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    {card.title}
                  </h4>
                  <div
                    className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      borderColor: 'rgba(255,255,255,0.15)',
                      transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    <ArrowRight size={14} className="text-white" />
                  </div>
                </div>

                {/* Expanded Content */}
                <div
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1) 150ms, transform 400ms cubic-bezier(0.22, 1, 0.36, 1) 150ms',
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  {card.description && (
                    <p className="text-sm text-white/80 leading-relaxed mb-3">
                      {card.description}
                    </p>
                  )}

                  {card.items && card.items.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {card.items.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 text-[11px] font-semibold bg-white/15 text-white/90 rounded-md border border-white/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
