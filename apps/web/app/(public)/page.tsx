import { WaitlistForm } from '@/components/waitlist-form';
import { Logos } from '@/components/logos';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="mt-10 flex h-[calc(100vh-(65px+80px))] overflow-hidden sm:mt-16 md:h-[calc(100vh-(65px+80px))]">
      <Image
        src="/home-background.png"
        alt=""
        aria-hidden="true"
        width={960}
        height={860}
        className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full object-cover object-right-bottom opacity-70 mix-blend-screen"
      />

      <div className="border-border relative z-10 mx-auto flex w-full flex-col items-center justify-center gap-8 overflow-hidden border border-b-0 border-t-0 text-center">
        <div className="z-10 flex w-full max-w-lg flex-col items-center gap-12">
          <h1 className="z-10 text-4xl font-medium tracking-[-0.04em] sm:text-7xl">
            Open source it, <br /> right now.
          </h1>
          <p className="z-10 mx-auto max-w-md text-balance text-center text-[#9f9f9f] sm:text-lg">
            A platform for open source project discovery, collaboration, and growth - connecting
            project owners with contributors.{' '}
            <span className="font-medium text-white">Coming soon.</span>
          </p>
          <WaitlistForm />
        </div>
        <Logos />
      </div>
    </div>
  );
}
