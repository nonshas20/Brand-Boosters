"use client";

import { useState, useEffect } from "react";
import {
  Search,
  PenTool,
  Camera,
  Rocket,
  TrendingUp,
  BarChart3,
} from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Identifying",
    description: "We dive deep to understand your business, target audience, and competition. This helps us pinpoint opportunities and set clear goals for your brand journey.",
    icon: Search,
    color: "purple",
    delay: 0,
  },
  {
    id: 2,
    title: "Planning",
    description: "A strong strategy is everything. We develop a tailored plan—defining messaging, timelines, and visual direction to ensure your brand communicates with impact.",
    icon: PenTool,
    color: "pink",
    delay: 200,
  },
  {
    id: 3,
    title: "Content Creation",
    description: "Our creative team designs scroll-stopping video content, brand visuals, and social assets—everything you need to tell your story with power and clarity.",
    icon: Camera,
    color: "blue",
    delay: 400,
  },
  {
    id: 4,
    title: "Execution",
    description: "We bring the strategy to life through seamless execution—filming, editing, designing, and developing all assets aligned with your unique brand identity.",
    icon: Rocket,
    color: "cyan",
    delay: 600,
  },
  {
    id: 5,
    title: "Promotion",
    description: "It's time to get noticed. We launch targeted campaigns across all major social media platforms, optimize reach, and spark meaningful engagement.",
    icon: TrendingUp,
    color: "orange",
    delay: 800,
  },
  {
    id: 6,
    title: "Monitoring & Optimization",
    description: "Post-launch, we track performance, analyze insights, and refine strategies to make sure your content delivers real results—consistently.",
    icon: BarChart3,
    color: "emerald",
    delay: 1000,
  },
];

const getColorClasses = (color: string) => {
  const colorMap = {
    purple: {
      gradient: "from-purple-500 to-purple-600",
      glow: "shadow-neon",
      text: "text-purple-400",
      bg: "bg-purple-500/20",
    },
    pink: {
      gradient: "from-pink-500 to-pink-600", 
      glow: "shadow-neon-pink",
      text: "text-pink-400",
      bg: "bg-pink-500/20",
    },
    blue: {
      gradient: "from-blue-500 to-blue-600",
      glow: "shadow-neon-blue",
      text: "text-blue-400",
      bg: "bg-blue-500/20",
    },
    cyan: {
      gradient: "from-cyan-500 to-cyan-600",
      glow: "shadow-neon-cyan",
      text: "text-cyan-400",
      bg: "bg-cyan-500/20",
    },
    orange: {
      gradient: "from-orange-500 to-orange-600",
      glow: "shadow-neon",
      text: "text-orange-400",
      bg: "bg-orange-500/20",
    },
    emerald: {
      gradient: "from-emerald-500 to-emerald-600",
      glow: "shadow-neon-green",
      text: "text-emerald-400",
      bg: "bg-emerald-500/20",
    },
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.purple;
};

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("process-timeline");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section id="process-timeline" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-500/8 rounded-full blur-3xl animate-bounce" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h3 className="text-blue-400 text-lg font-semibold uppercase tracking-wide mb-4">
            Our Process
          </h3>
          <h2 className="text-5xl lg:text-6xl font-bold text-white font-display mb-8">
            Organized
            <span className="text-gradient block">Projects</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From concept to execution, our streamlined process ensures your brand gets 
            the attention it deserves at every step.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 via-blue-500 via-cyan-500 via-orange-500 to-emerald-500 rounded-full transform -translate-y-1/2" />
            
            {/* Progress indicator */}
            <div 
              className="absolute top-1/2 left-0 h-1 bg-white rounded-full transform -translate-y-1/2 transition-all duration-1000 ease-out"
              style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
            />

            {/* Process steps */}
            <div className="relative grid grid-cols-6 gap-4">
              {processSteps.map((step, index) => {
                const colors = getColorClasses(step.color);
                const isActive = index === activeStep;
                const Icon = step.icon;
                
                return (
                  <div
                    key={step.id}
                    className={`flex flex-col items-center transition-all duration-500 ${
                      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${step.delay}ms` }}
                  >
                    {/* Icon container */}
                    <div 
                      className={`relative mb-8 p-6 rounded-3xl backdrop-blur-md border transition-all duration-500 cursor-pointer hover-lift ${
                        isActive 
                          ? `bg-gradient-to-r ${colors.gradient} ${colors.glow} border-white/30 scale-110` 
                          : 'bg-white/5 border-white/20 hover:border-white/30'
                      }`}
                      onClick={() => setActiveStep(index)}
                    >
                      <Icon 
                        className={`w-8 h-8 transition-all duration-300 ${
                          isActive ? 'text-white' : colors.text
                        }`} 
                      />
                      
                      {/* Step number */}
                      <div className={`absolute -bottom-4 -right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        isActive 
                          ? 'bg-white text-gray-900' 
                          : `bg-gradient-to-r ${colors.gradient} text-white`
                      }`}>
                        {step.id}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`text-center transition-all duration-500 ${
                      isActive ? 'opacity-100 scale-105' : 'opacity-70'
                    }`}>
                      <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                        isActive ? 'text-white' : colors.text
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-all duration-300 ${
                        isActive ? 'text-white/90' : 'text-white/60'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const colors = getColorClasses(step.color);
              const Icon = step.icon;
              
              return (
                <div
                  key={step.id}
                  className={`flex items-start gap-6 transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${step.delay}ms` }}
                >
                  {/* Icon and line */}
                  <div className="flex flex-col items-center">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${colors.gradient} ${colors.glow} hover-lift`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-1 h-16 bg-gradient-to-b from-white/30 to-transparent mt-4 rounded-full" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${colors.gradient} flex items-center justify-center text-white text-sm font-bold`}>
                        {step.id}
                      </div>
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive navigation dots */}
        <div className="flex justify-center mt-16 gap-3">
          {processSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeStep 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}