# وسيط-تك | WASIT-TECH

موقع تعريفي لشركة **وسيط-تك (WASIT-TECH)** — شريكك الموثوق في التحول الرقمي. حلول تقنية متكاملة في البنية التحتية، الأتمتة، والذكاء الاصطناعي.

## المميزات

- تصميم عربي RTL متجاوب
- نماذج تواصل تُرسل مباشرة عبر واتساب (بدون خادم)
- صفحة 404 وحدود أخطاء مخصصة
- SEO محسّن (OpenGraph، Twitter Card، JSON-LD، canonical)
- وصولية متكاملة (تخطي للمحتوى، focus trap، aria)

## التقنيات

- **Vite + React + TypeScript** — النسخة النشطة (`src/`)
- **Tailwind CSS** — التصميم
- **Next.js** — نسخة مزامنة (`app/` + `components/`)

## التشغيل محلياً

```bash
npm install
npm run dev
```

يعمل التطبيق على `http://localhost:3000`.

## مزامنة نسخة Next.js

تظل النسختان متطابقتين عبر سكربت المزامنة:

```bash
npm run sync:next
```

يحوّل المكونات من `src/components` إلى `components/` مع إضافة `'use client'` وإعادة كتابة استيرادات `config`. **لا تعدّل ملفات `components/` يدوياً.**

## البناء

```bash
npm run build        # بناء نسخة Vite في dist/
npx next build       # بناء نسخة Next.js
```

## التواصل

- واتساب: +967 777 550 9234
- البريد: info@wasit.tech
- الموقع: https://wasit.tech
