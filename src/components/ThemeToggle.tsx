import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // قراءة الثيم المحفوظ أو استخدام الداكن كافتراضي
    const saved = localStorage.getItem('theme');
    const dark = saved ? saved === 'dark' : true;
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg bg-[var(--theme-bg-secondary)] text-[var(--theme-text)] border border-[var(--theme-border)] hover:border-wasit-teal transition-colors cursor-pointer"
      aria-label="تبديل الوضع"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
