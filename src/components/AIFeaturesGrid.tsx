
import quizImage from "../assets/AI-Generated-Quiz.png";
import flashCardsImage from "../assets/AI-Create-Flash-Cards.png";
import allInOneImage from "../assets/All-in-One.png";
import notesImage from "../assets/Download-Notes.png";
import access247Image from "../assets/24x7-Access.png";
import medicalAiImage from "../assets/Medical-AI.png";

type GridCard =
  | { type: "image"; image: string; alt: string }
  | {
    type: "text";
    title: string;
    description: string;
    bg: string;
  };

const gridCards: GridCard[] = [
  { type: "image", image: quizImage, alt: "AI generated quiz" },
  {
    type: "text",
    title: "AI Generated Quiz",
    description:
      "Practice smarter with AI-powered quizzes tailored to your learning level. Get instant feedback and improve faster with adaptive learning paths.",
    bg: "#DDE2EE",
  },
  { type: "image", image: allInOneImage, alt: "Students learning together" },
  {
    type: "text",
    title: "AI Create Flash Cards",
    description:
      "Turn complex topics into quick, easy-to-review flashcards instantly. Boost memory retention with smart repetition techniques.",
    bg: "#E6F1F5",
  },
  {
    type: "text",
    title: "MCQ Bank",
    description:
      "Access a vast collection of exam-focused multiple-choice questions. Prepare efficiently with real exam patterns and difficulty levels.",
    bg: "#DEE8F7",
  },
  { type: "image", image: notesImage, alt: "Doctor using tablet" },
  {
    type: "text",
    title: "Case Study",
    description:
      "Learn through real-world medical scenarios and case-based learning. Improve clinical thinking and decision-making skills.",
    bg: "#E8E4F2",
  },
  { type: "image", image: access247Image, alt: "Doctor using laptop" },
  { type: "image", image: flashCardsImage, alt: "Medical study workspace" },
  {
    type: "text",
    title: "Download Notes",
    description:
      "Get high-quality, well-structured study notes anytime, anywhere. Simplify your revision with concise and exam-ready content.",
    bg: "#EADDE7",
  },
  { type: "image", image: medicalAiImage, alt: "Medical AI tools" },
  {
    type: "text",
    title: "Medical AI",
    description:
      "Explore powerful AI tools designed specifically for medical students. Analyze, learn, and solve problems with intelligent assistance.",
    bg: "#ECEEDF",
  },
];

export const AIFeaturesGrid = () => {
  return (
    <section className="pt-25 lg:pt-36">
      <div className="mx-auto mb-16 px-6 max-w-[755px] lg:max-w-[855px ">
        <h2 className="mx-auto text-center font-sora text-2xl md:text-3xl lg:text-[48px] font-semibold text-dark">
          We transform the way you study with AI
          <span className="font-pattaya text-[1.02em] font-normal leading-[1.08] inline">
            all in one platform.
          </span>
        </h2>
      </div>

      <div className="mx-auto max-w-[1920px] px-5">
        <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
           
          {gridCards.map((card, index) => {
            if (card.type === "image") {
              return (
                <article
                  key={`image-${index}`}
                  className="overflow-hidden rounded-xl hidden md:block"
                >
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="h-[250px] w-full object-cover md:h-[280px]"
                  />
                </article>
              );
            }

            return (
              <article
                key={`text-${card.title}`}
                className="flex min-h-[250px] flex-col rounded-xl p-5 md:min-h-[280px]"
                style={{ backgroundColor: card.bg }}
              >
                <h3 className="font-sora text-xl lg:text-2xl leading-tight text-[#1d2430]">
                  {card.title}
                </h3>
                <p className="mt-auto text-[12px] lg:text-[14px] leading-relaxed text-[#2b3441]">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
