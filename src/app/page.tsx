"use client";

import { useState, useEffect } from "react";
import {
  Play,
  Video,
  Users,
  Target,
  Lightbulb,
  Rocket,
  Star,
  ArrowRight,
  ChevronRight,
  Instagram,
  Facebook,
  Music,
  Mail,
  Phone,
  MapPin,
  Link,
  Globe,
  Smartphone,
  Linkedin,
  Youtube,
} from "lucide-react";
import ProcessTimeline from "../components/ProcessTimeline";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentProcessIndex, setCurrentProcessIndex] = useState(0);
  
  const heroImages = [
    '/images/heroimage1.jpg',
    '/images/heroimage2.jpg',
    '/images/heroimage3.jpg'
  ];
  
  const services = [
    {
      id: '01',
      title: 'Video Production',
      subtitle: 'Engage, inspire, and leave a lasting impression.',
      description: 'We produce cinematic-quality videos tailored to your brand&apos;s voice—from promotional content and social media reels to corporate interviews and compelling product stories that convert viewers into customers.',
      image: '/images/videoproduction.jpg',
      features: ['4K Production', 'Color Grading', 'Sound Design', 'Motion Graphics']
    },
    {
      id: '02',
      title: 'Social Media Management',
      subtitle: 'Strategic social media that builds communities and drives engagement.',
      description: 'Comprehensive social media strategy and management to build your brand presence across all platforms with consistent, engaging content.',
      image: '/images/Social media.jpg',
      features: ['Content Creation', 'Community Management', 'Analytics', 'Paid Campaigns']
    },
    {
      id: '03',
      title: 'Paid Advertising',
      subtitle: 'Targeted ad campaigns that maximize ROI and drive qualified leads.',
      description: 'Data-driven advertising campaigns across Google, Facebook, and other platforms to maximize your return on investment with targeted messaging.',
      image: '/images/paidadvertising.jpg',
      features: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'Performance Tracking']
    }
  ];
  
  const processSteps = [
    {
      id: '01',
      title: 'Identifying',
      description: 'We dive deep to understand your business, target audience, and competition. This helps us pinpoint opportunities and set clear goals for your brand journey.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRkVGM0MwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTI0MDBEIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCI+SWRlbnRpZnlpbmc8L3RleHQ+Cjwvc3ZnPgo='
    },
    {
      id: '02', 
      title: 'Planning',
      description: 'A strong strategy is everything. We develop a tailored plan—defining messaging, timelines, and visual direction to ensure your brand communicates with impact.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRkVGM0MwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTI0MDBEIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCI+UGxhbm5pbmc8L3RleHQ+Cjwvc3ZnPgo='
    },
    {
      id: '03',
      title: 'Content Creation',
      description: 'Our creative team designs scroll-stopping video content, brand visuals, and social assets—everything you need to tell your story with power and clarity.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRkVGM0MwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTI0MDBEIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCI+Q29udGVudCBDcmVhdGlvbjwvdGV4dD4KPC9zdmc+Cg=='
    },
    {
      id: '04',
      title: 'Execution',
      description: 'We bring the strategy to life through seamless execution—filming, editing, designing, and developing all assets aligned with your unique brand identity.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRkVGM0MwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTI0MDBEIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCI+RXhlY3V0aW9uPC90ZXh0Pgo8L3N2Zz4K'
    },
    {
      id: '05',
      title: 'Promotion',
      description: 'It&apos;s time to get noticed. We launch targeted campaigns across all major social media platforms, optimize reach, and spark meaningful engagement.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRkVGM0MwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTI0MDBEIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCI+UHJvbW90aW9uPC90ZXh0Pgo8L3N2Zz4K'
    },
    {
      id: '06',
      title: 'Monitoring & Optimization',
      description: 'Post-launch, we track performance, analyze insights, and refine strategies to make sure your content delivers real results—consistently.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRkVGM0MwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTI0MDBEIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCI+TW9uaXRvcmluZyAmIE9wdGltaXphdGlvbjwvdGV4dD4KPC9zdmc+Cg=='
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);
  
  // Services carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => 
        (prevIndex + 1) % services.length
      );
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [services.length]);
  
  // Process carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProcessIndex((prevIndex) => 
        (prevIndex + 1) % processSteps.length
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [processSteps.length]);

  return (
    <main className="relative bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/images/Brand booster-final.png" 
                alt="Brand Boosters" 
                className="h-12 w-auto drop-shadow-lg"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              {/* Fallback text */}
              <div className="text-2xl font-bold text-white drop-shadow-lg" style={{display: 'none'}}>
                Brand Boosters
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white/90 hover:text-yellow-400 transition-colors font-medium drop-shadow">
                Home
              </a>
              <a href="#about" className="text-white/90 hover:text-yellow-400 transition-colors font-medium drop-shadow">
                About
              </a>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <a href="#services" className="text-white/90 hover:text-yellow-400 transition-colors font-medium drop-shadow flex items-center gap-1">
                  Services
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-4 space-y-3">
                    <div className="group/item hover:bg-yellow-50 rounded-lg p-3 transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                          01
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover/item:text-yellow-600">Video Production</h4>
                          <p className="text-sm text-gray-600 mt-1">Cinematic-quality videos that engage and convert</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group/item hover:bg-yellow-50 rounded-lg p-3 transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                          02
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover/item:text-yellow-600">Social Media Management</h4>
                          <p className="text-sm text-gray-600 mt-1">Strategic social presence that builds communities</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group/item hover:bg-yellow-50 rounded-lg p-3 transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                          03
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover/item:text-yellow-600">Paid Advertising</h4>
                          <p className="text-sm text-gray-600 mt-1">Targeted campaigns that maximize ROI</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* View All Services Link */}
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <a href="#services" className="block text-center text-yellow-600 hover:text-yellow-700 font-medium text-sm transition-colors">
                        View All Services →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <a href="/china-market-entry" className="text-white/90 hover:text-yellow-400 transition-colors font-medium drop-shadow">
                China Market Entry
              </a>
              
              <a href="#contact" className="text-white/90 hover:text-yellow-400 transition-colors font-medium drop-shadow">
                Contact
              </a>
            </div>
            <div className="hidden md:flex items-center">
              <button className="bg-yellow-400/90 backdrop-blur-sm text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition-all duration-300 font-semibold shadow-lg">
                Start Project
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image}
                alt={`Hero Background ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Abstract Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-10 left-20 w-96 h-96 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-500 rounded-full opacity-25 blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-yellow-300 opacity-15 blur-3xl animate-bounce"></div>
            
            {/* Abstract geometric shapes */}
            <div className="absolute top-32 right-1/3 w-32 h-32 border-4 border-yellow-400 opacity-30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
            <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-yellow-500 opacity-40 transform rotate-12 animate-pulse"></div>
            <div className="absolute top-1/3 right-20 w-16 h-16 border-2 border-yellow-300 opacity-50 rounded-full animate-ping"></div>
            
            {/* Abstract lines */}
            <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30"></div>
            <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-40"></div>
          </div>
          
          <div className="flex items-center min-h-[80vh] max-w-4xl">
            {/* Left Side - Bold Typography */}
            <div className="w-full space-y-12">
              {/* Brand Badge */}
              <div className="inline-flex items-center gap-3 bg-yellow-400/90 backdrop-blur-sm text-black px-6 py-3 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-black rounded-full animate-pulse"></div>
                <span className="font-bold text-sm uppercase tracking-wide">Creative Video Studio</span>
              </div>
              
              {/* Main Typography */}
              <div className="relative">
                <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-yellow-400 leading-none opacity-90 drop-shadow-2xl">
                  BRAND
                </h1>
                <div className="relative -mt-8 ml-12">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white italic opacity-90 drop-shadow-xl">
                    boosters
                  </h1>
                  <div className="absolute -top-4 -right-8 w-24 h-1 bg-yellow-400 transform rotate-12"></div>
                </div>
                <div className="relative -mt-4">
                  <h2 className="text-4xl md:text-5xl text-white font-medium drop-shadow-lg">
                    Cinematic content that
                    <span className="block text-yellow-400 font-bold drop-shadow-xl">CONVERTS</span>
                  </h2>
                </div>
              </div>
              
              {/* Description */}
              <div className="relative max-w-2xl">
                <div className="absolute -left-4 top-0 w-1 h-full bg-yellow-400"></div>
                <p className="text-xl text-white/90 leading-relaxed pl-8 drop-shadow-lg">
                  We don&apos;t just make videos – we engineer <span className="text-yellow-400 font-semibold">viral moments</span> that transform brands into movements. Every frame designed to captivate, every story crafted to convert.
                </p>
              </div>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <button className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-6 py-3 rounded-full hover:border-yellow-400/50 hover:text-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-yellow-300">
                    <span className="text-black text-lg font-bold">🚀</span>
                  </div>
                  <div className="text-left">
                    <span className="font-semibold block drop-shadow">Launch Your Story</span>
                    <span className="text-sm text-white/70 drop-shadow">Free Strategy Call</span>
                  </div>
                </button>
                
                <button className="flex items-center gap-4 text-white hover:text-yellow-400 transition-colors group">
                  <div className="w-12 h-12 border-2 border-white group-hover:border-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-400/25">
                    <Play className="w-5 h-5 ml-0.5" />
                  </div>
                  <div>
                    <span className="font-semibold block drop-shadow">Watch Reel</span>
                    <span className="text-sm text-white/70 drop-shadow">2 min showcase</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom Abstract Elements */}
          <div className="absolute bottom-8 left-0 right-0">
            <div className="flex justify-center items-center gap-8">
              <div className="w-16 h-1 bg-yellow-400 opacity-60"></div>
              <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="w-24 h-1 bg-yellow-400 opacity-60"></div>
              <div className="w-4 h-4 border-2 border-yellow-400 rounded-full opacity-80"></div>
              <div className="w-16 h-1 bg-yellow-400 opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative min-h-screen bg-white py-20 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl relative">
          {/* Abstract Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-32 right-10 w-80 h-80 bg-yellow-400 opacity-10 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-500 opacity-15 blur-2xl animate-pulse delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-300 opacity-8 rounded-full blur-3xl"></div>
            
            {/* Abstract Geometric Shapes */}
            <div className="absolute top-40 left-1/4 w-4 h-4 bg-yellow-400 rotate-45 animate-bounce"></div>
            <div className="absolute bottom-40 right-1/3 w-6 h-6 bg-yellow-500 rounded-full animate-pulse"></div>
            <div className="absolute top-60 right-1/4 w-8 h-1 bg-yellow-400 animate-pulse delay-1000"></div>
          </div>

          {/* Section Content */}
          <div className="grid grid-cols-12 gap-8 items-center min-h-[80vh]">
            {/* Text Content */}
            <div className="col-span-12 lg:col-span-7 space-y-16">
              {/* Section Title */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-0.5 bg-yellow-400"></div>
                  <span className="text-yellow-600 text-sm font-medium tracking-widest uppercase">Who We Are</span>
                </div>
                
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight">
                  ABOUT
                  <span className="block text-yellow-500 italic font-light -mt-4 ml-8">us</span>
                </h2>
              </div>

              {/* Main Description */}
              <div className="space-y-8">
                <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
                  At <span className="text-yellow-600 font-medium">Brand Boosters Media</span>, we&apos;re 
                  <span className="text-gray-900 font-medium">storytellers</span>, 
                  <span className="text-gray-900 font-medium">strategists</span>, and 
                  <span className="text-gray-900 font-medium">content creators</span>.
                </p>
                
                <div className="relative bg-gray-50 rounded-2xl p-8 border-l-4 border-yellow-400">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Our mission? To elevate your brand with high-impact video production 
                    and smart social media management. We blend creativity with strategy 
                    to help your brand rise above the noise and connect with your audience.
                  </p>
                </div>
              </div>

              {/* Creative Stats/Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow">
                  <div className="text-yellow-500 text-4xl font-black mb-2">∞</div>
                  <p className="text-gray-900 font-medium text-sm">CREATIVE IDEAS</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow">
                  <div className="text-yellow-500 text-4xl font-black mb-2">★</div>
                  <p className="text-gray-900 font-medium text-sm">STRATEGIC MINDS</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow">
                  <div className="text-yellow-500 text-4xl font-black mb-2">◆</div>
                  <p className="text-gray-900 font-medium text-sm">CONTENT MASTERS</p>
                </div>
              </div>
            </div>

            {/* Visual Content */}
            <div className="col-span-12 lg:col-span-5 relative">
              {/* Abstract Visual Composition with Wave Cut-off */}
              <div className="relative h-96 lg:h-[600px]">
                {/* Main Image with Creative Wave Design */}
                <div className="absolute inset-4 overflow-hidden">
                  <div className="relative w-full h-full">
                    {/* Wave Cut-off Container */}
                    <div 
                      className="w-full h-full bg-yellow-400/20 backdrop-blur-sm transform rotate-3 shadow-2xl"
                      style={{
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 85% 80%, 70% 85%, 55% 80%, 40% 85%, 25% 80%, 10% 85%, 0% 80%)"
                      }}
                    >
                      {/* Main Team Image */}
                      <div className="relative w-full h-full overflow-hidden">
                        <img 
                          src="/images/digital-marketing-team.png" 
                          alt="Brand Boosters Media Team" 
                          className="w-full h-full object-cover filter brightness-75 contrast-110"
                        />
                        {/* Yellow Overlay for Brand Consistency */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-yellow-600/10 mix-blend-overlay"></div>
                        
                        {/* Creative Text Overlay */}
                        <div className="absolute bottom-8 left-8 right-8">
                          <div className="bg-black/80 backdrop-blur-md rounded-lg p-4 border border-yellow-400/30">
                            <h4 className="text-yellow-400 font-bold text-lg mb-1">Our Creative Team</h4>
                            <p className="text-white text-sm">Storytellers & Strategists</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Wave Overlay Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
                      <svg 
                        className="absolute bottom-0 w-full h-24 text-yellow-400 opacity-30" 
                        viewBox="0 0 1200 120" 
                        preserveAspectRatio="none"
                      >
                        <path 
                          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                          opacity=".25" 
                          fill="currentColor"
                        ></path>
                        <path 
                          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                          opacity=".5" 
                          fill="currentColor"
                        ></path>
                        <path 
                          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Secondary Creative Elements */}
                <div className="absolute top-16 right-4 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 backdrop-blur-sm border border-yellow-400/30 transform -rotate-12 overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-white/90 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 mx-auto bg-yellow-500 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <p className="text-yellow-600 text-xs font-medium mt-1">Strategy</p>
                    </div>
                  </div>
                </div>

                {/* Third Creative Element */}
                <div className="absolute bottom-8 left-4 w-24 h-24 bg-gradient-to-br from-yellow-400/15 to-yellow-500/8 backdrop-blur-sm border border-yellow-400/25 transform rotate-6 overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-white/90 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 mx-auto bg-yellow-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <p className="text-yellow-600 text-xs font-medium mt-1">Social</p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 right-1/2 w-3 h-3 bg-yellow-500 transform rotate-45 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced Carousel */}
      <section id="services" className="relative py-32 px-6 bg-gray-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-500 opacity-8 blur-2xl animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-300 opacity-6 blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border-4 border-yellow-400/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-yellow-500/10 transform rotate-45 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-0.5 bg-yellow-400"></div>
              <span className="text-yellow-400 text-sm font-medium tracking-widest uppercase">Our Services</span>
              <div className="w-16 h-0.5 bg-yellow-400"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
              Creative Strategy That
              <span className="block text-yellow-400 italic font-light -mt-4">Drives Real Results</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
              We blend creative storytelling with smart strategy to elevate your brand across digital platforms. 
              Whether it&apos;s a powerful video campaign or consistent social media growth—you&apos;ll get content that connects and converts.
            </p>
          </div>

          {/* Services Carousel */}
          <div className="max-w-6xl mx-auto relative">
            {/* Main Carousel Container */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentServiceIndex 
                      ? 'opacity-100 transform translate-x-0' 
                      : index === (currentServiceIndex + 1) % services.length
                      ? 'opacity-0 transform translate-x-full'
                      : 'opacity-0 transform -translate-x-full'
                  }`}
                >
                  <div className="relative w-full h-full">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjYwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUNBM0FGIiBmb250LXNpemU9IjI0Ij4ke3NlcnZpY2UudGl0bGV9PC90ZXh0Pgo8L3N2Zz4K`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
                    
                    {/* Floating Service Badge */}
                    <div className="absolute top-8 left-8 animate-pulse">
                      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg">
                        {service.id}
                      </div>
                    </div>
                    
                    {/* Service Content */}
                    <div className="absolute inset-0 flex items-center">
                      <div className="max-w-3xl ml-8 lg:ml-16">
                        <h3 className="text-5xl lg:text-6xl font-black text-white mb-4 leading-tight drop-shadow-xl">{service.title}</h3>
                        <p className="text-yellow-400 text-xl lg:text-2xl font-semibold mb-6 drop-shadow-lg">{service.subtitle}</p>
                        <p className="text-white/90 text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl drop-shadow-lg">
                          {service.description}
                        </p>
                        
                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-white/80 group">
                              <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                              <span className="text-lg font-medium drop-shadow">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-8">
                          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-all hover:scale-105 transform duration-200 shadow-xl hover:shadow-yellow-400/25">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-1/4 right-8 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-1/3 right-16 w-3 h-3 bg-yellow-500/70 transform rotate-45 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Enhanced Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentServiceIndex(index)}
                  className={`relative transition-all duration-300 ${
                    index === currentServiceIndex 
                      ? 'w-12 h-4 bg-yellow-400 rounded-full scale-110' 
                      : 'w-4 h-4 bg-white/30 rounded-full hover:bg-white/50 hover:scale-110'
                  }`}
                >
                  {index === currentServiceIndex && (
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-yellow-400 text-xs font-bold">
                      {service.id}
                    </span>
                  )}
                </button>
              ))}
            </div>
            
            {/* Enhanced Navigation Arrows */}
            <button
              onClick={() => setCurrentServiceIndex(prev => prev === 0 ? services.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-yellow-400/50 transition-all group shadow-lg"
            >
              <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform group-hover:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentServiceIndex(prev => prev === services.length - 1 ? 0 : prev + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-yellow-400/50 transition-all group shadow-lg"
            >
              <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform group-hover:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Progress Bar */}
            <div className="mt-6 w-full bg-white/10 rounded-full h-1 overflow-hidden">
              <div 
                className="h-full bg-yellow-400 transition-all duration-6000 ease-linear"
                style={{
                  width: `${((currentServiceIndex + 1) / services.length) * 100}%`
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="relative py-32 px-6 bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-500 opacity-8 blur-2xl animate-pulse delay-300"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-yellow-300 opacity-6 blur-3xl animate-pulse delay-700"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-32 left-1/4 w-4 h-4 bg-yellow-400 transform rotate-45 animate-ping opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-6 h-6 border-2 border-yellow-400 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-yellow-500 rounded-full opacity-50 animate-bounce"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-0.5 bg-yellow-400"></div>
              <span className="text-yellow-600 text-sm font-medium tracking-widest uppercase">Our Process</span>
              <div className="w-16 h-0.5 bg-yellow-400"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-8">
              From Concept to
              <span className="block text-yellow-500 italic font-light -mt-4">Viral Success</span>
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Our proven 6-step process ensures every project delivers exceptional results. 
              From initial strategy to final optimization, we guide your brand through each stage with precision and creativity.
            </p>
          </div>

          {/* Desktop Timeline View */}
          <div className="hidden lg:block mb-16">
            {/* Timeline Line */}
            <div className="relative mb-16">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full"></div>
              <div 
                className="absolute top-1/2 left-0 h-1 bg-yellow-400 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${((currentProcessIndex + 1) / processSteps.length) * 100}%`
                }}
              ></div>
              
              {/* Timeline Steps */}
              <div className="flex justify-between items-center relative">
                {processSteps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setCurrentProcessIndex(index)}
                    className={`relative w-16 h-16 rounded-full border-4 transition-all duration-300 ${
                      index <= currentProcessIndex 
                        ? 'bg-yellow-400 border-yellow-400 scale-110' 
                        : 'bg-white border-gray-300 hover:border-yellow-300'
                    }`}
                  >
                    <span className={`font-bold text-lg ${
                      index <= currentProcessIndex ? 'text-black' : 'text-gray-400'
                    }`}>
                      {step.id}
                    </span>
                    
                    {/* Step Label */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap">
                      <h4 className={`font-semibold text-sm transition-colors ${
                        index === currentProcessIndex ? 'text-yellow-600' : 'text-gray-600'
                      }`}>
                        {step.title}
                      </h4>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Current Step Details */}
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl p-12 shadow-xl border border-yellow-100">
              <div className="flex items-center gap-12">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                      {processSteps[currentProcessIndex].id}
                    </div>
                    <h3 className="text-4xl font-black text-gray-900">
                      {processSteps[currentProcessIndex].title}
                    </h3>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {processSteps[currentProcessIndex].description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-80 h-60 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={processSteps[currentProcessIndex].image}
                      alt={processSteps[currentProcessIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Carousel View */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-3xl">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentProcessIndex * 100}%)`
                  }}
                >
                  {processSteps.map((step, index) => (
                    <div key={step.id} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-yellow-50 to-white p-8 mx-2 rounded-3xl shadow-xl border border-yellow-100">
                        {/* Image */}
                        <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 shadow-lg">
                          <img 
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-lg">
                            {step.id}
                          </div>
                          <h3 className="text-2xl font-black text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Mobile Navigation */}
              <div className="flex justify-center mt-8 space-x-3">
                {processSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProcessIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentProcessIndex 
                        ? 'bg-yellow-400 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              {/* Mobile Arrows */}
              <button
                onClick={() => setCurrentProcessIndex(prev => prev === 0 ? processSteps.length - 1 : prev - 1)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-yellow-600 hover:border-yellow-300 transition-all shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentProcessIndex(prev => prev === processSteps.length - 1 ? 0 : prev + 1)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-yellow-600 hover:border-yellow-300 transition-all shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 bg-gray-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-500 opacity-8 blur-2xl animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-300 opacity-6 blur-3xl animate-pulse delay-700"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-32 right-1/4 w-4 h-4 bg-yellow-400 transform rotate-45 animate-ping opacity-30"></div>
          <div className="absolute bottom-1/4 left-1/4 w-6 h-6 border-2 border-yellow-400 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-yellow-500 rounded-full opacity-50 animate-bounce"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Header - Left Aligned */}
          <div className="text-left mb-20">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-0.5 bg-yellow-400"></div>
              <span className="text-yellow-400 text-sm font-medium tracking-widest uppercase">Get In Touch</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 max-w-4xl">
              Ready to Launch
              <span className="block text-yellow-400 italic font-light -mt-4">Your Next Big Thing?</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-12">
              Let&apos;s turn your vision into viral content. Whether you need a single video or a complete brand transformation, 
              we&apos;re here to make it happen.
            </p>
          </div>
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Contact Form */}
            <div className="">
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl p-8 md:p-10 shadow-2xl border border-yellow-100">
                <div className="mb-8">
                  <h3 className="text-3xl font-black text-gray-900 mb-4">
                    Let&apos;s Start Something
                    <span className="text-yellow-500"> Epic</span>
                  </h3>
                  <p className="text-lg text-gray-700">
                    Fill out the form and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>
                
                <form className="space-y-6">
                  {/* Name Field */}
                  <div className="group">
                    <label className="block text-lg font-semibold text-gray-900 mb-3">
                      What&apos;s your name? *
                    </label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-lg bg-white group-hover:border-gray-300"
                      required
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div className="group">
                    <label className="block text-lg font-semibold text-gray-900 mb-3">
                      Your email address *
                    </label>
                    <input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-lg bg-white group-hover:border-gray-300"
                      required
                    />
                  </div>
                  
                  {/* Phone Field */}
                  <div className="group">
                    <label className="block text-lg font-semibold text-gray-900 mb-3">
                      Phone number
                    </label>
                    <input 
                      type="tel" 
                      placeholder="(+61) 400 123 456" 
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-lg bg-white group-hover:border-gray-300"
                    />
                  </div>
                  
                  {/* Message Field */}
                  <div className="group">
                    <label className="block text-lg font-semibold text-gray-900 mb-3">
                      Tell us about your project *
                    </label>
                    <textarea 
                      rows={5} 
                      placeholder="I need help with video production for my brand launch. Looking for something that will make people stop scrolling and pay attention..." 
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-lg bg-white resize-none group-hover:border-gray-300"
                      required
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      className="group inline-flex items-center gap-4 bg-yellow-400 hover:bg-yellow-500 text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/25 w-full justify-center"
                    >
                      <span>Send Message</span>
                      <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                        <ArrowRight className="w-4 h-4 text-yellow-400" />
                      </div>
                    </button>
                    
                    <p className="text-gray-600 text-sm mt-3 text-center">
                      We&apos;ll respond within 24 hours with a custom strategy proposal
                    </p>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Right Side - Brand Info & Contact Details */}
            <div className="space-y-8">
              {/* Brand Logo Section */}
              <div className="text-center lg:text-left">
                <div className="mb-8">
                  <img 
                    src="/images/Brand booster-final.png" 
                    alt="Brand Boosters Media Logo" 
                    className="h-20 w-auto mx-auto lg:mx-0 drop-shadow-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  {/* Fallback text */}
                  <div className="text-3xl font-bold text-white drop-shadow-lg" style={{display: 'none'}}>
                    Brand Boosters Media
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4">
                  Ready to go <span className="text-yellow-400">viral</span>?
                </h4>
                <p className="text-lg text-gray-300 mb-8">
                  Join 500+ brands that trust us to amplify their message across Australia and beyond.
                </p>
              </div>
              
              {/* Contact Information Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20 hover:border-yellow-400/50 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Call Us</h5>
                      <p className="text-yellow-400 font-medium text-lg">(+61) 8 1234 5678</p>
                    </div>
                  </div>
                </div>
                
                {/* Email */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20 hover:border-yellow-400/50 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Email Us</h5>
                      <p className="text-yellow-400 font-medium text-lg">info@brandboostersmedia.com.au</p>
                    </div>
                  </div>
                </div>
                
                {/* Location */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20 hover:border-yellow-400/50 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Visit Us</h5>
                      <p className="text-yellow-400 font-medium text-lg leading-relaxed">
                        217 Flinders Street<br />
                        Adelaide, SA 5000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
                <h5 className="text-white font-semibold mb-4 text-center lg:text-left">Follow Us</h5>
                <div className="flex justify-center lg:justify-start gap-4">
                  <a href="#" className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-all hover:scale-110 group">
                    <Facebook className="w-6 h-6 text-black" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-all hover:scale-110 group">
                    <Instagram className="w-6 h-6 text-black" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-all hover:scale-110 group">
                    <Linkedin className="w-6 h-6 text-black" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-all hover:scale-110 group">
                    <Youtube className="w-6 h-6 text-black" />
                  </a>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="space-y-4">
                <button className="w-full bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all hover:scale-105 text-lg">
                  Book a Strategy Call
                </button>
                <button className="w-full border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all text-lg">
                  View Our Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 border border-gray-700 rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 border border-gray-700 rotate-12"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-16 pb-8 border-b border-gray-800">
            <div className="flex items-center gap-8">
              <h2 className="text-6xl md:text-8xl font-black text-white tracking-wider">
                DROP US A MAIL
              </h2>
              <div className="text-yellow-400 text-6xl md:text-8xl transform rotate-45">
                ↗
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg">
              Get in Touch
            </button>
          </div>
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <img 
                  src="/images/Brand booster-final.png" 
                  alt="Brand Boosters Media Logo" 
                  className="h-16 w-auto mb-6"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback logo */}
                <div className="h-16 w-32 mb-6 bg-yellow-400 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-black font-bold">Brand Boosters</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We blend creativity with strategy to help your brand rise above the noise and connect with your audience.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-blue-400 text-lg font-semibold mb-6">Quick link</h4>
              <ul className="space-y-4">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            {/* Our Services */}
            <div>
              <h4 className="text-blue-400 text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-4">
                <li><span className="text-gray-300">Video Packages</span></li>
                <li><span className="text-gray-300">Social Media Management</span></li>
              </ul>
            </div>
            
            {/* Stay Connected */}
            <div>
              <h4 className="text-blue-400 text-lg font-semibold mb-6">Stay connected with us</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <span className="text-gray-300 leading-relaxed">
                    217 Flinders Street, Adelaide, SA 5000
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">
                    info@brandboostersmedia.com.au
                  </span>
                </div>
              </div>
              
              {/* Minimalist Social Icons */}
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gray-800 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 hover:border-gray-500 transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5 text-gray-300" />
                </div>
                <div className="w-12 h-12 bg-gray-800 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 hover:border-gray-500 transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5 text-gray-300" />
                </div>
                <div className="w-12 h-12 bg-gray-800 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 hover:border-gray-500 transition-colors cursor-pointer">
                  <Music className="w-5 h-5 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                All Right Reserved © 2025 Brand Boosters Media
              </p>
              <div className="flex items-center space-x-8">
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <span className="text-gray-600">|</span>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
