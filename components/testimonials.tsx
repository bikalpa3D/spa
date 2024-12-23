import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'
import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "/21.png",
      rating: 5,
      text: "I've been coming to this gym for 3 years now and I've never been in better shape. The trainers are knowledgeable and supportive.",
    },
    {
      name: "Michael Chen",
      image: "/21.png",
      rating: 5,
      text: "The facilities are top-notch and the community is so welcoming. I've made great progress and met wonderful people.",
    },
  ]

  return (
    <section className="px-4 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Happy Clients Say About Us</h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 text-yellow-500 fill-current" />
          ))}
          <span className="ml-2 text-zinc-400">4.9 (45 Reviews)</span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="bg-zinc-800 border-zinc-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-zinc-400">Happy Customer</div>
                </div>
              </div>
              <p className="text-zinc-400">{testimonial.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

