"use client";
import { useState, useEffect } from 'react';
import { PageShell, Panel, Button, Field, Input, FileField, Modal, Table, Td, EmptyRow, IconBtn, uploadImage, Loader } from '../admin-ui/admin-ui';

type IEvt = React.ChangeEvent<HTMLInputElement>;

export default function NewsInsightsAdmin() {
  const [intro, setIntro] = useState<any>({});
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});
  const [file, setFile] = useState<File | null>(null);

  const fetchData = () => fetch('/api/newsinsights').then(r => r.json()).then(j => { setIntro(j.intro || {}); setItems(j.items || []); setLoading(false); });
  useEffect(() => { fetchData(); }, []);

  const saveIntro = async (e: React.FormEvent) => {
    e.preventDefault(); setSaving(true);
    await fetch('/api/newsinsights/intro', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(intro) });
    setSaving(false); alert('Intro updated!');
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    let imageUrl = formData.image;
    if (file) { const url = await uploadImage(file); if (url) imageUrl = url; }
    const method = editingItem ? 'PUT' : 'POST';
    const url = editingItem ? `/api/newsinsights/items/${editingItem.id}` : '/api/newsinsights/items';
    await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, image: imageUrl }) });
    setModalOpen(false); setFile(null); fetchData();
  };

  const remove = async (id: number) => {
    if (!confirm('Delete this news item?')) return;
    await fetch(`/api/newsinsights/items/${id}`, { method: 'DELETE' }); fetchData();
  };

  const open = (item: any = null) => {
    setEditingItem(item);
    setFormData(item || { category: '', title: '', href: '', image: '', date: '', readTime: '', featured: false, order_index: 0 });
    setFile(null); setModalOpen(true);
  };

  if (loading) return <Loader />;

  return (
    <PageShell title="News & Insights" description="Manage news cards and section intro.">
      <Panel title="Section Intro">
        <form onSubmit={saveIntro} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="Eyebrow"><Input value={intro.eyebrow || ''} onChange={(e: IEvt) => setIntro({ ...intro, eyebrow: e.target.value })} /></Field>
          <Field label="Title"><Input value={intro.title || ''} onChange={(e: IEvt) => setIntro({ ...intro, title: e.target.value })} /></Field>
          <Field label="Highlight"><Input value={intro.highlight || ''} onChange={(e: IEvt) => setIntro({ ...intro, highlight: e.target.value })} /></Field>
          <Field label="CTA Label"><Input value={intro.cta_label || ''} onChange={(e: IEvt) => setIntro({ ...intro, cta_label: e.target.value })} /></Field>
          <Field label="CTA Link"><Input value={intro.cta_href || ''} onChange={(e: IEvt) => setIntro({ ...intro, cta_href: e.target.value })} /></Field>
          <div className="md:col-span-2"><Button type="submit" disabled={saving}>{saving ? 'Saving…' : 'Save Content'}</Button></div>
        </form>
      </Panel>

      <Panel title="News Cards" flush actions={<Button size="sm" onClick={() => open()}>+ Add News</Button>}>
        <Table headers={['Image', 'Category', 'Title', 'Featured', 'Actions']}>
          {items.map(item => (
            <tr key={item.id} className="transition-colors hover:bg-slate-50/60">
              <Td>{item.image && <img src={item.image} className="h-10 w-16 rounded-lg border border-slate-200 object-cover" alt="" />}</Td>
              <Td><span className="rounded-lg bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">{item.category}</span></Td>
              <Td className="max-w-xs truncate font-medium text-slate-900">{item.title}</Td>
              <Td>{item.featured ? <span className="rounded-lg bg-cyan-50 px-2 py-1 text-xs font-medium text-cyan-700">Featured</span> : <span className="text-xs text-slate-400">—</span>}</Td>
              <Td>
                <div className="flex items-center gap-1">
                  <IconBtn onClick={() => open(item)} title="Edit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4 w-4"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4 12.5-12.5z" strokeLinecap="round" strokeLinejoin="round" /></svg></IconBtn>
                  <IconBtn variant="danger" onClick={() => remove(item.id)} title="Delete"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4 w-4"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" strokeLinecap="round" strokeLinejoin="round" /></svg></IconBtn>
                </div>
              </Td>
            </tr>
          ))}
          {items.length === 0 && <EmptyRow colSpan={5} message="No news yet." />}
        </Table>
      </Panel>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editingItem ? 'Edit News' : 'Add News'}>
        <form onSubmit={submit} className="space-y-4">
          <Field label="Category"><Input value={formData.category || ''} onChange={(e: IEvt) => setFormData({ ...formData, category: e.target.value })} /></Field>
          <Field label="Title"><Input value={formData.title || ''} onChange={(e: IEvt) => setFormData({ ...formData, title: e.target.value })} /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Date"><Input type="date" value={formData.date || ''} onChange={(e: IEvt) => setFormData({ ...formData, date: e.target.value })} /></Field>
            <Field label="Read Time"><Input value={formData.readTime || ''} placeholder="5 min read" onChange={(e: IEvt) => setFormData({ ...formData, readTime: e.target.value })} /></Field>
          </div>
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 px-4 py-3">
            <input type="checkbox" className="h-4 w-4 accent-cyan-500" checked={formData.featured || false} onChange={(e: IEvt) => setFormData({ ...formData, featured: e.target.checked })} />
            <span className="text-sm text-slate-700">Mark as featured</span>
          </label>
          <Field label="Link URL"><Input value={formData.href || ''} onChange={(e: IEvt) => setFormData({ ...formData, href: e.target.value })} /></Field>
          <FileField label="Image" preview={formData.image} file={file} onChange={(e: IEvt) => setFile(e.target.files?.[0] || null)} />
          <Field label="Order Index"><Input type="number" value={formData.order_index ?? 0} onChange={(e: IEvt) => setFormData({ ...formData, order_index: Number(e.target.value) })} /></Field>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Modal>
    </PageShell>
  );
}