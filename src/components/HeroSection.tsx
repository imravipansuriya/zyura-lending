
import { Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import heroBanner from "../assets/hero-banner.png";   
import SplitText from "../ui/SplitText";
import ScrollReveal from "../ui/ScrollReveal";

const heroSlides = [
  {
    image: heroBanner,
    title: "Welcome to Your Personalized AI Learning Experience",
    description:
      "From AI-powered MCQs & Exams to real-world clinical simulations, We’re here to help you succeed in every stage of your medical journey.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=2000&q=80",
    title: "Learn Smarter With AI-Powered Study Support",
    description:
      "Master tough concepts faster with adaptive quizzes, practical notes, and guided study plans designed for medical students.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=80",
    title: "Collaborate, Practice, and Grow Together",
    description:
      "Join focused study groups, connect with mentors, and build confidence with a community that keeps you moving forward.",
  },
];

export const HeroSection = () => {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        loop
        navigation={false}
        speed={900}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        // autoplay={false}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />

              <div className="absolute -bottom-30 left-2/4 -translate-3/6 flex items-center w-full">
                <div className="mx-auto mt-36 w-full max-w-5xl px-6 text-center lg:mt-28 lg:px-10">
                  <h1 className="">
                    
                  </h1>
                  <SplitText
                    text={slide.title}
                    className="mx-auto max-w-4xl font-sora text-3xl lg:text-6xl font-bold leading-[1.08] text-white md:text-5xl"
                    delay={50}
                    duration={0.7}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                     
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete} 
                  />

                  <p className="mx-auto mt-1 lg:mt-6 max-w-3xl text-base font-light leading-relaxed text-white/90 md:text-xl">
                    {slide.description}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <a
                      href="#"
                      className="rounded-xl bg-brand px-4 lg:px-8 py-3 lg:py-3.5 text-[14px] lg:text-base font-light text-white transition hover:bg-[#0a4f9f]"
                    >
                      Join Study Group
                    </a>
                    <a
                      href="#"
                      className="rounded-xl border border-white/85 px-4 lg:px-8 py-3 lg:py-3.5 text-[14px] lg:text-base font-light text-white transition hover:bg-white/10"
                    >
                      Start Learning Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> 
    </section>
  );
};
