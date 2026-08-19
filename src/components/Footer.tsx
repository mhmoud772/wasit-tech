import { Phone, Mail, Globe, ArrowUp, Sparkles } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { COMPANY, DEFAULT_WHATSAPP_MESSAGE, buildWhatsAppLink } from '../config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-[var(--theme-border)] bg-[var(--theme-bg-dark)] pb-10 sm:pb-12 pt-12 sm:pt-16 text-[var(--theme-text-muted)]">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-[var(--theme-border)] pb-10 sm:gap-12 sm:pb-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-5 sm:space-y-6 lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)] p-1.5 shadow-md">
                <img
                  src="/icon.png"
                  alt="وسيط-تك WASIT-TECH"
                  className="h-full w-full object-contain dark:hidden"
                />
                <img
                  src="/icon-dark.png"
                  alt="وسيط-تك WASIT-TECH"
                  className="hidden h-full w-full object-contain dark:block"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-[var(--theme-text)]">
                  وسيط<span className="text-wasit-teal">-تك</span>
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-wasit-gold">
                  WASIT-TECH
                </span>
              </div>
            </div>

            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[var(--theme-text-secondary)]">
              وسيط-تك هي شريكك الفعلي والمستدام للتحول الرقمي والربط التقني المباشر. نقدم أحدث الحلول في البنية التحتية، تأمين الشبكات، الأتمتة التخصصية، والذكاء الاصطناعي.
            </p>

            <div className="flex items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              <a
                href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)] text-emerald-500 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:text-emerald-400"
                aria-label="واتساب"
              >
                <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)] text-[var(--theme-text-secondary)] transition-colors hover:border-wasit-teal hover:text-wasit-teal"
                aria-label="البريد الإلكتروني"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href={`tel:+${COMPANY.phoneE164}`}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)] text-[var(--theme-text-secondary)] transition-colors hover:border-wasit-teal hover:text-wasit-teal"
                aria-label="الاتصال الهاتفي"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-sm sm:text-base font-bold text-[var(--theme-text)] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-wasit-gold" />
              <span>روابط التنقل السريع</span>
            </h4>
            <ul className="space-y-1.5 sm:space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-wasit-teal transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-wasit-teal transition-colors">
                  عن الشركة (من نحن)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-wasit-teal transition-colors">
                  الخدمات الأساسية
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-wasit-teal transition-colors">
                  شركاء النجاح
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-wasit-teal transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-wasit-teal transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact Information */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <h4 className="text-sm sm:text-base font-bold text-[var(--theme-text)] flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-wasit-teal" />
              <span>بيانات الاتصال المباشرة</span>
            </h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-wasit-gold flex-shrink-0" />
                <span className="dir-ltr text-right font-english text-[var(--theme-text)] font-bold">
                  {COMPANY.phoneDisplay}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-wasit-teal flex-shrink-0" />
                <span className="font-english text-[var(--theme-text)] font-semibold">
                  {COMPANY.email}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                <span className="font-english text-[var(--theme-text)] font-semibold">
                  {COMPANY.website.replace('https://', '')}
                </span>
              </div>
            </div>


          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 sm:pt-8 text-[10px] sm:text-xs sm:flex-row">
          <div>
            © {new Date().getFullYear()} <span className="font-bold text-[var(--theme-text)]">وسيط-تك (WASIT-TECH)</span>. جميع الحقوق محفوظة.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)] px-4 py-2 text-[var(--theme-text-secondary)] transition-all hover:bg-wasit-teal hover:text-white"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
