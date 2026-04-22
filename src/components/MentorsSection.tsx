
import { createElement } from "react";
import { ArrowUpRight, type IconNode } from "lucide";
import doctorOne from "../assets/doctor-1.png";
import doctorTwo from "../assets/doctor-2.png";
import doctorThree from "../assets/doctor-3.png";

type Mentor = {
  name: string;
  specialty: string;
  bio: string;
  image: string;
};

const mentorGroups: { title: string; mentors: Mentor[] }[] = [
  {
    title: "Featured Mentors",
    mentors: [
      {
        name: "Dr. Laila Kibria",
        specialty: "Dermatology Mentor",
        bio: "Specializes in diagnostic dermatology and board-focused case reviews for clinical confidence.",
        image: doctorOne,
      },
      {
        name: "Dr. Samuel N. Carter",
        specialty: "Internal Medicine Mentor",
        bio: "Guides students through evidence-based decision-making and high-yield internal medicine pathways.",
        image: doctorTwo,
      },
    ],
  },
  {
    title: "Clinical Specialists",
    mentors: [
      {
        name: "Dr. Elena R. Miles",
        specialty: "Clinical Skills Mentor",
        bio: "Focuses on bedside reasoning, patient communication, and practical exam performance strategy.",
        image: doctorThree,
      },
    ],
  },
];

const LucideIcon = ({
  icon,
  size = 42,
  className = "",
}: {
  icon: IconNode;
  size?: number;
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {icon.map(([tag, attrs], index) =>
      createElement(tag, { ...attrs, key: `${tag}-${index}` }),
    )}
  </svg>
);

export const MentorsSection = () => {
  return (
    <section className="pt-25 lg:pt-36">
      <div className="mx-auto mb-16 max-w-[980px] px-6">
        <h2 className="mx-auto text-center font-sora text-2xl font-semibold text-dark md:text-3xl lg:text-[48px]">
          Expert Mentorship from Leading Professionals
        </h2>
      </div>

      <div className="mx-auto max-w-[1920px] px-5">
        <div className="space-y-8">
          {mentorGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="font-sora text-2xl font-semibold text-[#1c2330] md:text-3xl">
                {group.title}
              </h3>

              <div className="space-y-4">
                {group.mentors.map((mentor) => (
                  <article
                    key={`${group.title}-${mentor.name}`}
                    className="group relative overflow-hidden rounded-2xl border border-[#d4dbe7] bg-white"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="relative md:w-[300px] md:shrink-0 lg:w-[360px]">
                        <img
                          src={mentor.image}
                          alt={`${mentor.name} - ${mentor.specialty}`}
                          className="h-[300px] w-full object-cover md:h-full"
                        />
                        <div className="pointer-events-none absolute inset-0 translate-y-14 bg-gradient-to-t from-black/85 via-black/45 to-transparent opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100" />
                      </div>

                      <div className="flex flex-1 flex-col justify-between p-5 md:p-7 lg:p-8">
                        <div>
                          <h4 className="font-sora text-2xl font-semibold text-[#171c25] md:text-3xl">
                            {mentor.name}
                          </h4>
                          <p className="mt-1 font-sora text-lg font-medium text-brand">
                            {mentor.specialty}
                          </p>
                          <p className="mt-4 max-w-4xl font-sora text-[16px] leading-relaxed text-[#3a4453]">
                            {mentor.bio}
                          </p>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                          <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-lg border border-[#1f2a3a] px-5 py-2.5 font-sora text-[15px] font-medium text-[#1f2a3a] transition hover:border-brand hover:text-brand"
                          >
                            View Profile
                            <LucideIcon
                              icon={ArrowUpRight}
                              size={20}
                              className="shrink-0"
                            />
                          </button>
                          <button
                            type="button"
                            className="rounded-lg bg-brand px-5 py-2.5 font-sora text-[15px] font-medium text-white transition hover:bg-[#0a4f9f]"
                          >
                            Book a Session
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
