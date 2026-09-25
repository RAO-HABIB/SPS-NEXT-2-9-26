"use client";
import { useState, useEffect } from 'react';
import { PageShell, Panel, Button, Field, Input, Textarea, FileField, Modal, Table, Td, EmptyRow, IconBtn, uploadImage, Loader } from '../admin-ui/admin-ui';

type IEvt = React.ChangeEvent<HTMLInputElement>;
type TEvt = React.ChangeEvent<HTMLTextAreaElement>;

export default function HowItWorksAdmin() {
  const [intro, setIntro] = useState<any>({});
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});
  const [file, setFile] = useState<File | null>(null);
  const [introFile, setIntroFile] = useState<File | null>(null);

  const fetchData = () => fetch('/api/howitworks').then(r => r.json()).then(j => { setIntro(j.intro || {}); setItems(j.items || []); setLoading(false); });
  useEffect(() => { fetchData(); }, []);

  const saveIntro = async (e: React.FormEvent) => {
    e.preventDefault(); setSaving(true);
    let imageUrl = intro.image;
    if (introFile) { const url = await uploadImage(introFile); if (url) imageUrl = url; }
    await fetch('/api/howitworks/intro', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...intro, image: imageUrl }),
    });
    setSaving(false); setIntroFile(null); alert('Intro updated!'); fetchData();
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    let imageUrl = formData.image;
    if (file) { const url = await uploadImage(file); if (url) imageUrl = url; }
    const method = editingItem ? 'PUT' : 'POST';
    const url = editingItem ? `/api/howitworks/items/${editingItem.id}` : '/api/howitworks/items';
    await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, image: imageUrl }) });
    setModalOpen(false); setFile(null); fetchData();
  };

  const remove = async (id: number) => {
    if (!confirm('Delete this step?')) return;
    await fetch(`/api/howitworks/items/${id}`, { method: 'DELETE' }); fetchData();
  };

  const open = (item: any = null) => {
    setEditingItem(item);
    setFormData(item || { number: '', icon: '', title: '', description: '', image: '', order_index: 0 });
    setFile(null); setModalOpen(true);
  };

  if (loading) return <Loader />;

  return (
    <PageShell title="How It Works" description="Manage the process steps, stats and section intro.">
      <Panel title="Section Intro">
        <form onSubmit={saveIntro} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="Title"><Input value={intro.title || ''} onChange={(e: IEvt) => setIntro({ ...intro, title: e.target.value })} /></Field>
          <Field label="CTA Label"><Input value={intro.cta_label || ''} onChange={(e: IEvt) => setIntro({ ...intro, cta_label: e.target.value })} /></Field>
          <Field label="CTA Link"><Input value={intro.cta_href || ''} onChange={(e: IEvt) => setIntro({ ...intro, cta_href: e.target.value })} /></Field>
          <Field label="Description" className="md:col-span-2">
            <Textarea value={intro.description || ''} onChange={(e: TEvt) => setIntro({ ...intro, description: e.target.value })} />
          </Field>

          {/* ---- Stat 1 ---- */}
          <Field label="Stat 1 Value" hint="e.g. 180">
            <Input type="number" value={intro.stat_value || ''} onChange={(e: IEvt) => setIntro({ ...intro, stat_value: e.target.value })} />
          </Field>
          <Field label="Stat 1 Suffix" hint="e.g. + or K">
            <Input value={intro.stat_suffix || ''} onChange={(e: IEvt) => setIntro({ ...intro, stat_suffix: e.target.value })} />
          </Field>
          <Field label="Stat 1 Label" className="md:col-span-2">
            <Input value={intro.stat_label || ''} placeholder="e.g. Expert Specialists" onChange={(e: IEvt) => setIntro({ ...intro, stat_label: e.target.value })} />
          </Field>

          {/* ---- Stat 2 ---- */}
          <Field label="Stat 2 Value" hint="e.g. 45">
            <Input type="number" value={intro.stat2_value || ''} onChange={(e: IEvt) => setIntro({ ...intro, stat2_value: e.target.value })} />
          </Field>
          <Field label="Stat 2 Suffix" hint="e.g. + or K">
            <Input value={intro.stat2_suffix || ''} onChange={(e: IEvt) => setIntro({ ...intro, stat2_suffix: e.target.value })} />
          </Field>
          <Field label="Stat 2 Label" className="md:col-span-2">
            <Input value={intro.stat2_label || ''} placeholder="e.g. Happy Clients" onChange={(e: IEvt) => setIntro({ ...intro, stat2_label: e.target.value })} />
          </Field>

          <div className="md:col-span-2">
            <FileField label="Main Image" preview={intro.image} file={introFile} onChange={(e: IEvt) => setIntroFile(e.target.files?.[0] || null)} />
          </div>
          <div className="md:col-span-2">
            <Button type="submit" disabled={saving}>{saving ? 'Saving…' : 'Save Content'}</Button>
          </div>
        </form>
      </Panel>

      <Panel title="Steps" flush actions={<Button size="sm" onClick={() => open()}>+ Add Step</Button>}>
        <Table headers={['Step', 'Title', 'Description', 'Actions']}>
          {items.map(item => (
            <tr key={item.id} className="transition-colors hover:bg-slate-50/60">
              <Td><span className="rounded-lg bg-cyan-50 px-2 py-1 text-xs font-semibold text-cyan-700">{item.number}</span></Td>
              <Td className="font-medium text-slate-900">{item.title}</Td>
              <Td className="max-w-md truncate">{item.description}</Td>
              <Td>
                <div className="flex items-center gap-1">
                  <IconBtn onClick={() => open(item)} title="Edit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4 w-4"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4 12.5-12.5z" strokeLinecap="round" strokeLinejoin="round" /></svg></IconBtn>
                  <IconBtn variant="danger" onClick={() => remove(item.id)} title="Delete"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4 w-4"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" strokeLinecap="round" strokeLinejoin="round" /></svg></IconBtn>
                </div>
              </Td>
            </tr>
          ))}
          {items.length === 0 && <EmptyRow colSpan={4} message="No steps yet." />}
        </Table>
      </Panel>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editingItem ? 'Edit Step' : 'Add Step'}>
        <form onSubmit={submit} className="space-y-4">
          <Field label="Step Number" hint="e.g. 01"><Input value={formData.number || ''} onChange={(e: IEvt) => setFormData({ ...formData, number: e.target.value })} /></Field>
          <Field label="Icon (lucide)"><Input value={formData.icon || ''} onChange={(e: IEvt) => setFormData({ ...formData, icon: e.target.value })} /></Field>
          <Field label="Title"><Input value={formData.title || ''} onChange={(e: IEvt) => setFormData({ ...formData, title: e.target.value })} /></Field>
          <Field label="Description"><Textarea value={formData.description || ''} onChange={(e: TEvt) => setFormData({ ...formData, description: e.target.value })} /></Field>
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