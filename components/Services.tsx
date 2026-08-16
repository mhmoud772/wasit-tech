'use client';

import { Layers, Network, Bot, ArrowLeft, CheckCircle2, Cpu, Sparkles } from 'lucide-react';

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
      colorTheme: 'from-wasit-teal/20 via-wasit-navy to-wasit-navy-dark',
      borderColor: 'border-wasit-teal/40',
      badgeColor: 'bg-wasit-teal/20 text-wasit-teal border-wasit-teal/30',
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
      colorTheme: 'from-wasit-navy via-wasit-navy to-wasit-navy-dark',
      borderColor: 'border-wasit-gold/40',
      badgeColor: 'bg-wasit-gold/20 text-wasit-gold border-wasit-gold/30',
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
      colorTheme: 'from-wasit-teal/15 via-wasit-navy to-wasit-navy-dark',
      borderColor: 'border-wasit-teal-light/40',
      badgeColor: 'bg-wasit-teal-light/20 text-wasit-teal-light border-wasit-teal-light/30',
      features: [
        'أتمتة خطوط سير العمليات التشغيلية بدون أخطاء',
        'دمج نماذج الذكاء الاصطناعي لتحليل البيانات',
        'بناء المساعدين الرقميين وتطبيق الشات بوت المؤسسي',
        'ربط وتطوير APIs والمزامنة الفورية للبيانات',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-wasit-navy relative overflow-hidden">
      {/* Background Subtle Mesh Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-wasit-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-wasit-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wasit-navy-light border border-wasit-teal/30 text-wasit-teal text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>خدماتنا الأساسية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            حلول متكاملة تغطي كافة{' '}
            <span className="text-gradient-teal-gold">احتياجات مؤسستك الرقمية</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            نقدم ركائز ثلاث متصلة تمنح أعمالك السرعة، الأمان، والتفوق التنافسي في سوق متغير بسرعة.
          </p>
        </div>

        {/* 3 Interactive Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceItems.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className={`relative rounded-3xl bg-gradient-to-b ${service.colorTheme} border ${service.borderColor} p-8 flex flex-col justify-between shadow-2xl glass-card-hover group`}
              >
                {/* Top Badge & Icon */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-wasit-navy-dark/90 border border-white/10 flex items-center justify-center text-wasit-teal group-hover:scale-110 group-hover:border-wasit-gold/50 transition-all duration-300 shadow-xl">
                      <IconComp className="w-8 h-8 text-wasit-teal group-hover:text-wasit-gold transition-colors" />
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${service.badgeColor}`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>ركيزة أساسية</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-wasit-teal-light transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-wasit-gold font-semibold tracking-wider uppercase mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-wasit-teal flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-8 mt-6 border-t border-white/10">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-wasit-navy-light/90 hover:bg-wasit-teal border border-wasit-teal/30 hover:border-wasit-teal group-hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <span>طلب هذه الخدمة</span>
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
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
