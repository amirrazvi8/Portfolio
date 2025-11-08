import luxora from "@/assets/images/luxora.png";
import prepjar from "@/assets/images/prepjar.png";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import { Card } from "@/components/Card";

const portfolioProjects = [
    {
        company: "PrepJar",
        year: "2025",
        title: "AI-Powered Interview Preparation Platform",
        results: [
            { title: "40% faster mock interview practice" },
            { title: "95+ mobile Lighthouse score" },
            { title: "Real-time voice interviews (Vapi + LangChain)" },
        ],
        link: "https://prepjarai.vercel.app",
        image: prepjar,
    },
    {
        company: "Luxora",
        year: "2025",
        title: "AI-Enhanced Ecommerce Platform",
        results: [
            { title: "AI product search with LangChain" },
            { title: "Stripe payments (98% success rate)" },
            { title: "Admin dashboard for inventory & orders" },
        ],
        link: "https://luxora-fashionshop.vercel.app",
        image: luxora,
    },
];

export const Projects = () => {
    return (
        <section className="main" id="projects">
            <div className="container">
                <div className="flex justify-center">
                    <p className="uppercase font-semibold tracking-widest bg-linear-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                        Real-World-Results
                    </p>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
                <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl ">
                    See how I transformed concepts into engaging digital experiences.
                </p>
                <div className="flex flex-col mt-10 gap-20 md:mt-20">
                    {portfolioProjects.map((project, idx) => (
                        <Card
                            key={project.title}
                            className="pb-0 px-8 pt-8 md:px-10 md:pt-12 lg:pt-16 lg:px-20 after:pointer-events-none sticky"
                            style={{
                                top: `calc(64px + ${idx * 44}px)`,
                            }}
                        >
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16">
                                    <div className="bg-linear-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text gap-2">
                                        <span>{project.company}</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div>

                                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 ">{project.title}</h3>
                                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                                    <ul className="flex flex-col gap-4 mt-4 ">
                                        {project.results.map((result) => (
                                            <li className="flex gap-2 text-sm text-white/50 md:text-lg" key={result.title}>
                                                <CheckIcon className="size-5 md:size-6" />
                                                <span>{result.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        className="inline-flex items-center gap-2 border border-white  text-gray-950 px-6 h-12 rounded-xl group relative overflow-hidden py-2 text-sm font-medium mt-8"
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-14 bg-white rounded-xl transition-transform duration-500 ease-in-out transform origin-left group-hover:scale-[3]"></span>
                                        <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-gray-900 tracking-wide">
                                            <span className="flex font-semibold">
                                                <span>Visit</span>
                                                <span className="pl-1 text-white group-hover:text-gray-900 duration-500 inline-flex items-center">
                                                    Live Site
                                                    <ArrowUpRight className="size-4" />
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-t-3xl"
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
