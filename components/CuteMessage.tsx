"use client";

type CuteMessageProps = {
  name: string;
  message: string;
  signature?: string;
};

export default function CuteMessage({
  name,
  message,
  signature = "— Your Goodwisher 💌",
}: CuteMessageProps) {
  return (
    <section className="flex w-full flex-col items-center px-6 py-20">
      <div className="relative w-full max-w-lg -rotate-1">
        <span className="wax-seal absolute -top-5 left-8 z-10 flex h-14 w-14 items-center justify-center rounded-full text-xl">
          💌
        </span>

        <div className="old-paper relative p-8 pt-14 sm:p-12 sm:pt-16">
          <p className="mb-6 text-center text-sm uppercase tracking-[0.3em] text-[#8b6f47]">
            ~ A little note for you ~
          </p>

          <h2 className="mb-6 font-[family-name:var(--font-handwriting)] text-4xl text-[#5c3d21] sm:text-5xl">
            Dear {name}...
          </h2>

          <div className="space-y-4 font-[family-name:var(--font-serif-body)] text-lg leading-relaxed text-[#4a3728]">
            {message.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <div className="mt-8 border-t border-[#8b6f47]/30 pt-6">
            <p className="text-right font-[family-name:var(--font-handwriting)] text-3xl text-[#5c3d21]">
              {signature}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
