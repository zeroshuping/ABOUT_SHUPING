import React, { useState, useEffect } from 'react';
import { Rocket, ChevronDown, CheckCircle2, Mail, Copy, Check } from 'lucide-react';

// --- Sub-components ---
const SectionHeader: React.FC<{ title: string; subtitle?: string; dark?: boolean; annotation?: string }> = ({ title, subtitle, dark, annotation }) => (
  <div className="mb-8 md:mb-10">
    <div className={`flex items-center space-x-3 mb-3 ${dark ? 'opacity-100' : ''}`}>
      <div className={`h-[2px] w-8 md:w-10 ${dark ? 'bg-amber-400' : 'bg-amber-500'}`}></div>
      {annotation && (
        <span className={`${dark ? 'text-amber-400' : 'text-amber-600'} font-black tracking-[0.25em] uppercase text-[9px] md:text-[10px]`}>
          {annotation}
        </span>
      )}
    </div>
    <div className="relative inline-block">
      <h2 className={`text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight leading-tight ${dark ? 'text-white' : 'text-zinc-900'}`}>{title}</h2>
    </div>
    {subtitle && <p className={`text-base md:text-xl max-w-3xl font-medium leading-relaxed text-pretty ${dark ? 'text-zinc-300' : 'text-zinc-500'}`}>{subtitle}</p>}
  </div>
);

// --- Main App ---
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.05 });

    const revealElements = document.querySelectorAll('section, .reveal-item');
    revealElements.forEach(el => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
      }
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('zeroshuping@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const profileImage = "https://lh3.googleusercontent.com/d/1TreWDclrBf7VvV34QqsWKqCxEqBP3nF4";

  const careerData = [
    {
      role: 'Deck Officer',
      org: 'LNG Carrier',
      date: '2022.12 – 2025.09',
      details: [
        'Cryogenic Operations: Managed −162°C LNG loading and discharging operations.',
        'Bridge & Safety: Handled navigational watches, bridge resource management, and supervised emergency/firefighting systems.'
      ]
    },
    {
      role: 'e-Commerce Manager',
      org: 'Costco Wholesale Taiwan',
      date: '2017.10 – 2022.02',
      details: [
        'Platform Operations: Directed website operations and cross-functional international alignment to maximize revenue.',
        'Process Standardization: Established product management SOPs to streamline workflows, strengthen O2O integration, and accelerate mobile growth.'
      ]
    },
    {
      role: 'Co-founder',
      org: 'FunTime Metasearch',
      date: '2008.01 – 2017.10',
      details: [
        'Venture Scaling: Built a travel metasearch platform from 0 to 1, leading a 25-member team to profitability.',
        'Traffic & SEO Strategy: Spearheaded SEO and traffic-growth initiatives.'
      ]
    },
    {
      role: 'Product Line Manager / GM Office',
      org: 'ezTravel',
      date: '2002 – 2006',
      details: [
        'Procurement & Strategy: Managed charter flight/train procurement and product development strategies.',
        'System Integration: Coordinated ERP deployment to boost internal operational productivity.'
      ]
    }
  ];

  const pillarData = [
    {
      label: 'Shuping.',
      title: '0→1 Pioneer',
      desc: 'Building profitable digital businesses from 0 to 1, standardizing workflows, and driving data-driven improvements across industries.',
      color: 'amber',
      letter: 'u'
    },
    {
      label: 'Shopping.',
      title: 'The Empowering Partner',
      desc: 'Partnering effectively with cross-functional and international teams to scale retail/e-commerce operations and maximize profitability.',
      color: 'emerald',
      letter: 'o'
    },
    {
      label: 'Shipping.',
      title: 'The Navigator',
      desc: 'Applying rigorous maritime safety discipline and risk management to high-pressure, extreme operating environments.',
      color: 'blue',
      letter: 'i'
    }
  ];

  return (
    <div className="min-h-screen selection:bg-amber-100 selection:text-amber-900 bg-[#fafaf9] text-zinc-800">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'glass-nav py-3 md:py-4 shadow-sm border-b border-zinc-200/50' : 'py-6 md:py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="group font-black text-xl md:text-2xl tracking-tighter cursor-pointer">
            <span className="text-amber-600">LIN</span> <span className="text-zinc-900">SHUPING</span>
          </button>
          <div className="hidden lg:flex items-center space-x-12 text-[11px] font-black uppercase tracking-[0.25em] text-zinc-400">
            {[
              { id: 'portfolio', label: 'IDENTITY' },
              { id: 'timeline', label: 'EXPERIENCE' },
              { id: 'skills', label: 'EXPERTISE' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="hover:text-amber-600 transition-colors relative group py-1 cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={() => scrollToId('contact')}
              className="bg-zinc-900 text-white px-8 py-3 rounded-full text-[10px] hover:bg-amber-600 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-zinc-200 cursor-pointer"
            >
              CONNECT
            </button>
          </div>
          <button
            onClick={() => scrollToId('contact')}
            className="lg:hidden bg-zinc-900 text-white px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest cursor-pointer"
          >
            CONNECT
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 md:pt-32 pb-14 md:pb-20 px-6 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="z-10 order-2 lg:order-1">
            <div className="reveal-item mb-3 md:mb-4">
              <span className="personal-note text-lg md:text-xl text-zinc-500 font-medium">The Multi-Dimensional Integrator —</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-zinc-900 flex flex-col mb-6 md:mb-8 tracking-tight">
              <div className="reveal-item" style={{ transitionDelay: '0.1s' }}>Sh<span className="text-amber-500">u</span>ping.</div>
              <div className="reveal-item" style={{ transitionDelay: '0.2s' }}>Sh<span className="text-emerald-500">o</span>pping.</div>
              <div className="reveal-item" style={{ transitionDelay: '0.3s' }}>Sh<span className="text-blue-500">i</span>pping.</div>
            </h1>
            <div className="reveal-item space-y-4 max-w-xl mb-8 md:mb-10">
              <p className="text-lg md:text-xl font-normal text-zinc-600 leading-relaxed text-pretty">
                20+ Years Cross-Domain Leadership: Scaling e-commerce platforms, coordinating global teams, and managing high-stakes marine operations with rigorous discipline.
              </p>
            </div>
            <button
              onClick={() => scrollToId('portfolio')}
              className="reveal-item group flex items-center space-x-3 text-zinc-400 hover:text-amber-600 transition-all font-bold text-[10px] md:text-xs uppercase tracking-[0.25em] cursor-pointer"
            >
              <span>Explore My Identity</span>
              <ChevronDown className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="relative order-1 lg:order-2 reveal-item z-0 group pt-4 md:pt-6">
            <div className="absolute -top-10 -left-10 md:-top-20 md:-left-20 w-56 h-56 md:w-96 md:h-96 bg-amber-100/30 rounded-full mix-blend-multiply filter blur-[50px] opacity-40 animate-pulse"></div>
            <div className="relative aspect-[4/5] bg-white rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden paper-shadow border-[8px] md:border-[16px] border-white rotate-1 hover:rotate-0 transition-all duration-[1s] ease-out shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex items-center justify-center">
              {!imgError ? (
                <img
                  src={profileImage}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[1.5s] ease-out contrast-[1.08] brightness-[1.04]"
                  alt="Lin Shuping"
                  loading="eager"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className
