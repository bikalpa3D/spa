import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, SpaceIcon as Yoga, Weight, MonitorIcon as Running } from 'lucide-react'

export function Programs() {
  const programs = [
    {
      title: "Strength Training",
      icon: Dumbbell,
      description: "Our trainers will design the a progressive exercise program that will help you build muscle and increase strength.",
    },
    {
      title: "Basic Yoga",
      icon: Yoga,
      description: "This program combines yoga, breathing exercises, and meditation to improve flexibility and reduce stress.",
    },
    {
      title: "Body Building",
      icon: Weight,
      description: "Our body building is focused on building muscle mass through progressive overload and proper nutrition.",
    },
    {
      title: "Weight Loss",
      icon: Running,
      description: "Our weight loss programs are designed to help you achieve sustainable weight loss through exercise and nutrition.",
    },
  ]

  return (
    <section className="px-4 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">The Best Programs We Offers For You</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          We offer a wide range of comprehensive fitness programs designed to cater to individuals of all fitness levels. Our aim is to help you achieve specific goals & maximize results.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((program) => (
          <Card key={program.title} className="bg-zinc-800 border-zinc-700">
            <CardHeader>
              <program.icon className="w-10 h-10 text-red-500" />
              <CardTitle>{program.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400">{program.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

