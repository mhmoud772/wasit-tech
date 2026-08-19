import { Building2, Landmark, Radio, HeartPulse, GraduationCap, Truck, ShieldCheck, Award } from 'lucide-react';

export default function Partners() {
  const sectors = [
    { name: 'المؤسسات الحكومية', icon: Building2, desc: 'أنظمة الربط وتأمين المعطيات' },
    { name: 'قطاع البنوك والمالية', icon: Landmark, desc: 'حماية الشبكات والأتمتة' },
    { name: 'شركات الاتصالات', icon: Radio, desc: 'إدارة السيرفرات والبنية التحتية' },
    { name: 'القطاع الصحي والمستشفيات', icon: HeartPulse, desc: 'رقمنة الملفات والتطبيقات' },
    { name: 'المؤسسات التعليمية والجامعات', icon: GraduationCap, desc: 'المنصات الذكية وقواعد البيانات' },
    { name: 'سلاسل الإمداد والخدمات اللوجستية', icon: Truck, desc: 'تتبع الشحنات والذكاء الاصطناعي' },
  ];

  return (
    <section id="partners" className="py-16 sm:py-20 bg-[var(--theme-bg-dark)] border-y border-[var(--theme-border)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full bg-[var(--theme-bg-secondary)] border border-wasit-gold/30 text-wasit-gold text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>شركاء النجاح والثقة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--theme-text)]">
            ثقتكم المتبادلة هي{' '}
            <span className="inline-block text-gradient-gold">ركيزة تميزنا المستمر</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--theme-text-secondary)] font-normal max-w-2xl mx-auto leading-relaxed">
            نعتز بتقديم الاستشارات والبنية التحتية والحلول التقنية المؤتمتة لمختلف القطاعات الحيوية لضمان نموها وربطها الرقمي المباشر.
          </p>
        </div>

        {/* Sectors & Client Categories Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {sectors.map((sec, idx) => {
            const IconComp = sec.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[var(--theme-bg-secondary)]/90 border border-[var(--theme-border)] hover:border-wasit-gold/40 flex flex-col items-center text-center space-y-2 sm:space-y-3 glass-card-hover group cursor-default"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[var(--theme-bg)] border border-[var(--theme-border)] flex items-center justify-center text-wasit-teal group-hover:text-wasit-gold group-hover:scale-110 transition-all">
                  <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-[var(--theme-text)] group-hover:text-wasit-gold transition-colors">
                  {sec.name}
                </div>
                <div className="text-[9px] sm:text-[11px] text-[var(--theme-text-muted)] font-normal">
                  {sec.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Appreciation Banner */}
        <div className="mt-10 sm:mt-16 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-wasit-teal/20 via-[var(--theme-bg)] to-wasit-gold/20 border border-wasit-teal/30 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-3 sm:gap-4 text-right">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-wasit-gold/20 flex items-center justify-center text-wasit-gold flex-shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-[var(--theme-text)]">هل ترغب في الانضمام لشراكتنا التقنية؟</div>
              <div className="text-[10px] sm:text-xs text-[var(--theme-text-secondary)]">نضمن لمؤسستك أفضل الحلول وأعلى مستويات الدعم الفني</div>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-[var(--theme-bg-dark)] bg-wasit-gold hover:bg-wasit-gold-light transition-colors shadow-lg flex-shrink-0"
          >
            تواصل لبدء الشراكة
          </a>
        </div>
      </div>
    </section>
  );
}
