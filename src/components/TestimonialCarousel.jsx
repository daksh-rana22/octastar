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
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-navy-800/30" />

      <Container className="relative z-10" size="narrow">
        <AnimatedSection>
          <div className="text-center">
            {/* Quote icon */}
            <div className="flex justify-center mb-8">
              <div className="w-14 h-14 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center">
                <Quote size={24} className="text-accent-secondary" />
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl lg:text-2xl text-text-primary font-light leading-relaxed mb-8 min-h-[120px] transition-all duration-500">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="mb-10">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                {testimonial.name.charAt(0)}
              </div>
              <div className="text-base font-semibold text-text-primary">
                {testimonial.name}
              </div>
              <div className="text-sm text-text-secondary">
                {testimonial.position}
              </div>
              <div className="text-sm text-accent-secondary">
                {testimonial.company}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="p-2 rounded-lg border border-border text-text-secondary hover:text-accent-secondary hover:border-accent-primary/40 transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === current
                        ? 'bg-accent-primary w-6'
                        : 'bg-navy-500 hover:bg-accent-primary/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-lg border border-border text-text-secondary hover:text-accent-secondary hover:border-accent-primary/40 transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
