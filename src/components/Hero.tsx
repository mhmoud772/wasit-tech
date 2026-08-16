import { ArrowLeft, ShieldCheck, Server, Activity, ArrowUpRight, Cpu, CheckCircle2, Lock } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { COMPANY, buildWhatsAppLink } from '../config';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0B132B] text-white"
    >
      {/* Clean, subtle background gradient without dots or grid patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B132B] via-[#0F1833] to-[#070C1B] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Right side: Clean, authoritative headline and typography */}
          <div className="lg:col-span-6 space-y-8 text-right">
            {/* Title Block without small badge */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                نحو مستقبل رقمي أكثر إشراقاً{' '}
                <span className="block mt-2 text-wasit-teal font-extrabold">
                  شريكك الموثوق في التحول الرقمي
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
                حلول تقنية متكاملة في البنية التحتية، الأتمتة، والذكاء الاصطناعي لتطوير أعمالك وتأمين أنظمتك بأعلى مستويات الأداء والموثوقية.
              </p>
            </div>

            {/* Action Buttons (CTAs) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary Button: Solid accent color without neon gradient */}
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-base text-white bg-wasit-teal hover:bg-wasit-teal-dark shadow-sm transition-all duration-200"
              >
                <span>استكشف خدماتنا</span>
                <ArrowLeft className="w-5 h-5" />
              </a>

              {/* Secondary Button: Clean Outlined button with WhatsApp green accent */}
              <a
                href={buildWhatsAppLink(`مرحباً ${COMPANY.nameShort}، أود الاستفسار عن الخدمات والاستشارات التقنية.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-base text-slate-200 bg-[#151E33]/60 hover:bg-[#151E33] border border-slate-700 hover:border-emerald-500/60 transition-all duration-200 group"
              >
                <WhatsAppIcon className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>تواصل عبر واتساب</span>
              </a>
            </div>

            {/* Bottom Trust Indicators in clean semi-transparent container */}
            <div className="pt-6">
              <div className="p-4 rounded-xl bg-[#151E33]/70 border border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-wasit-teal flex-shrink-0" />
                  <span>استقرار شبكات 99.9%</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-wasit-gold flex-shrink-0" />
                  <span>أتمتة تشغيلية فائقة</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>دعم وتطوير 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side: Realistic Infrastructure & Network Automation Monitor (Dashboard Mockup) */}
          <div className="lg:col-span-6 relative">
            <div className="w-full rounded-2xl bg-[#0F172A] border border-slate-800 shadow-2xl overflow-hidden text-right font-arabic">
              {/* Window Controls Header Bar */}
              <div className="bg-[#151E33] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <Server className="w-3.5 h-3.5 text-wasit-teal" />
                  <span>منظومة وسيط-تك | Infrastructure Monitor</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                  LIVE STATUS
                </span>
              </div>

              {/* Dashboard Content */}
              <div className="p-5 space-y-5">
                {/* Status KPI Summary */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#151E33]/80 p-3 rounded-xl border border-slate-800">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                      <span>الربط الشبكي</span>
                      <Activity className="w-3.5 h-3.5 text-wasit-teal" />
                    </div>
                    <div className="text-lg font-bold text-white">99.94%</div>
                    <div className="text-[10px] text-emerald-400 font-medium mt-0.5">مستقر وفي الخدمة</div>
                  </div>

                  <div className="bg-[#151E33]/80 p-3 rounded-xl border border-slate-800">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                      <span>معدل الأتمتة</span>
                      <Cpu className="w-3.5 h-3.5 text-wasit-gold" />
                    </div>
                    <div className="text-lg font-bold text-white">1,480/ساعة</div>
                    <div className="text-[10px] text-wasit-gold font-medium mt-0.5">عمليات مؤتمتة</div>
                  </div>

                  <div className="bg-[#151E33]/80 p-3 rounded-xl border border-slate-800">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                      <span>الأمن السيبراني</span>
                      <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-lg font-bold text-white">مشفر 100%</div>
                    <div className="text-[10px] text-emerald-400 font-medium mt-0.5">حماية الخوادم نشطة</div>
                  </div>
                </div>

                {/* Live Metrics Graph Representation */}
                <div className="bg-[#151E33]/60 p-4 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-wasit-teal animate-pulse" />
                      نشاط الشبكات والأتمتة الحية
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">14ms latency</span>
                  </div>

                  {/* Visual Bar Chart */}
                  <div className="h-24 flex items-end justify-between gap-1.5 pt-2">
                    {[45, 60, 52, 78, 90, 85, 70, 95, 88, 76, 92, 100, 85, 90].map((h, i) => (
                      <div key={i} className="w-full flex flex-col items-center gap-1">
                        <div
                          className="w-full rounded-t bg-gradient-to-t from-wasit-teal-dark via-wasit-teal to-wasit-teal-light transition-all duration-500"
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Server Nodes List */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-400">عقد البنية التحتية والخوادم</div>
                  <div className="space-y-1.5">
                    <div className="p-2.5 rounded-lg bg-[#151E33]/90 border border-slate-800 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Server className="w-4 h-4 text-wasit-teal" />
                        <span className="font-semibold text-white">خادم الأتمتة الرئيسي (Automation Node)</span>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        يعمل بطاقة 100%
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#151E33]/90 border border-slate-800 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-wasit-gold" />
                        <span className="font-semibold text-white">جدار الحماية والربط السحابي (Cloud Gateway)</span>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        مؤمن بالكامل
                      </span>
                    </div>
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
