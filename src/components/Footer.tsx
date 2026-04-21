import ZyuraLogo from "../assets/footer-logo.svg";

const pages = ["Home", "Tools", "Study Plan", "AI Tools", "Mentors", "Pricing"];
const siteMap = ["About", "Articles", "Tools", "For Students"];

export const Footer = () => {
  return (
    <footer className="bg-[#d5e0ef]">
      <div className="mx-auto max-w-[1920px] px-6 pb-12 pt-12 md:px-10 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.5fr_0.6fr_0.6fr_0.9fr]">
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <img src={ZyuraLogo} alt="Zyura logo" className="h-20 w-auto object-contain mx-auto lg:mx-0" />
              <p className="mt-4 text-center md:text-left max-w-xl text-[14px] leading-relaxed text-[#4a5565]">
                Zyura provides smart, AI-powered learning tools designed for
                medical students. We help you build effective study habits,
                simplify complex topics, and achieve long-term academic
                success.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-sora font-semibold text-dark text-[18px] md:text-[20px]">
                Contact Info:
              </h3>
              <div className="mt-3 space-y-1 text-[14px] text-[#4a5565]">
                <p>Contact Info: Phone: +1 800 123 4567</p>
                <p>Email: support@zyurae.com</p>
                <p>Address: 125 Wellness Avenue, California, USA</p>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-sora font-semibold text-dark text-[18px] md:text-[20px]">
              Pages
            </h3>
            <ul className="mt-5 space-y-3">
              {pages.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[14px] text-[#4a5565] transition hover:text-[#0b3f80]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-sora font-semibold text-dark text-[18px] md:text-[20px]">
              Site Map
            </h3>
            <ul className="mt-5 space-y-3">
              {siteMap.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[14px] text-[#4a5565] transition hover:text-[#0b3f80]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-sora font-semibold text-dark text-[18px] md:text-[20px]">
              Newsletter
            </h3>
            <p className="mt-4 text-[16px] text-[#4a5565]">
              Subscribe to our newsletter
            </p>

            <form className="mt-4 flex flex-row gap-3 ">
              <input
                type="email"
                placeholder="Enter your email here..."
                className="h-14 flex-1 rounded-2xl border border-white bg-white p-4 text-[14px] text-[#3f4855] outline-none placeholder:text-[#8b95a3]"
              />
              <button
                type="submit"
                className="h-14 bg-brand rounded-2xl px-7 font-sora text-[16px] font-light text-white transition hover:bg-[#0a4f9f]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-brand py-4 text-center">
        <p className="font-sora text-[14px] text-white md:text-[14px]">
          © 2025 Medical Search Hub | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
