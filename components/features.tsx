import { Clock, Heart, UserCheck } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export function Features() {
  const features = [
    {
      icon: UserCheck,
      title: "Personal Training",
      description:
        "Find a personal trainer who will help you create a personalized fitness plan to reach your goals.",
    },
    {
      icon: Heart,
      title: "Expert Trainer",
      description:
        "Our gym is proud to offer a team of highly skilled and certified trainer help achieve your health & fitness goals.",
    },
    {
      icon: Clock,
      title: "Flexible Time",
      description:
        "There are many fitness classes that are offered during off-peak hours such as early morning or late evening.",
    },
  ];

  return (
    <section className="px-4 py-20 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">
            Why Should People Choose FitnessXia Services
          </h2>
          <div className="space-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="destructive" size="lg">
            Join Today
          </Button>
        </div>
        <div className="relative h-[600px]">
          <Image
            src="/gymtrainer.jpg"
            alt="Trainer with client"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute top-4 right-4 bg-white p-4 rounded-full">
            <div className="text-red-500">
              <Heart className="w-6 h-6 fill-current" />
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg">
            <div className="text-black">
              <div className="font-semibold">70 bpm</div>
              <div className="text-sm text-zinc-600">Heart Rate</div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg">
            <div className="text-black">
              <div className="font-semibold">24%</div>
              <div className="text-sm text-zinc-600">Fat Burning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
