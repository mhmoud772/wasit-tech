import { ArrowLeft, BrainCircuit, Gauge, Rocket, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: 'أمان وقابلية تشغيل عالية',
      description: 'نصمم بنية تحتية آمنة ومرنة، مع مراقبة مستمرة لتقليل المخاطر وتعزيز الاستقرار.',
    },
    {
      icon: Rocket,
      title: 'خطة تنفيذ عملية',
      description: 'نبدأ من تحليل واقع مؤسستك إلى تطبيق حلول قابلة للقياس، مع تركيز واضح على النتائج التشغيلية.',
    },
    {
      icon: BrainCircuit,
      title: 'ذكاء صناعي حقيقي',
      description: 'نستفيد من التحليلات والتشغيل الذكي لتقليل الهدر وزيادة كفاءة الفرق والعمليات.',
    },
    {
      icon: Gauge,
      title: 'أداء قياسي قابل للتدقيق',
      description: 'نركز على مؤشرات الأداء الأساسية واختبارات الاستجابة لضمان أن الحلول تحقق قيمة ملموسة.',
    },
  ];

  const steps = [
    { title: 'الفهم والتحليل', hint: 'نحدد التحديات الحالية ومتطلبات النمو.', number: '01' },
    { title: 'التصميم والتنفيذ', hint: 'نقترح الخطة التقنية ونبني الحلات العملية.', number: '02' },
    { title: 'التحسين المستمر', hint: 'نراقب الأداء ونطور الاستجابة مع توسع العمل.', number: '03' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[var(--theme-bg)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(29,124,138,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(197,160,89,0.10),_transparent_35%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[var(--theme-bg-secondary)] border border-wasit-teal/30 text-wasit-teal text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <span>لماذا وسيط-tek؟</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[var(--theme-text)] leading-tight">
            شراكة تقنية مبنية على <span className="inline-block text-gradient-teal-gold">النتائج والاعتمادية</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[var(--theme-text-secondary)] leading-relaxed">
            نربط بين الخبرة التقنية، فهم احتياجات الأعمال، والالتزام بتقديم حلول قابلة للتنفيذ والاستمرار.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl sm:rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)]/80 p-5 sm:p-6 shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 sm:mb-5 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-wasit-teal/10 text-wasit-teal border border-wasit-teal/20 group-hover:scale-105 transition-transform">
                <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-base sm:text-xl font-bold text-[var(--theme-text)]">{title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--theme-text-secondary)]">{description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl sm:rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)]/80 p-4 sm:p-6 lg:p-8 shadow-xl">
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-end sm:justify-between mb-6 sm:mb-8">
            <div>
              <div className="mb-1.5 sm:mb-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-wasit-gold">مراحل عملنا</div>
              <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-[var(--theme-text)]">من الفكرة إلى التنفيذ بثقة</h3>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-wasit-teal px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-wasit-teal-dark"
            >
              <span>ابدأ مشروعك</span>
              <ArrowLeft className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-6">
            {steps.map(({ title, hint, number }) => (
              <div key={number} className="rounded-xl sm:rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg)] p-4 sm:p-6">
                <div className="mb-3 sm:mb-4 text-xs font-black tracking-[0.25em] text-wasit-gold">{number}</div>
                <h4 className="mb-1.5 sm:mb-2 text-base sm:text-xl font-bold text-[var(--theme-text)]">{title}</h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[var(--theme-text-secondary)]">{hint}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
