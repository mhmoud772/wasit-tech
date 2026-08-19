import { useState, useEffect, FormEvent } from 'react';
import { Phone, Mail, Globe, Send, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { COMPANY, SERVICE_OPTIONS, DEFAULT_SERVICE, buildWhatsAppLink } from '../config';

interface ContactProps {
  selectedServicePreFill?: string;
}

export default function Contact({ selectedServicePreFill = '' }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: selectedServicePreFill || DEFAULT_SERVICE,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedServicePreFill && selectedServicePreFill !== formData.serviceType) {
      setFormData((prev) => ({ ...prev, serviceType: selectedServicePreFill }));
    }
  }, [selectedServicePreFill]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = [
      `مرحباً ${COMPANY.nameShort}،`,
      `الاسم: ${formData.name}`,
      `البريد الإلكتروني: ${formData.email}`,
      `رقم الهاتف: ${formData.phone}`,
      `الخدمة المطلوبة: ${formData.serviceType}`,
      '',
      formData.message,
    ].join('\n');

    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[var(--theme-bg)] relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-wasit-teal/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-wasit-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[var(--theme-bg-secondary)] border border-wasit-teal/30 text-wasit-teal text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>تواصل معنا والربط المباشر</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[var(--theme-text)] leading-tight">
            نحن هنا لنبدأ{' '}
            <span className="inline-block text-gradient-teal-gold">رحلة التحول معاً</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[var(--theme-text-secondary)] font-normal leading-relaxed">
            أرسل لنا تفاصيل استفسارك أو طلب الخدمة، وسيقوم فريقنا الهندسي والاستشاري بالتواصل معك مباشرة في أسرع وقت.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-12 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Main Details Card */}
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[var(--theme-bg-dark)] border border-wasit-teal/30 shadow-2xl space-y-6 glass-panel">
              <div className="space-y-2 border-b border-[var(--theme-border)] pb-4 sm:pb-6">
                <div className="text-[10px] sm:text-xs text-wasit-gold font-bold uppercase tracking-wider">وسائط التواصل المباشرة</div>
                <h3 className="text-lg sm:text-2xl font-bold text-[var(--theme-text)]">معلومات الاتصال بالشركة</h3>
                <p className="text-[10px] sm:text-xs text-[var(--theme-text-muted)]">يسعدنا استقبال اتصالاتكم واستفساراتكم على مدار الأسبوع.</p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {/* Phone */}
                <a
                  href={`tel:+${COMPANY.phoneE164}`}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[var(--theme-bg-secondary)]/60 border border-[var(--theme-border)] hover:border-wasit-teal/40 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-wasit-teal/20 border border-wasit-teal/40 flex items-center justify-center text-wasit-teal group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-[var(--theme-text-muted)] font-medium">رقم الهاتف المباشر</div>
                    <div className="text-sm sm:text-lg font-extrabold text-[var(--theme-text)] dir-ltr font-english group-hover:text-wasit-teal transition-colors">
                      {COMPANY.phoneDisplay}
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[var(--theme-bg-secondary)]/60 border border-[var(--theme-border)] hover:border-wasit-teal/40 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-wasit-gold/20 border border-wasit-gold/40 flex items-center justify-center text-wasit-gold group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-[var(--theme-text-muted)] font-medium">البريد الإلكتروني الرسمي</div>
                    <div className="text-sm sm:text-lg font-bold text-[var(--theme-text)] font-english group-hover:text-wasit-gold transition-colors truncate">
                      {COMPANY.email}
                    </div>
                  </div>
                </a>

                {/* Domain */}
                <a
                  href={COMPANY.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[var(--theme-bg-secondary)]/60 border border-[var(--theme-border)] hover:border-wasit-teal/40 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-500 dark:text-emerald-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-[var(--theme-text-muted)] font-medium">النطاق والموقع الإلكتروني</div>
                    <div className="text-sm sm:text-lg font-bold text-[var(--theme-text)] font-english group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                      {COMPANY.website.replace('https://', '')}
                    </div>
                  </div>
                </a>
              </div>

              {/* Working Hours Badge */}
              <div className="pt-4 border-t border-[var(--theme-border)] flex items-center justify-between text-xs text-[var(--theme-text-muted)]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-wasit-gold" />
                  <span>ساعات الاستجابة: 24/7</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-wasit-teal" />
                  <span>دعم مباشر وأونلاين</span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Box */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-50 dark:from-emerald-950/60 to-[var(--theme-bg-dark)] border border-emerald-500/30 flex items-center justify-between gap-3 sm:gap-4">
              <div className="space-y-0.5 sm:space-y-1">
                <div className="text-xs sm:text-sm font-bold text-[var(--theme-text)] flex items-center gap-1.5">
                  <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 dark:text-emerald-400" />
                  <span>تواصل السريع عبر واتساب؟</span>
                </div>
                <div className="text-[10px] sm:text-xs text-[var(--theme-text-secondary)]">رد فوري مع الاستشاري التقني</div>
              </div>
              <a
                href={buildWhatsAppLink(`مرحباً ${COMPANY.nameShort}، أود التواصل المباشر حول الخدمات التقنية.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-[10px] sm:text-xs shadow-lg transition-colors flex-shrink-0"
              >
                مراسلة الآن
              </a>
            </div>
          </div>

          {/* Interactive Contact Form (Right Side) */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[var(--theme-bg-dark)]/90 border border-wasit-gold/30 shadow-2xl relative overflow-hidden glass-panel">
              {submitted ? (
                <div className="py-10 sm:py-16 text-center space-y-4 sm:space-y-6 animate-in zoom-in-95 duration-500">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-wasit-teal/20 border-2 border-wasit-teal flex items-center justify-center text-wasit-teal mx-auto">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-[var(--theme-text)]">تم إرسال رسالتك بنجاح!</h3>
                    <p className="text-sm text-[var(--theme-text-secondary)] max-w-md mx-auto">
                      شكراً لتواصلك مع وسيط-تك. قام نظامنا بتوجيه طلبك إلى الفريق المختص، وسنتواصل معك على البريد أو الهاتف قريباً.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        serviceType: DEFAULT_SERVICE,
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl font-bold text-sm text-wasit-teal bg-[var(--theme-bg-secondary)] border border-wasit-teal/40 hover:bg-wasit-teal hover:text-white transition-all cursor-pointer"
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between border-b border-[var(--theme-border)] pb-3 sm:pb-4">
                    <h3 className="text-base sm:text-xl font-extrabold text-[var(--theme-text)] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-wasit-gold" />
                      <span>نموذج التواصل وطلب الخدمات</span>
                    </h3>
                    <span className="text-[10px] sm:text-xs text-[var(--theme-text-muted)]">* جميع الحقول مطلوبة</span>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                    {/* Full Name */}
                    <div className="space-y-1.5 text-right">
                      <label className="block text-[10px] sm:text-xs font-bold text-[var(--theme-text-secondary)]">الاسم الكامل</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="مثال: المهندس أحمد علي"
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] focus:border-wasit-teal focus:ring-1 focus:ring-wasit-teal text-[var(--theme-text)] placeholder-[var(--theme-text-muted)] text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5 text-right">
                      <label className="block text-[10px] sm:text-xs font-bold text-[var(--theme-text-secondary)]">البريد الإلكتروني</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] focus:border-wasit-teal focus:ring-1 focus:ring-wasit-teal text-[var(--theme-text)] placeholder-[var(--theme-text-muted)] text-xs sm:text-sm outline-none transition-all font-english"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                    {/* Phone Number */}
                    <div className="space-y-1.5 text-right">
                      <label className="block text-[10px] sm:text-xs font-bold text-[var(--theme-text-secondary)]">رقم الهاتف / الواتساب</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+967 777 550 9234"
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] focus:border-wasit-teal focus:ring-1 focus:ring-wasit-teal text-[var(--theme-text)] placeholder-[var(--theme-text-muted)] text-xs sm:text-sm outline-none transition-all dir-ltr text-right font-english"
                      />
                    </div>

                    {/* Service Type */}
                    <div className="space-y-1.5 text-right">
                      <label className="block text-[10px] sm:text-xs font-bold text-[var(--theme-text-secondary)]">نوع الخدمة المطلوب</label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] focus:border-wasit-teal focus:ring-1 focus:ring-wasit-teal text-[var(--theme-text)] text-xs sm:text-sm outline-none transition-all cursor-pointer"
                      >
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 text-right">
                    <label className="block text-[10px] sm:text-xs font-bold text-[var(--theme-text-secondary)]">تفاصيل الرسالة أو المشروعات</label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="اكتب هنا التفاصيل المتعلقة بنطاق عملك أو الاستفسار المباشر..."
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] focus:border-wasit-teal focus:ring-1 focus:ring-wasit-teal text-[var(--theme-text)] placeholder-[var(--theme-text-muted)] text-xs sm:text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 sm:py-4 sm:px-6 rounded-xl font-extrabold text-sm sm:text-base text-white bg-gradient-to-r from-wasit-teal to-wasit-teal-dark hover:from-wasit-teal-light hover:to-wasit-teal border border-wasit-teal-light/40 shadow-xl shadow-wasit-teal/20 transition-all duration-300 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span>جاري المعالجة والإرسال...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>إرسال الرسالة الآن</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
