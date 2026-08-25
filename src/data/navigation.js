export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Talent & Staffing', path: '/services/staffing', description: 'Find the right people for every role' },
      { label: 'Managed Services', path: '/services/managed-services', description: 'Reliable technology operations' },
      { label: 'Digital Transformation', path: '/services/digital-transformation', description: 'Modernize your business' },
      { label: 'Cloud Computing', path: '/services/cloud', description: 'Scalable cloud solutions' },
      { label: 'Data & Analytics', path: '/services/data-analytics', description: 'Insights that drive decisions' },
      { label: 'AI & Machine Learning', path: '/services/ai-ml', description: 'Intelligent automation' },
      { label: 'Cybersecurity', path: '/services/cybersecurity', description: 'Protect what matters' },
      { label: 'DevOps', path: '/services/devops', description: 'Accelerate delivery' },
    ],
  },
  {
    label: 'Solutions',
    path: '/solutions',
    children: [
      { label: 'AI & Machine Learning', path: '/solutions#ai-ml' },
      { label: 'RPA & Automation', path: '/solutions/rpa' },
      { label: 'Cloud Transformation', path: '/solutions#cloud' },
      { label: 'Digital Transformation', path: '/solutions#digital' },
      { label: 'Cybersecurity', path: '/solutions#cybersecurity' },
      { label: 'Enterprise Solutions', path: '/solutions#enterprise' },
    ],
  },
  {
    label: 'Industries',
    path: '/industries',
    children: [
      { label: 'Banking & Financial Services', path: '/industries/banking' },
      { label: 'Healthcare & Life Sciences', path: '/industries/healthcare' },
      { label: 'Insurance', path: '/industries/insurance' },
      { label: 'Manufacturing', path: '/industries/manufacturing' },
      { label: 'Retail', path: '/industries/retail' },
      { label: 'Media & Communications', path: '/industries/media' },
      { label: 'Energy', path: '/industries/energy' },
    ],
  },
  { label: 'Careers', path: '/careers' },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact', path: '/contact' },
];

export const footerLinks = {
  company: [
    { label: 'About', path: '/about' },
    { label: 'Why Partner With Us', path: '/about#why-partner' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ],
  services: [
    { label: 'Staffing', path: '/services/staffing' },
    { label: 'Managed Services', path: '/services/managed-services' },
    { label: 'Cloud', path: '/services/cloud' },
    { label: 'AI & ML', path: '/services/ai-ml' },
    { label: 'Cybersecurity', path: '/services/cybersecurity' },
    { label: 'DevOps', path: '/services/devops' },
  ],
  industries: [
    { label: 'Banking', path: '/industries/banking' },
    { label: 'Healthcare', path: '/industries/healthcare' },
    { label: 'Insurance', path: '/industries/insurance' },
    { label: 'Manufacturing', path: '/industries/manufacturing' },
    { label: 'Retail', path: '/industries/retail' },
    { label: 'Energy', path: '/industries/energy' },
  ],
  resources: [
    { label: 'Blog', path: '/resources' },
    { label: 'Insights', path: '/resources' },
    { label: 'FAQs', path: '/resources#faq' },
    { label: 'Privacy Policy', path: '/resources#privacy' },
    { label: 'Terms', path: '/resources#terms' },
  ],
};
