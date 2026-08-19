import { useEffect } from 'react';

const GA4_ID = import.meta.env.VITE_GA4_ID ?? '';
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID ?? '';
const HOTJAR_ID = import.meta.env.VITE_HOTJAR_ID ?? '';
const SITE_URL = 'https://wasit.tech';

function injectScript(id: string, attrs: Record<string, string>, parent = document.head) {
  const s = document.createElement('script');
  Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
  s.dataset.id = id;
  parent.appendChild(s);
  return s;
}

export default function Analytics() {
  useEffect(() => {
    if (!GA4_ID && !META_PIXEL_ID && !HOTJAR_ID) return;

    // Google Analytics 4
    if (GA4_ID) {
      injectScript(GA4_ID, {
        src: `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`,
        async: '',
      });
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer!.push(args);
      }
      gtag('js', new Date());
      gtag('config', GA4_ID, { page_path: window.location.pathname, cookie_domain: 'wasit.tech' });
    }

    // Meta (Facebook) Pixel
    if (META_PIXEL_ID) {
      /* eslint-disable */
      // @ts-ignore — fbq is injected by the pixel snippet
      (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode?.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      // @ts-ignore
      window.fbq('init', META_PIXEL_ID);
      // @ts-ignore
      window.fbq('track', 'PageView');
      /* eslint-enable */
    }

    // Hotjar
    if (HOTJAR_ID) {
      (function (h: any, o: any, t: any, j: any) {
        if (!h.hj) {
          h.hj = function () {
            (h.hj.q = h.hj.q || []).push(arguments);
          };
        }
        h._hjSettings = { hjid: Number(HOTJAR_ID), hjsv: 6 };
        const oHead = document.getElementsByTagName('head')[0];
        const script = document.createElement('script');
        script.async = true;
        script.setAttribute('slot', 'hotjar');
        script.src = `https://static.hotjar.com/c/hotjar-${HOTJAR_ID}.js?sv=${h._hjSettings.hjsv}`;
        oHead.appendChild(script);
      })(window as any, document as any, 'script' as any, '' as any);
    }
  }, [GA4_ID, META_PIXEL_ID, HOTJAR_ID]);

  return null;
}

// Extend Window for dataLayer / fbq
declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
    hj?: (...args: unknown[]) => void;
    _hjSettings?: { hjid: number; hjsv: number };
  }
}
