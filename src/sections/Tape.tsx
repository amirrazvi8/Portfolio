import { Fragment } from "react/jsx-runtime";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiRedux, SiMongodb, SiMysql, SiLangchain, SiDocker, SiGithubactions, SiPython, SiNumpy, SiPandas } from "react-icons/si";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { BsBarChartFill } from "react-icons/bs";

const skills = [
    {
        title: "Power BI",
        icon: <BsBarChartFill />,
    },
    {
        title: "React.js",
        icon: <FaReact />,
    },
    {
        title: "Next.js 15",
        icon: <RiNextjsLine />,
    },
    {
        title: "Redux Toolkit",
        icon: <SiRedux />,
    },
    {
        title: "Node.js",
        icon: <FaNodeJs />,
    },
    {
        title: "MongoDB",
        icon: <SiMongodb />,
    },
    {
        title: "MySQL",
        icon: <SiMysql />,
    },
    {
        title: "Landchain",
        icon: <SiLangchain />,
    },
    {
        title: "Docker",
        icon: <SiDocker />,
    },
    {
        title: "Github Actions",
        icon: <SiGithubactions />,
    },
    {
        title: "Python",
        icon: <SiPython />,
    },
    {
        title: "Numpy",
        icon: <SiNumpy />,
    },
    {
        title: "Pandas",
        icon: <SiPandas />,
    },
    {
        title: "Excel",
        icon: <PiMicrosoftExcelLogoFill />,
    },
];

export const Tape = () => {
    return (
        <div className="py-16 lg:py-20 overflow-x-clip">
            <div className=" -rotate-3 -mx-1">
                <div className="flex mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                    <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left animation-duration-[20s]">
                        {[...new Array(2)].fill(0).map((_, idx) => (
                            <Fragment key={idx}>
                                {skills.map((skill) => (
                                    <div key={skill.title} className="inline-flex gap-4 items-center">
                                        <span className="text-5xl flex items-center justify-center ml-16">{skill.icon}</span>
                                        <span className="text-gray-100 font-semibold text-3xl">{skill.title}</span>
                                    </div>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
