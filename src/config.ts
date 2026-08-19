export const COMPANY = {
  name: 'وسيط-تك (WASIT-TECH)',
  nameShort: 'وسيط-تك',
  phoneDisplay: '+967 777 550 9234',
  phoneE164: '9677775509234',
  email: 'info@wasitech.net',
  website: 'https://wasitech.net',
} as const;

export const SERVICE_OPTIONS = [
  'التحول الرقمي وتطوير الأنظمة',
  'البنية التحتية والشبكات',
  'الأتمتة والذكاء الاصطناعي',
  'طلب استشارة تقنية عامة',
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];

export const DEFAULT_SERVICE: ServiceOption = SERVICE_OPTIONS[0];

export function buildWhatsAppLink(message: string): string {
  // Use WhatsApp Web API endpoint which is broadly compatible across devices.
  // `phone` must be in international format without the leading +, e.g. 9677775509234
  return `https://api.whatsapp.com/send?phone=${COMPANY.phoneE164}&text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  `مرحباً ${COMPANY.nameShort} (WASIT-TECH)، أود الاستفسار عن الاستشارات والخدمات التقنية المتاحة.`;
