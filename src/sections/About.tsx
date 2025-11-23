"use client";
import { Card } from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import React from "@/assets/icons/react.svg";
import Nextjs from "@/assets/icons/nextdotjs.svg";
import TailwindCss from "@/assets/icons/tailwindcss.svg";
import ReduxToolkit from "@/assets/icons/redux.svg";
import Nodejs from "@/assets/icons/nodedotjs.svg";
import Expressjs from "@/assets/icons/express.svg";
import Mongodb from "@/assets/icons/mongodb.svg";
import Mysql from "@/assets/icons/mysql.svg";
import Docker from "@/assets/icons/docker.svg";
import Git from "@/assets/icons/git.svg";
import GithubIcon from "@/assets/icons/github.svg";
import GithubActions from "@/assets/icons/githubactions.svg";
import moneyPsychology from "@/assets/images/thepsychologyofmoney.png";
import atomicHabits from "@/assets/images/atomichabbits.png";
import theCourageToBeDisliked from "@/assets/images/theCouragetoBeDisliked.jpg";
import howtoWinFriends from "@/assets/images/howtoWinFriends.png";
import ibm from "@/assets/images/ibm.jpg";
import google from "@/assets/images/google.jpg";
import oracle from "@/assets/images/oracle.jpg";
import Image from "next/image";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaChartBar } from "react-icons/fa";

import { SiMysql, SiFastapi, SiLangchain, SiPython, SiNumpy, SiPandas, SiScikitlearn } from "react-icons/si";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { BsBarChartFill } from "react-icons/bs";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { CertificateDialog } from "@/components/CertificateDialog";
import { ReadsDialog } from "@/components/ReadsDialog";

const developmentTools = [
    {
        title: "HTML5",
        iconType: HtmlIcon,
    },
    {
        title: "CSS3",
        iconType: CssIcon,
    },
    {
        title: "JavaScript",
        iconType: JavaScriptIcon,
    },
    {
        title: "React.js",
        iconType: React,
    },
    {
        title: "Next.js",
        iconType: Nextjs,
    },
    {
        title: "Tailwind CSS",
        iconType: TailwindCss,
    },
    {
        title: "Redux Toolkit",
        iconType: ReduxToolkit,
    },

    {
        title: "Node.js",
        iconType: Nodejs,
    },
    {
        title: "Express.js",
        iconType: Expressjs,
    },
    {
        title: "MongoDB",
        iconType: Mongodb,
    },
    {
        title: "MySQL",
        iconType: Mysql,
    },
];

const DevOpsTools = [
    {
        title: "Docker",
        iconType: Docker,
    },
    {
        title: "Git",
        iconType: Git,
    },
    {
        title: "Github",
        iconType: GithubIcon,
    },
    {
        title: "Githhub Actions",
        iconType: GithubActions,
    },
];

const MLSkills = [
    {
        title: "Python",
        icon: <SiPython />,
        left: "10%",
        top: "5%",
    },
    {
        title: "Numpy",
        icon: <SiNumpy />,
        left: "75%",
        top: "60%",
    },
    {
        title: "Pandas",
        icon: <SiPandas />,
        left: "50%",
        top: "70%",
    },
    {
        title: "Matplotlib",
        icon: <FaChartBar />,
        left: "70%",
        top: "2%",
    },
    {
        title: "Seaborn",
        icon: <BiSolidPieChartAlt2 />,
        left: "77%",
        top: "33%",
    },
    {
        title: "MySQL",
        icon: <SiMysql />,
        left: "54%",
        top: "40%",
    },
    {
        title: "Excel",
        icon: <PiMicrosoftExcelLogoFill />,
        left: "5%",
        top: "65%",
    },
    {
        title: "Power BI",
        icon: <BsBarChartFill />,
        left: "25%",
        top: "73%",
    },
    {
        title: "LangChain",
        icon: <SiLangchain className="size-6" />,
        left: "26%",
        top: "37%",
    },
    {
        title: "FastApi",
        icon: <SiFastapi />,
        left: "3%",
        top: "33%",
    },
    {
        title: "Scikit-Learn",
        icon: <SiScikitlearn className="size-6" />,
        left: "38%",
        top: "8%",
    },
];

export const About = () => {
    const constraintRef = useRef(null);
    const [openCertificates, setOpenCertificates] = useState(false);
    const [openReads, setOpenReads] = useState(false);

    return (
        <section className="py-16 lg:py-24" id="about">
            <div className="container">
                <SectionHeader
                    eyebrow="About Me"
                    title="A Glimp Into My World"
                    description="A curious developer who loves building with MERN & Next.js and exploring Data Science through logic, creativity, and code."
                />
                <div className="mt-20 flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
                        <Card className="h-80 col-span-2 lg:col-span-1">
                            <CardHeader title="My Reads" description="Explore the books that have shaped my thinking." />
                            <div className="mx-6 mt-2 md:mt-0 cursor-pointer flex items-center overflow-hidden" onClick={() => setOpenReads(true)}>
                                <Image
                                    src={atomicHabits}
                                    alt="Certificate 1"
                                    className="w-40 h-60 rounded-sm object-cover z-40 border-2 border-gray-700"
                                />
                                <Image
                                    src={theCourageToBeDisliked}
                                    alt="Certificate 2"
                                    className="w-40 h-60 rounded-sm object-cover shadow-md -ml-32 z-30 border-2 border-gray-700"
                                />
                                <Image
                                    src={howtoWinFriends}
                                    alt="Certificate 3"
                                    className="w-40 h-60 rounded-sm object-cover -ml-32 z-20 border-2 border-gray-700"
                                />
                                <Image
                                    src={moneyPsychology}
                                    alt="Certificate 3"
                                    className="w-40 h-60 rounded-sm object-cover -ml-32 z-10 border-2 border-gray-700"
                                />
                            </div>
                        </Card>
                        <Card className="h-80 col-span-3 lg:col-span-2">
                            <CardHeader title="Full Stack & DevOps" description="Building scalable web applications with modern JavaScript frameworks." />
                            <ToolboxItems toolboxItems={developmentTools} className="" itemClassName="animate-move-left [animation-duration:20s]" />
                            <ToolboxItems toolboxItems={DevOpsTools} className="mt-6 " itemClassName="animate-move-right [animation-duration:8s]" />
                        </Card>
                        <Card className="h-80 flex flex-col col-span-3 lg:col-span-2">
                            <CardHeader
                                title="Data Science"
                                description="Exploring data to uncover insights and drive intelligent solutions."
                                className=""
                            />
                            <div className="relative flex-1" ref={constraintRef}>
                                {MLSkills.map((skill) => (
                                    <motion.div
                                        key={skill.title}
                                        className="inline-flex gap-2 px-6 bg-linear-to-r from-emerald-300 to-sky-400 py-1.5 rounded-full absolute cursor-pointer"
                                        style={{
                                            left: skill.left,
                                            top: skill.top,
                                        }}
                                        drag
                                        dragConstraints={constraintRef}
                                    >
                                        <span className="flex items-center text-gray-950">{skill.icon}</span>
                                        <span className="font-medium text-gray-950">{skill.title}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                        <Card className="h-80 relative col-span-2 lg:col-span-1">
                            <CardHeader title="Credentials" description="Certified in data science and analytics domains." />
                            <div className="mx-6 mt-2 md:mt-0 cursor-pointer flex items-center overflow-hidden" onClick={() => setOpenCertificates(true)}>
                                <Image src={ibm} alt="Certificate 1" className="w-40 h-auto rounded-md object-cover z-30 border-2 border-gray-700" />
                                <Image
                                    src={google}
                                    alt="Certificate 2"
                                    className="w-38 h-auto rounded-md object-cover shadow-md -ml-28 z-20 border-2 border-gray-600"
                                />
                                <Image
                                    src={oracle}
                                    alt="Certificate 3"
                                    className="w-40 h-auto rounded-md object-cover -ml-28 z-10 border-2 border-gray-700"
                                />
                            </div>
                        </Card>
                        <CertificateDialog openDialog={openCertificates} setOpenDialog={setOpenCertificates} />
                        <ReadsDialog openDialog={openReads} setOpenDialog={setOpenReads} />
                    </div>
                </div>
            </div>
        </section>
    );
};
