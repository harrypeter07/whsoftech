import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { TeamMember } from '@/components/TeamMember';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About whsofttech - Our Story & Team',
  description: 'Learn about whsofttech, our mission, values, and the talented team behind our software solutions.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            Transform Your Business With
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"> Innovative Software</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Since 2012, we've been helping businesses unlock their digital potential through innovative software solutions and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                whsofttech was founded with a simple vision: to be the trusted technology partner for businesses seeking digital transformation. What started as a small team of passionate developers has grown into a powerhouse of 50+ industry experts.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Over the past 12 years, we've delivered 500+ successful projects across various industries, from fintech and healthcare to e-commerce and enterprise software. Our commitment to excellence, innovation, and client success has earned us recognition as a leader in the software development industry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we continue to push boundaries with AI-powered solutions, cloud-native architectures, and agile methodologies that drive real business value.
              </p>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 border border-primary/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Innovation',
                description: 'Constantly pushing boundaries with cutting-edge technologies and creative solutions',
              },
              {
                title: 'Excellence',
                description: 'Delivering high-quality software that exceeds expectations and stands the test of time',
              },
              {
                title: 'Collaboration',
                description: 'Working closely with clients as true partners in their digital transformation journey',
              },
              {
                title: 'Integrity',
                description: 'Building trust through transparency, honesty, and delivering on our commitments',
              },
            ].map((value, index) => (
              <div key={index} className="p-6 rounded-xl border border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={index} className="text-center">
                <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </p>
                <h3 className="text-lg font-semibold text-foreground mb-2">{achievement.label}</h3>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Leadership</h2>
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
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Partner With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              <div key={index} className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">Join the Companies We've Transformed</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Let's discuss how we can become your trusted technology partner.
          </p>
          <a
            href="/contact"
            className="inline-flex px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
