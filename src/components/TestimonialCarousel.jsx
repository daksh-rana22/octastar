import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from './Container';
import AnimatedSection from './AnimatedSection';
import { testimonials } from '../data/testimonials';

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  const total = testimonials.length;

  useEffect(() => {
    if (!isAutoPlaying) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, total]);

  const goTo = (index) => {
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prev = () => goTo((current - 1 + total) % total);
  const next = () => goTo((current + 1) % total);

  const testimonial = testimonials[current];

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-[#ECEEF2] border-y border-slate-300/80">
      {/* Soft top radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/70 via-transparent to-transparent pointer-events-none" />

      <Container className="relative z-10" size="narrow">
        <AnimatedSection>
          <div className="text-center">
            {/* Section Label */}
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-purple-700 mb-3 inline-block">
              Client Feedback &bull; Verified Reviews
            </span>

            {/* Quote icon */}
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shadow-xs">
                <Quote size={18} className="text-purple-700" />
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-base sm:text-lg md:text-xl text-slate-900 font-medium leading-relaxed mb-5 sm:mb-6 min-h-[60px] sm:min-h-[70px] transition-all duration-500 max-w-2xl mx-auto">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="mb-5 sm:mb-6">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#5B3FA6] to-[#7C83FF] flex items-center justify-center text-white font-bold text-sm mx-auto mb-1.5 shadow-sm">
                {testimonial.name.charAt(0)}
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                {testimonial.name}
              </div>
              <div className="text-xs sm:text-sm text-slate-600">
                {testimonial.position} &bull; <span className="font-semibold text-purple-700">{testimonial.company}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={prev}
                className="p-1.5 sm:p-2 rounded-lg border border-slate-300 bg-white hover:bg-purple-50 text-slate-700 hover:text-purple-800 hover:border-purple-300 shadow-xs transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="flex gap-1.5 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === current
                        ? 'bg-[#5B3FA6] w-5'
                        : 'bg-slate-300 hover:bg-purple-300 w-1.5'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-1.5 sm:p-2 rounded-lg border border-slate-300 bg-white hover:bg-purple-50 text-slate-700 hover:text-purple-800 hover:border-purple-300 shadow-xs transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
