"use client";
import { useState, useEffect } from 'react';
import { PageShell, Panel, Button, Field, Input, Textarea, FileField, Modal, Table, Td, EmptyRow, IconBtn, uploadImage, Loader } from '../admin-ui/admin-ui';

type IEvt = React.ChangeEvent<HTMLInputElement>;
type TEvt = React.ChangeEvent<HTMLTextAreaElement>;

export default function ProductsAdmin() {
  const [intro, setIntro] = useState<any>({});
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});
  const [file, setFile] = useState<File | null>(null);

  const fetchData = () => fetch('/api/products').then(r => r.json()).then(j => { setIntro(j.intro || {}); setItems(j.items || []); setLoading(false); });
  useEffect(() => { fetchData(); }, []);

  const saveIntro = async (e: React.FormEvent) => {
    e.preventDefault(); setSaving(true);
    await fetch('/api/products/intro', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(intro) });
    setSaving(false); alert('Intro updated!');
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    let imageUrl = formData.image;
    if (file) { const url = await uploadImage(file); if (url) imageUrl = url; }
    const method = editingItem ? 'PUT' : 'POST';
    const url = editingItem ? `/api/products/items/${editingItem.id}` : '/api/products/items';
    await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, image: imageUrl }) });
    setModalOpen(false); setFile(null); fetchData();
  };

  const remove = async (id: number) => {
    if (!confirm('Delete this product?')) return;
    await fetch(`/api/products/items/${id}`, { method: 'DELETE' }); fetchData();
  };

  const open = (item: any = null) => {
    setEditingItem(item);
    setFormData(item || { name: '', description: '', icon: '', accentColor: '', image: '', href: '', order_index: 0 });
    setFile(null); setModalOpen(true);
  };

  if (loading) return <Loader />;

  return (
    <PageShell title="Products" description="Manage product cards and the section intro.">
      <Panel title="Section Intro">
        <form onSubmit={saveIntro} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="Eyebrow"><Input value={intro.eyebrow || ''} onChange={(e: IEvt) => setIntro({ ...intro, eyebrow: e.target.value })} /></Field>
          <Field label="Title"><Input value={intro.title || ''} onChange={(e: IEvt) => setIntro({ ...intro, title: e.target.value })} /></Field>
          <Field label="Highlight"><Input value={intro.highlight || ''} onChange={(e: IEvt) => setIntro({ ...intro, highlight: e.target.value })} /></Field>
          <Field label="Stat Value"><Input type="number" value={intro.stat_value || ''} onChange={(e: IEvt) => setIntro({ ...intro, stat_value: e.target.value })} /></Field>
          <Field label="Stat Suffix"><Input value={intro.stat_suffix || ''} onChange={(e: IEvt) => setIntro({ ...intro, stat_suffix: e.target.value })} /></Field>
          <Field label="Stat Label"><Input value={intro.stat_label || ''} onChange={(e: IEvt) => setIntro({ ...intro, stat_label: e.target.value })} /></Field>
          <Field label="Description" className="md:col-span-2"><Textarea value={intro.description || ''} onChange={(e: TEvt) => setIntro({ ...intro, description: e.target.value })} /></Field>
          <div className="md:col-span-2"><Button type="submit" disabled={saving}>{saving ? 'Saving…' : 'Save Content'}</Button></div>
        </form>
      </Panel>

      <Panel title="Product Cards" flush actions={<Button size="sm" onClick={() => open()}>+ Add Product</Button>}>
        <Table headers={['Icon', 'Name', 'Description', 'Actions']}>
          {items.map(item => (
            <tr key={item.id} className="transition-colors hover:bg-slate-50/60">
              <Td><span className="rounded-lg bg-slate-100 px-2 py-1 font-mono text-xs text-slate-600">{item.icon}</span></Td>
              <Td className="font-medium text-slate-900">{item.name}</Td>
              <Td className="max-w-md truncate">{item.description}</Td>
              <Td>
                <div className="flex items-center gap-1">
                  <IconBtn onClick={() => open(item)} title="Edit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4 w-4"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4 12.5-12.5z" strokeLinecap="round" strokeLinejoin="round" /></svg></IconBtn>
                  <IconBtn variant="danger" onClick={() => remove(item.id)} title="Delete"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4 w-4"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" strokeLinecap="round" strokeLinejoin="round" /></svg></IconBtn>
                </div>
              </Td>
            </tr>
          ))}
          {items.length === 0 && <EmptyRow colSpan={4} message="No products yet." />}
        </Table>
      </Panel>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editingItem ? 'Edit Product' : 'Add Product'}>
        <form onSubmit={submit} className="space-y-4">
          <Field label="Name"><Input value={formData.name || ''} onChange={(e: IEvt) => setFormData({ ...formData, name: e.target.value })} /></Field>
          <Field label="Icon (lucide)"><Input value={formData.icon || ''} onChange={(e: IEvt) => setFormData({ ...formData, icon: e.target.value })} /></Field>
          <Field label="Accent Color (Tailwind)" hint="e.g. from-blue-500 to-cyan-400">
            <Input value={formData.accentColor || ''} onChange={(e: IEvt) => setFormData({ ...formData, accentColor: e.target.value })} />
          </Field>
          <Field label="Description"><Textarea value={formData.description || ''} onChange={(e: TEvt) => setFormData({ ...formData, description: e.target.value })} /></Field>
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