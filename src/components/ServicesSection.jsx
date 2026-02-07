import React from "react";
import ServiceCard from "./ui/ServiceCard";
import { ArrowUpRight } from "lucide-react";

// Services data used to render service cards
const servicesData = [
  {
    number: "01",
    title: "Web Development",
    description:
      "We build fast, responsive, and secure websites tailored to your brand.",
    bg: "bg-[#f5fdeb]",
  },
  {
    number: "02",
    title: "Network & Infrastructure",
    description:
      "Expert setup and management of robust office networks and server systems.",
    bg: "bg-[#ebecfd]",
  },
  {
    number: "03",
    title: "Cybersecurity Solutions",
    description:
      "Advanced protection to secure your digital assets from hackers and breaches.",
    bg: "bg-[#ebfafd]",
  },
  {
    number: "04",
    title: "Cloud Computing Services",
    description:
      "Scalable cloud solutions for secure data storage and remote accessibility.",
    bg: "bg-[#fdebf6]",
  },
  {
    number: "05",
    title: "Software & App Development",
    description:
      "Custom software and mobile apps built to solve your business challenges.",
    bg: "bg-[#fdebeb]",
  },
  {
    number: "06",
    title: "IT Consulting & Support",
    description:
      "Expert technical advice and 24/7 support to keep your systems running.",
    bg: "bg-[#fdf4eb]",
  },
];

const ServicesSection = () => {
  return (
    // Main services section
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-sm text-[#39154e] uppercase mb-2">
              Our Services
            </p>
            <h2 className="text-[40px] font-medium text-[#39154e]">
              THE SERVICES WE PROVIDING
            </h2>
          </div>

          {/* Call to action */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-[#39154e] mb-2">
              We have 5+ other services
            </p>
            <button className="inline-flex items-center gap-2 bg-[#df5f0f] text-white px-8 py-4 rounded-[20px] font-medium hover:bg-orange-500 transition">
              Discover more <ArrowUpRight />
            </button>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              bg={service.bg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;