import React from "react";
import Image from "next/image";
import profile from "@/assets/images/profile-image.png";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import { Particles } from "@/components/Particles";
import { FaArrowDown } from "react-icons/fa6";

export const Hero = () => {
    return (
        <div className="relative pb-32 pt-48 md:py-50 lg:py-60 overflow-x-clip lg:px-20">
            <div className="absolute inset-0 z-0">
                <Particles />
            </div>

            <div className="absolute inset-0 z-10 mask-[linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                <div
                    className="absolute inset-0 -z-10 opacity-5"
                    style={{
                        backgroundImage: `url(${grainImage.src})`,
                    }}
                ></div>
                <div className="hero-ring size-[620px]" />
                <div className="hero-ring size-[820px]" />
                <div className="hero-ring size-[1020px]" />
                <div className="hero-ring size-[1220px]" />

                <HeroOrbit size={440} rotation={80} shouldOrbit orbitDuration="20s" shouldSpin spinDuration="4s">
                    <StarIcon className="size-5 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={480} rotation={-120} shouldOrbit orbitDuration="23s" shouldSpin spinDuration="5s">
                    <StarIcon className="size-4 text-emerald-300" />
                </HeroOrbit>
                <HeroOrbit size={530} rotation={180} shouldOrbit orbitDuration="25s" shouldSpin spinDuration="7s">
                    <StarIcon className="size-10 text-emerald-300/30" />
                </HeroOrbit>
                <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="28s" shouldSpin spinDuration="6s">
                    <StarIcon className="size-12 text-emerald-300" />
                </HeroOrbit>
                <HeroOrbit size={580} rotation={-41} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="8s">
                    <StarIcon className="size-10 text-emerald-300/40" />
                </HeroOrbit>
                <HeroOrbit size={590} rotation={100} shouldOrbit orbitDuration="33s" shouldSpin spinDuration="5s">
                    <StarIcon className="size-8 text-emerald-300" />
                </HeroOrbit>
                <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="35s" shouldSpin spinDuration="9s">
                    <StarIcon className="size-14 text-emerald-300/50" />
                </HeroOrbit>
                <HeroOrbit size={710} rotation={-20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
                    <StarIcon className="size-8 text-emerald-300/40" />
                </HeroOrbit>
                <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
                    <StarIcon className="size-10 text-emerald-300/40" />
                </HeroOrbit>
                <HeroOrbit size={730} rotation={-150} shouldOrbit orbitDuration="43s" shouldSpin spinDuration="7s">
                    <StarIcon className="size-8 text-emerald-300/30" />
                </HeroOrbit>
                <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="45s" shouldSpin spinDuration="7s">
                    <StarIcon className="size-28 text-emerald-300" />
                </HeroOrbit>
                <HeroOrbit size={890} rotation={72} shouldOrbit orbitDuration="45s" shouldSpin spinDuration="7s">
                    <StarIcon className="size-20 text-emerald-300" />
                </HeroOrbit>
                <HeroOrbit size={860} rotation={5} shouldOrbit orbitDuration="47s" shouldSpin spinDuration="5s">
                    <StarIcon className="size-10 text-emerald-300/40" />
                </HeroOrbit>
                <HeroOrbit size={860} rotation={-100} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="8s">
                    <StarIcon className="size-10 text-emerald-300/30" />
                </HeroOrbit>
                <HeroOrbit size={860} rotation={-140} shouldOrbit orbitDuration="45s" shouldSpin spinDuration="6s">
                    <StarIcon className="size-5 text-emerald-300/40" />
                </HeroOrbit>
            </div>

            <div className="contasiner relative z-20 lg:-mtk-8 flex justify-around flex-col-reverse md:flex-row">
                <div className="z-30">
                    <div className="max-w-2xl mx-auto z-30">
                        <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">Crafting Smart & Scalable Web Experiences</h1>
                        <p className="mt-4 text-center text-white/60 md:text-lg z-10">
                            As a passionate developer and data science enthusiast, I craft modern web apps with MERN & Next.js - blending logic,
                            creativity, and design.
                        </p>
                    </div>

                    <div className="flex flex-col items-center mt-8 gap-4 md:flex-row md:justify-center z-30">
                        <a href="#contact" className="inline-flex items-center gap-2 border border-white/15 h-12 px-6 rounded-xl">
                            <span className="font-semibold">{`Let's Connect`}</span>
                        </a>

                        <a
                            className="inline-flex items-center gap-2 border border-white  text-gray-900 px-4 h-12 rounded-xl group relative overflow-hidden py-2  font-medium"
                            href="/Amir_s_Resume.pdf"
                            download
                        >
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-13 bg-white rounded-xl transition-transform duration-500 ease-in-out transform origin-right group-hover:scale-[3]"></span>
                            <span className="relative z-10 transition-colors duration-500 ease-in-out tracking-wide font-semibold">
                                <div className="flex items-center font-semibold">
                                    <span className="pr-5 text-white group-hover:text-gray-950 duration-500">Resume</span>
                                    <FaArrowDown className="size-5 font-bold" />
                                </div>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <Image src={profile} className="w-48 md:sw-76 md:w-108 -mt-32 -mb-1" alt="memoji-computer" />
                    <div className="bg-gray-950 border border-gray-800 px-8 py-1.5 inline-flex items-center gap-4 rounded-lg z-20 ml-4">
                        <div className="bg-green-500 size-2.5 rounded-full relative z-20">
                            <div className="absolute inset-0 bg-green-500 rounded-full size-2.5 animate-ping-large"></div>
                        </div>
                        <div className="text-sm font-medium">Available for new Projects</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
