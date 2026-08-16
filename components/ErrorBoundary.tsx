'use client';

import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0B132B] text-slate-100 flex items-center justify-center p-6" dir="rtl">
          <div className="max-w-md w-full text-center space-y-4">
            <div className="text-6xl font-black text-wasit-teal">500</div>
            <h1 className="text-2xl font-bold text-white">حدث خطأ غير متوقع</h1>
            <p className="text-sm text-slate-400">نعتذر عن هذا الخلل، يرجى إعادة تحميل الصفحة أو المحاولة لاحقاً.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 rounded-xl bg-wasit-teal hover:bg-wasit-teal-dark text-white font-bold text-sm cursor-pointer transition-colors"
            >
              إعادة تحميل الصفحة
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
