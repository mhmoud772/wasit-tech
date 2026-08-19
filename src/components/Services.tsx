import { Layers, Network, Bot, ArrowLeft, CheckCircle2, Cpu, Sparkles, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const serviceItems = [
    {
      id: 'digital-transformation',
      title: 'التحول الرقمي وتطوير الأنظمة',
      subtitle: 'Digital Transformation & Systems',
      description:
        'تحويل الأفكار والعمليات التقليدية إلى حلول تقنية عملية متكاملة وتطوير الأنظمة والتطبيقات الخاصة بمؤسستك بأحدث المنهجيات البرمجية.',
      icon: Layers,
      borderColor: 'border-wasit-teal/40',
      badgeColor: 'bg-wasit-teal/20 text-wasit-teal border-wasit-teal/30',
      accent: 'from-wasit-teal/15 via-transparent to-transparent',
      glow: 'shadow-[0_25px_50px_-25px_rgba(29,124,138,0.45)]',
      features: [
        'تطوير الأنظمة والتطبيقات المؤسسية وتخصيصها',
        'تحويل الأفكار التشغيلية إلى بيئة رقمية سهلة',
        'رقمنة للمعاملات وإلغاء الورقيات بطريقة آمنة',
        'تحسين تجربة المستخدم وواجهات التعامل الذكية',
      ],
    },
    {
      id: 'infrastructure-networks',
      title: 'البنية التحتية والشبكات',
      subtitle: 'Infrastructure & Network Security',
      description:
        'تصميم وتأمين الشبكات المعقدة، إدارة وتكوين السيرفرات والخوادم السحابية، وضمان استقرار الأداء ومنع حوادث التوقف أو تسريب البيانات.',
      icon: Network,
      borderColor: 'border-wasit-gold/40',
      badgeColor: 'bg-wasit-gold/20 text-wasit-gold border-wasit-gold/30',
      accent: 'from-wasit-gold/15 via-transparent to-transparent',
      glow: 'shadow-[0_25px_50px_-25px_rgba(197,160,89,0.38)]',
      features: [
        'تصميم وتجهيز وتأمين شبكات الاتصال والمعطيات',
        'إدارة السيرفرات وتكوين الخوادم وتأمين الاستضافة',
        'ضمان الاستقرار الفائق والتعافي المباشر من الأزمات',
        'مراقبة الأداء السيبراني والحماية من الثغرات',
      ],
    },
    {
      id: 'automation-ai',
      title: 'الأتمتة والذكاء الاصطناعي',
      subtitle: 'Smart Automation & AI Solutions',
      description:
        'أتمتة العمليات التشغيلية المكررة، رفع الكفاءة الإنتاجية، وتطبيق حلول الذكاء الاصطناعي التنبؤي والمساعدين التفاعليين لتطوير قرارات أعمالك.',
      icon: Bot,
      borderColor: 'border-emerald-500/40',
      badgeColor: 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30 dark:text-emerald-400',
      accent: 'from-emerald-500/15 via-transparent to-transparent',
      glow: 'shadow-[0_25px_50px_-25px_rgba(16,185,129,0.35)]',
      features: [
        'أتمتة خطوط سير العمليات التشغيلية بدون أخطاء',
        'دمج نماذج الذكاء الاصطناعي لتحليل البيانات',
        'بناء المساعدين الرقميين وتطبيق الشات بوت المؤسسي',
        'ربط وتطوير APIs والمزامنة الفورية للبيانات',
      ],
    },
  ];

  return (
    <section id="services" className="section-shell relative overflow-hidden bg-[var(--theme-bg)] py-16 sm:py-24">
      <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-wasit-teal/10 blur-3xl" />
      <div className="absolute bottom-10 left-1/3 h-96 w-96 rounded-full bg-wasit-gold/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 sm:mb-16 max-w-3xl space-y-3 sm:space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-wasit-teal/30 bg-[var(--theme-bg-secondary)] px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-wasit-teal">
            <Cpu className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>خدماتنا الأساسية</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black leading-tight text-[var(--theme-text)]">
            حلول متكاملة تغطي كافة{' '}
            <span className="inline-block text-gradient-teal-gold">احتياجات مؤسستك الرقمية</span>
          </h2>
          <p className="text-sm leading-relaxed text-[var(--theme-text-secondary)] sm:text-base lg:text-lg">
            نقدم ركائز ثلاث متصلة تمنح أعمالك السرعة، الأمان، والتفوق التنافسي في سوق متغير بسرعة.
          </p>
        </div>

          <div className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
            {[
              { value: '24/7', label: 'مراقبة مستمرة' },
              { value: '99.9%', label: 'استقرار أنظمتك' },
              { value: '3x', label: 'سرعة تنفيذ أعلى' },
            ].map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)]/80 px-3 py-2.5 text-center shadow-sm sm:px-4 sm:py-3">
                <div className="text-xl font-black text-[var(--theme-text)] sm:text-2xl">{metric.value}</div>
                <div className="text-[10px] text-[var(--theme-text-muted)] sm:text-[11px]">{metric.label}</div>
              </div>
            ))}
          </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-8 lg:grid-cols-3">
          {serviceItems.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between rounded-[22px] sm:rounded-[28px] border ${service.borderColor} bg-[var(--theme-bg-secondary)]/80 p-5 sm:p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${service.glow}`}
              >
                <div className={`absolute inset-x-0 top-0 h-24 sm:h-28 rounded-t-[22px] sm:rounded-t-[28px] bg-gradient-to-br ${service.accent}`} />

                <div className="relative space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-13 w-13 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] text-wasit-teal shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-wasit-gold/50">
                      <IconComp className="h-6 w-6 sm:h-8 sm:w-8 text-wasit-teal transition-colors group-hover:text-wasit-gold" />
                    </div>
                    <span className={`inline-flex items-center gap-1 sm:gap-1.5 rounded-full border px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold ${service.badgeColor}`}>
                      <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      <span>ركيزة أساسية</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[var(--theme-text)] sm:text-2xl transition-colors group-hover:text-wasit-teal-light">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-wasit-gold">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-xs leading-relaxed text-[var(--theme-text-secondary)] sm:text-sm">{service.description}</p>

                  <div className="space-y-2.5 border-t border-[var(--theme-border)] pt-3 sm:space-y-3 sm:pt-4">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-[11px] text-[var(--theme-text-secondary)] sm:text-sm">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 sm:h-4 sm:w-4 text-wasit-teal" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative mt-5 border-t border-[var(--theme-border)] pt-5 sm:mt-6 sm:pt-6">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-wasit-teal/30 bg-gradient-to-r from-wasit-teal to-wasit-teal-dark px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:brightness-110"
                  >
                    <span>طلب هذه الخدمة</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
