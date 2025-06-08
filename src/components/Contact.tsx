import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { CONTACT_INFO } from "@/config/constants";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Here you would typically send the data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to <span className="text-primary">Transform</span> Pet Nutrition?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team to learn how Entocellular can help you create 
              the next generation of sustainable pet food products.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John" 
                        className="border-gray-300 focus:border-primary" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe" 
                        className="border-gray-300 focus:border-primary" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com" 
                      className="border-gray-300 focus:border-primary" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <Input 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name" 
                      className="border-gray-300 focus:border-primary" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project and how we can help..."
                      rows={5}
                      className="border-gray-300 focus:border-primary"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-600 text-white group"
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Whether you're a pet food manufacturer interested in our ingredients, 
                  an investor looking to support sustainable innovation, or simply curious 
                  about our mission, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <a 
                    href={CONTACT_INFO.emailLink}
                    className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 hover:bg-primary-200 hover:scale-110 transition-all duration-200 ease-in-out"
                  >
                    <Mail className="w-6 h-6 text-primary" />
                  </a>
                  <div>
                    <h4 className="font-bold text-gray-900">Email Us</h4>
                    <a 
                      href={CONTACT_INFO.emailLink}
                      className="font-semibold hover:text-primary-600 text-gray-600 transition-all duration-200 ease-in-out">
                      <span>{CONTACT_INFO.email}</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <a 
                    href={CONTACT_INFO.phoneLink}
                    className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 hover:bg-primary-200 hover:scale-110 transition-all duration-200 ease-in-out"
                  >
                    <Phone className="w-6 h-6 text-primary" />
                  </a>
                  <div>
                    <h4 className="font-bold text-gray-900">Call Us</h4>
                    <a
                      href={CONTACT_INFO.phoneLink}
                      className="font-semibold hover:text-primary-600 text-gray-600 transition-all duration-200 ease-in-out">
                      <span>{CONTACT_INFO.phone}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Partnership Opportunities</h4>
                <p className="text-gray-700 text-sm">
                  Interested in becoming a manufacturing partner or distributor? 
                  Let's discuss how we can work together to bring sustainable 
                  pet nutrition to market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
