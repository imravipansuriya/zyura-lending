
import ctaBgImage from "../assets/cta-bg.png";

export const CTASection = () => {
  return (
    <section className="pt-25 lg:pt-36">
      <div className="relative overflow-hidden">
        <img
          src={ctaBgImage}
          alt="Doctor with digital tablet"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="mx-auto max-w-[1920px]">
          <div className="relative flex min-h-[300px] md:min-h-[340px] flex-col lg:flex-row justify-center gap-8 px-8 py-10 md:items-center md:justify-between md:px-12 text-center lg:text-left">
            <div className="max-w-2xl">
              <h2 className="font-sora text-[38px] font-semibold leading-tight text-white md:text-[54px]">
                Study smarter. Learn faster.{" "}
                <span className="font-pattaya font-normal">Grow stronger.</span>
              </h2>

              <p className="mt-4 font-sora text-[16px] font-light leading-relaxed text-white/95">
                Start your journey toward mastering medical concepts with
                AI-powered tools, smart practice, and a focused learning
                experience.
              </p>
            </div>

            <button
              type="button"
              className=" rounded-xl border border-white/85 px-4 lg:px-8 py-3 lg:py-3.5 text-[14px] lg:text-base font-light text-white transition hover:bg-white/10"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
