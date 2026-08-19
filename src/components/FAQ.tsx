import { useState } from 'react';
import { ChevronDown, CircleHelp } from 'lucide-react';

const faqs = [
  {
    question: 'ما هي الخدمات التي تقدمها وسيط-تك؟',
    answer:
      'نقدم خدمات التحول الرقمي، تطوير الأنظمة المؤسسية، تأمين الشبكات والبنية التحتية، الأتمتة، والذكاء الاصطناعي، مع دعم فني مستمر ومراقبة دقيقة للأداء.',
  },
  {
    question: 'هل يمكنكم العمل مع الشركات الصغيرة والمتوسطة؟',
    answer:
      'نعم، نحن نعمل مع مختلف أحجام المؤسسات، ونصمم الحلول بما يتناسب مع مرحلة نمو المؤسسة ومتطلبات التشغيل والميزانية المتاحة.',
  },
  {
    question: 'كيف يتم التواصل مع الفريق؟',
    answer:
      'يمكنك إرسال تفاصيل طلبك عبر نموذج الاتصال أو عبر واتساب مباشرة. سنتواصل معك لتحديد الاحتياج الفني ثم نعرض لك الخطة الأنسب.',
  },
  {
    question: 'هل توفرون دعمًا بعد التنفيذ؟',
    answer:
      'بالتأكيد. نقدم دعمًا مستمرًا للمراقبة، التحديثات، الاستجابة السريعة، وتحسينات الأداء بناءً على احتياجات التشغيل الحقيقي.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-shell relative overflow-hidden bg-[var(--theme-bg-dark)] py-16 sm:py-24">
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-wasit-teal/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 sm:mb-16 max-w-3xl space-y-3 sm:space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-wasit-gold/30 bg-[var(--theme-bg-secondary)] px-3.5 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-wasit-gold">
            <CircleHelp className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>الأسئلة الشائعة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black leading-tight text-[var(--theme-text)]">
            كل ما تحتاج معرفته قبل {' '}
            <span className="inline-block text-gradient-teal-gold">بدء مشروعك التقني</span>
          </h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-3 sm:space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl sm:rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)] shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 text-right"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-[var(--theme-text)] sm:text-lg">{item.question}</span>
                  <span
                    className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-bg)] transition-transform flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-wasit-teal" />
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-[var(--theme-border)] px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm leading-relaxed text-[var(--theme-text-secondary)]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
