const Footer = () => {
//   Define navigation links in an array for easy maintenance and scalability
  const navigationLinks = [
    { label: 'Overview', path: '/overview' },
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Careers', path: '/careers' },
    { label: 'Help', path: '/help' },
    { label: 'Privacy', path: '/privacy' },
  ];

  return (
    <footer className="bg-[#051605] text-white py-20 font-[Manrope]">
      <div className="max-w-[80%] mx-auto">
        
        {/* TOP SECTION: Branding and Mission */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            DacadICT
          </h2>
          <p className="text-[16px] text-white max-w-70 leading-snug">
            We decided to fill fully the Somali society about ICT Solution Programs
          </p>
        </div>

        {/* MIDDLE SECTION: Navigation Links mapped from array */}
        <nav className="flex flex-wrap gap-x-4 gap-y-4 mb-10">
          {navigationLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.path} 
              className="text-[16px] text-gray-300 hover:underline transition-all duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* DIVIDER: Subtle horizontal line */}
        <div className="border-t border-[#c7c7c7] w-full mb-8"></div>

        {/* BOTTOM SECTION: Copyright and Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p>
            © {new Date().getFullYear()} DacadICT. All rights reserved.
          </p>
          
          <p className="mt-4 md:mt-0">
            Designed by{' '}
            <a 
              href="https://www.facebook.com/people/Yoolhub/61575107615351/#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white font-semibold hover:underline transition-all"
            >
              Yoolhub
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;