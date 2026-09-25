"use client";
import { useState, useEffect } from 'react';
import { PageShell, Panel, Button, Field, Input, Textarea, Modal, Table, Td, EmptyRow, IconBtn, Loader } from '../admin-ui/admin-ui';

type IEvt = React.ChangeEvent<HTMLInputElement>;
type TEvt = React.ChangeEvent<HTMLTextAreaElement>;

export default function ServicesAdmin() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({ slides: [] });

  const fetchData = () => {
    fetch('/api/services').then(r => r.json()).then(j => { setItems(j.items || []); setLoading(false); });
  };
  useEffect(fetchData, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editingItem ? 'PUT' : 'POST';
    const url = editingItem ? `/api/services/items/${editingItem.id}` : '/api/services/items';
    await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
    setModalOpen(false); fetchData();
  };

  const remove = async (id: number) => {
    if (!confirm('Delete this service tab?')) return;
    await fetch(`/api/services/items/${id}`, { method: 'DELETE' });
    fetchData();
  };

  const open = (item: any = null) => {
    setEditingItem(item);
    setFormData(item || { tab_name: '', tab_description: '', slides: [], order_index: 0 });
    setModalOpen(true);
  };

  const addSlide = () => setFormData({ ...formData, slides: [...formData.slides, { icon: '', title: '', description: '', href: '/' }] });
  const updateSlide = (i: number, k: string, v: string) => {
    const s = [...formData.slides]; s[i][k] = v; setFormData({ ...formData, slides: s });
  };
  const removeSlide = (i: number) => {
    const s = [...formData.slides]; s.splice(i, 1); setFormData({ ...formData, slides: s });
  };

  if (loading) return <Loader />;

  return (
    <PageShell
      title="Services"
      description="Manage service tabs and the cards inside each tab."
      action={<Button onClick={() => open()}>+ Add Service Tab</Button>}
    >
      <Panel flush>
        <Table headers={['Tab Name', 'Description', 'Cards', 'Actions']}>
          {items.map(item => (
            <tr key={item.id} className="transition-colors hover:bg-slate-50/60">
              <Td className="font-medium text-slate-900">{item.tab_name}</Td>
              <Td className="max-w-md truncate">{item.tab_description}</Td>
              <Td>{item.slides?.length || 0}</Td>
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
          {items.length === 0 && <EmptyRow colSpan={4} message="No services yet. Add your first tab above." />}
        </Table>
      </Panel>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editingItem ? 'Edit Service Tab' : 'Add Service Tab'} wide>
        <form onSubmit={submit} className="space-y-4">
          <Field label="Tab Name">
            <Input value={formData.tab_name || ''} onChange={(e: IEvt) => setFormData({ ...formData, tab_name: e.target.value })} required />
          </Field>
          <Field label="Tab Description">
            <Textarea value={formData.tab_description || ''} onChange={(e: TEvt) => setFormData({ ...formData, tab_description: e.target.value })} required />
          </Field>

          <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Cards</p>
              <Button type="button" size="sm" variant="secondary" onClick={addSlide}>+ Add Card</Button>
            </div>
            <div className="space-y-3">
              {formData.slides.map((slide: any, i: number) => (
                <div key={i} className="relative rounded-xl border border-slate-200 bg-white p-4">
                  <button type="button" onClick={() => removeSlide(i)}
                    className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600">
                    ✕
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Icon (lucide)">
                      <Input value={slide.icon || ''} onChange={(e: IEvt) => updateSlide(i, 'icon', e.target.value)} />
                    </Field>
                    <Field label="Title">
                      <Input value={slide.title || ''} onChange={(e: IEvt) => updateSlide(i, 'title', e.target.value)} />
                    </Field>
                    <Field label="Description" className="col-span-2">
                      <Input value={slide.description || ''} onChange={(e: IEvt) => updateSlide(i, 'description', e.target.value)} />
                    </Field>
                    <Field label="Link" className="col-span-2">
                      <Input value={slide.href || ''} onChange={(e: IEvt) => updateSlide(i, 'href', e.target.value)} />
                    </Field>
                  </div>
                </div>
              ))}
              {formData.slides.length === 0 && <p className="py-4 text-center text-xs text-slate-400">No cards yet.</p>}
            </div>
          </div>

          <Field label="Order Index">
            <Input type="number" value={formData.order_index ?? 0} onChange={(e: IEvt) => setFormData({ ...formData, order_index: Number(e.target.value) })} />
          </Field>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button type="submit">Save Service</Button>
          </div>
        </form>
      </Modal>
    </PageShell>
  );
}