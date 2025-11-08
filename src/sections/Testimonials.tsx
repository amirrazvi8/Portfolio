import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment } from "react/jsx-runtime";

const testimonials = [
    {
        name: "Noor Alam",
        position: "Friend & Project Teammate",
        text: "We've worked on several college projects together, and he’s always the one who keeps the team on track. He learns fast, stays calm under pressure, and makes sure everyone understands what's going on. Super reliable.",
        avatar: memojiAvatar1,
    },
    {
        name: "Alisha Khan",
        position: "Group Project Collaborator",
        text: "Working with him never feels stressful. He listens to ideas, explains things clearly, and keeps a positive vibe in the group. Makes teamwork easy and comfortable.",
        avatar: memojiAvatar2,
    },
    {
        name: "Mohd Ayan",
        position: "DSA Practice Partner",
        text: "We practiced DSA together almost daily. He approaches problems in a calm, logical way and doesn’t get frustrated easily. He’s also really supportive — he explains concepts without making you feel dumb.",
        avatar: memojiAvatar3,
    },
    {
        name: "Nitesh Kumar Yadav",
        position: "Classmate",
        text: "He's the kind of person who doesn’t give up when things get tough. I’ve seen him spend hours figuring out a problem just because he wants to understand it properly. Really hardworking and patient.",
        avatar: memojiAvatar5,
    },
];

export const Testimonials = () => {
    return (
        <div className="py-16 lg:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <SectionHeader
                    eyebrow="Happy Client"
                    title="What My Clients Say"
                    description="Don't just take my word for it. See what my client say about my work"
                />
                <div className="mt-12 lg:mt-20 flex overflow-x-clip mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex gap-8 flex-none py-4 animate-move-left animation-duration-[90s] hover:paused">
                        {[...new Array(2)].fill(0).map((_, index) => (
                            <Fragment key={index}>
                                {testimonials.map((testimonial) => (
                                    <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 duration-200">
                                        <div className="flex gap-4 items-center">
                                            <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center shrink-0">
                                                <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">{testimonial.name}</div>
                                                <div className="text-sm text-white/40">{testimonial.position}</div>
                                            </div>
                                        </div>
                                        <p className="text-sm md:text-base mt-4 md:mt-6">{testimonial.text}</p>
                                    </Card>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
