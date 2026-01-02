
import React, { useState, useMemo, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

// Comprehensive list of countries with flags, ISO codes and dial codes
const countryData = [
  { name: "Afghanistan", code: "AF", dial_code: "+93", flag: "🇦🇫" },
  { name: "Albania", code: "AL", dial_code: "+355", flag: "🇦🇱" },
  { name: "Algeria", code: "DZ", dial_code: "+213", flag: "🇩🇿" },
  { name: "Andorra", code: "AD", dial_code: "+376", flag: "🇦🇩" },
  { name: "Angola", code: "AO", dial_code: "+244", flag: "🇦🇴" },
  { name: "Argentina", code: "AR", dial_code: "+54", flag: "🇦🇷" },
  { name: "Armenia", code: "AM", dial_code: "+374", flag: "🇦🇲" },
  { name: "Australia", code: "AU", dial_code: "+61", flag: "🇦🇺" },
  { name: "Austria", code: "AT", dial_code: "+43", flag: "🇦🇹" },
  { name: "Azerbaijan", code: "AZ", dial_code: "+994", flag: "🇦🇿" },
  { name: "Bahamas", code: "BS", dial_code: "+1", flag: "🇧🇸" },
  { name: "Bahrain", code: "BH", dial_code: "+973", flag: "🇧🇭" },
  { name: "Bangladesh", code: "BD", dial_code: "+880", flag: "🇧🇩" },
  { name: "Belgium", code: "BE", dial_code: "+32", flag: "🇧🇪" },
  { name: "Bhutan", code: "BT", dial_code: "+975", flag: "🇧🇹" },
  { name: "Brazil", code: "BR", dial_code: "+55", flag: "🇧🇷" },
  { name: "Brunei", code: "BN", dial_code: "+673", flag: "🇧🇳" },
  { name: "Bulgaria", code: "BG", dial_code: "+359", flag: "🇧🇬" },
  { name: "Cambodia", code: "KH", dial_code: "+855", flag: "🇰🇭" },
  { name: "Canada", code: "CA", dial_code: "+1", flag: "🇨🇦" },
  { name: "Chile", code: "CL", dial_code: "+56", flag: "🇨🇱" },
  { name: "China", code: "CN", dial_code: "+86", flag: "🇨🇳" },
  { name: "Colombia", code: "CO", dial_code: "+57", flag: "🇨🇴" },
  { name: "Croatia", code: "HR", dial_code: "+385", flag: "🇭🇷" },
  { name: "Cyprus", code: "CY", dial_code: "+357", flag: "🇨🇾" },
  { name: "Czech Republic", code: "CZ", dial_code: "+420", flag: "🇨🇿" },
  { name: "Denmark", code: "DK", dial_code: "+45", flag: "🇩🇰" },
  { name: "Egypt", code: "EG", dial_code: "+20", flag: "🇪🇬" },
  { name: "Estonia", code: "EE", dial_code: "+372", flag: "🇪🇪" },
  { name: "Ethiopia", code: "ET", dial_code: "+251", flag: "🇪🇹" },
  { name: "Finland", code: "FI", dial_code: "+358", flag: "🇫🇮" },
  { name: "France", code: "FR", dial_code: "+33", flag: "🇫🇷" },
  { name: "Georgia", code: "GE", dial_code: "+995", flag: "🇬🇪" },
  { name: "Germany", code: "DE", dial_code: "+49", flag: "🇩🇪" },
  { name: "Ghana", code: "GH", dial_code: "+233", flag: "🇬🇭" },
  { name: "Greece", code: "GR", dial_code: "+30", flag: "🇬🇷" },
  { name: "Hong Kong", code: "HK", dial_code: "+852", flag: "🇭🇰" },
  { name: "Hungary", code: "HU", dial_code: "+36", flag: "🇭🇺" },
  { name: "Iceland", code: "IS", dial_code: "+354", flag: "🇮🇸" },
  { name: "India", code: "IN", dial_code: "+91", flag: "🇮🇳" },
  { name: "Indonesia", code: "ID", dial_code: "+62", flag: "🇮🇩" },
  { name: "Iran", code: "IR", dial_code: "+98", flag: "🇮🇷" },
  { name: "Iraq", code: "IQ", dial_code: "+964", flag: "🇮🇶" },
  { name: "Ireland", code: "IE", dial_code: "+353", flag: "🇮🇪" },
  { name: "Israel", code: "IL", dial_code: "+972", flag: "🇮🇱" },
  { name: "Italy", code: "IT", dial_code: "+39", flag: "🇮🇹" },
  { name: "Japan", code: "JP", dial_code: "+81", flag: "🇯🇵" },
  { name: "Jordan", code: "JO", dial_code: "+962", flag: "🇯🇴" },
  { name: "Kazakhstan", code: "KZ", dial_code: "+7", flag: "🇰🇿" },
  { name: "Kenya", code: "KE", dial_code: "+254", flag: "🇰🇪" },
  { name: "Kuwait", code: "KW", dial_code: "+965", flag: "🇰🇼" },
  { name: "Kyrgyzstan", code: "KG", dial_code: "+996", flag: "🇰🇬" },
  { name: "Latvia", code: "LV", dial_code: "+371", flag: "🇱🇻" },
  { name: "Lebanon", code: "LB", dial_code: "+961", flag: "🇱🇧" },
  { name: "Lithuania", code: "LT", dial_code: "+370", flag: "🇱🇹" },
  { name: "Luxembourg", code: "LU", dial_code: "+352", flag: "🇱🇺" },
  { name: "Macau", code: "MO", dial_code: "+853", flag: "🇲🇴" },
  { name: "Malaysia", code: "MY", dial_code: "+60", flag: "🇲🇾" },
  { name: "Maldives", code: "MV", dial_code: "+960", flag: "🇲🇻" },
  { name: "Malta", code: "MT", dial_code: "+356", flag: "🇲🇹" },
  { name: "Mauritius", code: "MU", dial_code: "+230", flag: "🇲🇺" },
  { name: "Mexico", code: "MX", dial_code: "+52", flag: "🇲🇽" },
  { name: "Monaco", code: "MC", dial_code: "+377", flag: "🇲🇨" },
  { name: "Mongolia", code: "MN", dial_code: "+976", flag: "🇲🇳" },
  { name: "Morocco", code: "MA", dial_code: "+212", flag: "🇲🇦" },
  { name: "Myanmar", code: "MM", dial_code: "+95", flag: "🇲🇲" },
  { name: "Nepal", code: "NP", dial_code: "+977", flag: "🇳🇵" },
  { name: "Netherlands", code: "NL", dial_code: "+31", flag: "🇳🇱" },
  { name: "New Zealand", code: "NZ", dial_code: "+64", flag: "🇳🇿" },
  { name: "Nigeria", code: "NG", dial_code: "+234", flag: "🇳🇬" },
  { name: "Norway", code: "NO", dial_code: "+47", flag: "🇳🇴" },
  { name: "Oman", code: "OM", dial_code: "+968", flag: "🇴🇲" },
  { name: "Pakistan", code: "PK", dial_code: "+92", flag: "🇵🇰" },
  { name: "Panama", code: "PA", dial_code: "+507", flag: "🇵🇦" },
  { name: "Philippines", code: "PH", dial_code: "+63", flag: "🇵🇭" },
  { name: "Poland", code: "PL", dial_code: "+48", flag: "🇵🇱" },
  { name: "Portugal", code: "PT", dial_code: "+351", flag: "🇵🇹" },
  { name: "Qatar", code: "QA", dial_code: "+974", flag: "🇶🇦" },
  { name: "Romania", code: "RO", dial_code: "+40", flag: "🇷🇴" },
  { name: "Russia", code: "RU", dial_code: "+7", flag: "🇷🇺" },
  { name: "Saudi Arabia", code: "SA", dial_code: "+966", flag: "🇸🇦" },
  { name: "Serbia", code: "RS", dial_code: "+381", flag: "🇷🇸" },
  { name: "Singapore", code: "SG", dial_code: "+65", flag: "🇸🇬" },
  { name: "Slovakia", code: "SK", dial_code: "+421", flag: "🇸🇰" },
  { name: "Slovenia", code: "SI", dial_code: "+386", flag: "🇸🇮" },
  { name: "South Africa", code: "ZA", dial_code: "+27", flag: "🇿🇦" },
  { name: "South Korea", code: "KR", dial_code: "+82", flag: "🇰🇷" },
  { name: "Spain", code: "ES", dial_code: "+34", flag: "🇪🇸" },
  { name: "Sri Lanka", code: "LK", dial_code: "+94", flag: "🇱🇰" },
  { name: "Sweden", code: "SE", dial_code: "+46", flag: "🇸🇪" },
  { name: "Switzerland", code: "CH", dial_code: "+41", flag: "🇨🇭" },
  { name: "Taiwan", code: "TW", dial_code: "+886", flag: "🇹🇼" },
  { name: "Thailand", code: "TH", dial_code: "+66", flag: "🇹🇭" },
  { name: "Turkey", code: "TR", dial_code: "+90", flag: "🇹🇷" },
  { name: "Ukraine", code: "UA", dial_code: "+380", flag: "🇺🇦" },
  { name: "United Arab Emirates", code: "AE", dial_code: "+971", flag: "🇦🇪" },
  { name: "United Kingdom", code: "GB", dial_code: "+44", flag: "🇬🇧" },
  { name: "United States", code: "US", dial_code: "+1", flag: "🇺🇸" },
  { name: "Uzbekistan", code: "UZ", dial_code: "+998", flag: "🇺🇿" },
  { name: "Vatican City", code: "VA", dial_code: "+39", flag: "🇻🇦" },
  { name: "Vietnam", code: "VN", dial_code: "+84", flag: "🇻🇳" },
  { name: "Zambia", code: "ZM", dial_code: "+260", flag: "🇿🇲" },
  { name: "Zimbabwe", code: "ZW", dial_code: "+263", flag: "🇿🇼" },
].sort((a, b) => a.name.localeCompare(b.name));

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });
  const [agreed, setAgreed] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('US');
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const selectedCountry = useMemo(() =>
    countryData.find(c => c.code === selectedCountryCode) || countryData[0],
    [selectedCountryCode]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!agreed) {
      setErrorMessage('Please agree to the terms and authorize notifications.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    const fullPhone = `${selectedCountry.dial_code} ${formData.phone}`;

    // Prepare template params matching most common EmailJS setups
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: fullPhone,
      country: selectedCountry.name,
      message: formData.description,
      to_name: 'Sree Property Tech', // Adjust as needed
    };

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', description: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
        console.log(error.text);
        setErrorMessage(error.text || 'Failed to send');
        setStatus('error');
        // setTimeout(() => setStatus('idle'), 5000); // Keep error visible for debugging
      });
  };

  const getEntranceClass = (delay: number) => {
    return `transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`;
  };

  const fieldGroupClass = "group relative border-l-2 border-transparent focus-within:border-yellow-600 focus-within:pl-4 transition-all duration-500 ease-in-out";

  return (
    <div
      ref={containerRef}
      className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-600/5 -mr-16 -mt-16 rounded-full blur-3xl"></div>

      <div className={`mb-8 ${getEntranceClass(0)}`} style={{ transitionDelay: '0ms' }}>
        <span className="text-yellow-600 uppercase tracking-[0.3em] text-[10px] font-bold block mb-2">Private Access</span>
        <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 leading-tight">Request Invitation</h3>
        <p className="text-gray-500 text-xs uppercase tracking-widest font-light">Reserved for High-Net-Worth Individuals</p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className={`${fieldGroupClass} ${getEntranceClass(100)}`} style={{ transitionDelay: '100ms' }}>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="bg-transparent border-b border-white/10 px-0 py-4 text-white w-full focus:outline-none focus:border-yellow-600/0 transition-all font-light tracking-wide text-sm"
          />
        </div>

        <div className={`${fieldGroupClass} ${getEntranceClass(200)}`} style={{ transitionDelay: '200ms' }}>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="bg-transparent border-b border-white/10 px-0 py-4 text-white w-full focus:outline-none focus:border-yellow-600/0 transition-all font-light tracking-wide text-sm"
          />
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-12 gap-5 items-end ${getEntranceClass(300)}`} style={{ transitionDelay: '300ms' }}>
          <div className="md:col-span-5 group relative border-l-2 border-transparent focus-within:border-yellow-600 focus-within:pl-4 transition-all duration-500">
            <label className="text-[10px] text-gray-500 uppercase tracking-widest absolute -top-4 left-0">Resident Country</label>
            <div className="relative">
              <select
                value={selectedCountryCode}
                onChange={(e) => setSelectedCountryCode(e.target.value)}
                className="bg-transparent border-b border-white/10 px-0 py-4 text-white w-full focus:outline-none focus:border-yellow-600/0 transition-all font-light tracking-wide text-sm cursor-pointer appearance-none pr-8"
              >
                {countryData.map((item) => (
                  <option key={item.code} value={item.code} className="bg-[#0a0a0a] text-white py-2">
                    {item.flag} {item.name} ({item.dial_code})
                  </option>
                ))}
              </select>
              <div className="absolute right-0 bottom-4 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 group border-l-2 border-transparent focus-within:border-yellow-600 focus-within:pl-4 transition-all duration-500">
            <div className="relative">
              <div className="absolute left-0 bottom-4 flex items-center space-x-1.5 pointer-events-none transition-opacity">
                <span className="text-base leading-none grayscale-[0.2]">{selectedCountry.flag}</span>
                <span className="text-yellow-500/60 font-bold text-sm">
                  {selectedCountry.dial_code}
                </span>
              </div>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Contact Number"
                className="bg-transparent border-b border-white/10 pl-16 py-4 text-white w-full focus:outline-none focus:border-yellow-600/0 transition-all font-light tracking-wide text-sm"
              />
            </div>
          </div>
        </div>

        <div className={`${fieldGroupClass} ${getEntranceClass(400)}`} style={{ transitionDelay: '400ms' }}>
          <textarea
            required
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            rows={3}
            className="bg-transparent border-b border-white/10 px-0 py-4 text-white w-full focus:outline-none focus:border-yellow-600/0 transition-all font-light tracking-wide text-sm resize-none"
          ></textarea>
        </div>

        <div className={`flex items-center justify-center space-x-4 mt-6 opacity-40 ${getEntranceClass(600)}`} style={{ transitionDelay: '600ms' }}>
          <div className="h-px w-8 bg-white/20"></div>
          <p className="text-xs text-gray-400 uppercase tracking-[0.3em] font-bold">
            Secure NRI Encryption
          </p>
          <div className="h-px w-8 bg-white/20"></div>
        </div>

        <div className={`space-y-6 ${getEntranceClass(700)}`} style={{ transitionDelay: '700ms' }}>
          <p className="text-xs text-gray-400 leading-relaxed text-center">
            By clicking Submit Request, you agree to our <span className="text-yellow-500 cursor-pointer hover:underline">Terms of Service</span> and that you have read our <span className="text-yellow-500 cursor-pointer hover:underline">Privacy Policy</span>
          </p>

          <div className="flex items-start space-x-3">
            <div className="relative flex items-center">
              <input
                required
                type="checkbox"
                id="consent"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="peer h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-sm border border-white/20 bg-white/5 checked:border-yellow-600 checked:bg-yellow-600 focus:outline-none focus:ring-1 focus:ring-yellow-600/50 transition-all"
              />
              <svg
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-black opacity-0 peer-checked:opacity-100 transition-opacity"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <label htmlFor="consent" className="text-xs text-gray-400 cursor-pointer select-none leading-tight">
              I hereby authorize to send notification on SMS/Messages/Promotional/Informational messages <span className="text-red-500">*</span>
            </label>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full relative overflow-hidden bg-yellow-600 text-black font-bold uppercase tracking-[0.2em] text-xs py-5 hover:bg-yellow-500 transition-all shadow-xl hover:scale-[1.01] active:scale-95 group/btn disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 shimmer-bg opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none"></div>
              <span className="relative z-10">
                {status === 'sending' ? 'Sending Request...' : 'Submit Request'}
              </span>
            </button>

            {status === 'success' && (
              <p className="mt-4 text-green-400 text-xs text-center uppercase tracking-widest">
                Request Sent Successfully. We will contact you shortly.
              </p>
            )}

            {status === 'error' && (
              <div className="mt-4 text-center">
                <p className="text-red-400 text-xs uppercase tracking-widest mb-2">
                  Failed to send request.
                </p>
                <p className="text-red-500/80 text-[10px] font-mono">
                  Error: {errorMessage || 'Unknown error'}
                </p>
                {(
                  !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
                  !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
                  !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                ) && (
                    <p className="text-yellow-500/80 text-[10px] font-mono mt-1">
                      ⚠️ Missing API Keys in .env.local
                    </p>
                  )}
              </div>
            )}
          </div>
        </div>
      </form >
    </div >
  );
};

export default ContactForm;
