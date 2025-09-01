"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sophie Langford",
    role: "CEO, Luxe Beauty",
    content: "Our brand story was brought to life with their video package. It felt cinematic, on-brand, and incredibly engaging. The team nailed it!",
    rating: 5,
    avatar: "SL",
    color: "purple",
  },
  {
    id: 2,
    name: "Jack Thompson", 
    role: "Founder, Tech Innovate",
    content: "We handed over our social media to Brand Boosters Media, and within weeks, our engagement doubled. They understood our voice better than we did!",
    rating: 5,
    avatar: "JT",
    color: "pink",
  },
  {
    id: 3,
    name: "Emily Nguyen",
    role: "Marketing Director, Urban Fits",
    content: "Incredible visuals. Smart strategy. Seamless execution. Their video content helped boost our online presence and brought a fresh edge to our brand.",
    rating: 5,
    avatar: "EN",
    color: "blue",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h3 className="text-indigo-400 text-lg font-semibold uppercase tracking-wide mb-4">
            Testimonials
          </h3>
          <h2 className="text-5xl lg:text-6xl font-bold text-white font-display mb-8">
            What Our Clients
            <span className="text-gradient block">Are Saying</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our amazing clients say about 
            working with Brand Boosters Media.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[400px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              
              return (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover-lift">
                    <div className="absolute top-6 left-6">
                      <Quote className="w-8 h-8 text-purple-400 opacity-50" />
                    </div>
                    
                    <div className="flex flex-col items-center text-center pt-8">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 border-2 border-white/20 flex items-center justify-center text-white text-xl font-bold mb-6">
                        {testimonial.avatar}
                      </div>
                      
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-8 max-w-3xl">
                        &ldquo;{testimonial.content}&rdquo;
                      </blockquote>
                      
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-blue-400 mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-white/70">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover-lift z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover-lift z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}