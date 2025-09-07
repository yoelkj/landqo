export interface HeroProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface BenefitsProps {
  items: string[];
}

export interface FeaturesProps {
  features: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  cta: string;
  popular?: boolean;
}
export interface PricingProps {
  plans: PricingPlan[];
}

export interface ProcessProps {
  steps: string[];
}

export interface FAQItem { q: string; a: string; }
export interface FAQProps { items: FAQItem[]; }

export interface TrustProps { logos: string[]; }

export interface Testimonial { name: string; role: string; quote: string; }
export interface SocialProofProps { testimonials: Testimonial[]; }

export interface IntegrationsProps { items: string[]; }

export interface UseCase { title: string; desc: string; }
export interface UseCasesProps { cases: UseCase[]; }

export interface TimelineItem { label: string; date: string; }
export interface TimelineProps { milestones: TimelineItem[]; }

export interface ResourceItem { title: string; href: string; tag: string; }
export interface ResourcesProps { resources: ResourceItem[]; }

export interface GalleryProps { images: string[]; }

export interface ContactProps { action: string; method?: 'get' | 'post'; }

export interface CTAFinalProps { title: string; ctaLabel: string; ctaHref: string; }
