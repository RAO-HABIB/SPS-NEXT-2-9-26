"use client";
import { useState, useEffect } from 'react';
import { PageShell, Panel, Button, Field, Input, Textarea, FileField, Modal, Table, Td, EmptyRow, IconBtn, uploadImage, Loader } from '../admin-ui/admin-ui';

type IEvt = React.ChangeEvent<HTMLInputElement>;
type TEvt = React.ChangeEvent<HTMLTextAreaElement>;

export default function StartupsAdmin() {
  const [intro, setIntro] = useState<any>({});
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});
  const [file, setFile] = useState<File | null>(null);

  const fetchData = () => fetch('/api/startups').then(r => r.json()).then(j => { setIntro(j.intro || {}); setItems(j.items || []); setLoading(false); });
  useEffect(() => { fetchData(); }, []);

  const saveIntro = async (e: React.FormEvent) => {
    e.preventDefault(); setSaving(true);
    await fetch('/api/startups/intro', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(intro) });
    setSaving(false); alert('Intro updated!');
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    let imageUrl = formData.image;
    if (file) { const url = await uploadImage(file); if (url) imageUrl = url; }
    const method = editingItem ? 'PUT' : 'POST';
    const url = editingItem ? `/api/startups/items/${editingItem.id}` : '/api/startups/items';
    await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, image: imageUrl }) });
    setModalOpen(false); setFile(null); fetchData();
  };

  const remove = async (id: number) => {
    if (!confirm('Delete this startup?')) return;
    await fetch(`/api/startups/items/${id}`, { method: 'DELETE' }); fetchData();
  };

  const open = (item: any = null) => {
    setEditingItem(item);
    setFormData(item || { name: '', description: '', image: '', href: '', order_index: 0 });
    setFile(null); setModalOpen(true);
  };

  if (loading) return <Loader />;

  return (
    <PageShell title="Startups" description="Manage startup portfolio cards and section intro.">
      <Panel title="Section Intro">
        <form onSubmit={saveIntro} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="Eyebrow"><Input value={intro.eyebrow || ''} onChange={(e: IEvt) => setIntro({ ...intro, eyebrow: e.target.value })} /></Field>
          <Field label="Title"><Input value={intro.title || ''} onChange={(e: IEvt) => setIntro({ ...intro, title: e.target.value })} /></Field>
          <Field label="Description" className="md:col-span-2"><Textarea value={intro.description || ''} onChange={(e: TEvt) => setIntro({ ...intro, description: e.target.value })} /></Field>
          <div className="md:col-span-2"><Button type="submit" disabled={saving}>{saving ? 'Saving…' : 'Save Content'}</Button></div>
        </form>
      </Panel>

      <Panel title="Startup Cards" flush actions={<Button size="sm" onClick={() => open()}>+ Add Startup</Button>}>
        <Table headers={['Image', 'Name', 'Description', 'Actions']}>
          {items.map(item => (
            <tr key={item.id} className="transition-colors hover:bg-slate-50/60">
              <Td>{item.image && <img src={item.image} className="h-10 w-10 rounded-lg border border-slate-200 object-cover" alt="" />}</Td>
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
          {items.length === 0 && <EmptyRow colSpan={4} message="No startups yet." />}
        </Table>
      </Panel>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editingItem ? 'Edit Startup' : 'Add Startup'}>
        <form onSubmit={submit} className="space-y-4">
          <Field label="Name"><Input value={formData.name || ''} onChange={(e: IEvt) => setFormData({ ...formData, name: e.target.value })} /></Field>
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