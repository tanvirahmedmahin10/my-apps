import Image from 'next/image';
import React from 'react';
import pic from '@/assets/hero.png';

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Soft Ambient Blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-blue-100 to-indigo-100 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-slate-900">
          We Build{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Productive
          </span>{' '}
          Apps
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
          At <strong className="text-slate-900 font-semibold">HERO.IO</strong>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#explore"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35"
          >
            Explore Apps
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium text-sm transition-all duration-200"
          >
            Learn More
          </a>
        </div>

        {/* Image Container */}
        <div className="relative pt-6 max-w-4xl mx-auto">
          {/* Subtle frame card shadow */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-50/50 shadow-xl shadow-slate-200/50">
            <Image
              src={pic}
              alt="Hero pic"
              width={1600}
              height={940}
              priority
              className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;