"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";
import { Card } from "./Card";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

import atomicHabits from "@/assets/images/atomichabbits.png";
import moneyPsychology from "@/assets/images/thepsychologyofmoney.png";
import theCourageToBeDisliked from "@/assets/images/theCouragetoBeDisliked.jpg";
import howtoWinFriends from "@/assets/images/howtoWinFriends.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ReadsDialogProps {
    openDialog: boolean;
    setOpenDialog: (openDialog: boolean) => void;
}
interface contentStructure {
    intro: string;
    keyInsight: string;
    learnings: string[];
    experience: string;
    whyRecommend: string;
}

interface Book {
    title: string;
    author: string;
    description: string;
    image: StaticImageData | string;
    content: contentStructure;
}

const books: Book[] = [
    {
        image: atomicHabits,
        author: "James Clear",
        title: "Atomic Habits",
        description: "Real progress comes from small consistent habits, not motivation.",
        content: {
            intro: `
This book changed the way I think about growth. Earlier, I believed success came from big jumps or sudden motivation - but Atomic Habits showed me that real change is slow, boring, and built quietly every single day.
      `,
            keyInsight: `
The idea that hit me hardest:
"We don’t rise to the level of our goals, we fall to the level of our systems."

I realized I kept setting huge goals without building the daily systems to reach them. This book shifted my focus from outcomes to identity - becoming someone who shows up consistently, even if it's just 1%.
      `,
            learnings: [
                "1% improvement daily compounds massively",
                "Identity > motivation - who you become matters most",
                "Small habits create big results",
                "Consistency beats intensity",
            ],
            experience: `
Even small changes helped me improve my coding routine, health, and mindset. Nothing dramatic - just tiny wins stacking up.
      `,
            whyRecommend: `
If you’re tired of restarting again and again, read this. It teaches discipline that actually lasts.
      `,
        },
    },
    {
        image: moneyPsychology,
        title: "Psychology of Money",
        author: "Morgan Housel",
        description: "Showed me money is more about mindset and behavior than numbers.",
        content: {
            intro: `
This book completely shifted how I think about money. I used to believe wealth was about high income and financial knowledge, but this book showed me that real wealth is built through behaviour, patience, and mindset.
      `,
            keyInsight: `
The insight that hit me hardest:
"Wealth is what you don’t see."

Most people look rich but aren’t actually wealthy. Real wealth is quiet - it’s freedom, peace, and control over your time. Money you save and invest matters more than money spent trying to impress others.
      `,
            learnings: [
                "Behavior > intelligence - discipline matters more than IQ",
                "Wealth is built by saving, not showing",
                "Freedom is the highest form of wealth",
                "Compounding rewards patience, not brilliance",
            ],
            experience: `
This book made me stop comparing my life with others and think long-term. I became more mindful with money and focused on stability over showing off.
      `,
            whyRecommend: `
If you want a healthier relationship with money and life, read this. It teaches you how to think about money, not just how to earn it.
      `,
        },
    },
    {
        image: howtoWinFriends,
        title: "How to Win Friends & Influence People",
        author: "Dale Carnegie",
        description: "A guide to building real connections and better communication.",
        content: {
            intro: `
This book changed the way I communicate and handle relationships. I used to think being straightforward and honest was enough, but this book made me realize that how you make people feel matters more than what you say.
      `,
            keyInsight: `
The idea that stayed with me:
"People don't care about what you know until they know you care."

Real influence comes from listening, understanding, and appreciating others — not trying to prove anything.
      `,
            learnings: [
                "If you want to be interesting, be genuinely interested in others",
                "Never criticize - appreciation works way better",
                "Remember names, listen more than you speak",
                "Make people feel important, genuinely",
            ],
            experience: `
After applying these ideas, conversations became more real. People opened up more, and relationships started feeling natural instead of forced.
      `,
            whyRecommend: `
If you want better friendships, networking, or communication, read this. It makes you a better human to other humans.
      `,
        },
    },
    {
        image: theCourageToBeDisliked,
        title: "The Courage to Be Disliked",
        author: "Ichiro Kishimi",
        description: "A guide to living freely without needing approval.",
        content: {
            intro: `
This book hit me differently. It isn’t motivational or feel-good - it’s a reality check. It made me realize how much of my life was controlled by the need for approval and fear of judgement.
      `,
            keyInsight: `
The line that changed everything:
"You are unhappy because you care too much about how others see you."

Real freedom starts when you stop living for other people’s expectations and start choosing what’s right for you, even if others don’t like it.
      `,
            learnings: [
                "You can’t control what others think - only how you act",
                "Happiness comes from contribution, not comparison",
                "Live for your values, not validation",
                "Growth requires the courage to be disliked",
            ],
            experience: `
After reading this, I stopped over-explaining myself and worrying about opinions. I became more comfortable saying no and choosing my direction without guilt.
      `,
            whyRecommend: `
If you feel pressure to please everyone or constantly think about what others might say - read this. It gives you mental freedom.
      `,
        },
    },
];

export const ReadsDialog = ({ openDialog, setOpenDialog }: ReadsDialogProps) => {
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [flipped, setFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleSelect = (book: Book) => {
        setSelectedBook(book);
        setTimeout(() => setFlipped(true), 150);
    };

    const handleBack = () => {
        setIsAnimating(true);
        setTimeout(() => setFlipped(false), 50);
        setTimeout(() => {
            setSelectedBook(null);
            setIsAnimating(false);
        }, 550);
    };

    const isActive = (book: Book) => selectedBook?.title === book.title;
    const isFlipped = (book: Book) => isActive(book) && flipped;

    return (
        <Dialog
            open={openDialog}
            onOpenChange={(open) => {
                if (!open) {
                    setFlipped(false);
                    setSelectedBook(null);
                }
                setOpenDialog(open);
            }}
        >
            <DialogContent className="sm:max-w-[90vw] md:max-w-[90vw] lg:max-w-[1200px] max-h-[90vh] min-h-[80vh] bg-gray-950 border-white/20 border-2">
                <DialogHeader>
                    <DialogTitle>Books</DialogTitle>
                    <DialogDescription>Some reads that shaped my thinking.</DialogDescription>
                </DialogHeader>

                <div className="overflow-y-auto px-6 pb-6 max-h-[calc(90vh-120px)] hide-scrollbar">
                    <div className={`${selectedBook == null ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" : ""} gap-6 place-items-center py-4`}>
                        {books.map((book) => (
                            <motion.div
                                key={book.title}
                                layoutId={book.title}
                                animate={{ rotateY: isActive(book) ? 180 : 0 }}
                                transition={{ duration: 0.55, ease: "easeInOut" }}
                                style={{ transformStyle: "preserve-3d" }}
                                className={` ${selectedBook && selectedBook.title !== book.title ? "hidden pointer-events-none opacity-0" : ""} `}
                            >
                                <div
                                    className={`backface-hidden ${
                                        isFlipped(book) || isAnimating ? "absolute inset-0 overflow-hidden" : "relative overflow-hidden"
                                    }`}
                                >
                                    <Card className="w-56 transition-transform duration-300">
                                        <div className="flex flex-col items-center text-center p-6 h-84 relative">
                                            <Image
                                                src={book.image}
                                                alt={book.title}
                                                className="w-28 h-38 object-cover rounded-md shadow-sm border border-gray-700"
                                            />
                                            <h3 className="mt-4 text-lg tracking-tight">{book.title}</h3>
                                            <p className="mt-2 text-sm text-white/60 leading-relaxed italic">by {book.author}</p>
                                            <Button
                                                className="bottom-2 absolute bg-transparent border-2 text-white hover:bg-transparent text-md"
                                                onClick={() => handleSelect(book)}
                                            >
                                                Insights
                                                <ArrowRight className="size-5 -ml-1" />
                                            </Button>
                                        </div>
                                    </Card>
                                </div>

                                <div
                                    className={`backface-hidden transform-[rotateY(180deg)] ${
                                        isFlipped(book) || isAnimating ? "relative block" : "absolute inset-0 hidden"
                                    }`}
                                >
                                    <Card
                                        className={`p-6 flex flex-col items-start text-left min-h-[76px] min-w-72 w-fit max-w-[1080px] h-auto space-y-2 ${
                                            isFlipped(book) ? "overflow-y-auto" : "overflow-hidden"
                                        }`}
                                    >
                                        <Button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleBack();
                                            }}
                                            className="bg-transparent border-2 text-white hover:bg-transparent text-md"
                                        >
                                            <ArrowLeft className="size-5 -mr-1" />
                                            Back
                                        </Button>

                                        <h2 className="text-2xl font-semibold tracking-tight">{book.title}</h2>
                                        <p className="text-sm text-white/50 italic">by {book.author}</p>

                                        <div className="text-white/80 leading-relaxed whitespace-pre-line">{book.content.intro}</div>

                                        <h3 className="text-lg mt-2 mb-1 font-semibold tracking-wide text-emerald-300">Big Insight</h3>
                                        <p className="text-white/80 leading-relaxed">{book.content.keyInsight}</p>

                                        <h3 className="text-lg mt-2 mb-1 font-semibold tracking-wide text-emerald-300">Learnings that stayed with me</h3>
                                        <ul className="space-y-2">
                                            {book.content.learnings.map((point, index) => (
                                                <li key={index} className="flex gap-2 items-start text-white/80 leading-relaxed">
                                                    <span className="text-purple-400 text-xl font-bold">•</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <h3 className="text-lg mt-2 mb-1 font-semibold tracking-wide text-emerald-300">My Experience</h3>
                                        <p className="text-white/80 leading-relaxed">{book.content.experience}</p>

                                        <h3 className="text-lg mt-2 mb-1 font-semibold tracking-wide text-emerald-300">Why I recommend it</h3>
                                        <p className="text-white/80 leading-relaxed">{book.content.whyRecommend}</p>
                                    </Card>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
