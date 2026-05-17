import Link from 'next/link';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <div
      className="
        relative
        overflow-hidden
        rounded-none
        md:rounded-[32px]
        min-h-[85vh]
        flex
        items-center
        justify-center
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
      <div className="absolute inset-0 bg-black/45" />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          max-w-3xl
          px-6
          text-center
        "
      >

        <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
          Siap mengabadikan momen wisuda kamu?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-200 md:text-xl">
          Setiap cerita punya akhir yang layak dikenang dengan indah.
          Booking sekarang dan dapatkan konsep cinematic untuk graduation kamu.
        </p>

        <div className="mt-10">
          <Link href="#leadform">
            <Button xl>Book Your Session →</Button>
          </Link>
        </div>

      </div>

    </div>
  </Section>
);

export { Banner };
