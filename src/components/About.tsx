
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Users, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To revolutionize pet nutrition through innovative insect-based ingredients that benefit pets, people, and the planet."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge biotechnology to unlock the nutritional potential of insects for pet food applications."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Working closely with manufacturers and consumers to create products that meet real market needs and expectations."
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Committed to reducing environmental impact while providing superior nutrition for beloved pets worldwide."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-primary">Entocellular</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're pioneering the future of pet nutrition by harnessing the remarkable resilience and nutritional 
              benefits of insects to create sustainable ingredients that don't compromise on quality.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-200 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Story Section */}
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded on the belief that the future of pet nutrition lies in sustainable innovation, 
                Entocellular combines scientific expertise with environmental consciousness. We've discovered 
                that insects offer an unprecedented combination of nutritional density, environmental 
                sustainability, and scalable production that traditional ingredients simply cannot match.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team of scientists, nutritionists, and industry experts work tirelessly to transform 
                this vision into reality, creating ingredients that pet owners can trust and manufacturers 
                can rely on for the next generation of pet food products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
