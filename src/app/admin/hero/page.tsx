"use client";
import { useState, useEffect } from 'react';
import { PageShell, Panel, Button, Field, Input, Textarea, FileField, Modal, Table, Td, EmptyRow, IconBtn, uploadImage, Loader } from '../admin-ui/admin-ui';

type ChangeInput = React.ChangeEvent<HTMLInputElement>;
type ChangeTextarea = React.ChangeEvent<HTMLTextAreaElement>;

export default function HeroAdmin() {
  const [intro, setIntro] = useState<any>({});
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingIntro, setSavingIntro] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});
  const [file, setFile] = useState<File | null>(null);

  const fetchData = () => {
    fetch('/api/hero').then(r => r.json()).then(j => { setIntro(j.intro || {}); setItems(j.items || []); setLoading(false); });
  };
  useEffect(fetchData, []);

  const saveIntro = async (e: React.FormEvent) => {
    e.preventDefault(); setSavingIntro(true);
    await fetch('/api/hero/intro', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(intro) });
    setSavingIntro(false); alert('Hero intro updated!');
  };

  const submitItem = async (e: React.FormEvent) => {
    e.preventDefault();
    let imageUrl = formData.background_image;
    if (file) { const url = await uploadImage(file); if (url) imageUrl = url; }
    const payload = { ...formData, background_image: imageUrl };
    const method = editingItem ? 'PUT' : 'POST';
    const url = editingItem ? `/api/hero/items/${editingItem.id}` : '/api/hero/items';
    await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    setModalOpen(false); setFile(null); fetchData();
  };

  const remove = async (id: number) => {
    if (!confirm('Delete this slide?')) return;
    await fetch(`/api/hero/items/${id}`, { method: 'DELETE' });
    fetchData();
  };

  const open = (item: any = null) => {
    setEditingItem(item);
    setFormData(item || { category_label: '', title: '', highlight: '', description: '', background_image: '', order_index: 0 });
    setFile(null); setModalOpen(true);
  };

  if (loading) return <Loader />;

  return (
    <PageShell title="Hero Section" description="Manage the hero carousel and left-side intro content.">
      <Panel title="Hero Left Content" description="Static content shown beside the carousel.">
        <form onSubmit={saveIntro} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="Eyebrow">
            <Input value={intro.eyebrow || ''} onChange={(e: ChangeInput) => setIntro({ ...intro, eyebrow: e.target.value })} />
          </Field>
          <Field label="Title">
            <Input value={intro.title || ''} onChange={(e: ChangeInput) => setIntro({ ...intro, title: e.target.value })} />
          </Field>
          <Field label="Highlight">
            <Input value={intro.highlight || ''} onChange={(e: ChangeInput) => setIntro({ ...intro, highlight: e.target.value })} />
          </Field>
          <Field label="Description">
            <Input value={intro.description || ''} onChange={(e: ChangeInput) => setIntro({ ...intro, description: e.target.value })} />
          </Field>
          <Field label="Primary CTA Label">
            <Input value={intro.primary_cta_label || ''} onChange={(e: ChangeInput) => setIntro({ ...intro, primary_cta_label: e.target.value })} />
          </Field>
          <Field label="Primary CTA Link">
            <Input value={intro.primary_cta_href || ''} onChange={(e: ChangeInput) => setIntro({ ...intro, primary_cta_href: e.target.value })} />
          </Field>
          <Field label="Secondary CTA Label">
            <Input value={intro.secondary_cta_label || ''} onChange={(e: ChangeInput) => setIntro({ ...intro, secondary_cta_label: e.target.value })} />
          </Field>
          <Field label="Secondary CTA Link">
            <Input value={intro.secondary_cta_href || ''} onChange={(e: ChangeInput) => setIntro({ ...intro, secondary_cta_href: e.target.value })} />
          </Field>
          <div className="md:col-span-2">
            <Button type="submit" disabled={savingIntro}>{savingIntro ? 'Saving…' : 'Save Content'}</Button>
          </div>
        </form>
      </Panel>

      <Panel title="Hero Slides" description="Background images shown in the carousel." flush
        actions={<Button size="sm" onClick={() => open()}>+ Add Slide</Button>}>
        <Table headers={['Image', 'Category', 'Title', 'Order', 'Actions']}>
          {items.map(item => (
            <tr key={item.id} className="transition-colors hover:bg-slate-50/60">
              <Td>{item.background_image && <img src={item.background_image} className="h-10 w-16 rounded-lg border border-slate-200 object-cover" alt="" />}</Td>
              <Td>{item.category_label}</Td>
              <Td className="font-medium text-slate-900">{item.title}</Td>
              <Td>{item.order_index}</Td>
              <Td>
                <div className="flex items-center gap-1">
                  <IconBtn onClick={() => open(item)} title="Edit">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4 w-4"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4 12.5-12.5z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </IconBtn>
                  <IconBtn variant="danger" onClick={() => remove(item.id)} title="Delete">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4 w-4"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </IconBtn>
                </div>
              </Td>
            </tr>
          ))}
          {items.length === 0 && <EmptyRow colSpan={5} message="No slides yet. Add your first one above." />}
        </Table>
      </Panel>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editingItem ? 'Edit Slide' : 'Add Slide'} wide>
        <form onSubmit={submitItem} className="space-y-4">
          <Field label="Category Label">
            <Input value={formData.category_label || ''} onChange={(e: ChangeInput) => setFormData({ ...formData, category_label: e.target.value })} />
          </Field>
          <Field label="Title">
            <Input value={formData.title || ''} onChange={(e: ChangeInput) => setFormData({ ...formData, title: e.target.value })} />
          </Field>
          <Field label="Highlight Text">
            <Input value={formData.highlight || ''} onChange={(e: ChangeInput) => setFormData({ ...formData, highlight: e.target.value })} />
          </Field>
          <Field label="Description">
            <Textarea value={formData.description || ''} onChange={(e: ChangeTextarea) => setFormData({ ...formData, description: e.target.value })} />
          </Field>
          <FileField
            label="Background Image / Video"
            preview={formData.background_image}
            file={file}
            accept="image/*,video/*"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFile(e.target.files?.[0] || null)}
          />
          <Field label="Order Index">
            <Input type="number" value={formData.order_index ?? 0} onChange={(e: ChangeInput) => setFormData({ ...formData, order_index: Number(e.target.value) })} />
          </Field>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button type="submit">Save Slide</Button>
          </div>
        </form>
      </Modal>
    </PageShell>
  );
}