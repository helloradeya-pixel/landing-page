import Link from 'next/link';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
      "
    >

      {/* BACKGROUND IMAGE */}
      <img
        src="/assets/images/ADS00060.jpg"
        alt=""
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/60
          backdrop-blur-[2px]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          px-6
          py-20
          text-center
          md:px-16
        "
      >

        <h2 className="text-2xl font-semibold text-white md:text-4xl">
          Siap mengabadikan momen wisuda kamu?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-300 md:text-base">
          Setiap cerita punya akhir yang layak dikenang dengan indah.
          Booking sekarang dan dapatkan konsep cinematic untuk graduation kamu.
        </p>

        <div className="mt-8">
          <Link href="#leadform">
            <Button xl>Book Your Session →</Button>
          </Link>
        </div>

      </div>

    </div>
  </Section>
);

export { Banner };
