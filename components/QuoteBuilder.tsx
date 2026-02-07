"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Code2, 
  Brain, 
  Globe, 
  Smartphone, 
  Palette, 
  Zap, 
  Users, 
  TrendingUp,
  Check,
  ArrowRight,
  ArrowLeft,
  Calculator,
  MessageCircle
} from "lucide-react";

interface ProjectDetails {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  services: string[];
  timeline: string;
  budget: string;
  description: string;
  features: string[];
}

const servicePackages = {
  "Software Development": {
    icon: <Code2 size={24} />,
    basePrice: 50000,
    features: ["Custom Architecture", "Database Design", "API Development", "Testing"],
    timeline: "8-12 weeks"
  },
  "AI Solutions": {
    icon: <Brain size={24} />,
    basePrice: 75000,
    features: ["ML Models", "Data Processing", "AI Integration", "Model Training"],
    timeline: "12-16 weeks"
  },
  "Web Applications": {
    icon: <Globe size={24} />,
    basePrice: 35000,
    features: ["Frontend Development", "Backend Development", "Database Setup", "Deployment"],
    timeline: "6-10 weeks"
  },
  "Mobile Apps": {
    icon: <Smartphone size={24} />,
    basePrice: 60000,
    features: ["iOS Development", "Android Development", "UI/UX Design", "App Store Submission"],
    timeline: "10-14 weeks"
  },
  "UI/UX Design": {
    icon: <Palette size={24} />,
    basePrice: 25000,
    features: ["User Research", "Wireframing", "Prototyping", "Design System"],
    timeline: "4-6 weeks"
  },
  "Business Automation": {
    icon: <Zap size={24} />,
    basePrice: 40000,
    features: ["Process Analysis", "Automation Setup", "Integration", "Training"],
    timeline: "6-8 weeks"
  }
};

const additionalFeatures = [
  { name: "Advanced Analytics", price: 15000 },
  { name: "Payment Gateway Integration", price: 10000 },
  { name: "Multi-language Support", price: 12000 },
  { name: "Real-time Chat Support", price: 8000 },
  { name: "Cloud Hosting Setup", price: 5000 },
  { name: "SEO Optimization", price: 7000 },
  { name: "Content Management System", price: 15000 },
  { name: "Third-party API Integration", price: 8000 }
];

export function QuoteBuilder() {
  const [step, setStep] = useState(1);
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    services: [],
    timeline: "",
    budget: "",
    description: "",
    features: []
  });

  const totalSteps = 4;

  const calculateTotal = () => {
    let total = 0;
    
    // Add base prices for selected services
    projectDetails.services.forEach(service => {
      const packageInfo = servicePackages[service as keyof typeof servicePackages];
      if (packageInfo) {
        total += packageInfo.basePrice;
      }
    });

    // Add additional features
    projectDetails.features.forEach(feature => {
      const featureInfo = additionalFeatures.find(f => f.name === feature);
      if (featureInfo) {
        total += featureInfo.price;
      }
    });

    return total;
  };

  const generateWhatsAppMessage = () => {
    const total = calculateTotal();
    const selectedServices = projectDetails.services.map(service => {
      const pkg = servicePackages[service as keyof typeof servicePackages];
      return `${service} - ₹${pkg.basePrice.toLocaleString('en-IN')}`;
    }).join('\n• ');

    const selectedFeatures = projectDetails.features.map(feature => {
      const featureInfo = additionalFeatures.find(f => f.name === feature);
      return `${feature} - ₹${featureInfo?.price.toLocaleString('en-IN')}`;
    }).join('\n• ');

    const message = `
🚀 *New Project Inquiry - whsofttech*

*Client Information:*
• Name: ${projectDetails.name}
• Email: ${projectDetails.email}
• Phone: ${projectDetails.phone}
• Company: ${projectDetails.company}

*Project Details:*
• Project Type: ${projectDetails.projectType}
• Timeline: ${projectDetails.timeline}
• Budget Range: ${projectDetails.budget}
• Description: ${projectDetails.description}

*Selected Services:*
• ${selectedServices}

*Additional Features:*
${selectedFeatures ? `• ${selectedFeatures}` : 'None'}

*Total Estimated Cost: ₹${total.toLocaleString('en-IN')}*

---
*Generated via whsofttech Quote Builder*
*Let's discuss your project! 🎯*
    `.trim();

    return `https://wa.me/919096539177?text=${encodeURIComponent(message)}`;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="px-4 sm:px-6">
              <CardTitle className="text-xl sm:text-2xl text-center">Tell us about yourself</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-4 sm:px-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name *</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  value={projectDetails.name}
                  onChange={(e) => setProjectDetails({...projectDetails, name: e.target.value})}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  value={projectDetails.email}
                  onChange={(e) => setProjectDetails({...projectDetails, email: e.target.value})}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  value={projectDetails.phone}
                  onChange={(e) => setProjectDetails({...projectDetails, phone: e.target.value})}
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  value={projectDetails.company}
                  onChange={(e) => setProjectDetails({...projectDetails, company: e.target.value})}
                  placeholder="Acme Corporation"
                />
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card className="w-full max-w-4xl mx-auto">
            <CardHeader className="px-4 sm:px-6">
              <CardTitle className="text-xl sm:text-2xl text-center">What services do you need?</CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {Object.entries(servicePackages).map(([service, info]) => (
                  <div
                    key={service}
                    className={`p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      projectDetails.services.includes(service)
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => {
                      const newServices = projectDetails.services.includes(service)
                        ? projectDetails.services.filter(s => s !== service)
                        : [...projectDetails.services, service];
                      setProjectDetails({...projectDetails, services: newServices});
                    }}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg text-primary">
                        <div className="w-4 h-4 sm:w-6 sm:h-6">
                          {info.icon}
                        </div>
                      </div>
                      <h3 className="font-semibold text-sm sm:text-base leading-tight">{service}</h3>
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground mb-2">
                      {info.timeline}
                    </div>
                    <div className="text-sm sm:text-lg font-bold text-primary">
                      ₹{info.basePrice.toLocaleString('en-IN')}
                    </div>
                    <div className="mt-2 space-y-1">
                      {info.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                          <Check size={10} className="text-primary flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card className="w-full max-w-4xl mx-auto">
            <CardHeader className="px-4 sm:px-6">
              <CardTitle className="text-xl sm:text-2xl text-center">Additional Features</CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {additionalFeatures.map((feature) => (
                  <div
                    key={feature.name}
                    className={`p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      projectDetails.features.includes(feature.name)
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => {
                      const newFeatures = projectDetails.features.includes(feature.name)
                        ? projectDetails.features.filter(f => f !== feature.name)
                        : [...projectDetails.features, feature.name];
                      setProjectDetails({...projectDetails, features: newFeatures});
                    }}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-semibold text-sm sm:text-base leading-tight flex-1">{feature.name}</h3>
                      <div className="text-sm sm:text-lg font-bold text-primary flex-shrink-0">
                        ₹{feature.price.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="px-4 sm:px-6">
              <CardTitle className="text-xl sm:text-2xl text-center">Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-4 sm:px-6">
              <div>
                <label className="block text-sm font-medium mb-2">Project Type *</label>
                <select
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  value={projectDetails.projectType}
                  onChange={(e) => setProjectDetails({...projectDetails, projectType: e.target.value})}
                >
                  <option value="">Select project type</option>
                  <option value="New Project">New Project</option>
                  <option value="Existing Project Enhancement">Existing Project Enhancement</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Maintenance & Support">Maintenance & Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Expected Timeline *</label>
                <select
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  value={projectDetails.timeline}
                  onChange={(e) => setProjectDetails({...projectDetails, timeline: e.target.value})}
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="3-4 weeks">3-4 weeks</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Budget Range *</label>
                <select
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  value={projectDetails.budget}
                  onChange={(e) => setProjectDetails({...projectDetails, budget: e.target.value})}
                >
                  <option value="">Select budget range</option>
                  <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                  <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                  <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
                  <option value="₹2,50,000 - ₹5,00,000">₹2,50,000 - ₹5,00,000</option>
                  <option value="₹5,00,000+">₹5,00,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Description *</label>
                <textarea
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent h-32 text-sm resize-none"
                  value={projectDetails.description}
                  onChange={(e) => setProjectDetails({...projectDetails, description: e.target.value})}
                  placeholder="Tell us more about your project requirements..."
                />
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return projectDetails.name && projectDetails.email && projectDetails.phone;
      case 2:
        return projectDetails.services.length > 0;
      case 3:
        return true; // Additional features are optional
      case 4:
        return projectDetails.projectType && projectDetails.timeline && 
               projectDetails.budget && projectDetails.description;
      default:
        return false;
    }
  };

  const renderSummary = () => {
    const total = calculateTotal();
    
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="px-4 sm:px-6">
          <CardTitle className="text-xl sm:text-2xl text-center flex items-center justify-center gap-2">
            <Calculator size={20} className="sm:size-28" />
            Project Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
          {/* Client Info */}
          <div>
            <h3 className="font-semibold mb-2 text-sm sm:text-base">Client Information</h3>
            <div className="space-y-1 text-xs sm:text-sm">
              <p><span className="font-medium">Name:</span> {projectDetails.name}</p>
              <p><span className="font-medium">Email:</span> {projectDetails.email}</p>
              <p><span className="font-medium">Phone:</span> {projectDetails.phone}</p>
              {projectDetails.company && <p><span className="font-medium">Company:</span> {projectDetails.company}</p>}
            </div>
          </div>

          <Separator />

          {/* Selected Services */}
          <div>
            <h3 className="font-semibold mb-2 text-sm sm:text-base">Selected Services</h3>
            <div className="space-y-2">
              {projectDetails.services.map(service => {
                const pkg = servicePackages[service as keyof typeof servicePackages];
                return (
                  <div key={service} className="flex justify-between items-center gap-2">
                    <span className="text-xs sm:text-sm flex-1">{service}</span>
                    <span className="font-medium text-xs sm:text-sm">₹{pkg.basePrice.toLocaleString('en-IN')}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional Features */}
          {projectDetails.features.length > 0 && (
            <>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Additional Features</h3>
                <div className="space-y-2">
                  {projectDetails.features.map(feature => {
                    const featureInfo = additionalFeatures.find(f => f.name === feature);
                    return (
                      <div key={feature} className="flex justify-between items-center gap-2">
                        <span className="text-xs sm:text-sm flex-1">{feature}</span>
                        <span className="font-medium text-xs sm:text-sm">₹{featureInfo?.price.toLocaleString('en-IN')}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          <Separator />

          {/* Project Details */}
          <div>
            <h3 className="font-semibold mb-2 text-sm sm:text-base">Project Details</h3>
            <div className="space-y-1 text-xs sm:text-sm">
              <p><span className="font-medium">Type:</span> {projectDetails.projectType}</p>
              <p><span className="font-medium">Timeline:</span> {projectDetails.timeline}</p>
              <p><span className="font-medium">Budget:</span> {projectDetails.budget}</p>
            </div>
          </div>

          <Separator />

          {/* Total */}
          <div className="bg-primary/5 p-3 sm:p-4 rounded-lg">
            <div className="flex justify-between items-center text-lg sm:text-xl font-bold">
              <span className="text-sm sm:text-base">Total Estimated Cost:</span>
              <span className="text-primary text-sm sm:text-base">₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              variant="outline"
              onClick={() => setStep(4)}
              className="flex items-center justify-center w-full sm:w-auto order-2 sm:order-1"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Edit
            </Button>
            <Button
              asChild
              className="flex items-center justify-center w-full sm:w-auto order-1 sm:order-2 bg-green-600 hover:bg-green-700"
            >
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <MessageCircle size={16} className="mr-2" />
                Send via WhatsApp
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="mb-4 sm:mb-6">
        <div className="flex items-center justify-center mb-3">
          <div className="flex items-center space-x-1 sm:space-x-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-5 h-5 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-colors ${
                    i < step
                      ? 'bg-primary text-primary-foreground'
                      : i === step
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {i < step ? <Check size={10} className="sm:size-14" /> : i + 1}
                </div>
                {i < totalSteps - 1 && (
                  <div
                    className={`w-3 sm:w-6 h-1 mx-1 sm:mx-2 transition-colors ${
                      i < step ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center px-2">
          <h2 className="text-sm sm:text-base font-medium">
            {step === 1 && "Client Information"}
            {step === 2 && "Select Services"}
            {step === 3 && "Additional Features"}
            {step === 4 && "Project Details"}
            {step === 5 && "Review & Send"}
          </h2>
          <p className="text-xs text-muted-foreground">
            Step {step} of {step === 5 ? totalSteps + 1 : totalSteps}
          </p>
        </div>
      </div>

      {/* Step Content */}
      {step <= 4 ? renderStep() : renderSummary()}

      {/* Navigation Buttons */}
      {step <= 4 && (
        <div className="flex flex-col sm:flex-row justify-center mt-4 sm:mt-6 gap-2 sm:gap-3 px-2">
          {step > 1 && (
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              className="flex items-center w-full sm:w-auto order-2 sm:order-1"
            >
              <ArrowLeft size={14} className="mr-2" />
              Previous
            </Button>
          )}
          <Button
            onClick={() => setStep(step + 1)}
            disabled={!canProceed()}
            className="flex items-center w-full sm:w-auto order-1 sm:order-2"
          >
            {step === 4 ? 'Review Quote' : 'Next'}
            <ArrowRight size={14} className="ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
}
