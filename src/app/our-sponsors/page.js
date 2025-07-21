import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake } from "lucide-react";

export const metadata = {
    title: 'Our Partners & Sponsors | Bethesda Childcare',
    description: 'We are deeply grateful to our sponsors and partners whose generous contributions make our work possible.',
};

const partners = [
    "TRI-OIL COMPANY, U.S.A",
    "BARAKA ROSES, KENYA",
    "COMPLY INDUSTRIES, KENYA",
    // etc can be represented by a placeholder or removed
];

export default function PartnersPage() {
    return (
        <div className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-purple-950/20 dark:via-background dark:to-purple-950/20">
            <div className="container">
                <section className="text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">Recognition of Our Partners and Sponsors</h1>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
                        We are deeply grateful to our sponsors and partners whose generous contributions make our work at Bethesda Child Care Centre possible. Their unwavering support enables us to provide a safe, loving home, quality education, and essential care to the vulnerable children who rely on us. Together, we are transforming lives and building brighter futures.
                    </p>
                </section>

                <section className="mt-16 max-w-4xl mx-auto space-y-12">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">A Special Thanks</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">
                                Special thanks to Sister Sharna for her instrumental role in the early days of Bethesda. Her belief in our mission and her generous financial support laid the foundation for the vision that is now a reality. Though her direct support has paused, the impact of her contributions continues to resonate, helping us grow into the thriving organization we are today.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Our Valued Partners</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-6 text-foreground/80">We also extend our heartfelt appreciation to the following partners whose ongoing commitment empowers the children at Bethesda Child Care Centre:</p>
                            <ul className="space-y-4">
                                {partners.map((partner, index) => (
                                    <li key={index} className="flex items-center gap-3 bg-secondary/50 p-4 rounded-lg">
                                        <Handshake className="h-6 w-6 text-primary"/>
                                        <span className="font-semibold text-lg">{partner}</span>
                                    </li>
                                ))}
                                <li className="flex items-center gap-3 bg-secondary/50 p-4 rounded-lg">
                                    <Handshake className="h-6 w-6 text-primary"/>
                                    <span className="font-semibold text-lg">And many other anonymous donors...</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    );
}
