import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

export default function ContactForm({ variant = 'dark' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const serviceOptions = [
    'Talent & Staffing',
    'Managed Services',
    'Digital Transformation',
    'Cloud Computing',
    'Data & Analytics',
    'AI & Machine Learning',
    'Cybersecurity',
    'DevOps',
    'Other Technology Solutions',
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide details about your project or inquiry';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    // Simulated API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus('success');
  };

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (status === 'success') {
    return (
      <AnimatedSection animation="scale">
        <div className="text-center py-12 px-8 bg-[#0B132B] border border-purple-500/30 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="w-18 h-18 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6 text-emerald-400">
            <CheckCircle size={36} />
          </div>
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase mb-2">
            Inquiry Received
          </span>
          <h3 className="text-2xl font-bold text-white mb-3">
            Thank You for Connecting!
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-6">
            Your inquiry has been routed to our dedicated practice lead. An expert will reach out within <span className="text-white font-semibold">24 hours</span> to discuss your requirements.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-slate-400 mb-6">
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-accent-secondary" /> Rapid Turnaround</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-accent-secondary" /> Enterprise Confidentiality</span>
          </div>
          <button
            onClick={() => {
              setStatus('idle');
              setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
            }}
            className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-all"
          >
            Submit Another Request
          </button>
        </div>
      </AnimatedSection>
    );
  }

  const isLight = variant === 'light';

  const inputClasses = (field) =>
    `w-full rounded-xl px-4 py-3.5 text-sm transition-all duration-200 focus:outline-none ${
      isLight
        ? `bg-slate-50 border ${errors[field] ? 'border-red-500' : 'border-slate-300'} text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#5B3FA6] focus:ring-2 focus:ring-[#5B3FA6]/20`
        : `bg-navy-700/60 border ${errors[field] ? 'border-red-400/80' : 'border-border/80'} text-text-primary placeholder-text-muted focus:bg-navy-700 focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20`
    }`;

  const labelClasses = `block text-xs font-bold uppercase tracking-wider mb-2 ${
    isLight ? 'text-slate-700' : 'text-text-secondary'
  }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name <span className="text-purple-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange('name')}
            placeholder="Jane Doe"
            className={inputClasses('name')}
          />
          {errors.name && <p className="text-xs text-red-400 mt-1 font-medium">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Work Email <span className="text-purple-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            placeholder="jane@company.com"
            className={inputClasses('email')}
          />
          {errors.email && <p className="text-xs text-red-400 mt-1 font-medium">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange('phone')}
            placeholder="+1 (555) 000-0000"
            className={inputClasses('phone')}
          />
        </div>

        <div>
          <label htmlFor="company" className={labelClasses}>
            Company / Organization
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={handleChange('company')}
            placeholder="Enterprise Inc."
            className={inputClasses('company')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClasses}>
          Area of Interest
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={handleChange('service')}
          className={`${inputClasses('service')} appearance-none`}
        >
          <option value="" className="text-slate-900 bg-white">Select a service category</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option} className="text-slate-900 bg-white">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Project Brief / Message <span className="text-purple-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange('message')}
          placeholder="Describe your project timeline, requirements, or talent needs..."
          className={`${inputClasses('message')} resize-none`}
        />
        {errors.message && <p className="text-xs text-red-400 mt-1 font-medium">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 p-3.5 bg-red-400/10 border border-red-400/30 rounded-xl text-sm text-red-400">
          <AlertCircle size={18} />
          Something went wrong submitting your form. Please try again.
        </div>
      )}

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          type="submit"
          disabled={status === 'loading'}
          className="w-full sm:w-auto bg-[#5B3FA6] hover:bg-[#4b2f96] text-white font-bold shadow-lg shadow-purple-900/30 px-8 py-3.5 rounded-xl border-none"
          size="lg"
          icon={status === 'loading' ? Loader2 : Send}
          iconPosition="right"
        >
          {status === 'loading' ? 'Submitting...' : 'Send Inquiry'}
        </Button>

        <p className="text-xs text-slate-500 dark:text-text-muted text-center sm:text-right">
          🔒 Strictly confidential &bull; NDA protected
        </p>
      </div>
    </form>
  );
}
