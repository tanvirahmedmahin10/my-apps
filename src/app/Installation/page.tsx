'use client'

import { useContext } from "react";
import { AppsContext } from "../AppsContext/AppsContext";
import { IData } from "@/data.type";
import Image from "next/image";
import UnInstallButton from "../UninstallButton/Uninstall";


const InstallationPage = () => {
  const { isAdded } = useContext(AppsContext);

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      {isAdded?.map((data: IData) => (
        <div 
          key={data.id} 
          className="group relative flex flex-col sm:flex-row items-center justify-between bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-sm hover:shadow-xl border border-gray-100 hover:border-indigo-100 transition-all duration-300 gap-4"
        >
          {/* Left: Logo & Details */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            {/* Logo container */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 shadow-inner group-hover:scale-105 transition-transform duration-300">
              <Image 
                src={data.image} 
                alt={data.companyName || "Company logo"} 
                fill
                sizes="(max-width: 640px) 64px, 80px"
                className="object-cover"
              />
            </div>

            {/* Main Info */}
            <div className="flex flex-col">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                {data.companyName}
              </h2>
              
              {/* Badges / Stats */}
              <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-gray-500">
                {/* Rating */}
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-semibold border border-amber-200/50">
                  <svg className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {data.ratingAvg}
                </span>

                {/* Downloads */}
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 font-medium">
                  {data.downloads} downloads
                </span>

                {/* Size */}
                {data.size && (
                  <span className="inline-flex items-center text-gray-400">
                    • {data.size}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Action / Status Badge */}
          <div className="w-full sm:w-auto flex sm:flex-col items-center justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
            <span className="w-full sm:w-auto text-center px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Installed
            </span>
          </div>
          <div>
        <UnInstallButton data={data}></UnInstallButton>
      </div>
        </div>
        
      ))}
      
    </div>
  );
};

export default InstallationPage;