'use client';

import { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Ayu Pratiwi',
    image: '/assets/images/client-1.jpg',
    text: 'Hasil fotonya bukan sekadar dokumentasi, tapi benar-benar terasa seperti cerita hidup yang dibekukan dengan indah.',
  },
  {
    name: 'Rizky Ramadhan',
    image: '/assets/images/client-2.jpg',
    text: 'Setiap frame punya rasa. Graduation jadi lebih bermakna dari yang aku bayangkan sebelumnya.',
  },
  {
    name: 'Nadia Putri',
    image: '/assets/images/client-3.jpg',
    text: 'Shootingnya santai tapi hasilnya cinematic banget. Worth it banget buat momen kelulusan.',
  },
  {
    name: 'Kevin Santoso',
    image: '/assets/images/client-4.jpg',
    text: 'Gak nyangka foto wisuda bisa se-estetik ini. Rasanya kayak film.',
  },
];

const Star = () => (
  <span className="text-yellow-400">★</span>
);

const Testimonial = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let scroll = 0;

    const interval = setInterval(() => {
      scroll += 0.5; // 🔥 lebih smooth & slow

      if (scroll >= el.scrollWidth / 2) {
        scroll = 0;
      }

      el.scrollTo({
        left: scroll,
        behavior: 'smooth',
      });
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-24 text-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-8 md:px-16">

        {/* HEADER */}
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
            Google Reviews
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Trusted Moments, Captured Forever
          </h2>

          <div className="mt-6 flex items-center gap-3 text-sm text-neutral-300">
            <div className="flex">
              <Star /><Star /><Star /><Star /><Star />
            </div>

            <span className="text-yellow-400 font-medium">
              4.9/5
            </span>

            <span className="text-neutral-400">
              • 1,200+ Reviews
            </span>
          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={ref}
          className="mt-14 flex gap-6 overflow-x-hidden"
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="min-w-[320px] rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:scale-[1.02] duration-300"
            >
              {/* USER */}
              <div className="mb-4 flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-10 w-10 rounded-full object-cover border border-white/20"
                />

                <div>
                  <p className="text-sm font-medium text-white">
                    {item.name}
                  </p>

                  <div className="flex text-yellow-400 text-xs">
                    <Star /><Star /><Star /><Star /><Star />
                  </div>
                </div>
              </div>

              {/* TEXT */}
              <p className="text-sm leading-relaxed text-neutral-300">
                “{item.text}”
              </p>

              <p className="mt-4 text-xs text-neutral-500">
                Source: Google Reviews
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export { Testimonial };