"use client";
import React from 'react';

/* ---------- Page shell ---------- */
export function PageShell({ title, description, action, children }: any) {
    return (
        <div className="mx-auto max-w-5xl space-y-8 pb-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h1>
                    {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
                </div>
                {action}
            </div>
            {children}
        </div>
    );
}

/* ---------- Panel / Card ---------- */
export function Panel({ title, description, actions, flush, children }: any) {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {title && (
                <header className="flex items-center justify-between gap-3 border-b border-slate-100 px-5 py-4">
                    <div>
                        <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
                        {description && <p className="mt-0.5 text-xs text-slate-500">{description}</p>}
                    </div>
                    {actions}
                </header>
            )}
            <div className={flush ? '' : 'p-5'}>{children}</div>
        </div>
    );
}

/* ---------- Buttons ---------- */
export function Button({ variant = 'primary', size = 'md', className = '', ...props }: any) {
    const variants: any = {
        primary: 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-sm shadow-cyan-500/20',
        secondary: 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200',
        ghost: 'hover:bg-slate-100 text-slate-600',
        danger: 'bg-white hover:bg-red-50 text-red-600 border border-slate-200 hover:border-red-200',
    };
    const sizes: any = { sm: 'h-8 px-3 text-xs', md: 'h-10 px-4 text-sm' };
    return (
        <button
            {...props}
            className={`inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
        />
    );
}

/* ---------- Fields ---------- */
export const inputCls =
    'w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10';

export function Field({ label, hint, className = '', children }: any) {
    return (
        <div className={className}>
            <label className="mb-1.5 block text-xs font-medium text-slate-600">{label}</label>
            {children}
            {hint && <p className="mt-1 text-[11px] text-slate-400">{hint}</p>}
        </div>
    );
}

/* ✅ Properly typed — no more "implicit any" errors */
export const Input = (p: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input {...p} className={`${inputCls} ${p.className || ''}`} />
);

export const Textarea = (p: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
    <textarea {...p} className={`${inputCls} min-h-[90px] resize-y ${p.className || ''}`} />
);

/* ---------- File Field (supports image + video preview) ---------- */
export function FileField({ label, preview, file, onChange, hint, accept }: any) {
    const localUrl = React.useMemo(() => {
        if (!file) return null;
        return URL.createObjectURL(file);
    }, [file]);

    React.useEffect(() => {
        return () => {
            if (localUrl) URL.revokeObjectURL(localUrl);
        };
    }, [localUrl]);

    const shownUrl = localUrl || preview;
    const isVideo =
        file?.type?.startsWith('video/') ||
        (typeof shownUrl === 'string' && /\.(mp4|webm|ogg|mov|avif)$/i.test(shownUrl)) ||
        (typeof shownUrl === 'string' && shownUrl.includes('/videos/'));

    return (
        <Field label={label} hint={hint}>
            <div className="flex items-center gap-4">
                {shownUrl && (
                    <div className="flex h-20 w-28 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                        {isVideo ? (
                            <video
                                src={shownUrl}
                                className="h-full w-full object-cover"
                                muted
                                loop
                                autoPlay
                                playsInline
                            />
                        ) : (
                            <img src={shownUrl} alt="preview" className="max-h-full max-w-full object-contain" />
                        )}
                    </div>
                )}
                <label className="flex h-10 cursor-pointer items-center gap-2 rounded-xl border border-dashed border-slate-300 px-4 text-sm text-slate-600 transition-colors hover:border-cyan-400 hover:text-cyan-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4 w-4">
                        <path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {file ? file.name : 'Choose file'}
                    <input type="file" accept={accept} className="hidden" onChange={onChange} />
                </label>
            </div>
        </Field>
    );
}

/* ---------- Modal ---------- */
export function Modal({ open, onClose, title, wide, children }: any) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
            <div
                className={`relative z-10 w-full ${wide ? 'max-w-3xl' : 'max-w-lg'} max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl`}
            >
                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                    <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                    <button
                        onClick={onClose}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
                <div className="p-6">{children}</div>
            </div>
        </div>
    );
}

/* ---------- Table ---------- */
export function Table({ headers, children }: { headers: string[]; children: React.ReactNode }) {
    return (
        <table className="w-full">
            <thead>
                <tr className="border-b border-slate-100 bg-slate-50/60">
                    {headers.map((h) => (
                        <th key={h} className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                            {h}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">{children}</tbody>
        </table>
    );
}

export const Td = ({ children, className = '' }: any) => (
    <td className={`px-4 py-3 text-sm text-slate-700 ${className}`}>{children}</td>
);

export const EmptyRow = ({ colSpan, message }: any) => (
    <tr>
        <td colSpan={colSpan} className="px-4 py-12 text-center text-sm text-slate-400">
            {message}
        </td>
    </tr>
);

export function IconBtn({ onClick, variant = 'ghost', title, children }: any) {
    const cls =
        variant === 'danger'
            ? 'hover:bg-red-50 text-slate-400 hover:text-red-600'
            : 'hover:bg-slate-100 text-slate-400 hover:text-slate-700';
    return (
        <button onClick={onClick} title={title} className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${cls}`}>
            {children}
        </button>
    );
}

/* ---------- Upload helper ---------- */
export async function uploadImage(file: File): Promise<string | null> {
    const fd = new FormData();
    fd.append('image', file);
    const res = await fetch('/api/upload', { method: 'POST', body: fd });
    const json = await res.json();
    return json.url || null;
}

/* ---------- Loading spinner ---------- */
export const Loader = () => (
    <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-cyan-500" />
    </div>
);