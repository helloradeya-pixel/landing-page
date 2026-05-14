import Link from 'next/link';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-md md:p-16">

      <h2 className="text-2xl font-semibold text-white md:text-4xl">
        Siap mengabadikan momen wisuda kamu?
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-400 md:text-base">
        Setiap cerita punya akhir yang layak dikenang dengan indah.
        Booking sekarang dan dapatkan konsep cinematic untuk graduation kamu.
      </p>

      <div className="mt-8">
        <Link href="#leadform">
          <Button xl>Book Your Session →</Button>
        </Link>
      </div>

    </div>
  </Section>
);

export { Banner };