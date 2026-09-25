import Link from 'next/link';

const sections = [
  { title: 'Hero Section', path: '/admin/hero', desc: 'Carousel & left intro', icon: 'M3 5h18v14H3zM3 15.5l4.5-4.5 3.5 3.5 3-3 5 5' },
  { title: 'Services', path: '/admin/services', desc: 'Tabs & slide cards', icon: 'M3 7.5h18V19H3zM8.5 7.5V6a2 2 0 012-2h3a2 2 0 012 2v1.5' },
  { title: 'Startups', path: '/admin/startups', desc: 'Portfolio cards', icon: 'M3 17l5.5-5.5 3.5 3.5L21 6M15.5 6H21v5.5' },
  { title: 'Products', path: '/admin/products', desc: 'Product cards & intro', icon: 'M12 3l8.5 4.5v9L12 21l-8.5-4.5v-9L12 3z' },
  { title: 'How It Works', path: '/admin/howitworks', desc: 'Steps & intro', icon: 'M4 6h4v4H4zM10 14h4v4h-4zM16 6h4v4h-4z' },
  { title: 'Partners', path: '/admin/partners', desc: 'Partner logos & intro', icon: 'M12.5 6.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM3 19.5v-1a5 5 0 015-5h2a5 5 0 015 5v1' },
  { title: 'News & Insights', path: '/admin/newsinsights', desc: 'News cards & intro', icon: 'M5 4.5h11v15H5zM16 8.5h3v9a2 2 0 01-2 2H7' },
  { title: 'Customers', path: '/admin/customers', desc: 'Client logos', icon: 'M12 21s-7.5-4.9-7.5-10A4.5 4.5 0 0112 7.6 4.5 4.5 0 0119.5 11c0 5.1-7.5 10-7.5 10z' },
  { title: 'Verticals', path: '/admin/verticals', desc: 'Industry cards & intro', icon: 'M12 3.5l8.5 4.5-8.5 4.5L3.5 8 12 3.5z' },
];

export default function AdminDashboard() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 pb-24">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">Manage every section of your website from one place.</p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((s) => (
          <Link
            key={s.path}
            href={s.path}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-500/5"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition-colors group-hover:bg-cyan-500 group-hover:text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d={s.icon} />
                </svg>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 transition-colors group-hover:text-cyan-600">
                Edit
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-3 w-3">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <h3 className="mt-4 text-sm font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-0.5 text-xs text-slate-500">{s.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}