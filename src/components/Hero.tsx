import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Lock,
  Server,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const trustPoints = [
    'استقرار فائق 99.9%',
    'أتمتة تشغيلية ذكية',
    'دعم فني مستمر',
  ];

  const insightCards = [
    { label: 'مشاريع محققة', value: '120+' },
    { label: 'وقت تشغيل', value: '99.9%' },
    { label: 'توفير وقت', value: '43%' },
  ];

  const brandNames = ['Enterprise', 'Cloud', 'Security', 'Automation', 'AI', 'Ops'];

  const systemStatus = [
    { name: 'خادم الأتمتة', value: '99.94%', tone: 'teal' },
    { name: 'الأمان', value: '100%', tone: 'gold' },
    { name: 'المراقبة', value: '24/7', tone: 'emerald' },
  ];

  return (
    <section
      id="hero"
        className="section-shell relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--theme-bg)] pb-14 sm:pb-20 pt-0 sm:pt-4 text-[var(--theme-text)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_var(--theme-bg),_var(--theme-bg-secondary),_var(--theme-bg-dark))] opacity-95" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[var(--theme-bg-secondary)]/40 to-transparent" />
      <div className="premium-glow premium-glow-left" />
      <div className="premium-glow premium-glow-right" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-6 sm:space-y-8 text-right lg:col-span-6">
              <div className="space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-wasit-teal/30 bg-[var(--theme-bg-secondary)]/80 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-wasit-teal shadow-sm backdrop-blur-sm">
                <img src="/icon-dark.png" alt="Wasit Icon" className="hidden dark:block h-4 w-auto object-contain" />
                <img src="/icon.png" alt="Wasit Icon" className="block dark:hidden h-4 w-auto object-contain" />
                <span>WASIT-TECH</span>
              </div>

              <h1 className="text-3xl font-black leading-normal sm:leading-tight tracking-tight text-[var(--theme-text)] sm:text-5xl lg:text-6xl">
                نُحوّل البنية التقنية إلى
                <span className="mt-2 inline-block text-gradient-teal-gold">ميزة تنافسية حقيقية</span>
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-[var(--theme-text-secondary)] sm:text-base lg:text-lg">
                نساعد المؤسسات على بناء أنظمة أكثر أماناً، أتمتة ذكية، وتجربة عملاء متميزة ترفع الكفاءة وتقلل التكاليف مع الحفاظ على التوسع المستقبلي.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="premium-button cursor-pointer !py-3 !px-5 text-xs sm:!py-3.5 sm:!px-6 sm:text-sm"
              >
                <span>احجز استشارة مجانية</span>
                <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <a href="#services" className="secondary-button !py-3 !px-5 text-xs sm:!py-3.5 sm:!px-6 sm:text-sm">
                <span>استكشف الخدمات</span>
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>

            <div className="rounded-[20px] sm:rounded-[24px] border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)]/75 p-3 sm:p-4 shadow-[0_15px_40px_-25px_rgba(15,23,42,0.45)] backdrop-blur-sm">
              <div className="mb-2.5 sm:mb-3 flex items-center gap-2 text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--theme-text-muted)]">
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500" />
                Trusted by modern teams
              </div>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {brandNames.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-full border border-[var(--theme-border)] bg-[var(--theme-bg)] px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[11px] font-semibold text-[var(--theme-text-secondary)]"
                  >
                    {brand}
                  </span>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                {insightCards.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-[var(--theme-border)] bg-[var(--theme-bg)] p-2 sm:p-2.5">
                    <div className="text-sm font-black text-[var(--theme-text)] sm:text-lg">{stat.value}</div>
                    <div className="text-[9px] text-[var(--theme-text-muted)] sm:text-[10px]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {trustPoints.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)]/80 px-2.5 py-1.5 sm:px-3 sm:py-2 text-[10px] sm:text-xs font-semibold text-[var(--theme-text-secondary)]"
                >
                  <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-wasit-gold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="absolute -left-8 top-10 hidden rounded-full border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)]/90 px-3 py-2 text-[11px] font-bold text-[var(--theme-text-secondary)] shadow-lg lg:flex">
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                النظام يعمل بكفاءة
              </span>
            </div>

            <div className="hero-panel w-full overflow-hidden rounded-[22px] sm:rounded-[30px] border border-[var(--theme-card-border)] bg-[var(--theme-card-bg)] shadow-[0_35px_90px_-35px_rgba(15,23,42,0.35)] ring-1 ring-white/5 text-right font-arabic backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-[var(--theme-border)] bg-[var(--theme-bg-secondary)] px-3 py-2.5 sm:px-4 sm:py-3">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="inline-block h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-rose-500/80" />
                  <span className="inline-block h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-amber-500/80" />
                  <span className="inline-block h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[11px] font-semibold text-[var(--theme-text-secondary)]">
                  <Server className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-wasit-teal" />
                  <span>Infrastructure Monitor</span>
                </div>
                <span className="rounded border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 sm:px-2 text-[8px] sm:text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
                  LIVE
                </span>
              </div>

              <div className="p-3 sm:p-4 md:p-5">
                <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr] md:gap-4">
                  <div className="rounded-[18px] sm:rounded-[24px] border border-[var(--theme-border)] bg-[linear-gradient(135deg,rgba(29,124,138,0.12),rgba(197,160,89,0.08),rgba(15,23,42,0.04))] p-3 sm:p-4">
                    <div className="flex items-center justify-between text-[9px] sm:text-[11px] font-semibold text-[var(--theme-text-secondary)]">
                      <span>تحسين الأداء</span>
                      <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 sm:px-2 text-[8px] sm:text-[10px] text-emerald-600 dark:text-emerald-400">
                        +236%
                      </span>
                    </div>

                    <div className="mt-3 sm:mt-5">
                      <div className="text-2xl sm:text-4xl font-black text-[var(--theme-text)]">+236%</div>
                      <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-[var(--theme-text-secondary)]">تحسن في كفاءة التشغيل</div>
                    </div>

                    <div className="mt-5 space-y-2.5 sm:space-y-3">
                      {[
                        { label: 'التفاعل', value: 86 },
                        { label: 'الاستقرار', value: 92 },
                        { label: 'الأمان', value: 97 },
                      ].map((item) => (
                        <div key={item.label}>
                          <div className="mb-1 flex items-center justify-between text-[10px] text-[var(--theme-text-secondary)]">
                            <span>{item.label}</span>
                            <span>{item.value}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-white/30">
                            <div
                              className="h-2 rounded-full bg-gradient-to-r from-wasit-teal via-cyan-400 to-wasit-gold"
                              style={{ width: `${item.value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3">
                    {systemStatus.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-xl sm:rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)]/90 p-2.5 sm:p-3.5 shadow-sm"
                      >
                        <div className="mb-1.5 sm:mb-2 flex items-center justify-between text-[8px] sm:text-[10px] text-[var(--theme-text-secondary)]">
                          <span>{item.name}</span>
                          <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 sm:px-2 text-[7px] sm:text-[9px] font-semibold text-emerald-600 dark:text-emerald-400">
                            Online
                          </span>
                        </div>
                        <div className="flex items-end justify-between gap-2">
                          <div className="text-xl font-black text-[var(--theme-text)] sm:text-2xl">{item.value}</div>
                          <div
                            className={
                              item.tone === 'teal'
                                ? 'h-8 w-1.5 rounded-full bg-gradient-to-t from-wasit-teal to-cyan-300 sm:h-10'
                                : item.tone === 'gold'
                                  ? 'h-8 w-1.5 rounded-full bg-gradient-to-t from-wasit-gold to-amber-300 sm:h-10'
                                  : 'h-8 w-1.5 rounded-full bg-gradient-to-t from-emerald-500 to-emerald-300 sm:h-10'
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)]/90 p-3">
                    <div className="mb-2 flex items-center gap-2 text-[10px] text-[var(--theme-text-secondary)]">
                      <Cpu className="h-3.5 w-3.5 text-wasit-teal" />
                      <span>الأتمتة</span>
                    </div>
                    <div className="text-base font-black text-[var(--theme-text)] sm:text-lg">1480/hr</div>
                  </div>

                  <div className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)]/90 p-3">
                    <div className="mb-2 flex items-center gap-2 text-[10px] text-[var(--theme-text-secondary)]">
                      <ShieldCheck className="h-3.5 w-3.5 text-wasit-gold" />
                      <span>الحماية</span>
                    </div>
                    <div className="text-base font-black text-[var(--theme-text)] sm:text-lg">مشفر</div>
                  </div>

                  <div className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)]/90 p-3">
                    <div className="mb-2 flex items-center gap-2 text-[10px] text-[var(--theme-text-secondary)]">
                      <Lock className="h-3.5 w-3.5 text-emerald-500" />
                      <span>التحكم</span>
                    </div>
                    <div className="text-base font-black text-[var(--theme-text)] sm:text-lg">24/7</div>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 rounded-xl sm:rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-bg-secondary)]/85 p-2.5 sm:p-3">
                  <div className="flex items-center justify-between gap-2 sm:gap-3 text-[9px] sm:text-[11px] font-semibold text-[var(--theme-text-secondary)]">
                    <span className="flex items-center gap-1.5 sm:gap-2">
                      <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-wasit-teal animate-pulse" />
                      اتصالات وأنظمة مراقبة فورية
                    </span>
                    <span className="text-[8px] sm:text-[10px] text-[var(--theme-text-muted)]">14ms latency</span>
                  </div>

                  <div className="mt-3 flex items-end gap-1 sm:gap-2">
                    {[42, 58, 48, 76, 90, 84, 78, 96, 86, 74, 92, 100].map((height, index) => (
                      <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-wasit-teal-dark via-wasit-teal to-wasit-gold/80" style={{ height: `${Math.round(height * 0.6)}px` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

