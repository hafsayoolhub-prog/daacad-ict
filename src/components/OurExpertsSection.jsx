import React from "react";
import { Linkedin, X } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

// Import your grouped images here
import expert1 from "../assets/images/Expert 1.png";
import expert2 from "../assets/images/Expert 2.png";
import expert3 from "../assets/images/Expert 3.png";
import expert4 from "../assets/images/Expert 4.png";

const expertsData = [
  {
    image: expert1,
    name: "Eng Said",
    role: "Marketing Officer",
    twitter: "https://x.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    image: expert2,
    name: "Eng Ali Abdi",
    role: "Web Developer",
    twitter: "https://x.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    image: expert3,
    name: "Eng Md Siyad",
    role: "Web Developer",
    twitter: "https://x.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    image: expert4,
    name: "Eng Yasir Anter",
    role: "Chairman",
    twitter: "https://x.com/",
    linkedin: "https://linkedin.com/",
  },
];

const OurExpertsSection = () => {
  return (
    <section className="py-20 bg-[#f3f3f3]">
      <div className="max-w-[80%] mx-auto px-0 font-[Inter]">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[40px] text-[#1b1d1e] font-medium font-intel mb-3">
            Our Experts
          </p>

          <h2 className="text-4xl md:text-5xl font-medium text-[#1b1d1e]">
            Meet the creative minds <br />
            behind{" "}
            <span className="italic font-[Instrument_Serif]">our success</span>
          </h2>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 font-[Poppins]">
          {expertsData.map((expert, index) => (
            <div key={index} className="text-center">
              {/* Grouped Image */}
              <div className="mb-6">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="mx-auto w-full max-w-65 object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-[#1b1d1e]">
                {expert.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-[#1b1d1e]/60 mb-4">{expert.role}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 text-[#1b1d1e]/60">
                {expert.twitter && (
                  <a
                    href={expert.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition"
                  >
                    <FaXTwitter size={18} />
                  </a>
                )}

                {expert.linkedin && (
                  <a
                    href={expert.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertsSection;
