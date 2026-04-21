import { useState } from "react";
import logo from "../assets/zyure.png";

const navLinks = ["Home", "Tools", "Study Plan", "AI Tools", "Mentors", "Pricing"];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="absolute inset-x-0 top-0 z-50 ">

            <div className="bg-white/10 backdrop-blur-md ">
                <div className="max-w-[1920px] mx-auto">
                    <div className="hidden items-center justify-between px-7 py-4 lg:flex h-28">


                        <nav className="flex items-center gap-2">
                            <a href="#" className="font-sora text-[16px] font-light text-white/90 transition hover:bg-primary p-3 rounded-lg" >
                                Home
                            </a>
                            <a href="#" className="font-sora text-[16px] font-light text-white/90 transition hover:bg-primary p-3 rounded-lg" >
                                Tools
                            </a>
                            <a href="#" className="font-sora text-[16px] font-light text-white/90 transition hover:bg-primary p-3 rounded-lg" >
                                Study Plan
                            </a>
                            <a href="#" className="font-sora text-[16px] font-light text-white/90 transition hover:bg-primary p-3 rounded-lg" >
                                AI Tools
                            </a>
                        </nav>
                        <div>
                            <a href="#" className="font-pattaya text-4xl leading-none text-white">
                                <img src={logo} alt="Zyura Logo" className="h-18 object-contain w-auto" />
                            </a>
                        </div>



                        <div className="flex items-center gap-3">
                            <nav className="flex items-center gap-2">
                                <a href="#" className="font-sora text-[16px] font-light text-white/90 transition hover:bg-primary p-3 rounded-lg" >
                                    Mentors
                                </a>
                                <a href="#" className="font-sora text-[16px] font-light text-white/90 transition hover:bg-primary p-3 rounded-lg" >
                                    Pricing
                                </a>
                            </nav>
                            <a
                                href="#"
                                className="flex items-center justify-center gap-2 rounded-lg border border-white px-5 font-light py-3 font-sora text-sm text-white transition hover:bg-white/10"
                            >
                                Registration
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 font-sora font-light text-sm text-white transition bg-brand-gradient"
                            >
                                Login
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-5 py-4 lg:hidden">
                        <div>
                            <a href="#" className="font-pattaya text-4xl leading-none text-white">
                                <img src={logo} alt="Zyura Logo" className="h-10 w-auto" />
                            </a>
                        </div>
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-gray-200"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <svg
                                    className="h-7 w-7"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-7 w-7"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>


            {isMobileMenuOpen && (
                <div className="mx-auto mt-3 max-w-[1360px] px-5 md:px-8 lg:hidden">
                    <div
                        id="mobile-menu"
                        className="rounded-2xl border border-white/20 bg-[#063C79]/95 px-4 pb-6 pt-3 shadow-xl backdrop-blur-md"
                    >
                        <nav className="space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="block rounded-md px-3 py-2.5 font-sora text-base font-medium text-white hover:bg-white/10"
                                >
                                    {link}
                                </a>
                            ))}
                        </nav>
                        <div className="mt-5 flex flex-col gap-3 px-1">
                            <a
                                href="#"
                                className="w-full rounded-lg border border-white px-5 py-3 text-center font-sora text-base font-semibold text-white hover:bg-white/10"
                            >
                                Registration
                            </a>
                            <a
                                href="#"
                                className="w-full rounded-lg bg-white px-5 py-3 text-center font-sora text-base font-semibold text-brand"
                            >
                                Login
                            </a>
                        </div>

                    </div>
                </div>
            )}
        </header>
    );
}
