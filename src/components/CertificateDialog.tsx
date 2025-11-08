import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { Card } from "./Card";
import ibm from "@/assets/images/ibm.jpg";
import google from "@/assets/images/google.jpg";
import oracle from "@/assets/images/oracle.jpg";
import Link from "next/link";

const Certificates = [
    {
        title: "IBM Data Foundation",
        description: "Fundamentals of data handling, analytics, and interpretation.",
        image: ibm,
        link: "https://www.credly.com/badges/2b52a9ed-dad9-4a0a-b125-108a40124cf2",
    },
    {
        title: "Google Analytics Certification",
        description: "Hands-on experience with data analysis and business insights.",
        image: google,
        link: "https://skillshop.credential.net/c713555a-e0f1-4319-90f1-f9056b58ad1e",
    },
    {
        title: "Oracle Data Science Professional",
        description: "Practical machine learning and cloud-based data workflows.",
        image: oracle,
        link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=6476B7607AC6B3AD4F8BB6FEB9024FC3BCE9BB5DEFC16957F935ACFE4C8CFFAC",
    },
];

export const CertificateDialog = ({ openDialog, setOpenDialog }: { openDialog: boolean; setOpenDialog: (openDialog: boolean) => void }) => {
    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <form>
                <DialogContent className="sm:max-w-84 md:max-w-160 lg:max-w-[1200px] max-h-[90vh] min-h-[40vh] bg-gray-950 border-white/20 border-2">
                    <DialogHeader>
                        <DialogTitle>Certificates</DialogTitle>
                        <DialogDescription>Verified credentials and completed trainings.</DialogDescription>
                    </DialogHeader>

                    <div className="overflow-y-auto px-6 pb-6 max-h-[calc(95vh-120px)] hide-scrollbar">
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center py-4">
                            {Certificates.map((certificate) => (
                                <div key={certificate.title}>
                                    <Card className="w-full max-w-56 h-76 hover:scale-105 transition-transform duration-300">
                                        <Link
                                            className="flex flex-col items-center text-center p-6"
                                            href={certificate.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                src={certificate.image}
                                                alt="Atomic Habits"
                                                className="w-40 h-auto object-cover rounded-md shadow-sm border border-gray-700"
                                            />
                                            <h3 className="mt-4 text-lg tracking-tight">{certificate.title}</h3>
                                            <p className="mt-2 text-sm text-white/60 leading-relaxed">{certificate.description}</p>
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
