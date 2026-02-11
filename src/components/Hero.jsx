import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full py-24 px-6 font-[Manrope]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Label */}
        <p className="text-sm tracking-widest text-[#39152e] mb-6">
          DACAD ICT SOLUTIONS
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#39154e] leading-tight mb-8">
          A Simplified Way to Start Your <br />
          Daacad ICT
        </h1>

        {/* Description */}
        <p className="max-w-4xl mx-auto text-[#818181] text-base md:text-lg mb-10">
          Dacad ICT Solutions is a leading IT services provider dedicated to
          delivering innovative and customized technology solutions to
          businesses worldwide.
        </p>

        {/* Button */}
        <button className="inline-flex items-center gap-2 bg-[#df5f0f] text-white px-8 py-4 rounded-[20px] font-medium hover:bg-orange-500 transition">
          Discover more <ArrowUpRight />
        </button>
      </div>
    </section>
  );
};

export default Hero;
