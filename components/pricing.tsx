import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

export function Pricing() {
  const plans = [
    {
      name: "DISCOVER",
      price: 99,
      features: [
        "3 classes per month",
        "1 group class monthly",
        "Online class access",
        "1 free fitness guide",
      ],
    },
    {
      name: "ENTERPRISE",
      price: 299,
      features: [
        "10 classes per month",
        "5 group class monthly",
        "Online class access",
        "1 free fitness guide",
        "1 free fitness training",
      ],
      popular: true,
    },
    {
      name: "PROFESSIONAL",
      price: 199,
      features: [
        "7 classes per month",
        "3 group class monthly",
        "Online class access",
        "1 free fitness guide",
      ],
    },
  ]

  return (
    <section className="px-4 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Choose The Best Plan</h2>
        <p className="text-zinc-400">
          Choose a plan that's right for your fitness journey. Simple pricing & no hidden charges.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`bg-zinc-800 border-zinc-700 ${
              plan.popular ? "ring-2 ring-red-500" : ""
            }`}
          >
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <div className="text-4xl font-bold mt-4">
                ${plan.price}
                <span className="text-lg text-zinc-400 font-normal">
                  /Per Month
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "destructive" : "outline"}
                className="w-full mt-6"
              >
                Choose Plan
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

