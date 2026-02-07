import React from "react";

const ServiceCard = ({ number, title, description, bg}) => {
  return (
    <div className={`relative rounded-2xl ${bg} shadow-md hover:shadow-lg transition-shadow h-80 p-8`}>
      {/* Number badge */}
      <div className="absolute top-0 left-0 bg-[#39154e] text-white w-17 h-14.5 flex items-center justify-center rounded-tl-2xl rounded-br-2xl">
        {number}
      </div>

      {/* Title */}
      <h3 className="mt-12 text-[30px] text-[#39154e] font-semibold leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-[#818181] leading-relaxed">
        {description}
      </p>

      {/* Learn more */}
      <a
        href="#"
        className="absolute bottom-6 left-8 text-[#39154e] font-medium hover:underline"
      >
        Learn more...
      </a>
    </div>
  );
};

export default ServiceCard;
