import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative px-4 py-20 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold leading-tight">
            GET HEALTHY BODY WITH THE PERFECT EXERCISES
          </h1>
          <p className="text-zinc-400 text-lg">
            You will always have to train if you want to make a healthy body and
            mind through the power of fitness.
          </p>
          <div className="flex items-center gap-4">
            <Button size="lg" variant="destructive">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Play className="w-4 h-4" />
              Watch Video
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold">105+</div>
              <div className="text-zinc-400">Expert Trainers</div>
            </div>
            <div>
              <div className="text-3xl font-bold">970+</div>
              <div className="text-zinc-400">Member Active</div>
            </div>
            <div>
              <div className="text-3xl font-bold">135+</div>
              <div className="text-zinc-400">Fitness Programs</div>
            </div>
          </div>
        </div>
        <div className="relative h-[600px]">
          <Image
            src="/gymtrainer.jpg"
            alt="Fitness trainers"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg">
            <div className="text-black font-semibold">150 Cal</div>
            <div className="h-4 bg-red-500 rounded mt-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
