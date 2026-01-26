import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import {
  Code2,
  Brain,
  Globe,
  Smartphone,
  Palette,
  Zap,
  Users,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Services - whsofttech Software Solutions',
  description: 'Explore our comprehensive software development, AI solutions, web & mobile apps, and digital services.',
};

const services = [
  {
    id: 'software',
    icon: <Code2 size={32} />,
    title: 'Software Development',
    shortDesc: 'Custom enterprise solutions built for scale and performance',
    fullDesc: 'We design and develop custom software solutions tailored to your specific business needs. From architecture to deployment, our experienced team ensures your software is scalable, secure, and future-proof.',
    features: [
      'Custom enterprise software',
      'Legacy system modernization',
      'Microservices architecture',
      'API development',
      'Cloud-native solutions',
      'Database optimization',
    ],
    technologies: ['TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    id: 'ai',
    icon: <Brain size={32} />,
    title: 'AI & Machine Learning',
    shortDesc: 'Intelligent solutions that drive innovation and efficiency',
    fullDesc: 'Leverage artificial intelligence and machine learning to automate processes, gain insights, and create intelligent products. Our AI experts build solutions that provide real competitive advantage.',
    features: [
      'Machine learning models',
      'Natural language processing',
      'Computer vision solutions',
      'Predictive analytics',
      'Chatbots & conversational AI',
      'Data analysis & insights',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Scikit-learn'],
  },
  {
    id: 'web',
    icon: <Globe size={32} />,
    title: 'Web Applications',
    shortDesc: 'Modern, responsive web apps that engage users',
    fullDesc: 'Build cutting-edge web applications with the latest technologies. We create fast, scalable, and user-friendly web solutions that drive business growth and customer engagement.',
    features: [
      'Single Page Applications (SPA)',
      'Progressive Web Apps (PWA)',
      'Full-stack web development',
      'E-commerce platforms',
      'Content management systems',
      'Real-time collaboration tools',
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
  },
  {
    id: 'mobile',
    icon: <Smartphone size={32} />,
    title: 'Mobile Applications',
    shortDesc: 'Native and cross-platform apps for iOS and Android',
    fullDesc: 'Create engaging mobile experiences with native performance. Whether iOS, Android, or cross-platform, we build mobile apps that users love and keep coming back to.',
    features: [
      'Native iOS development',
      'Native Android development',
      'Cross-platform solutions',
      'App store optimization',
      'Mobile backend services',
      'Push notifications & analytics',
    ],
    technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase'],
  },
  {
    id: 'design',
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    shortDesc: 'Beautiful interfaces that users love to interact with',
    fullDesc: 'Design is more than aesthetics - it\'s about creating experiences that convert. Our design team creates intuitive, accessible, and visually stunning interfaces.',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Visual design & branding',
      'Interaction design',
      'Usability testing',
      'Design systems & guidelines',
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Webflow'],
  },
  {
    id: 'automation',
    icon: <Zap size={32} />,
    title: 'Business Automation',
    shortDesc: 'Streamline operations and reduce manual work',
    fullDesc: 'Automate repetitive processes and reduce operational costs. We implement intelligent automation solutions that improve efficiency and free your team to focus on strategic work.',
    features: [
      'Workflow automation',
      'Process mining & optimization',
      'RPA implementations',
      'Integration solutions',
      'Scheduled task automation',
      'Cost reduction strategies',
    ],
    technologies: ['Zapier', 'n8n', 'Python', 'Node.js', 'AWS Lambda'],
  },
  {
    id: 'consulting',
    icon: <TrendingUp size={32} />,
    title: 'Digital Transformation',
    shortDesc: 'Strategy and guidance for your digital journey',
    fullDesc: 'Navigate your digital transformation with confidence. We provide strategic consulting, technology recommendations, and change management support to ensure successful outcomes.',
    features: [
      'Digital strategy consulting',
      'Technology roadmapping',
      'Architecture design',
      'Team training & upskilling',
      'Change management',
      'Performance optimization',
    ],
    technologies: ['Cloud platforms', 'DevOps', 'Agile methodologies'],
  },
  {
    id: 'support',
    icon: <Users size={32} />,
    title: 'Support & Maintenance',
    shortDesc: '24/7 support to keep your systems running smoothly',
    fullDesc: 'Reliable support when you need it most. We provide comprehensive maintenance, monitoring, and support services to ensure your systems are always available and performing optimally.',
    features: [
      '24/7 monitoring & alerts',
      'Bug fixes & patches',
      'Performance optimization',
      'Security updates',
      'Disaster recovery',
      'Priority support tiers',
    ],
    technologies: ['Monitoring tools', 'CI/CD', 'Cloud infrastructure'],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            Comprehensive Software
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"> Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From custom development to AI innovation, we have the expertise to transform your ideas into powerful solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-primary-foreground">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-4">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Get Started
                  </Link>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understand your requirements and business goals in detail',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Create a comprehensive roadmap and technical architecture',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Build your solution with agile methodology and quality focus',
              },
              {
                step: '04',
                title: 'Deployment',
                description: 'Launch and support your solution with ongoing optimization',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                {/* Step number */}
                <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>

                {/* Connector line */}
                {item.step !== '04' && (
                  <div className="hidden md:block absolute top-8 -right-6 w-12 h-1 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Contact us to discuss how we can help you with your next project.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
