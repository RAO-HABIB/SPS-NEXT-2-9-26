"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type AdminUser = { name?: string; email?: string; profile_picture?: string };

const navGroups = [
  { label: 'Overview', items: [{ title: 'Dashboard', path: '/admin/dashboard', icon: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z' }] },
  {
    label: 'Content',
    items: [
      { title: 'Hero Section', path: '/admin/hero', icon: 'M3 5h18v14H3zM3 15.5l4.5-4.5 3.5 3.5 3-3 5 5' },
      { title: 'Services', path: '/admin/services', icon: 'M3 7.5h18V19H3zM8.5 7.5V6a2 2 0 012-2h3a2 2 0 012 2v1.5M3 12.5h18' },
      { title: 'Startups', path: '/admin/startups', icon: 'M3 17l5.5-5.5 3.5 3.5L21 6M15.5 6H21v5.5' },
      { title: 'Products', path: '/admin/products', icon: 'M12 3l8.5 4.5v9L12 21l-8.5-4.5v-9L12 3zM3.5 7.5L12 12l8.5-4.5M12 12v9' },
      { title: 'How It Works', path: '/admin/howitworks', icon: 'M4 6h4v4H4zM10 14h4v4h-4zM16 6h4v4h-4zM6 10v2a2 2 0 002 2h2M18 10v2a2 2 0 01-2 2h-2' },
      { title: 'Partners', path: '/admin/partners', icon: 'M12.5 6.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM3 19.5v-1a5 5 0 015-5h2a5 5 0 015 5v1M16 3.5a3.5 3.5 0 010 7M17.5 13.8a5 5 0 013.5 4.7v1' },
      { title: 'News & Insights', path: '/admin/newsinsights', icon: 'M5 4.5h11v15H5zM16 8.5h3v9a2 2 0 01-2 2H7M8 8.5h5M8 12h5M8 15.5h3' },
      { title: 'Customers', path: '/admin/customers', icon: 'M12 21s-7.5-4.9-7.5-10A4.5 4.5 0 0112 7.6 4.5 4.5 0 0119.5 11c0 5.1-7.5 10-7.5 10z' },
      { title: 'Verticals', path: '/admin/verticals', icon: 'M12 3.5l8.5 4.5-8.5 4.5L3.5 8 12 3.5zM3.5 12.5L12 17l8.5-4.5M3.5 16.5L12 21l8.5-4.5' },
    ],
  },
];

function NavIcon({ d, className = '' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"
      className={`h-[18px] w-[18px] shrink-0 transition-colors duration-200 ${className}`}>
      <path d={d} />
    </svg>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';
  const [user, setUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    if (isLoginPage) return;
    let cancelled = false;
    // ✅ Relative path — Vercel rewrites to backend, cookie automatically sent
    fetch('/api/auth/me', { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (!cancelled && d?.user) setUser(d.user); })
      .catch(() => { });
    return () => { cancelled = true; };
  }, [isLoginPage]);

  if (isLoginPage) return <>{children}</>;

  const displayName = user?.name || user?.email?.split('@')[0] || 'Admin';
  const displayEmail = user?.email || 'Not signed in';
  const initials = displayName.split(/[\s.@]/).filter(Boolean).map((w) => w[0]).join('').slice(0, 2).toUpperCase();

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  const handleLogout = async () => {
    try {
      // ✅ Relative path
      await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    } catch { }
    window.location.href = '/admin/login';
  };

  return (
    <div className="drawer lg:drawer-open h-screen overflow-hidden bg-white" data-theme="light">
      <input id="admin-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex h-screen flex-col overflow-y-auto bg-slate-50/70">
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-3 border-b border-slate-200 bg-white/80 px-4 backdrop-blur lg:hidden">
          <label htmlFor="admin-drawer" aria-label="open sidebar"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="h-5 w-5">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </label>
          <span className="text-[15px] font-semibold tracking-tight text-slate-900">
            CMS <span className="text-cyan-600">Admin</span>
          </span>
        </header>

        <main className="flex-1 px-5 py-8 md:px-8 lg:px-10 lg:py-10">
          <div className="mx-auto w-full max-w-6xl">{children}</div>
        </main>
      </div>

      <div className="drawer-side z-40 h-full">
        <label htmlFor="admin-drawer" aria-label="close sidebar" className="drawer-overlay" />
        <aside className="flex h-full w-72 flex-col border-r border-slate-200 bg-white">
          <div className="flex h-16 shrink-0 items-center gap-3 border-b border-slate-100 px-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500 text-white shadow-sm shadow-cyan-500/30">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
                <path d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v11a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 17.5v-11z" />
                <path d="M8 10h8M8 14h5" />
              </svg>
            </div>
            <div className="leading-tight">
              <p className="text-[15px] font-semibold tracking-tight text-slate-900">CMS Admin</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-600">Control Panel</p>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-6">
            {navGroups.map((group) => (
              <div key={group.label} className="mb-7 last:mb-0">
                <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">{group.label}</p>
                <ul className="space-y-1">
                  {group.items.map((item) => {
                    const active = isActive(item.path);
                    return (
                      <li key={item.path}>
                        <Link href={item.path}
                          className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150 ${active ? 'bg-cyan-50 text-cyan-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                            }`}>
                          <NavIcon d={item.icon} className={active ? 'text-cyan-600' : 'text-slate-400 group-hover:text-slate-600'} />
                          <span className="truncate">{item.title}</span>
                          {active && <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          <div className="shrink-0 border-t border-slate-100 p-3">
            <div className="flex items-center gap-3 rounded-xl px-2 py-2">
              {user?.profile_picture ? (
                <img src={user.profile_picture} alt={displayName} className="h-9 w-9 rounded-full object-cover ring-2 ring-cyan-100" />
              ) : (
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-[11px] font-semibold text-white">
                  {initials}
                </div>
              )}
              <div className="min-w-0 flex-1 leading-tight">
                <p className="truncate text-sm font-medium text-slate-900">{displayName}</p>
                <p className="truncate text-xs text-slate-400">{displayEmail}</p>
              </div>
            </div>

            <button onClick={handleLogout}
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors duration-150 hover:border-red-200 hover:bg-red-50 hover:text-red-600">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M15 12H4M8 8l-4 4 4 4M14 4h3a2 2 0 012 2v12a2 2 0 01-2 2h-3" />
              </svg>
              Logout
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}