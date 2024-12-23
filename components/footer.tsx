import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export function Footer() {
  const categories = [
    "Basic Yoga",
    "Strength Training",
    "Cardio Exercise",
    "Weight Loss",
  ]

  const help = [
    "Account",
    "Support Center",
    "Privacy Policy",
    "Terms & Conditions",
  ]

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-md"></div>
              <span className="font-bold text-xl">FITNESSXIA</span>
            </div>
            <p className="text-zinc-400 mb-6">
              Transform your body and mind with our expert-led fitness programs.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-6">Categories</h3>
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category}>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6">Help</h3>
            <ul className="space-y-4">
              {help.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6">Subscribe Our Newsletter</h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-zinc-800 border-zinc-700"
              />
              <Button variant="destructive">Send</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-400">
          <p>© 2024 FitnessXia. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

