
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
                  The premier choice for global Indians. We manage your most prestigious Property portfolios across Andhra Pradesh and Telangana with absolute transparency and global standards.
                </p>

                {/* Socials */}
                <div className="flex space-x-4 mt-8">
                  {['Instagram', 'Twitter', 'Facebook', 'YouTube', 'Threads'].map((social) => {
                    const socialLinks: { [key: string]: string } = {
                      Instagram: 'https://www.instagram.com/sreepropertytech/',
                      Twitter: 'https://x.com/sreepropertytec',
                      Facebook: 'https://www.facebook.com/sreepropertytech/',
                      YouTube: '#',
                      Threads: 'https://www.threads.net/@sreepropertytech',
                    };
                    return (
                      <a key={social} href={socialLinks[social]} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center text-gray-500 hover:text-yellow-500 hover:border-yellow-500 hover:bg-yellow-600/5 transition-all group">
                        <span className="sr-only">{social}</span>
                        {social === 'Instagram' && <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>}
                        {social === 'Twitter' && <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>}
                        {social === 'Facebook' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.792 5 15.536 5H18V0h-3.977C10.038 0 9 2.105 9 5.589V8z" /></svg>}
                        {social === 'YouTube' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>}
                        {social === 'Threads' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512"><path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z" /></svg>}
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Quick Links Group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white text-[10px] uppercase tracking-widest font-bold mb-6">Explore</h4>
                  <ul className="space-y-3 text-gray-500 text-xs font-medium">
                    <li><a href="#about" className="hover:text-yellow-500 transition-colors">Why NRIs</a></li>
                    <li><a href="#services" className="hover:text-yellow-500 transition-colors">Services</a></li>
                    <li><a href="#assistance" className="hover:text-yellow-500 transition-colors">Assistance</a></li>
                    <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-[10px] uppercase tracking-widest font-bold mb-6">Concierge</h4>
                  <div className="space-y-4 text-gray-400 text-xs font-light">
                    <p>USA: <a href="tel:+18006747733" className="font-bold text-gray-300 hover:text-yellow-500 transition-colors">+1 800-NRI-SREE</a></p>
                    <p>India: <a href="tel:+918688637899" className="font-bold text-gray-300 hover:text-yellow-500 transition-colors">+91 86886 37899</a></p>
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
