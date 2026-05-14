'use client';

import { useState } from 'react';

type FormState = {
  name: string;
  campus: string;
  date: string;
  budget: string;
  instagram: string;
  wa: string;
};

const Leadform = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    campus: '',
    date: '',
    budget: '',
    instagram: '',
    wa: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 🔥 HARD VALIDATION (ANTI BOLONG)
    const name = form.name.trim();
    const campus = form.campus.trim();
    const date = form.date.trim();
    const wa = form.wa.trim();

    if (!name || !campus || !date || !wa) {
      alert('⚠️ Mohon isi Nama, Kampus, Tanggal, dan WhatsApp terlebih dahulu');
      return;
    }

    const message = `
Halo, saya ingin konsultasi graduation photoshoot:

Nama: ${name}
Kampus: ${campus}
Tanggal Sesi: ${date}
Budget: ${form.budget}
Instagram: ${form.instagram}
WhatsApp: ${wa}
    `;

    const url = `https://wa.me/628211251570?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  const isDisabled =
    !form.name.trim() ||
    !form.campus.trim() ||
    !form.date.trim() ||
    !form.wa.trim();

  return (
    <section id="leadform" className="bg-black py-28 text-white scroll-mt-32">
      <div className="mx-auto max-w-3xl px-8 md:px-16">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Graduation Booking
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Book Your Graduation Story
          </h2>

          <p className="mt-6 text-sm text-neutral-400 md:text-base">
            Isi data kamu, pilih tanggal, lalu kirim untuk konsultasi WhatsApp.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-12 space-y-4">

          <input
            name="name"
            placeholder="Nama Lengkap *"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none"
          />

          <input
            name="campus"
            placeholder="Kampus / Universitas *"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none"
          />

          {/* DATE */}
          <input
            name="date"
            type="date"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none"
          />

          <input
            name="budget"
            placeholder="Budget (opsional)"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none"
          />

          <input
            name="instagram"
            placeholder="Instagram"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none"
          />

          <input
            name="wa"
            placeholder="WhatsApp aktif *"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none"
          />

          {/* CTA BUTTON */}
          <button
            type="submit"
            disabled={isDisabled}
            className="w-full rounded-xl bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Kirim & Konsultasi Sekarang →
          </button>
        </form>

        {/* SECURITY NOTE */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-neutral-500">
          <span>🔒</span>
          <p>Data kamu aman & tidak akan dibagikan ke pihak lain</p>
        </div>

      </div>
    </section>
  );
};

export { LeadForm };
