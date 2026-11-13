import React, { useState, useEffect } from 'react';
import { Rocket, ChevronDown, CheckCircle2, Anchor, ShoppingCart, Presentation, Mail } from 'lucide-react';

// --- Sub-components ---
const SectionHeader: React.FC<{ title: string; subtitle?: string; dark?: boolean; annotation?: string }> = ({ title, subtitle, dark, annotation }) => (
  <div className="mb-10 md:mb-12">
    <div className={`flex items-center space-x-3 mb-4 ${dark ? 'opacity-100' : ''}`}>
      <div className={`h-[2px] w-8 md:w-10 ${dark ? 'bg-amber-400' : 'bg-amber-500'}`}></div>
      {annotation && (
        <span className={`${dark ? 'text-amber-400' : 'text-amber-600'} font-black tracking-[0.25em] uppercase text-[9px] md:text-[10px]`}>
          {annotation}
        </span>
      )}
    </div>
    <div className="relative inline-block">
      <h2 className={`text-5xl sm:text-6xl md:text-[8rem] font-black mb-8 tracking-tighter leading-none ${dark ? 'text-white' : 'text-zinc-900'}`}>{title}</h2>
    </div>
    {subtitle && <p className={`text-lg md:text-2xl max-w-4xl font-medium leading-relaxed text-pretty ${dark ? 'text-zinc-300' : 'text-zinc-500'}`}>{subtitle}</p>}
  </div>
);

// --- Main App ---
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);

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

  const profileImage = "https://lh3.googleusercontent.com/d/1TreWDclrBf7VvV34QqsWKqCxEqBP3nF4";

  const careerData = [
    {
      role: 'Deck Officer',
      org: 'LNG Carrier',
      date: '2022.12 – 2025.09',
      color: 'blue',
      icon: <Anchor />,
      details: [
        'Safety & Risk Management: Participated in LNG loading and discharging operations at cryogenic temperatures of approximately −162°C, adhering to strict international maritime regulations.',
        'Navigation & Resource Management: Maintained navigational watches, applied bridge resource management practices, and oversaw vessel firefighting and life-saving equipment.'
      ]
    },
    {
      role: 'e-Commerce Manager',
      org: 'Costco Wholesale Taiwan',
      date: '2017.10 – 2022.02',
      color: 'emerald',
      icon: <ShoppingCart />,
      details: [
        'Operations & Profitability Optimization: Managed website operations and coordinated cross-functional initiatives with international teams.',
        'Process Standardization: Established product management SOPs to streamline workflows, strengthen O2O integration, and accelerate mobile revenue growth.'
      ]
    },
    {
      role: 'Co-founder',
      org: 'FunTime Metasearch',
      date: '2008.01 – 2017.10',
      color: 'amber',
      icon: <Rocket />,
      details: [
        'Venture Creation & Business Growth: Co-founded and developed a travel metasearch platform from the ground up, leading a cross-functional team of 25 members to establish a profitable business.',
        'Traffic & SEO Strategy: Spearheaded SEO and traffic-growth initiatives.'
      ]
    },
    {
      role: 'Product Line Manager / GM Office',
      org: 'ezTravel',
      date: '2002 – 2006',
      color: 'blue',
      icon: <Presentation />,
      details: [
        'Product & Operations: Led large-scale charter-flight and charter-train procurement, product development, and sales strategies.',
        'System Implementation: Coordinated ERP deployment that streamlined internal collaboration and boosted operational productivity.'
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
    <div className="min-h-screen selection:bg-amber-100 selection:text-amber-900 bg-[#fafaf9]">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'glass-nav py-3 md:py-4 shadow-sm border-b border-zinc-200/50' : 'py-6 md:py-10'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="group font-black text-xl md:text-2xl tracking-tighter">
            <span className="text-amber-600">LIN</span> <span className="text-zinc-900">SHUPING</span>
          </button>
          
          <div className="hidden lg:flex items-center space-x-12 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">
            {[
              { id: 'portfolio', label: 'I am' },
              { id: 'timeline', label: 'I work' },
              { id: 'skills', label: 'I have' },
              { id: 'mission', label: 'Mission' }
            ].map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollToId(item.id)} 
                className="hover:text-amber-600 transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all group-hover:w-full"></span>
              </button>
            ))}
            <button 
              onClick={() => scrollToId('contact')} 
              className="bg-zinc-900 text-white px-8 py-3 rounded-full text-[10px] hover:bg-amber-600 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-zinc-200"
            >
              CONNECT
            </button>
          </div>
          
          <button 
            onClick={() => scrollToId('contact')} 
            className="lg:hidden bg-zinc-900 text-white px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest"
          >
            CONNECT
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="z-10 order-2 lg:order-1">
            <div className="reveal-item mb-4 md:mb-6">
              <span className="personal-note text-xl md:text-2xl">The Multi-Dimensional Integrator —</span>
            </div>
            
            <h1 className="fluid-hero-text font-black text-zinc-900 flex flex-col mb-10 md:mb-12">
              <div className="reveal-item" style={{ transitionDelay: '0.1s' }}>Sh<span className="text-amber-500">u</span>ping.</div>
              <div className="reveal-item" style={{ transitionDelay: '0.2s' }}>Sh<span className="text-emerald-500">o</span>pping.</div>
              <div className="reveal-item" style={{ transitionDelay: '0.3s' }}>Sh<span className="text-blue-500">i</span>pping.</div>
            </h1>

            <div className="reveal-item space-y-6 md:space-y-8 max-w-2xl mb-12 md:mb-16">
              <p className="text-xl md:text-3xl font-bold text-zinc-700 leading-[1.3] tracking-tight text-pretty">
                20+ Years Cross-Domain Leadership:<br />
                <span className="text-zinc-400 font-medium">Scaling e-commerce platforms, coordinating global teams, and managing high-stakes marine operations with rigorous discipline.</span>
              </p>
            </div>

            <button 
              onClick={() => scrollToId('portfolio')} 
              className="reveal-item group flex items-center space-x-4 text-zinc-400 hover:text-amber-600 transition-all font-black text-[10px] md:text-xs uppercase tracking-[0.3em]"
            >
              <span>Explore My Identity</span>
              <ChevronDown className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="relative order-1 lg:order-2 reveal-item z-0 group pt-6 md:pt-10">
            <div className="absolute -top-12 -left-12 md:-top-24 md:-left-24 w-64 h-64 md:w-[30rem] md:h-[30rem] bg-amber-100/40 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] opacity-40 animate-pulse"></div>
            
            <div className="relative aspect-[4/5] bg-white rounded-[3rem] md:rounded-[5rem] overflow-hidden paper-shadow border-[12px] md:border-[24px] border-white rotate-2 hover:rotate-0 transition-all duration-[1.2s] ease-out shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] flex items-center justify-center">
              {!imgError ? (
                <img 
                  src={profileImage} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2s] ease-out contrast-[1.12] brightness-[1.06] saturate-[1.08]" 
                  alt="Lin Shuping" 
                  style={{ imageRendering: '-webkit-optimize-contrast' as any }}
                  loading="eager"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="text-zinc-400 font-black text-center p-8 md:p-12 uppercase tracking-widest text-xs leading-relaxed">
                  Portrait Fetching...<br/>
                  <span className="text-[10px] font-bold opacity-60 italic">Standardizing pixels</span>
                </div>
              )}
            </div>

            <div className="absolute -top-8 -right-8 md:-top-16 md:-right-16 bg-zinc-900 text-white px-6 py-6 md:px-10 md:py-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl rotate-12 flex flex-col items-center justify-center leading-none z-20 border-[4px] md:border-[6px] border-white group-hover:rotate-6 transition-transform duration-700">
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1 md:mb-2 opacity-70">Experience</span>
              <span className="text-2xl md:text-4xl font-black tracking-tighter">20Y+</span>
            </div>

            <span className="personal-note absolute -bottom-12 md:-bottom-20 right-4 md:right-8 rotate-3 opacity-60 text-2xl md:text-3xl">Efficiency meets Impact.</span>
          </div>
        </div>
      </section>

      {/* Identity Pillars Section - I AM */}
      <section id="portfolio" className="py-24 md:py-40 px-6 md:px-8 bg-white border-y border-zinc-100 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="I am" annotation="Identity" />
          <div className="grid grid-cols-1 gap-16 md:gap-32 mt-12 md:mt-20">
            {pillarData.map((item, idx) => (
              <div key={idx} className="reveal-item group flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-20 max-w-6xl relative">
                <div className="relative shrink-0">
                  <h3 className="text-5xl md:text-8xl font-black text-zinc-900 tracking-tighter leading-none relative z-10">
                    Sh<span className={item.color === 'amber' ? 'text-amber-500' : item.color === 'emerald' ? 'text-emerald-500' : 'text-blue-500'}>{item.letter}</span>{item.label.substring(item.label.indexOf(item.letter) + 1)}
                  </h3>
                </div>
                <div className="flex-1 space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`h-[2px] w-8 md:w-12 ${item.color === 'amber' ? 'bg-amber-500' : item.color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'}`}></div>
                    <h4 className="text-xl md:text-3xl font-black text-zinc-900 tracking-tight">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-lg md:text-xl lg:text-2xl font-medium text-zinc-500 leading-relaxed pl-6 border-l-4 border-zinc-100 group-hover:border-zinc-200 transition-colors text-pretty">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - I WORK */}
      <section id="timeline" className="py-24 md:py-40 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="I work" annotation="Experience" />
          <div className="grid gap-8 md:gap-10">
            {careerData.map((item, idx) => (
              <div key={idx} className="reveal-item bg-white px-7 py-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] paper-shadow border border-zinc-100 flex flex-col md:flex-row gap-6 md:gap-12 group hover:border-amber-400/30 transition-all duration-700">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-10">
                    <div className="flex items-center gap-5 md:block">
                      <div className={`w-16 h-16 ${item.color === 'blue' ? 'bg-blue-500' : item.color === 'emerald' ? 'bg-emerald-500' : item.color === 'slate' ? 'bg-slate-500' : 'bg-amber-500'} text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg border-4 border-white mb-0 md:mb-6`}>
                        {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-8 h-8", strokeWidth: 2.5 })}
                      </div>
                      <div className="max-w-md">
                        <h4 className="text-2xl md:text-3xl font-black text-zinc-900 group-hover:text-amber-600 transition-colors leading-tight mb-1 tracking-tight">
                          {item.role}
                        </h4>
                        <p className="text-zinc-400 font-bold text-lg md:text-xl uppercase tracking-widest leading-none">{item.org}</p>
                      </div>
                    </div>
                    <span className="text-[10px] md:text-xs font-black text-zinc-500 bg-zinc-100/80 px-4 py-2 md:px-6 md:py-3 rounded-full tracking-[0.2em] mt-5 md:mt-0 self-start border border-zinc-200/50">
                      {item.date}
                    </span>
                  </div>

                  <div className="grid gap-5 md:gap-6">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-5 md:gap-6 p-6 md:p-10 bg-zinc-50/50 rounded-[2rem] md:rounded-[3rem] group-hover:bg-white transition-all shadow-sm group-hover:shadow-md border border-zinc-100/50">
                        <CheckCircle2 size={24} className="text-amber-500 mt-1 shrink-0" />
                        <p className="text-zinc-700 font-semibold leading-relaxed text-lg md:text-xl lg:text-2xl tracking-tight text-pretty">
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
      <section id="skills" className="py-24 md:py-40 px-6 md:px-8 bg-zinc-50/50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="I have" annotation="Credentials & Toolkit" />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2.5rem] paper-shadow border border-zinc-100">
              <h4 className="text-xl font-black text-zinc-900 mb-3 tracking-tight">Certifications</h4>
              <p className="text-zinc-600 font-medium leading-relaxed">TOEIC 930, DELF B1, Deck officer and LNG-related Licenses, drone and yacht credentials.</p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] paper-shadow border border-zinc-100">
              <h4 className="text-xl font-black text-zinc-900 mb-3 tracking-tight">E-commerce & Operations</h4>
              <p className="text-zinc-600 font-medium leading-relaxed">Web operations, process improvement, O2O, SEO and cross-functional coordination.</p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] paper-shadow border border-zinc-100">
              <h4 className="text-xl font-black text-zinc-900 mb-3 tracking-tight">Data & Digital Tools</h4>
              <p className="text-zinc-600 font-medium leading-relaxed">SQL, Looker Studio, GA4, Github, Google Apps Script, and AI tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-40 px-6 md:px-8 bg-zinc-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader title="Connect" subtitle="Let's build sustainable digital workflows and high-efficiency systems together." dark annotation="Get in Touch" />
          
          <div className="mt-12 md:mt-20 flex flex-wrap gap-6">
            <a 
              href="mailto:zeroshuping@gmail.com" 
              className="bg-amber-500 hover:bg-amber-400 text-zinc-900 font-black px-8 py-5 md:px-10 md:py-6 rounded-full text-sm md:text-base tracking-widest uppercase transition-all flex items-center space-x-4 shadow-xl"
            >
              <Mail size={20} />
              <span>zeroshuping@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
