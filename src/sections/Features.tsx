import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import Avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import Avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import Avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl text-center font-medium mt-6 max-w-2xl mx-auto">
                    Where power meets <span className="text-lime-400">simplicity!</span>
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <FeatureCard 
                        title="Real-time Collaboration" 
                        description="Work together seamlessly with conflict-editing"
                        className="md:col-span-2 lg:col-span-1"
                    >
                        <div className="aspect-video flex justify-center items-center">
                            <Avatar className="z-40">
                                <Image src={Avatar1} alt="Avatar image 1" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image src={Avatar2} alt="Avatar image 2" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image src={Avatar3} alt="Avatar image 3" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex justify-center items-center gap-1">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span key={i} className="size-1.5 rounded-full bg-white inline-flex"></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>

                    <FeatureCard 
                        title="Interactive Prototyping" 
                        description="Engage your clients with prototypes that react to user actions"
                        className="md:col-span-2 lg:col-span-1"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p  className="text-4xl font-extrabold text-white/20 text-center ">
                                We have achieved{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    incredible
                                </span>{" "} 
                                growth this year.
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard 
                        title="Keyboard Quick Actions" 
                        description="Powerful command to help you to create designs"
                        className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="w-28">Shift</Key>
                            <Key className="">alt</Key>
                            <Key className="">C</Key>
                        </div>
                    </FeatureCard>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div key={feature} className="bg-neutral-900 items-center gap-3 border border-white inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl">
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex justify-center items-center text-xl">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
