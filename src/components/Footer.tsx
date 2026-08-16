import { Phone, Mail, Globe, ArrowUp, Sparkles } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { COMPANY, DEFAULT_WHATSAPP_MESSAGE, buildWhatsAppLink } from '../config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-wasit-navy-dark border-t border-white/10 text-slate-400 relative overflow-hidden pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl bg-wasit-navy p-1 border border-wasit-teal/40 flex items-center justify-center">
                <img
                  src="/logo-white.png"
                  alt="وسيط-تك WASIT-TECH Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">
                  وسيط<span className="text-wasit-teal">-تك</span>
                </span>
                <span className="text-xs font-bold text-wasit-gold tracking-widest uppercase">
                  WASIT-TECH
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-300 max-w-md font-normal">
              وسيط-تك هي شريكك الفعلي والمستدام للتحول الرقمي والربط التقني المباشر. نقدم أحدث الحلول في البنية التحتية، تأمين الشبكات، الأتمتة التخصصية، والذكاء الاصطناعي.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-wasit-navy border border-white/10 flex items-center justify-center text-emerald-400 hover:text-white hover:border-emerald-500 transition-colors"
                aria-label="واتساب"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="w-10 h-10 rounded-xl bg-wasit-navy border border-white/10 flex items-center justify-center text-slate-300 hover:text-wasit-teal hover:border-wasit-teal transition-colors"
                aria-label="البريد الإلكتروني"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${COMPANY.phoneE164}`}
                className="w-10 h-10 rounded-xl bg-wasit-navy border border-white/10 flex items-center justify-center text-slate-300 hover:text-wasit-teal hover:border-wasit-teal transition-colors"
                aria-label="الاتصال الهاتفي"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-wasit-gold" />
              <span>روابط التنقل السريع</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
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
                <a href="#contact" className="hover:text-wasit-teal transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact Information */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Phone className="w-4 h-4 text-wasit-teal" />
              <span>بيانات الاتصال المباشرة</span>
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-wasit-gold flex-shrink-0" />
                <span className="dir-ltr text-right font-english text-white font-bold">
                  {COMPANY.phoneDisplay}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-wasit-teal flex-shrink-0" />
                <span className="font-english text-white font-semibold">
                  {COMPANY.email}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-english text-white font-semibold">
                  {COMPANY.website.replace('https://', '')}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-wasit-navy border border-wasit-teal/20 text-xs text-slate-300">
                ⚡ موقع سكوني فائق السرعة مخصص للأداء العالي وتجربة المستخدم الحديثة.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-bold">وسيط-تك (WASIT-TECH)</span>. جميع الحقوق محفوظة.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-wasit-navy hover:bg-wasit-teal text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
