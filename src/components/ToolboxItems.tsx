import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { Fragment } from "react/jsx-runtime";

export const ToolboxItems = ({
    toolboxItems,
    className,
    itemClassName,
}: {
    toolboxItems: {
        title: string;
        iconType: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    }[];
    className?: string;
    itemClassName?: string;
}) => {
    return (
        <div className={twMerge("flex mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
            <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6 animate-move-left", itemClassName)}>
                {[...new Array(2)].fill(0).map((_, idx) => (
                    <Fragment key={idx}>
                        {toolboxItems.map((item) => (
                            <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3  outline-2 outline-white/10 rounded-lg">
                                <TechIcon Component={item.iconType} />
                                <span className="font-semibold">{item.title}</span>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    );
};
