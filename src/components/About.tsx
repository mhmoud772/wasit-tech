import { Target, Award, ShieldAlert, Cpu, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';

export default function About() {
  const stats = [
    {
      label: 'معدل استقرار الشبكات',
      value: '99.9%',
      desc: 'بنية تحتية متينة ومراقبة خوادم فورية مستمرة',
      icon: Cpu,
      color: 'text-wasit-teal',
    },
    {
      label: 'أتمتة العمليات والمعاملات',
      value: 'فائقة السرعة',
      desc: 'اختصار الوقت والجهد التشغيلي بنسبة تصل لـ 70%',
      icon: Sparkles,
      color: 'text-wasit-gold',
    },
    {
      label: 'دعم فني وتطوير متواصل',
      value: '24 / 7',
      desc: 'فريق استشاري وهندسي متخصص لضمان الاستمرارية',
      icon: ShieldAlert,
      color: 'text-emerald-400',
    },
  ];

  const values = [
    {
      title: 'الرؤية المستقبلية',
      description: 'تمكين المؤسسات والشركات من مواكبة التحول الرقمي العالمي بأحدث تقنيات الشبكات والأتمتة والذكاء الاصطناعي.',
      icon: Target,
    },
    {
      title: 'الجودة والأمان',
      description: 'تطبيق أعلى معايير الأمن السيبراني وحماية البيانات للحفاظ على استقرار واستدامة أعمال العملاء.',
      icon: Award,
    },
    {
      title: 'حلول عملية ومستدامة',
      description: 'نصمم حلولاً تقنية تفصيلية مرنة تناسب حجم أعمالك وتنمو وتتوسع مع طموحاتك بدون عوائق.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="about" className="py-24 bg-wasit-navy-dark relative overflow-hidden border-t border-white/5">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-wasit-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-wasit-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wasit-navy border border-wasit-teal/30 text-wasit-teal text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>عن وسيط-تك (WASIT-TECH)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            نبتكر الحلول التقنية لتصنع{' '}
            <span className="text-gradient-teal-gold">التميز والتحول الفعلي</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            تأسست وسيط-تك لتكون الجسر التقني والموثوق للشركات والمؤسسات، حيث نجمع بين خبرات البنية التحتية الصلبة، شبكات الاتصالات، وأحدث تطبيقات الذكاء الاصطناعي والأتمتة.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="relative group p-8 rounded-2xl bg-wasit-navy/80 border border-white/10 hover:border-wasit-teal/50 shadow-xl glass-card-hover transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-wasit-navy-light border border-white/10 flex items-center justify-center ${stat.color}`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    مؤشر أداء
                  </span>
                </div>
                <div className="space-y-2">
                  <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${stat.color}`}>
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-bold text-white">{stat.label}</h3>
                  <p className="text-sm text-slate-400 font-normal leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vision & Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-gradient-to-b from-wasit-navy to-wasit-navy-light/90 border border-wasit-gold/20 hover:border-wasit-gold/50 shadow-lg space-y-4 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-wasit-gold/15 border border-wasit-gold/30 flex items-center justify-center text-wasit-gold group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>{val.title}</span>
                  <CheckCircle className="w-4 h-4 text-wasit-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
