import { Button } from "@/components/ui/button"
import Image from "next/image"

export function FitnessGoals() {
  return (
    <section className="px-4 py-20 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[600px]">
          <Image
            src="/gymtrainer.jpg"
            alt="Person exercising"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">
                ★
              </div>
              <div className="text-black">
                <div className="font-semibold">Professional</div>
                <div className="text-sm text-zinc-600">Trainer</div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Get Ready To Reach Your Fitness Goals</h2>
          <p className="text-zinc-400">
            We take pride that it is committed to helping people achieve their fitness goals. We offer a variety of fitness programs and services to fit your needs, whether you are a beginner or an experienced fitness enthusiast.
          </p>
          <Button variant="destructive" size="lg">
            Free Trial Today
          </Button>
        </div>
      </div>
    </section>
  )
}

