import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director, FashionForward",
      content: "Jane's expertise in digital marketing transformed our online presence. Her strategic approach and creative content ideas significantly boosted our e-commerce sales."
    },
    {
      name: "Michael Chen",
      position: "CEO, TechSolutions Inc.",
      content: "Working with Jane on our B2B lead generation campaign was a game-changer. Her data-driven strategies and attention to detail helped us secure valuable client contracts."
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, GreenEats",
      content: "Jane's passion for our eco-friendly mission shone through in every aspect of our brand awareness campaign. Her innovative ideas and execution skills were instrumental in our successful launch."
    }
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
              </CardHeader>
              <CardContent>
                <p className="italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

