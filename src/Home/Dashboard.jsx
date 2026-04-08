// import React from "react";

// const Hero = () => {
//   return (
//     <section className="bg-[#EEF3FA] py-12 md:py-28 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-10 items-center">
//         <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='block md:hidden lg:hidden pt-5'>
//           <video 
//             class="" 
//             loop autoPlay muted playsinline>
//             <source src="6650934fbbd024fe465677d6-6655ce32f1982ea3fbdae1e6_Brand Evolution - Smart Contract - Looped-transcode.mp4" type="video/mp4"/>
//           </video>
//         </div>


//         {/* LEFT CONTENT */}
//         <div>
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm text-[#1A2B6B] md:mb-6 mb-4">
//             <span className="w-2 h-2 bg-[#1A2B6B] rounded-full"></span>
//             Institutional-Grade Solutions
//           </div>

//           {/* Heading */}
//           <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//             <span className="text-[#2F6FD6]">Secure Crypto Liquidation</span>{" "}
//             <span className="text-[#1A2B6B]">&</span>
//             <br />
//             <span className="text-[#1A2B6B]">
//               Institutional-Grade Asset Protection
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="md:mt-6 mt-2 text-[#6D7380] text-sm md:text-base md:max-w-xl leading-relaxed">
//             Execute high-value cryptocurrency transactions with deep liquidity
//             access, OTC desk routing, and slippage-optimized execution strategies.
//             Protect digital assets through multi-layered cold storage architectures
//             and advanced operational security frameworks.
//           </p>

//           {/* Buttons */}
//           <div className="mt-8 flex gap-4 flex-wrap">
//             <button className="bg-[#2F6FD6] text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition">
//               Book Private Consultation →
//             </button>

//             <button className="border border-gray-300 px-6 py-3 rounded-xl text-[#1A2B6B] hover:bg-white transition">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* RIGHT CARD UI */}
//         <div className="relative">

//           {/* Main Card */}
//             <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='max-w-screen-lg mx-auto mt-10 hidden lg:block md:block'>
//               <video 
//                 class="justify-center mx-auto max-w-lg items-center" 
//                 loop autoPlay muted playsinline>
//                 <source src="6650934fbbd024fe465677d6-6655ce32f1982ea3fbdae1e6_Brand Evolution - Smart Contract - Looped-transcode.mp4" type="video/mp4"/>
//               </video>
//             </div>
//           {/* Background Accent */}
//           <div className="absolute top-4 right-0 w-full h-full bg-[#2F6FD6] rounded-3xl -z-10 translate-x-4 translate-y-4 opacity-10"></div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative md:px-10 px-5 md:py-20 py-12 mx-auto min-h-screen">
      <section className="py-16">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('./69c6cea9eba4776143a3864c_asset-management_hero.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto md:py-12 text-left bg-[#000]/40 p-8 shadow">

          {/* Fade Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center uppercase gap-2 bg-[#1A2B6B] px-4 py-2 rounded-full shadow-sm text-xs text-[#D1E0FA] text-opacity-75 md:mb-6 mb-4"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Institutional Grade Solutions
          </motion.div>

          {/* Fade Up */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl md:text-5xl font-semibold leading-tight max-w-3xl"
          >
            <span className="text-[#2F6FD6]">Secure Crypto Liquidation</span>{" "}
            <span className="text-[#1A2B6B]">&</span>
            <br />
            <span className="text-[#EFF6FF]">
              Institutional Grade Asset Protection
            </span>
          </motion.h1>

          {/* Fade Up (delayed) */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[#D1E0FA] md:text-base text-sm text-opacity-75 mb-6 md:max-w-2xl leading-relaxed md:pt-10 pt-5"
          >
            Execute high-value cryptocurrency transactions with deep liquidity
            access, OTC desk routing, and slippage-optimized execution strategies.
            Protect digital assets through multi-layered cold storage architectures
            and advanced operational security frameworks.
          </motion.p>

          <div className="border-t pb-5 border-[#fff] max-w-3xl border-opacity-30"></div>

          {/* Fade Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/"
              className="px-6 py-3 bg-[#2F6FD6] md:text-base text-sm text-white shadow text-center"
            >
              Book private consultation →
            </a>

            <a
              href="/"
              className="px-6 py-3 md:text-base text-sm text-white border border-white border-opacity-50 font-semibold shadow text-center"
            >
              Learn more
            </a>
          </motion.div>

        </div>
      </section>
    </div>
  );
}