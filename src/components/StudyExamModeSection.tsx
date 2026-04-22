const studyPoints = [
  "Explanations + reference notes",
  "Adjustable difficulty",
  "Review mistakes and improve",
  "Real-time feedback",
];

const examPoints = [
  "Timed tests + instant scoring",
  "No hints until the end",
  "Analytics by subject/topic",
  "Ideal for board prep",
];

export const StudyExamModeSection = () => {
  return (
    <section className="bg-[#efefef] px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1920px] px-5">
        <div className="rounded-2xl bg-[#d9e3f2] p-6 md:p-10">
          <h2 className="text-center font-sora text-4xl font-bold leading-tight text-[#1f232c] md:text-5xl lg:text-[54px]">
            STUDY MODE vs EXAM MODE
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-center font-sora text-[18px] leading-relaxed text-[#303a48]">
            Switch anytime between Study and Exam mode - build both knowledge
            and confidence.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="rounded-xl bg-white p-6 md:p-8">
              <h3 className="font-sora text-[36px] font-semibold leading-tight text-[#1f232c] md:text-[42px]">
                Study Mode
              </h3>
              <p className="mt-3 font-sora text-[18px] text-[#2d3746]">
                Built for learning and revision:
              </p>

              <ul className="mt-5 space-y-3">
                {studyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 font-sora text-[18px] leading-relaxed text-[#2d3746]"
                  >
                    <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl bg-white p-6 md:p-8">
              <h3 className="font-sora text-[36px] font-semibold leading-tight text-[#1f232c] md:text-[42px]">
                Exam Mode
              </h3>
              <p className="mt-3 font-sora text-[18px] text-[#2d3746]">
                Built to simulate real exam pressure:
              </p>

              <ul className="mt-5 space-y-3">
                {examPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 font-sora text-[18px] leading-relaxed text-[#2d3746]"
                  >
                    <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

