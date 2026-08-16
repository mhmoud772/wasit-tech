import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ChevronLeft } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navLinks.forEach((link) => {
      const el = document.getElementById(link.href.replace('#', ''));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'من نحن', href: '#about' },
    { name: 'الخدمات', href: '#services' },
    { name: 'شركاء النجاح', href: '#partners' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B132B]/90 backdrop-blur-md border-b border-slate-800/80 shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Right side: Brand Logo seamlessly integrated without dark square frame */}
          <a
            href="#hero"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Wasit Tech Homepage"
          >
            <img
              src="/logo-white.png"
              alt="وسيط-تك WASIT-TECH Logo"
              className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-white flex items-center gap-1">
                وسيط<span className="text-wasit-teal">-تك</span>
              </span>
              <span className="text-[11px] font-medium text-wasit-gold tracking-widest uppercase">
                WASIT-TECH
              </span>
            </div>
          </a>

          {/* Middle: Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#151E33]/70 border border-slate-800 rounded-full px-5 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={activeSection === link.href ? 'page' : undefined}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  activeSection === link.href
                    ? 'text-white bg-white/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Left side: CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-wasit-teal hover:bg-wasit-teal-dark shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <span>طلب استشارة</span>
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#151E33] border border-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070C1B]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 mt-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-slate-200 hover:text-wasit-teal hover:bg-white/5 rounded-lg transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-white bg-wasit-teal hover:bg-wasit-teal-dark shadow-sm cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-wasit-gold" />
              <span>طلب استشارة تقنية فورية</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
