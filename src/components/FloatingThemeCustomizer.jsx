import { useState, useRef, useEffect } from 'react';
import { Palette, X, Check, Sparkles, RotateCcw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function FloatingThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const { colorTheme, activeTheme, colorThemes, selectColorTheme } = useTheme();
  const customizerRef = useRef(null);

  // Close customizer on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (customizerRef.current && !customizerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <aside
      ref={customizerRef}
      aria-label="Theme Customizer"
      className="fixed bottom-20 right-6 z-40"
    >
      {/* Floating Trigger Button - Positioned directly above Scroll Up button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          aria-label="Customize Color Theme"
          title={`Color Theme: ${activeTheme.name}. Click to change theme.`}
          className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-navy-800/95 hover:bg-navy-700/95 border border-border/90 hover:border-accent-primary/60 shadow-2xl shadow-navy-950/80 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 flex items-center justify-center select-none"
        >
          {/* Animated Palette Icon */}
          <Palette
            size={20}
            className="text-text-secondary group-hover:text-text-primary group-hover:rotate-12 transition-transform duration-300"
            style={{ color: activeTheme.primary }}
          />

          {/* Active Color Glow Pip */}
          <span
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-navy-900 shadow-md animate-pulse"
            style={{ backgroundColor: activeTheme.primary }}
          />
        </button>
      )}

      {/* Floating Theme Panel */}
      {isOpen && (
        <div className="w-76 sm:w-80 bg-navy-800/98 backdrop-blur-2xl border border-border/90 rounded-3xl shadow-2xl shadow-navy-950/90 p-5 animate-scale-in origin-bottom-right">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-border/60">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-md"
                style={{ backgroundColor: activeTheme.primary }}
              >
                <Palette size={16} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-primary">
                  Theme Customizer
                </h4>
                <p className="text-[11px] text-text-muted">
                  Select your preferred color theme
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-lg text-text-muted hover:text-text-primary hover:bg-navy-700/60 flex items-center justify-center transition-colors"
              aria-label="Close customizer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Color Themes List */}
          <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
            {colorThemes.map((theme) => {
              const isSelected = colorTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => selectColorTheme(theme.id)}
                  type="button"
                  className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-2xl border transition-all duration-200 text-left ${
                    isSelected
                      ? 'bg-navy-700/90 border-accent-primary shadow-lg shadow-accent-primary/10'
                      : 'bg-navy-900/50 hover:bg-navy-700/50 border-border/60 hover:border-border'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Swatch Pill */}
                    <div className="flex items-center -space-x-1.5 flex-shrink-0">
                      {theme.swatch.map((c, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 rounded-full border border-navy-900 shadow-sm"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-text-primary">
                          {theme.name}
                        </span>
                        <span
                          className="text-[10px] font-mono font-semibold px-1.5 py-0.2 rounded"
                          style={{
                            backgroundColor: `${theme.primary}20`,
                            color: theme.light,
                            border: `1px solid ${theme.primary}40`,
                          }}
                        >
                          {theme.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Selected Tick */}
                  {isSelected && (
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white shadow-sm"
                      style={{ backgroundColor: theme.primary }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer Actions */}
          <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs">
            <button
              onClick={() => selectColorTheme('violet')}
              className="flex items-center gap-1.5 text-text-muted hover:text-text-primary transition-colors text-[11px] font-medium"
            >
              <RotateCcw size={12} /> Reset to Default
            </button>
            <span className="text-[11px] text-text-muted flex items-center gap-1">
              <Sparkles size={11} style={{ color: activeTheme.primary }} />
              Live preview
            </span>
          </div>
        </div>
      )}
    </aside>
  );
}
