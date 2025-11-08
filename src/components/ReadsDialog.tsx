import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import moneyPsychology from "@/assets/images/thepsychologyofmoney.png";
import atomicHabits from "@/assets/images/atomichabbits.png";
import handsOnMachineLearning from "@/assets/images/mlbook.png";
import richDadPoorDad from "@/assets/images/richdadpoordad.jpg";
import Image from "next/image";
import { Card } from "./Card";
import Link from "next/link";

const books = [
    {
        title: "Atomic Habits",
        description: "Practical strategies to build habits that stick.",
        image: atomicHabits,
        link: "https://jamesclear.com/atomic-habits",
    },
    {
        title: "Psychology of Money",
        description: "How our choices shape the way we value money.",
        image: moneyPsychology,
        link: "https://a.co/d/j50tyC4",
    },
    {
        title: "Rich Dad Poor Dad",
        description: "A mindset shift toward financial awareness.",
        image: richDadPoorDad,
        link: "https://a.co/d/6J41OsC",
    },
    {
        title: "Hands-On ML",
        description: "A practical guide to modern ML workflows.",
        image: handsOnMachineLearning,
        link: "https://amzn.in/d/0OgMLnp",
    },
];

export const ReadsDialog = ({ openDialog, setOpenDialog }: { openDialog: boolean; setOpenDialog: (openDialog: boolean) => void }) => {
    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <form>
                <DialogContent className="sm:max-w-84 md:max-w-160 lg:max-w-[1200px] max-h-[90vh] min-h-[40vh] bg-gray-950 border-white/20 border-2">
                    <DialogHeader>
                        <DialogTitle>Books</DialogTitle>
                        <DialogDescription>Some reads that shaped my thinking.</DialogDescription>
                    </DialogHeader>

                    <div className="overflow-y-auto px-6 pb-6 max-h-[calc(95vh-120px)] hide-scrollbar">
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center py-4">
                            {books.map((book) => (
                                <div key={book.title}>
                                    <Card className="w-full max-w-56 hover:scale-105 transition-transform duration-300 cursor-pointer">
                                        <Link
                                            className="flex flex-col items-center text-center p-6"
                                            href={book.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                src={book.image}
                                                alt="Atomic Habits"
                                                className="w-28 h-38 object-cover rounded-md shadow-sm border border-gray-700"
                                            />
                                            <h3 className="mt-4 text-lg tracking-tight">{book.title}</h3>
                                            <p className="mt-2 text-sm text-white/60 leading-relaxed">{book.description}</p>
                                        </Link>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </DialogContent>
            </form>
        </Dialog>
    );
};
