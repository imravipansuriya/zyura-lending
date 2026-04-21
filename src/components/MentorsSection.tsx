
import { createElement } from "react";
import { ArrowUpRight, type IconNode } from "lucide";
import doctorOne from "../assets/doctor-1.png";
import doctorTwo from "../assets/doctor-2.png";
import doctorThree from "../assets/doctor-3.png";

type Mentor = {
  name: string;
  specialty: string;
  image: string;
};

const mentors: Mentor[] = [
  { name: "Azad Kibria", specialty: "Dermatologist", image: doctorOne },
  { name: "Azad Kibria", specialty: "Dermatologist", image: doctorTwo },
  { name: "Azad Kibria", specialty: "Dermatologist", image: doctorThree },
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

      <div className="mx-auto mb-16 px-6 max-w-[755px] lg:max-w-[855px]">
        <h2 className="mx-auto text-center font-sora text-2xl md:text-3xl lg:text-[48px] font-semibold text-dark">
          Expert Mentorship for Tomorrow's -{" "}
          <span className="font-pattaya font-normal">Doctors.</span>
        </h2>
      </div>
      <div className="mx-auto max-w-[1920px] px-5">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mentors.map((mentor) => (
            <article
              key={`${mentor.name}-${mentor.image}`}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={mentor.image}
                alt={`${mentor.name} - ${mentor.specialty}`}
                className="h-[560px] lg:h-full w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 translate-y-10 bg-gradient-to-t from-black/85 via-black/45 to-transparent opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100" />

              <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/50 backdrop-blur-md  p-3 px-4 lg:p-5 backdrop-blur-sm transition-all duration-500 group-hover:bg-brand-gradient">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-sora text-lg lg:text-xl font-semibold text-[#171c25] transition-colors duration-500 group-hover:text-white">
                      {mentor.name}
                    </h3>
                    <p className="mt-1 font-sora text-[14px] lg:text-[18px] text-[#2a303a] transition-colors duration-500 group-hover:text-white/90">
                      {mentor.specialty}
                    </p>
                  </div>

                  <LucideIcon
                    icon={ArrowUpRight}
                    className="shrink-0 w-[30px] h-[30px] text-[#0f1722] transition-colors duration-500 group-hover:text-white"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
