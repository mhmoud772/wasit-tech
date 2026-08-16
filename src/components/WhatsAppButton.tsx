import WhatsAppIcon from './icons/WhatsAppIcon';
import { COMPANY, DEFAULT_WHATSAPP_MESSAGE, buildWhatsAppLink } from '../config';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip on Hover */}
      <div className="absolute bottom-full right-0 mb-3 hidden group-hover:block whitespace-nowrap bg-wasit-navy-dark text-white text-xs font-bold px-4 py-2 rounded-xl border border-wasit-teal/40 shadow-2xl animate-in fade-in duration-200">
        <span className="text-wasit-gold">واتساب وسيط-تك:</span> {COMPANY.phoneDisplay}
        <div className="absolute top-full right-5 border-4 border-transparent border-t-wasit-navy-dark" />
      </div>

      <a
        href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر الواتساب مع وسيط-تك"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white/20"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60 pointer-events-none" />

        <WhatsAppIcon className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
}
