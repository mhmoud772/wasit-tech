'use client';

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
    <section id="partners" className="py-20 bg-wasit-navy-dark border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-wasit-navy border border-wasit-gold/30 text-wasit-gold text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>شركاء النجاح والثقة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            ثقتكم المتبادلة هي{' '}
            <span className="text-gradient-gold">ركيزة تميزنا المستمر</span>
          </h2>
          <p className="text-base text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            نعتز بتقديم الاستشارات والبنية التحتية والحلول التقنية المؤتمتة لمختلف القطاعات الحيوية لضمان نموها وربطها الرقمي المباشر.
          </p>
        </div>

        {/* Sectors & Client Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sectors.map((sec, idx) => {
            const IconComp = sec.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-wasit-navy/90 border border-white/5 hover:border-wasit-gold/40 flex flex-col items-center text-center space-y-3 glass-card-hover group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-wasit-navy-light border border-white/10 flex items-center justify-center text-wasit-teal group-hover:text-wasit-gold group-hover:scale-110 transition-all">
                  <IconComp className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-white group-hover:text-wasit-gold transition-colors">
                  {sec.name}
                </div>
                <div className="text-[11px] text-slate-400 font-normal">
                  {sec.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Appreciation Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-wasit-teal/20 via-wasit-navy to-wasit-gold/20 border border-wasit-teal/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-right">
            <div className="w-12 h-12 rounded-full bg-wasit-gold/20 flex items-center justify-center text-wasit-gold flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white">هل ترغب في الانضمام لشراكتنا التقنية؟</div>
              <div className="text-xs text-slate-300">نضمن لمؤسستك أفضل الحلول وأعلى مستويات الدعم الفني</div>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-bold text-sm text-wasit-navy bg-wasit-gold hover:bg-wasit-gold-light transition-colors shadow-lg flex-shrink-0"
          >
            تواصل لبدء الشراكة
          </a>
        </div>
      </div>
    </section>
  );
}
