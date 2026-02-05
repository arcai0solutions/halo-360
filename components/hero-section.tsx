'use client';

import { useEffect, useState } from 'react';

// Icon Components
const UiuxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 34 35" fill="none">
    <path d="M18.5462 0.5784H15.4553C15.2504 0.5784 15.0539 0.659804 14.909 0.804705C14.7641 0.949606 14.6827 1.14613 14.6827 1.35105V2.12371H6.81641C6.63414 1.60811 6.27547 1.17354 5.80378 0.896821C5.33209 0.620101 4.77776 0.519042 4.23876 0.611508C3.69977 0.703973 3.21081 0.984009 2.85832 1.40212C2.50583 1.82023 2.3125 2.34949 2.3125 2.89636C2.3125 3.44323 2.50583 3.97249 2.85832 4.3906C3.21081 4.80871 3.69977 5.08875 4.23876 5.18121C4.77776 5.27368 5.33209 5.17262 5.80378 4.8959C6.27547 4.61918 6.63414 4.18461 6.81641 3.66901H9.86081C4.92329 6.7599 3.86471 13.5133 3.86471 13.606C3.83434 13.8086 3.88569 14.015 4.00747 14.1798C4.12925 14.3446 4.31149 14.4543 4.51413 14.4848L4.52926 14.487H4.63736C4.82484 14.4888 5.00658 14.4223 5.14873 14.3001C5.29087 14.1778 5.38374 14.0081 5.41001 13.8224C5.41001 13.7143 6.85506 4.28708 14.6827 3.66901V4.44167C14.6827 4.64659 14.7641 4.84312 14.909 4.98802C15.0539 5.13292 15.2504 5.21432 15.4553 5.21432H18.5462C18.7511 5.21432 18.9477 5.13292 19.0926 4.98802C19.2375 4.84312 19.3189 4.64659 19.3189 4.44167V3.66901C26.4665 4.31032 28.5915 13.7143 28.5915 13.8378C28.6212 14.0207 28.7155 14.1868 28.8573 14.3059C28.9991 14.425 29.179 14.4893 29.3642 14.487H29.5263C29.7277 14.4493 29.9059 14.3331 30.0217 14.164C30.1375 13.995 30.1815 13.7868 30.1438 13.5854C30.1417 13.5743 30.1395 13.5633 30.1368 13.5522C30.1368 13.467 28.5915 6.76017 23.8161 3.66928H27.1851C27.3674 4.18489 27.7261 4.61945 28.1978 4.89617C28.6694 5.17289 29.2238 5.27395 29.7628 5.18148C30.3018 5.08902 30.7907 4.80898 31.1432 4.39087C31.4957 3.97276 31.689 3.4435 31.689 2.89663C31.689 2.34976 31.4957 1.8205 31.1432 1.40239C30.7907 0.984279 30.3018 0.704243 29.7628 0.611778C29.2238 0.519312 28.6694 0.620371 28.1978 0.897091C27.7261 1.17381 27.3674 1.60838 27.1851 2.12398H19.3189V1.35132C19.3189 1.14638 19.2375 0.949823 19.0926 0.80488C18.9477 0.659936 18.7512 0.578472 18.5462 0.5784Z" fill="currentColor" />
    <path d="M17.0012 22.2152C17.4279 22.2152 17.7738 21.8693 17.7738 21.4426C17.7738 21.0158 17.4279 20.6699 17.0012 20.6699C16.5744 20.6699 16.2285 21.0158 16.2285 21.4426C16.2285 21.8693 16.5744 22.2152 17.0012 22.2152Z" fill="currentColor" />
    <path d="M10.2698 21.9902C11.7414 23.5511 12.7221 25.5099 13.0902 27.6233H20.91C21.2781 25.5099 22.2588 23.5511 23.7303 21.9902C23.8391 21.8808 23.9126 21.7415 23.9415 21.59C23.9704 21.4386 23.9533 21.2819 23.8925 21.1402L17.7729 6.60547V19.2625C18.2885 19.4448 18.723 19.8034 18.9997 20.2751C19.2765 20.7468 19.3775 21.3012 19.2851 21.8402C19.1926 22.3791 18.9126 22.8681 18.4944 23.2206C18.0763 23.5731 17.5471 23.7664 17.0002 23.7664C16.4533 23.7664 15.9241 23.5731 15.506 23.2206C15.0879 22.8681 14.8078 22.3791 14.7154 21.8402C14.6229 21.3012 14.7239 20.7468 15.0007 20.2751C15.2774 19.8034 15.712 19.4448 16.2276 19.2625V6.60547L10.1077 21.1402C10.0468 21.2819 10.0297 21.4386 10.0586 21.59C10.0875 21.7415 10.1611 21.8808 10.2698 21.9902ZM11.5911 33.8048C11.5911 34.0097 11.6725 34.2063 11.8174 34.3512C11.9623 34.4961 12.1588 34.5775 12.3637 34.5775H21.6364C21.8413 34.5775 22.0378 34.4961 22.1827 34.3512C22.3276 34.2063 22.409 34.0097 22.409 33.8048V29.1686H11.5911V33.8048Z" fill="currentColor" />
  </svg>
);

const MarketingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 35 35" fill="none">
    <path d="M17.4999 33.582C8.67545 33.582 1.49609 26.4027 1.49609 17.5782C1.49609 8.75368 8.67545 1.57432 17.4999 1.57432C26.3244 1.57432 33.5038 8.75368 33.5038 17.5782C33.5038 26.4027 26.3244 33.582 17.4999 33.582Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M17.5 33.582C21.387 33.582 25.7343 26.4027 25.7343 17.5782C25.7343 8.75368 21.387 1.57432 17.5 1.57432M17.5 33.582C13.613 33.582 9.26562 26.4027 9.26562 17.5782C9.26562 8.75368 13.613 1.57432 17.5 1.57432" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M1.49609 17.5781H33.5038" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M5.73242 6.74302C8.65894 8.61833 12.8509 9.94141 17.4993 9.94141C22.1479 9.94141 26.3399 8.61827 29.2665 6.74289" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M29.2665 28.4139C26.3399 26.5386 22.148 25.2155 17.4996 25.2155C12.851 25.2155 8.659 26.5386 5.73242 28.4141" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M17.5 1.57432V33.582" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
  </svg>
);

const DevelopmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 34 35" fill="none">
    <path d="M9.52193 18.4653L6.4082 21.5789L9.52193 24.6928M16.4748 24.6928L19.5885 21.5792L16.4748 18.4653M15.0643 17.1484L10.9325 26.0092" stroke="currentColor" strokeWidth="1.99219" strokeMiterlimit="10" />
    <path d="M0.996094 9.57617H25.002V33.582H0.996094V9.57617Z" stroke="currentColor" strokeWidth="1.99219" strokeMiterlimit="10" />
    <path d="M4.99609 9.5752V5.57422H29.002V29.5801H25.001" stroke="currentColor" strokeWidth="1.99219" strokeMiterlimit="10" />
    <path d="M8.99805 5.5752V1.57422H33.0039V25.5801H29.0029" stroke="currentColor" strokeWidth="1.99219" strokeMiterlimit="10" />
  </svg>
);

const BrandingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 34 35" fill="none">
    <path d="M2.98828 17.5781H0.996094V13.5938H2.98828C4.08849 13.5938 4.98046 14.4857 4.98046 15.5859C4.98046 16.6862 4.08849 17.5781 2.98828 17.5781Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M0.996094 17.5781H2.98828C4.08849 17.5781 4.98046 18.4701 4.98046 19.5703C4.98046 20.6705 4.08849 21.5625 2.98828 21.5625H0.996094V17.5781Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M12.0195 15.5859C12.0195 16.6862 11.1276 17.5781 10.0273 17.5781H8.03516V13.5938H10.0273C11.1276 13.5938 12.0195 14.4857 12.0195 15.5859Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M8.03516 21.5625V17.5781" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M12.0195 21.5625L10.0273 17.5781H8.03516" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M15.0078 21.5625V15.586C15.0078 14.4857 15.8998 13.5938 17 13.5938C18.1002 13.5938 18.9922 14.4857 18.9922 15.586V21.5625" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M15.0078 17.5781H18.9922" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M31.0117 21.5625H28.9531V13.5938H31.0117C32.1119 13.5938 33.0039 14.4857 33.0039 15.586V19.5703C33.0039 20.6705 32.1119 21.5625 31.0117 21.5625Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M21.9805 21.5625V13.5938H22.9766L24.9687 21.5625H25.9648V13.5938" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M0.996094 9.60938H33.0038" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M33.0038 25.5469H0.996094" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
  </svg>
);

const ScrollIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 24" fill="none">
    <path d="M11.5053 2.01034L11.4978 19.5662L8.20959 16.2856C8.11661 16.1902 8.00554 16.1144 7.88288 16.0625C7.76023 16.0106 7.62845 15.9836 7.49526 15.9832C7.2981 15.986 7.10614 16.0469 6.94345 16.1584C6.78077 16.2698 6.65458 16.4267 6.58073 16.6096C6.50687 16.7924 6.48862 16.993 6.52827 17.1861C6.56792 17.3793 6.6637 17.5564 6.80361 17.6954L11.8001 22.6995C11.8932 22.7926 12.0036 22.8665 12.1252 22.9169C12.2468 22.9673 12.3772 22.9933 12.5088 22.9933C12.6404 22.9933 12.7708 22.9673 12.8924 22.9169C13.014 22.8665 13.1244 22.7926 13.2175 22.6995L18.214 17.6954C19.1929 16.7505 17.734 15.3029 16.7967 16.2856L13.4971 19.5851L13.5047 2.01034C13.5131 1.87389 13.4935 1.73716 13.447 1.60858C13.4006 1.48001 13.3283 1.3623 13.2347 1.26271C13.141 1.16312 13.028 1.08375 12.9025 1.0295C12.777 0.975252 12.6417 0.947266 12.505 0.947266C12.3683 0.947266 12.2331 0.975252 12.1076 1.0295C11.9821 1.08375 11.869 1.16312 11.7754 1.26271C11.6817 1.3623 11.6095 1.48001 11.563 1.60858C11.5166 1.73716 11.4969 1.87389 11.5053 2.01034Z" fill="currentColor" />
  </svg>
);

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#FDFBF9] overflow-hidden pt-28 lg:pt-32 pb-20 px-6 lg:px-12 flex flex-col justify-start lg:justify-center">
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '4rem 100%'
        }}
      />

      {/* 3D Abstract Background */}
      <div className="absolute -right-[20%] top-[50%] -translate-y-1/2 h-[100%] w-[65%] pointer-events-none z-0">
        <img
          src="/6860afbc21b70f57410cb115_bf8c2b6ca2de36bd04ec0497a327b8b7_Watermark.avif"
          alt="Background Abstract"
          className="w-full h-full object-contain rotate-45"
        />
      </div>

      <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

        {/* Left Block */}
        <div className={`space-y-6 lg:space-y-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} text-center lg:text-left`}>
          {/* Subtitle Badge - Hidden but preserves layout */}
          <div className="hidden lg:inline-flex items-center gap-2 bg-[#2d2d2d] text-white px-5 py-2.5 rounded-full shadow-lg invisible">
            <img
              src="https://cdn.prod.website-files.com/68542aee5c18c90474d64a51/6858a8279bf2d43807e086e1_19b4f020246cdf058ea8fc201a57ea3c_Home%20Hero%20%20Subtitle%20Dot.svg"
              alt=""
              className="w-2 h-2"
            />
            <span className="text-sm font-medium tracking-wide">Creative Agency</span>
          </div>
          {/* Subtitle Badge */}


          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[5.5rem] leading-[1.1] lg:leading-[1.05] font-semibold text-[#1a1a1a] tracking-tight">
            Strategic Digital <br className="hidden sm:block" /> Partner
          </h1>

          {/* Description */}
          <div className="max-w-xl mx-auto lg:mx-0">
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
              We blend creativity, strategy, and insights to help businesses thrive in the digital world.
            </p>
          </div>

          {/* CTA & Reviews */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-8 w-full">
            <h2 className="font-[family-name:var(--font-ittenoviana)] text-2xl sm:text-3xl lg:text-4xl text-red-600 whitespace-normal sm:whitespace-nowrap text-center leading-tight">
              Illuminate. Influence. Impact.
            </h2>
          </div>
        </div>

        {/* Right Block - Glass Cards */}
        <div className={`relative h-full w-full lg:w-auto grid grid-cols-2 gap-3 lg:flex lg:flex-col items-center lg:items-end justify-center lg:space-y-6 lg:pl-10 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} mt-8 lg:mt-0`}>
          <div className="absolute inset-0 -z-10 bg-gradient-to-l from-orange-100/50 to-transparent rounded-full blur-3xl scale-125 translate-x-1/4" />

          {/* UI/UX Design Card */}
          <div className="relative group w-full lg:max-w-[320px] lg:mr-24 transform hover:-translate-x-2 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-300/40 to-orange-300/40 rounded-[2rem] blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/40 p-3 sm:p-5 rounded-[2rem] flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-0 shadow-sm hover:shadow-md transition-all h-full sm:h-auto">
              <span className="text-[#1a1a1a] font-medium text-sm sm:text-lg pl-0 sm:pl-4 text-center sm:text-left order-2 sm:order-1">UIUX Design</span>
              <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center text-[#1a1a1a] order-1 sm:order-2">
                <UiuxIcon />
              </div>
            </div>
          </div>

          {/* Marketing Card */}
          <div className="relative group w-full lg:max-w-[340px] lg:mr-8 transform hover:-translate-x-2 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-red-300/40 to-pink-300/40 rounded-[2rem] blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/40 p-3 sm:p-5 rounded-[2rem] flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-0 shadow-sm hover:shadow-md transition-all h-full sm:h-auto">
              <span className="text-[#1a1a1a] font-medium text-sm sm:text-lg pl-0 sm:pl-4 text-center sm:text-left order-2 sm:order-1">Marketing</span>
              <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center text-[#1a1a1a] order-1 sm:order-2">
                <MarketingIcon />
              </div>
            </div>
          </div>

          {/* Development Card */}
          <div className="relative group w-full lg:max-w-[360px] lg:mr-0 transform hover:-translate-x-2 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/40 to-red-400/40 rounded-[2rem] blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/40 p-3 sm:p-5 rounded-[2rem] flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-0 shadow-sm hover:shadow-md transition-all h-full sm:h-auto">
              <span className="text-[#1a1a1a] font-medium text-sm sm:text-lg pl-0 sm:pl-4 text-center sm:text-left order-2 sm:order-1">Development</span>
              <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center text-[#1a1a1a] order-1 sm:order-2">
                <DevelopmentIcon />
              </div>
            </div>
          </div>

          {/* Branding Card */}
          <div className="relative group w-full lg:max-w-[340px] lg:mr-10 transform hover:-translate-x-2 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300/40 to-orange-300/40 rounded-[2rem] blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/40 p-3 sm:p-5 rounded-[2rem] flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-0 shadow-sm hover:shadow-md transition-all h-full sm:h-auto">
              <span className="text-[#1a1a1a] font-medium text-sm sm:text-lg pl-0 sm:pl-4 text-center sm:text-left order-2 sm:order-1">Branding</span>
              <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center text-[#1a1a1a] order-1 sm:order-2">
                <BrandingIcon />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Scroll Down Button */}

    </section>
  );
}
