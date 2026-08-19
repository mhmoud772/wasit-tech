# وسيط-تك | WASIT-TECH

موقع تعريفي لشركة **وسيط-تك (WASIT-TECH)** — شريكك الموثوق في التحول الرقمي. حلول تقنية متكاملة في البنية التحتية، الأتمتة، والذكاء الاصطناعي.

## المميزات

- تصميم عربي RTL متجاوب
- نماذج تواصل تُرسل مباشرة عبر واتساب (بدون خادم)
- صفحة 404 وحدود أخطاء مخصصة
- SEO محسّن (OpenGraph، Twitter Card، JSON-LD، canonical)
- وصولية متكاملة (تخطي للمحتوى، focus trap، aria)

## التقنيات

- **Vite + React + TypeScript** — المصدر الأساسي للتطبيق (`src/`)
- **Tailwind CSS** — التصميم
- **Next.js** — غلاف توافق فقط (`app/` + `components/`) لا يُعد مصدر بيانات مستقل

## التشغيل محلياً

```bash
npm install
npm run dev
```

يعمل التطبيق على `http://localhost:3000`.

## مزامنة نسخة Next.js

يستخدم المشروع Vite كنسخة أساسية؛ ويُبقي Next.js كغلاف توافق، مع سكربت مزامنة يضمن أن النسخة المساعدة تبقى متوافقة:

```bash
npm run sync:next
```

يحوّل المكونات من `src/components` إلى `components/` مع إضافة `'use client'` وإعادة كتابة الاستيرادات اللازمة. **لا تعدّل ملفات `components/` يدوياً.**

## البناء والتحقق

```bash
npm run typecheck
npm run build
```

## التواصل

- واتساب: +967 777 550 9234
- البريد: info@wasit.tech
- الموقع: https://wasit.tech
