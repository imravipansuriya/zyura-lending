import heartIcon from "../assets/heart.png";

export const ValueBanner = () => {
  return (
    <section className="bg-brand-gradient px-5 lg:px-5  py-10 flex items-center justify-center">
      <div className="max-w-[1920px] mx-auto px-5">
        <div className="grid items-center justify-between gap-8 grid-row lg:grid-cols-[1fr_1fr_1fr] text-center lg:text-left">
          <h3 className="max-w-xl font-sora text-3xl md:text-2xl lg:text-4xl font-bold leading-tight text-white ">
            From First Lecture to Final Exams - Zyura is With You Every Step
          </h3>

          <img
            src={heartIcon}
            alt="Zyura heart icon"
            className="mx-auto h-[88px] w-[88px] object-contain md:h-[102px] md:w-[102px]"
          />

          <p className="font-sora max-w-xl text-base leading-relaxed text-white/95 md:text-lg">
            Get access to AI-powered study tools, smart quizzes, flashcards, and
            a collaborative learning space-all in one platform designed to
            simplify your medical journey.
          </p>
        </div>
      </div>
    </section>
  );
};
