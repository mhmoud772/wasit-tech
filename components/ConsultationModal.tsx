'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { X, Sparkles, PhoneCall, CheckCircle2 } from 'lucide-react';
import { COMPANY, SERVICE_OPTIONS, DEFAULT_SERVICE, buildWhatsAppLink } from '../src/config';
import type { ServiceOption } from '../src/config';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(DEFAULT_SERVICE);
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = [
      `مرحباً ${COMPANY.nameShort}، أود طلب استشارة تقنية.`,
      `الاسم: ${name}`,
      `رقم الهاتف: ${phone}`,
      `الخدمة المستهدفة: ${service}`,
      details ? `تفاصيل المشروع: ${details}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-wasit-navy-dark border border-wasit-teal/40 shadow-2xl p-6 sm:p-8 overflow-hidden text-right glass-panel">
        {/* Close Button */}
        <button
          ref={closeBtnRef}
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="إغلاق النافذة"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-wasit-teal/20 border border-wasit-teal text-wasit-teal flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 animate-bounce" />
            </div>
            <h3 className="text-xl font-bold text-white" id="consultation-title">
              تم تجهيز طلب استشارتك بنجاح!
            </h3>
            <p className="text-sm text-slate-300">
              فتحنا لك نافذة واتساب مع فريق وسيط-تك. أكمل الرسالة وسيتواصل معك مهندس متخصص في أقرب وقت ممكن.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-wasit-teal text-white font-bold text-sm cursor-pointer"
            >
              حسناً، فهمت
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-wasit-teal/20 text-wasit-teal text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>طلب استشارة مجانية</span>
              </div>
              <h3 className="text-2xl font-black text-white" id="consultation-title">
                احصل على استشارة تقنية تخصصية
              </h3>
              <p className="text-xs text-slate-400">
                سجل بياناتك وسنقوم بدراسة متطلبات مشروعك وتقديم أنسب مسار تقني وأمني.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">الاسم الكامل</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثال: المهندس أحمد"
                  className="w-full px-4 py-3 rounded-xl bg-wasit-navy border border-white/10 text-white text-sm focus:border-wasit-teal outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">رقم الهاتف / الواتساب</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={COMPANY.phoneDisplay}
                  className="w-full px-4 py-3 rounded-xl bg-wasit-navy border border-white/10 text-white text-sm focus:border-wasit-teal outline-none dir-ltr text-right font-english"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">القطاع / نوع الخدمة المستهدفة</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value as ServiceOption)}
                  className="w-full px-4 py-3 rounded-xl bg-wasit-navy border border-white/10 text-white text-sm focus:border-wasit-teal outline-none cursor-pointer"
                >
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">نبذة عن المشروع أو التحديات (اختياري)</label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="اكتب ملاحظاتك التوضيحية..."
                  className="w-full px-4 py-3 rounded-xl bg-wasit-navy border border-white/10 text-white text-sm focus:border-wasit-teal outline-none resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-wasit-teal to-wasit-teal-dark hover:from-wasit-teal-light hover:to-wasit-teal border border-wasit-teal-light/30 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <span>جاري الإرسال...</span>
              ) : (
                <>
                  <PhoneCall className="w-4 h-4 text-wasit-gold" />
                  <span>تأكيد طلب الاستشارة</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
