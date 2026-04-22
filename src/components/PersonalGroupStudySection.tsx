import studyImage from "../assets/doctor-study.jpg";

const points = [
  "Create or join study groups",
  "Share quizzes, notes, flashcards",
  "Compete on leaderboards",
  "Track individual + group performance",
];

export const PersonalGroupStudySection = () => {
  return (
    <section className="bg-[#efefef] px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1920px] px-5">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="max-w-[760px]">
            <p className="font-sora text-[14px] font-semibold uppercase tracking-[0.12em] text-[#0a2a66]">
              PERSONAL + GROUP STUDY
            </p>
            <h2 className="mt-4 font-sora text-4xl font-bold leading-tight text-[#08235a] md:text-5xl lg:text-[68px]">
              Study Solo or With Peers
            </h2>
            <p className="mt-4 font-sora text-[18px] leading-relaxed text-[#556272]">
              Learn your way - alone or together:
            </p>

            <div className="mt-8 space-y-1">
              {points.map((point, index) => (
                <div key={point} className="flex gap-5">
                  <div className="flex w-[62px] shrink-0 flex-col items-center">
                    <span className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#ef8dd9] font-sora text-[30px] font-semibold text-white">
                      {index + 1}
                    </span>
                    {index < points.length - 1 && (
                      <span className="mt-2 h-[56px] w-px bg-[#c9d3e1]" />
                    )}
                  </div>

                  <div className="pt-2">
                    <p className="font-sora text-[34px] font-semibold leading-tight text-[#0b2f6f] md:text-[38px]">
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px]">
            <img
              src={studyImage}
              alt="Students studying together"
              className="h-[440px] w-full object-cover md:h-[560px] lg:h-[760px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

