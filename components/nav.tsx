import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Nav() {
  return (
    <nav className="flex items-center justify-between py-6 px-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-red-500 rounded-md"></div>
        <span className="font-bold text-xl">FITNESSXIA</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <Link href="#" className="hover:text-red-500 transition-colors">
          Home
        </Link>
        <Link href="#" className="hover:text-red-500 transition-colors">
          About Us
        </Link>
        <Link href="#" className="hover:text-red-500 transition-colors">
          Programs
        </Link>
        <Link href="#" className="hover:text-red-500 transition-colors">
          Membership
        </Link>
        <Link href="#" className="hover:text-red-500 transition-colors">
          Testimonials
        </Link>
      </div>
      <Button variant="destructive">Sign Up</Button>
    </nav>
  )
}

