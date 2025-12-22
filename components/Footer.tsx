
import React from 'react';
import ContactForm from './ContactForm';

const Footer: React.FC = () => {
  const [isRevealed, setIsRevealed] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <footer id="contact" ref={sectionRef} className="bg-black pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">

          {/* Left Side: Brand & Links */}
          <div className={`lg:col-span-5 flex flex-col justify-between reveal-item ${isRevealed ? 'revealed' : ''} order-last lg:order-first`}>
            <div className="space-y-12">
              {/* Brand Info */}
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-yellow-600 rounded flex items-center justify-center font-bold text-black text-lg shadow-lg shadow-yellow-600/20">S</div>
                  <span className="text-lg font-bold tracking-tighter text-white uppercase">Sree<span className="text-yellow-500">Property</span>Tech</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
                  The premier choice for global Indians. We manage the most prestigious real estate portfolios across Andhra Pradesh and Telangana with absolute transparency and global standards.
                </p>

                {/* Socials */}
                <div className="flex space-x-4 mt-8">
                  {['Instagram', 'Twitter', 'Facebook', 'YouTube'].map((social) => (
                    <a key={social} href="#" className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center text-gray-500 hover:text-yellow-500 hover:border-yellow-500 hover:bg-yellow-600/5 transition-all group">
                      <span className="sr-only">{social}</span>
                      {social === 'Instagram' && <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>}
                      {social === 'Twitter' && <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>}
                      {social === 'Facebook' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.792 5 15.536 5H18V0h-3.977C10.038 0 9 2.105 9 5.589V8z" /></svg>}
                      {social === 'YouTube' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links Group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white text-[10px] uppercase tracking-widest font-bold mb-6">Explore</h4>
                  <ul className="space-y-3 text-gray-500 text-xs font-medium">
                    <li><a href="#services" className="hover:text-yellow-500 transition-colors">Services</a></li>

                    <li><a href="#about" className="hover:text-yellow-500 transition-colors">Why NRIs</a></li>
                    <li><a href="#" className="hover:text-yellow-500 transition-colors">Success Stories</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-[10px] uppercase tracking-widest font-bold mb-6">Concierge</h4>
                  <div className="space-y-4 text-gray-400 text-xs font-light">
                    <p>USA: <span className="font-bold text-gray-300">+1 800-NRI-SREE</span></p>
                    <p>India: <span className="font-bold text-gray-300">+91 86886 37899</span></p>
                    <p>Email: <a href="mailto:sreepropertytech@gmail.com" className="font-bold text-gray-300 hover:text-yellow-500 transition-colors">sreepropertytech@gmail.com</a></p>
                    <p className="text-yellow-500 font-bold uppercase tracking-widest text-[9px] mt-2">Available 24/7 Global</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block pt-12">
              <div className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                © 2025 SreePropertyTech. All Rights Reserved.
              </div>
            </div>
          </div>

          {/* Right Side: Resized Enquiry Section */}
          <div className={`lg:col-span-7 reveal-item ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
            <ContactForm />
          </div>

        </div>

        {/* Mobile Copyright */}
        <div className="lg:hidden border-t border-white/5 pt-8 text-center text-[10px] text-gray-600 uppercase tracking-widest font-bold">
          © 2025 SreePropertyTech. All Rights Reserved.
        </div>

        {/* Footer Legal Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-end items-center text-gray-700 text-[9px] uppercase tracking-widest font-bold gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
          <a href="#" className="hover:text-white transition-colors">Grievance Cell</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
