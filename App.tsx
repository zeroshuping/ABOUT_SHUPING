import React, { useState, useEffect } from 'react';
import { ChevronDown, CheckCircle2, Mail, Copy, Check } from 'lucide-react';

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
                <div className="text-zinc-400 font-bold text-center p-6 uppercase tracking-widest text-xs">
                  Portrait Fetching...
                </div>
              )}
            </div>
            <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 bg-zinc-900 text-white px-5 py-5 md:px-8 md:py-8 rounded-[1.2rem] md:rounded-[2rem] shadow-xl rotate-6 flex flex-col items-center justify-center leading-none z-20 border-[4px] border-white">
              <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] mb-1 opacity-70">Experience</span>
              <span className="text-xl md:text-3xl font-black tracking-tight">20Y+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Identity Pillars Section - I AM */}
      <section id="portfolio" className="py-16 md:py-28 px-6 md:px-8 bg-white border-y border-zinc-100 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="I am" annotation="Identity" />
          <div className="grid grid-cols-1 gap-12 md:gap-20 mt-10 md:mt-16">
            {pillarData.map((item, idx) => (
              <div key={idx} className="reveal-item group flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-16 max-w-5xl relative">
                <div className="relative shrink-0">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-900 tracking-tight leading-none relative z-10">
                    Sh<span className={item.color === 'amber' ? 'text-amber-500' : item.color === 'emerald' ? 'text-emerald-500' : 'text-blue-500'}>{item.letter}</span>{item.label.substring(item.label.indexOf(item.letter) + 1)}
                  </h3>
                </div>
                <div className="flex-1 space-y-2 md:space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className={`h-[2px] w-6 md:w-8 ${item.color === 'amber' ? 'bg-amber-500' : item.color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'}`}></div>
                    <h4 className="text-lg md:text-xl font-bold text-zinc-900 tracking-tight">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-base md:text-lg font-normal text-zinc-500 leading-relaxed pl-5 border-l-2 border-zinc-200">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - I WORK */}
      <section id="timeline" className="py-16 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="I work" annotation="Experience" />
          <div className="grid gap-6 md:gap-8">
            {careerData.map((item, idx) => (
              <div key={idx} className="reveal-item bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] paper-shadow border border-zinc-100 flex flex-col md:flex-row gap-6 md:gap-10 group hover:border-amber-400/30 transition-all duration-500">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 md:mb-6">
                    <div className="max-w-md">
                      <h4 className="text-xl md:text-2xl font-bold text-zinc-900 group-hover:text-amber-600 transition-colors leading-snug mb-1">
                        {item.role}
                      </h4>
                      <p className="text-zinc-400 font-bold text-xs md:text-sm uppercase tracking-wider">{item.org}</p>
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-zinc-500 bg-zinc-100 px-3 py-1.5 md:px-4 md:py-2 rounded-full tracking-wider mt-3 md:mt-0 self-start">
                      {item.date}
                    </span>
                  </div>
                  <div className="grid gap-3 md:gap-4">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3.5 md:gap-4 p-4 md:p-6 bg-zinc-50/60 rounded-2xl border border-zinc-100">
                        <CheckCircle2 size={18} className="text-amber-500 mt-1 shrink-0" />
                        <p className="text-zinc-700 font-normal leading-relaxed text-sm sm:text-base">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Skills Section - I HAVE */}
      <section id="skills" className="py-16 md:py-28 px-6 md:px-8 bg-zinc-50/50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="I have" annotation="Credentials & Toolkit" />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 md:p-8 rounded-[2rem] paper-shadow border border-zinc-100">
              <h4 className="text-lg font-bold text-zinc-900 mb-2">Certifications</h4>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed">TOEIC 930, DELF B1, Deck officer and LNG-related Licenses, drone and yacht credentials.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-[2rem] paper-shadow border border-zinc-100">
              <h4 className="text-lg font-bold text-zinc-900 mb-2">E-commerce & Operations</h4>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed">Web operations, process improvement, O2O, SEO and cross-functional coordination.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-[2rem] paper-shadow border border-zinc-100">
              <h4 className="text-lg font-bold text-zinc-900 mb-2">Data & Digital Tools</h4>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed">SQL, Looker Studio, GA, Github, Google Apps Script, and AI tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect / Footer Section */}
      <section id="contact" className="py-20 md:py-32 px-6 md:px-8 bg-zinc-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8">
            <span className="text-amber-400 font-bold tracking-[0.25em] uppercase text-[9px] md:text-[10px]">Connect</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 tracking-tight leading-tight">
              Sh<span className="text-amber-500">u</span>ping.<br />
              Sh<span className="text-emerald-500">o</span>pping.<br />
              Sh<span className="text-blue-500">i</span>pping.
            </h2>
          </div>
          <div className="max-w-2xl space-y-6">
            <p className="text-lg md:text-xl font-normal leading-relaxed text-zinc-300">
              Ready to bring a pioneer's mindset, operational discipline, and cross-domain expertise to my next mission.
            </p>
            <div className="pt-1">
              <button
                onClick={handleCopyEmail}
                className="group inline-flex items-center space-x-3 bg-zinc-800 hover:bg-zinc-700/80 active:scale-95 px-5 py-3 rounded-2xl border border-zinc-700/80 transition-all cursor-pointer shadow-sm"
                title="Click to copy email"
              >
                <Mail size={18} className="text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-base md:text-lg font-semibold text-zinc-200">
                  zeroshuping@gmail.com
                </span>
                <span className="pl-2 border-l border-zinc-700 text-xs font-bold uppercase tracking-wider text-amber-400/90 flex items-center space-x-1">
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} className="text-zinc-400 group-hover:text-amber-400 transition-colors" />
                      <span>Copy</span>
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
