import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, Twitter, Facebook, Linkedin, Share2 } from "lucide-react"
import presidentImage from "@/assets/president.webp";


export function PresidentsMessage() {
    const socialButtons = [
        { icon: Twitter, label: "Share on Twitter", color: "hover:text-blue-400" },
        { icon: Facebook, label: "Share on Facebook", color: "hover:text-blue-600" },
        { icon: Linkedin, label: "Share on LinkedIn", color: "hover:text-blue-700" },
        { icon: Share2, label: "Share", color: "hover:text-gray-400" },
    ]

    return (
        <div className="p-8 bg-black/70 border rounded-xl border-border/50">
            <section className="py-20 rounded-xl  text-white "
            style={{
                backgroundImage: `
    linear-gradient(135deg, #4775d1 0%, #4775d1 50%, #ff9900 100%),
    url("https://www.transparenttextures.com/patterns/billie-holiday.png")
  `,
                backgroundBlendMode: "overlay",
            }}>
            <div className=" mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                    {/* President's Photo - 2 columns */}
                    <div className="lg:col-span-2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
                            <Card className="relative p-6 bg-zinc-900/80  border border-border/50">
                                <div className="aspect-[4/5] relative rounded-xl overflow-hidden">
                                    <img
                                        src={presidentImage}
                                        alt="President of AIFTP"
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="text-xl font-bold">Samir Jani</h3>
                                    <p className="text-sm text-gray-400">President, AIFTP</p>
                                    <p className="text-xs text-gray-500 mt-1">2023-2025</p>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Message Content - 3 columns */}
                    <div className="lg:col-span-3">
                        <div className="relative">
                            {/* Accent line */}
                            <div className="absolute left-0 top-0 w-1 h-20 bg-gradient-to-b from-primary to-secondary rounded-full"></div>

                            <div className="pl-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <Quote className="h-6 w-6 text-primary" />
                                    <h2 className="text-3xl font-bold">President's Message</h2>
                                </div>

                                <blockquote className="text-lg leading-relaxed text-gray-300 mb-6 italic">
                                    "As we navigate the evolving landscape of taxation in India, AIFTP remains committed to empowering our
                                    members with cutting-edge knowledge, professional excellence, and unwavering support. Together, we are
                                    not just tax practitioners – we are the architects of India's financial future."
                                </blockquote>

                                <div className="prose prose-invert max-w-none mb-8">
                                    <p className="leading-relaxed">
                                        The All India Federation of Tax Practitioners has been at the forefront of professional development
                                        for over three decades. Our mission extends beyond mere representation – we are dedicated to
                                        fostering a community of ethical, knowledgeable, and innovative tax professionals who contribute
                                        meaningfully to India's economic growth.
                                    </p>

                                    <p className="leading-relaxed">
                                        In this digital age, we continue to adapt and evolve, ensuring our members have access to the latest
                                        tools, technologies, and training programs. Our commitment to excellence remains unwavering as we
                                        build bridges between traditional practices and modern solutions.
                                    </p>
                                </div>

                                {/* Social Sharing */}
                                <div className="flex items-center gap-4 pt-6 border-t border-gray-700">
                                    <span className="text-sm font-medium text-gray-400">Share this message:</span>
                                    <div className="flex gap-2">
                                        {socialButtons.map((social, index) => (
                                            <Button
                                                key={index}
                                                variant="ghost"
                                                size="sm"
                                                className={`h-9 w-9 p-0 hover:scale-110 transition-all duration-200 ${social.color}`}
                                            >
                                                <social.icon className="h-4 w-4" />
                                                <span className="sr-only">{social.label}</span>
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
