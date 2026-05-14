import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';

const Hero = () => (
  <Background color="bg-black">

    {/* NAVBAR (ONLY BUTTON) */}
    <div className="fixed left-0 top-0 z-50 flex w-full justify-end px-8 py-8 md:px-16">
      <Link href="https://wa.me/628211251570">
        <button className="rounded-full border border-white/20 px-5 py-2 text-[11px] tracking-[0.25em] text-white transition duration-300 hover:bg-white hover:text-black">
          KONSULTASI GRATIS →
        </button>
      </Link>
    </div>

    {/* FLOATING WHATSAPP BUTTON */}
    <Link
      href="https://wa.me/628211251570"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110">
        <img
          src="/assets/images/Whatsapp.png"
          alt="WhatsApp"
          className="h-7 w-7"
        />
      </div>
    </Link>

    {/* HERO */}
    <section className="relative h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/assets/images/ADS00680.jpg"
        alt="Graduation"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center px-8 md:px-20">
        <div className="max-w-3xl">

          {/* SMALL TEXT */}
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-neutral-300">
            More than portraits.
          </p>

          {/* HEADING */}
          <h1 className="whitespace-pre-line text-5xl font-semibold leading-[1.02] text-white md:text-7xl">
            A visual story
            {'\n'}
            of your final chapter.
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-xl text-lg leading-[1.8] text-neutral-300 md:text-xl">
            Crafted for graduates who want their memories
            to feel timeless, emotional, and cinematic.
          </p>

          {/* BUTTON */}
          <div className="mt-12">
            <Link href="#leadform">
              <Button xl>Get Pricelist →</Button>
            </Link>
          </div>

          {/* STORY TEXT */}
          <div className="mt-14">
            <p className="max-w-2xl text-lg leading-[1.8] text-neutral-300 md:text-xl">
              Dari perjalanan panjang menuju hari kelulusan
              <br />
              hingga momen kecil yang tak sempat diulang
              <br />
              setiap cerita layak dikenang dengan indah.
            </p>
          </div>

          {/* RATING */}
          <div className="mt-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 px-3 py-1 text-sm text-neutral-300 backdrop-blur-sm">
              <p className="tracking-[0.2em] text-white">
                ★ ★ ★ ★ ★
              </p>

              <div className="h-2 w-px bg-white/20" />

              <p className="text-white">
                942+ teman percaya
              </p>
            </div>

            <p className="mt-2 text-sm text-neutral-400">
              Trusted by graduates across campuses
            </p>
          </div>

        </div>
      </div>
    </section>
  </Background>
);

export { Hero };