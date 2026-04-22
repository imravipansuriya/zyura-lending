import { AppWindowMac, BookCheck, ChartArea, Info, Lightbulb, MessageCircleHeart, Star, Timer } from "lucide-react";
import doctorStudy from "../assets/doctor-study.jpg"
import doctorExam from "../assets/doctor-exam.jpg"

export const StudyExamModeSection = () => {
  return (
    <section className="py-25 lg:py-36 bg-primary">
      <div className="mx-auto container px-5">


        <div className="mx-auto mb-16 text-left border-b border-white pb-10">
          <h2 className="mx-auto font-sora text-2xl md:text-3xl lg:text-[48px] font-semibold text-white">
            STUDY MODE vs EXAM MODE
          </h2>
          <p className="mt-4 font-sora text-[18px] leading-relaxed text-white">
            Switch anytime between Study and Exam mode - build both knowledge
            and confidence.
          </p>

        </div>


        <div className="grid grid-cols-2 gap-4">
          <article className="flex min-h-auto flex-col cursor-pointer">
            <div className="mb-8">
              <img src={doctorStudy} alt="Doctor studying" className="mt-4 h-[300px] w-[300px] w-full rounded-2xl object-cover" />
            </div>
            <div className="text-white">
              <h3 className="font-sora text-xl font-semibold lg:text-3xl leading-tight">
                Study Mode
              </h3>
              <p className="mt-1 text-[12px] lg:text-[18px] leading-relaxed">
                Built for learning and revision:
              </p>

              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="border border-white/50 p-4 rounded-2xl ">
                  <div className="h-14 w-14 flex items-center justify-center mb-3 rounded-full bg-white text-brand">
                    <AppWindowMac />
                  </div>
                  Explanations + reference notes
                </div>
                <div className="border border-white/50 p-4 rounded-2xl ">
                  <div className="h-14 w-14 flex items-center justify-center mb-3 rounded-full bg-white text-brand">
                    <BookCheck />
                  </div>
                  Adjustable difficulty
                </div>
                <div className="border border-white/50 p-4 rounded-2xl ">
                  <div className="h-14 w-14 flex items-center justify-center mb-3 rounded-full bg-white text-brand">
                    <Star />
                  </div>
                  Review mistakes and improve
                </div>
                <div className="border border-white/50 p-4 rounded-2xl ">
                  <div className="h-14 w-14 flex items-center justify-center mb-3 rounded-full bg-white text-brand">
                    <MessageCircleHeart />
                  </div>
                  Real-time feedback
                </div>
              </div>
            </div>
          </article>

          <article className="flex min-h-auto flex-col cursor-pointer">
            <div className="mb-8">
              <img src={doctorExam} alt="Doctor studying" className="mt-4 h-[300px] w-[300px] w-full rounded-2xl object-cover" />
            </div>
            <div className="text-white">
              <h3 className="font-sora text-xl font-semibold lg:text-3xl leading-tight">
                Exam Mode
              </h3>
              <p className="mt-1 text-[12px] lg:text-[18px] leading-relaxed">
                Built to simulate real exam pressure:
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="border border-white/50 p-4 rounded-2xl ">
                  <div className="h-14 w-14 flex items-center justify-center mb-3 rounded-full bg-white text-brand">
                    <Timer />
                  </div>
                  Timed tests + instant scoring
                </div>
                <div className="border border-white/50 p-4 rounded-2xl ">
                  <div className="h-14 w-14 flex items-center justify-center mb-3 rounded-full bg-white text-brand">
                    <Info />
                  </div>
                  No hints until the end
                </div>
                <div className="border border-white/50 p-4 rounded-2xl ">
                  <div className="h-14 w-14 flex items-center justify-center mb-3 rounded-full bg-white text-brand">
                    <ChartArea />
                  </div>
                  Analytics by subject/topic
                </div>
                <div className="border border-white/50 p-4 rounded-2xl ">
                  <div className="h-14 w-14 flex items-center justify-center mb-3 rounded-full bg-white text-brand">
                    <Lightbulb />
                  </div>
                  Ideal for board prep
                </div>
              </div>
            </div>
          </article>


        </div>

      </div>
    </section>
  );
};

