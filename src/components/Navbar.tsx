import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ChevronLeft, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

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

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 100;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'من نحن', href: '#about' },
    { name: 'الخدمات', href: '#services' },
    { name: 'شركاء', href: '#partners' },
    { name: 'الأسئلة', href: '#faq' },
    { name: 'اتصل', href: '#contact' },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="border-b border-white/10 bg-[rgba(10,16,25,0.78)] py-2 text-[11px] text-slate-200 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 text-center sm:px-6 lg:px-8">
          <Sparkles className="h-3.5 w-3.5 text-wasit-gold" />
          <span>استشارات تقنية متخصصة • دعم فني مستمر • أمان عالي</span>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'border-b border-[var(--theme-border)] bg-[var(--theme-bg)]/85 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.55)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="glass-panel flex items-center justify-between rounded-full px-3 py-2.5 shadow-[0_15px_40px_-25px_rgba(15,23,42,0.35)]">
            <a
              href="#hero"
              className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none"
              aria-label="وسيط-تك WASIT-TECH"
            >
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)] p-1.5 shadow-sm transition-transform group-hover:scale-105">
                <img
                  src="/icon.png"
                  alt="وسيط-تك Icon"
                  className="h-full w-full object-contain dark:hidden"
                />
                <img
                  src="/icon-dark.png"
                  alt="وسيط-تك Icon"
                  className="hidden h-full w-full object-contain dark:block"
                />
              </div>
              <div className="flex flex-col text-right">
                <span className="text-sm sm:text-base font-black leading-tight text-[var(--theme-text)]">
                  وسيط<span className="text-wasit-teal">-تك</span>
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.18em] text-wasit-gold">
                  WASIT-TECH
                </span>
              </div>
            </a>

            <nav className="hidden items-center gap-1 rounded-full border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)]/70 px-2 py-2 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  aria-current={activeSection === link.href ? 'page' : undefined}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                    activeSection === link.href
                      ? 'bg-[var(--theme-bg)] text-[var(--theme-text)] shadow-sm ring-1 ring-[var(--theme-border)]'
                      : 'text-[var(--theme-text-secondary)] hover:bg-[var(--theme-bg)]/50 hover:text-[var(--theme-text)]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />

              <button
                onClick={onOpenConsultation}
                className="hidden rounded-full bg-gradient-to-r from-wasit-teal to-wasit-teal-dark px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-wasit-teal/30 transition-all hover:-translate-y-0.5 hover:shadow-wasit-teal/40 sm:inline-flex sm:items-center sm:justify-center sm:gap-2"
              >
                <span>طلب استشارة</span>
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="cursor-pointer rounded-full border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)] p-2.5 text-[var(--theme-text)] transition-colors hover:text-wasit-teal md:hidden"
                aria-label="القائمة الرئيسية"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mt-0 border-b border-[var(--theme-border)] bg-[var(--theme-bg)]/95 px-4 pb-6 pt-4 shadow-xl backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="block rounded-xl px-4 py-2.5 text-base font-medium text-[var(--theme-text-secondary)] transition-all hover:bg-[var(--theme-bg-secondary)]/60 hover:text-wasit-teal"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('#contact');
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-wasit-teal to-wasit-teal-dark py-3 font-semibold text-white shadow-sm"
            >
              <PhoneCall className="h-4 w-4 text-wasit-gold" />
              <span>طلب استشارة تقنية فورية</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
