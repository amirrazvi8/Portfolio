"use client";
import { useRef, useState, FormEvent, useEffect } from "react";
import axios, { AxiosError } from "axios";
import grainImage from "@/assets/images/grain.jpg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";
import { twMerge } from "tailwind-merge";

export const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"success" | "error" | null>(null);
    const inputRef = useRef<HTMLDivElement | null>(null);

    const handleContactClick = () => {
        setIsOpen(true);
        setTimeout(() => {
            inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 400);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData) as {
            name: string;
            email: string;
            message: string;
        };

        try {
            const res = await axios.post("/api/send-email", data, { timeout: 10_000 });
            setStatus("success");
            form.reset();
            console.log("Contact send response:", res);
        } catch (err) {
            const message = (err as AxiosError<{ error?: string }>)?.response?.data?.error ?? (err as AxiosError).message ?? "Failed to send message.";
            console.error("Contact send failed:", message);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    const buttonText = loading ? "Sending..." : status === "success" ? "Sent Successfully!" : status === "error" ? "Failed. Try Again." : "Send Message";

    useEffect(() => {
        if (status === null) return;
        const timer = setTimeout(() => setStatus(null), 2000);
        return () => clearTimeout(timer);
    }, [status]);

    return (
        <section className="py-16 pt-12" id="contact">
            <div className="container relative z-20">
                <div className="bg-linear-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-20 shadow-lg">
                    <div className="absolute inset-0 opacity-10 -z-10" style={{ backgroundImage: `url(${grainImage.src})` }}></div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl">Let’s Create Something Amazing Together</h2>
                            <p className="text-sm md:text-base mt-2">Ready to bring your next project to life? Let’s connect.</p>
                        </div>

                        <div>
                            <button
                                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max transition-transform hover:scale-105"
                                onClick={handleContactClick}
                            >
                                <span className="font-semibold">Contact Me</span>
                                <ArrowUpRightIcon className="size-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    ref={inputRef}
                    className={twMerge(
                        "transition-all duration-500 ease-in-out overflow-hidden bg-amber-50 rounded-3xl shadow-md mt-6",
                        isOpen ? "max-h-[400px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-8"
                    )}
                >
                    <Card>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6">
                            <input
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                required
                                className="border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring focus:ring-sky-400"
                            />

                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                required
                                className="border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring focus:ring-sky-400"
                            />

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={4}
                                required
                                className="border border-gray-600 rounded-lg p-3 resize-none focus:outline-none focus:ring focus:ring-sky-400"
                            />

                            <button
                                disabled={loading}
                                className={twMerge(
                                    "bg-white text-gray-900 font-bold py-3 rounded-xl transition-colors hover:bg-gray-200",
                                    status === "success" && "text-green-500",
                                    status === "error" && "text-red-500",
                                    loading && "opacity-70 cursor-wait"
                                )}
                            >
                                {buttonText}
                            </button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
};
