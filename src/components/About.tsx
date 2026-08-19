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
      color: 'text-emerald-500 dark:text-emerald-400',
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
    <section id="about" className="section-shell relative overflow-hidden border-t border-[var(--theme-border)] bg-[var(--theme-bg-dark)] py-24">
      <div className="absolute left-0 top-1/2 h-72 w-72 rounded-full bg-wasit-teal/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-wasit-gold/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 sm:mb-16 max-w-3xl space-y-3 sm:space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-wasit-teal/30 bg-[var(--theme-bg-secondary)] px-3 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-wasit-teal">
            <img src="/icon-dark.png" alt="Wasit Icon" className="hidden dark:block h-3.5 w-auto object-contain" />
            <img src="/icon.png" alt="Wasit Icon" className="block dark:hidden h-3.5 w-auto object-contain" />
            <span>عن وسيط-تك (WASIT-TECH)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black leading-tight text-[var(--theme-text)]">
            نبتكر الحلول التقنية لتصنع{' '}
            <span className="inline-block text-gradient-teal-gold">التميز والتحول الفعلي</span>
          </h2>
          <p className="text-sm leading-relaxed text-[var(--theme-text-secondary)] sm:text-base lg:text-lg">
            تأسست وسيط-tek لتكون الجسر التقني والموثوق للشركات والمؤسسات، حيث نجمع بين خبرات البنية التحتية الصلبة، شبكات الاتصالات، وأحدث تطبيقات الذكاء الاصطناعي والأتمتة.
          </p>
        </div>

        <div className="mb-12 sm:mb-20 grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-3">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)]/80 p-5 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-wasit-teal/40 hover:shadow-md"
              >
                <div className="mb-4 sm:mb-6 flex items-center justify-between">
                  <div className={`flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-bg)] ${stat.color}`}>
                    <IconComponent className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <span className="rounded-full border border-[var(--theme-border)] bg-[var(--theme-bg)]/50 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-bold text-[var(--theme-text-muted)]">
                    مؤشر أداء
                  </span>
                </div>
                <div className="space-y-2">
                  <div className={`text-2xl font-extrabold tracking-tight sm:text-4xl ${stat.color}`}>
                    {stat.value}
                  </div>
                  <h3 className="text-base font-bold text-[var(--theme-text)] sm:text-lg">{stat.label}</h3>
                  <p className="text-xs leading-relaxed text-[var(--theme-text-muted)] sm:text-sm">{stat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-3">
          {values.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <div
                key={idx}
                className="group space-y-3 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] p-5 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-wasit-gold/40"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-wasit-gold/30 bg-wasit-gold/15 text-wasit-gold transition-transform group-hover:scale-110">
                  <IconComp className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--theme-text)] sm:text-xl">
                  <span>{val.title}</span>
                  <CheckCircle className="h-4 w-4 text-wasit-teal opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="text-xs leading-relaxed text-[var(--theme-text-secondary)] sm:text-sm">{val.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
