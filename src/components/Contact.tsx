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
    <section id="contact" className="py-24 bg-wasit-navy relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-wasit-teal/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-wasit-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wasit-navy-light border border-wasit-teal/30 text-wasit-teal text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>تواصل معنا والربط المباشر</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            نحن هنا لنبدأ{' '}
            <span className="text-gradient-teal-gold">رحلة التحول معاً</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            أرسل لنا تفاصيل استفسارك أو طلب الخدمة، وسيقوم فريقنا الهندسي والاستشاري بالتواصل معك مباشرة في أسرع وقت.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Details Card */}
            <div className="p-8 rounded-3xl bg-wasit-navy-dark border border-wasit-teal/30 shadow-2xl space-y-8 glass-panel">
              <div className="space-y-2 border-b border-white/10 pb-6">
                <div className="text-xs text-wasit-gold font-bold uppercase tracking-wider">وسائط التواصل المباشرة</div>
                <h3 className="text-2xl font-bold text-white">معلومات الاتصال بالشركة</h3>
                <p className="text-xs text-slate-400">يسعدنا استقبال اتصالاتكم واستفساراتكم على مدار الأسبوع.</p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${COMPANY.phoneE164}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-wasit-navy-light/60 border border-white/5 hover:border-wasit-teal/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-wasit-teal/20 border border-wasit-teal/40 flex items-center justify-center text-wasit-teal group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">رقم الهاتف المباشر</div>
                    <div className="text-lg font-extrabold text-white dir-ltr font-english group-hover:text-wasit-teal transition-colors">
                      {COMPANY.phoneDisplay}
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-wasit-navy-light/60 border border-white/5 hover:border-wasit-teal/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-wasit-gold/20 border border-wasit-gold/40 flex items-center justify-center text-wasit-gold group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">البريد الإلكتروني الرسمي</div>
                    <div className="text-lg font-bold text-white font-english group-hover:text-wasit-gold transition-colors">
                      {COMPANY.email}
                    </div>
                  </div>
                </a>

                {/* Domain */}
                <a
                  href={COMPANY.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-wasit-navy-light/60 border border-white/5 hover:border-wasit-teal/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">النطاق والموقع الإلكتروني</div>
                    <div className="text-lg font-bold text-white font-english group-hover:text-emerald-400 transition-colors">
                      {COMPANY.website.replace('https://', '')}
                    </div>
                  </div>
                </a>
              </div>

              {/* Working Hours Badge */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
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
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-wasit-navy-dark border border-emerald-500/30 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                  <span>تفضل التواصل السريع عبر واتساب؟</span>
                </div>
                <div className="text-xs text-slate-300">رد فوري ومستقيم مع الاستشاري التقني</div>
              </div>
              <a
                href={buildWhatsAppLink(`مرحباً ${COMPANY.nameShort}، أود التواصل المباشر حول الخدمات التقنية.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-lg transition-colors flex-shrink-0"
              >
                مراسلة الآن
              </a>
            </div>
          </div>

          {/* Interactive Contact Form (Right Side) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-wasit-navy-dark/90 border border-wasit-gold/30 shadow-2xl relative overflow-hidden glass-panel">
              {submitted ? (
                <div className="py-16 text-center space-y-6 animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 rounded-full bg-wasit-teal/20 border-2 border-wasit-teal flex items-center justify-center text-wasit-teal mx-auto">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white">تم إرسال رسالتك بنجاح!</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
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
                    className="px-6 py-2.5 rounded-xl font-bold text-sm text-wasit-teal bg-wasit-navy border border-wasit-teal/40 hover:bg-wasit-teal hover:text-white transition-all cursor-pointer"
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-wasit-gold" />
                      <span>نموذج التواصل وطلب الخدمات</span>
                    </h3>
                    <span className="text-xs text-slate-400">* جميع الحقول مطلوبة</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2 text-right">
                      <label className="block text-xs font-bold text-slate-200">الاسم الكامل</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="مثال: المهندس أحمد علي"
                        className="w-full px-4 py-3 rounded-xl bg-wasit-navy/90 border border-white/10 focus:border-wasit-teal focus:ring-1 focus:ring-wasit-teal text-white placeholder-slate-500 text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2 text-right">
                      <label className="block text-xs font-bold text-slate-200">البريد الإلكتروني</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-wasit-navy/90 border border-white/10 focus:border-wasit-teal focus:ring-1 focus:ring-wasit-teal text-white placeholder-slate-500 text-sm outline-none transition-all font-english"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div className="space-y-2 text-right">
                      <label className="block text-xs font-bold text-slate-200">رقم الهاتف / الواتساب</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+967 777 550 9234"
                        className="w-full px-4 py-3 rounded-xl bg-wasit-navy/90 border border-white/10 focus:border-wasit-teal focus:ring-1 focus:ring-wasit-teal text-white placeholder-slate-500 text-sm outline-none transition-all dir-ltr text-right font-english"
                      />
                    </div>

                    {/* Service Type */}
                    <div className="space-y-2 text-right">
                      <label className="block text-xs font-bold text-slate-200">نوع الخدمة المطلوب</label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-wasit-navy/90 border border-white/10 focus:border-wasit-teal focus:ring-1 focus:ring-wasit-teal text-white text-sm outline-none transition-all cursor-pointer"
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
                  <div className="space-y-2 text-right">
                    <label className="block text-xs font-bold text-slate-200">تفاصيل الرسالة أو المشروعات</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="اكتب هنا التفاصيل المتعلقة بنطاق عملك أو الاستفسار المباشر..."
                      className="w-full px-4 py-3 rounded-xl bg-wasit-navy/90 border border-white/10 focus:border-wasit-teal focus:ring-1 focus:ring-wasit-teal text-white placeholder-slate-500 text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-extrabold text-base text-white bg-gradient-to-r from-wasit-teal to-wasit-teal-dark hover:from-wasit-teal-light hover:to-wasit-teal border border-wasit-teal-light/40 shadow-xl shadow-wasit-teal/20 transition-all duration-300 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
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
