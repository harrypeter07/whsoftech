import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { TeamMember } from '@/components/TeamMember';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About WH SoftTech | Our Story & Team',
  description:
    'WH SoftTech helps businesses grow with custom web development, AI-powered applications, and digital solutions—backed by a talented team and proven delivery.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob-slow" />
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-blob-delayed" />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-6">
            <span className="inline-flex px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              About whsofttech
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-8 text-balance leading-tight">
            Transform Your Business With
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2"> Innovative Software</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 2012, we've been helping businesses unlock their digital potential through innovative software solutions and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small team to a powerhouse of innovation
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  whsofttech was founded with a simple vision: to be the trusted technology partner for businesses seeking digital transformation. What started as a small team of passionate developers has grown into a powerhouse of 50+ industry experts.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Over the past 12 years, we've delivered 500+ successful projects across various industries, from fintech and healthcare to e-commerce and enterprise software. Our commitment to excellence, innovation, and client success has earned us recognition as a leader in the software development industry.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we continue to push boundaries with AI-powered solutions, cloud-native architectures, and agile methodologies that drive real business value.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">12+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Experts</div>
                </div>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/30 border border-primary/30 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-3xl opacity-20 shadow-lg" />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-2xl shadow-lg" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Constantly pushing boundaries with cutting-edge technologies and creative solutions',
                icon: '🚀',
              },
              {
                title: 'Excellence',
                description: 'Delivering high-quality software that exceeds expectations and stands the test of time',
                icon: '⭐',
              },
              {
                title: 'Collaboration',
                description: 'Working closely with clients as true partners in their digital transformation journey',
                icon: '🤝',
              },
              {
                title: 'Integrity',
                description: 'Building trust through transparency, honesty, and delivering on our commitments',
                icon: '💎',
              },
            ].map((value, index) => (
              <div key={index} className="group relative">
                <div className="panel-card hover:border-primary/40 transition-[border-color,box-shadow,transform] duration-300 hover:shadow-xl hover:-translate-y-0.5 p-8 rounded-2xl">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Our Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that speak to our commitment and success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: '500+',
                label: 'Projects Delivered',
                description: 'Across diverse industries and scale',
              },
              {
                number: '50+',
                label: 'Team Members',
                description: 'Experts in their respective fields',
              },
              {
                number: '99.9%',
                label: 'Client Satisfaction',
                description: 'Measured through continuous feedback',
              },
              {
                number: '12+',
                label: 'Years in Business',
                description: 'Proven track record of success',
              },
              {
                number: '30+',
                label: 'Awards & Recognition',
                description: 'Industry acknowledgment',
              },
              {
                number: '24/7',
                label: 'Support Available',
                description: 'For all our deployments',
              },
            ].map((achievement, index) => (
              <div key={index} className="group panel-card text-center p-8 rounded-2xl hover:border-primary/40 transition-[border-color,box-shadow,transform] duration-300 hover:shadow-xl hover:-translate-y-0.5">
                <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                  {achievement.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{achievement.label}</h3>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Meet Our Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced team of visionary leaders driving innovation and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              name="David Miller"
              role="Founder & CEO"
              bio="Serial entrepreneur with 15+ years in tech. Led the vision to transform how companies approach digital innovation."
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              social={{
                linkedin: '#',
                twitter: '#',
              }}
            />
            <TeamMember
              name="Lisa Anderson"
              role="CTO"
              bio="Seasoned technologist with expertise in cloud architecture and AI. Leads our innovation initiatives."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
              social={{
                linkedin: '#',
                github: '#',
              }}
            />
            <TeamMember
              name="James Chen"
              role="VP of Engineering"
              bio="Expert in scalable systems and DevOps. Ensures our projects are built on solid technical foundations."
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
              social={{
                linkedin: '#',
                github: '#',
              }}
            />
            <TeamMember
              name="Sofia Patel"
              role="VP of Design"
              bio="Award-winning designer focused on creating exceptional user experiences that drive engagement."
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
              social={{
                linkedin: '#',
                twitter: '#',
              }}
            />
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Why Partner With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what makes whsofttech the ideal technology partner
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Deep industry expertise across multiple sectors',
              'Proven methodology and agile practices',
              'State-of-the-art technology stack',
              'Dedicated project teams with clear ownership',
              'Continuous learning and skill development',
              'Transparent communication and reporting',
              'Quality-first development approach',
              'Long-term partnership mindset',
            ].map((reason, index) => (
              <div key={index} className="flex gap-4 items-start panel-card p-4 rounded-xl hover:border-primary/40 transition-[border-color] duration-300 group">
                <CheckCircle2 className="w-6 h-6 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-t border-white/10 py-24 premium-gradient">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent)]" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Join the companies we&apos;ve transformed</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can become your trusted technology partner.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center px-8 py-4 rounded-xl font-semibold border-2 border-white/40 bg-white text-primary hover:bg-white/95 transition-[transform,box-shadow] duration-200 hover:shadow-xl"
          >
            Start a Conversation
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
