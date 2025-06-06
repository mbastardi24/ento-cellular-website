
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, DollarSign, Heart, Zap, Recycle, Award } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Insects require 90% less land, 80% less water, and produce 99% fewer greenhouse gases compared to traditional protein sources.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "Lower production costs and higher yield efficiency make insect-based ingredients economically competitive and scalable.",
      color: "text-primary-600",
      bgColor: "bg-primary-100"
    },
    {
      icon: Heart,
      title: "Ethical Production",
      description: "Humane and cruelty-free production methods that align with modern consumer values and ethical standards.",
      color: "text-red-500",
      bgColor: "bg-red-100"
    },
    {
      icon: Zap,
      title: "Superior Nutrition",
      description: "High-quality complete proteins with essential amino acids, vitamins, and minerals optimized for pet health.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Insects can be fed organic waste, creating a closed-loop system that reduces waste and maximizes resource efficiency.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control ensures consistent, safe, and high-performance ingredients every time.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary">Insect-Based</span> Ingredients?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the compelling advantages that make insect-based pet food ingredients 
              the smart choice for manufacturers, consumers, and the planet.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${benefit.bgColor} rounded-full mb-6 group-hover:scale-110 transition-transform`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="bg-primary text-white rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">The Numbers Speak for Themselves</h3>
              <p className="text-primary-100 text-lg">Scientific data supporting the insect ingredient revolution</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="text-primary-100">Less Land Required</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">80%</div>
                <div className="text-primary-100">Less Water Usage</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-primary-100">Fewer Emissions</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2x</div>
                <div className="text-primary-100">Protein Efficiency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
