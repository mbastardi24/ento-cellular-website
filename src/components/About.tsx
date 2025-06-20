
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Users, Globe, Microscope, GraduationCap, Linkedin } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Creating real animal nutrition without the downsides of farming animals through innovative cultivated insect cell technology."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Using cultivated meat technology with insect cells that are inherently more scalable, resilient and adaptable than livestock cells."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Creating differentiators for pet food producers while meeting consumer demands for animal-free alternatives."
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Providing stable animal protein supply without the supply chain fragility of farming animals."
    }
  ];

  const founders = [
    {
      name: "Sophie Letcher",
      linkedInUrl: "https://www.linkedin.com/in/sophia-letcher-9b9639b3/",
      title: "Co-founder & PhD Researcher"
    },
    {
      name: "Michael Saad",
      linkedInUrl: "https://www.linkedin.com/in/michael-k-saad/",
      title: "Co-founder & PhD Researcher"
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
              Hi, we are Entocellular, and we're creating sustainable, ethical and scalable pet food ingredients.
            </p>
          </div>

          {/* About the Founders Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">About the Founders</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {founders.map((founder, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-200 transition-colors">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h4>
                    <p className="text-primary-600 font-medium mb-4">{founder.title}</p>
                    <a 
                      href={founder.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Founders Story Section */}
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <GraduationCap className="w-8 h-8 text-primary mr-3" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Sophie & Michael</h3>
                      <p className="text-primary-600 font-medium">Co-founders & PhD Researchers</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                
                <p>
                  Almost half of all pet food ingredients by weight come from animals. While animal products 
                  provide valuable nutrition to pets, they have downsides for both consumers and producers. 
                  Consumers want more ethical alternatives, while producers worry about supply chain fragility 
                  of animal production.
                </p>
                
                <p>
                  At Entocellular, we're creating that real animal nutrition without the downsides of farming 
                  animals. We're using cultivated meat technology, which means we take a small sample of cells 
                  from an animal and then grow them in a controlled environment, creating that high value 
                  nutrition that pets need.
                </p>
              </div>
            </div>
          </div>

          {/* Technology Differentiation */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Microscope className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">How We're Different</h3>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-left">
                <p>
                  Instead of focusing on cells from livestock species, we are growing cells from insects.
                  Insect cells are uniquely suited as a pet food ingredient because compared to cells from 
                  livestock species, they're inherently more scalable, resilient and adaptable.
                </p>
                
                <p>
                  Our product is a differentiator for pet food producers, meeting consumer demands for 
                  animal-free alternatives, and importantly, we're creating a stable animal protein supply 
                  without the supply chain fragility of farming animals.
                </p>
              </div>
            </div>
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

          {/* Future Plans Section */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Journey Forward</h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  As scientists and co-founders, we deeply understand the technology behind our venture 
                  and are committed to making this innovative approach to pet food ingredients a reality.
                </p>
                
                <p>
                  We're finishing our PhDs this summer and plan to work on Entocellular full time 
                  after graduation. We're actively seeking funding opportunities to support this project 
                  and scale our technology to meet market demands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
