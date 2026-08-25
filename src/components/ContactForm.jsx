import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

export default function ContactForm() {
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
    'Other',
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    // Simulated API call — replace with actual backend integration
    await new Promise((resolve) => setTimeout(resolve, 1500));
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
        <div className="text-center py-12 px-6 bg-navy-800 border border-border rounded-xl">
          <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={32} className="text-green-400" />
          </div>
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Thank You
          </h3>
          <p className="text-text-secondary max-w-md mx-auto">
            Your inquiry has been submitted successfully. Our team will review your message and get back to you within 24 hours.
          </p>
          <button
            onClick={() => {
              setStatus('idle');
              setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
            }}
            className="mt-6 text-sm text-accent-secondary hover:text-accent-light transition-colors"
          >
            Send another inquiry
          </button>
        </div>
      </AnimatedSection>
    );
  }

  const inputClasses = (field) =>
    `w-full bg-navy-700/50 border ${
      errors[field] ? 'border-red-400/50' : 'border-border'
    } rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/30 transition-all duration-200`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1.5">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange('name')}
            placeholder="Your full name"
            className={inputClasses('name')}
          />
          {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5">
            Work Email *
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            placeholder="you@company.com"
            className={inputClasses('email')}
          />
          {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange('phone')}
            placeholder="Your phone number"
            className={inputClasses('phone')}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-1.5">
            Company
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={handleChange('company')}
            placeholder="Your company"
            className={inputClasses('company')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-1.5">
          Service Interest
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={handleChange('service')}
          className={`${inputClasses('service')} appearance-none`}
        >
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1.5">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={handleChange('message')}
          placeholder="Tell us about your needs..."
          className={`${inputClasses('message')} resize-none`}
        />
        {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 p-3 bg-red-400/10 border border-red-400/30 rounded-lg text-sm text-red-400">
          <AlertCircle size={16} />
          Something went wrong. Please try again.
        </div>
      )}

      <Button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto"
        size="lg"
        icon={status === 'loading' ? Loader2 : Send}
        iconPosition="right"
      >
        {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
      </Button>
    </form>
  );
}
