'use client'

import { useContext } from "react";
import { AppsContext } from "../AppsContext/AppsContext";
import { IData } from "@/data.type";
import Image from "next/image";


const InstallationPage = () => {
    const{isAdded} =useContext(AppsContext)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
  {isAdded?.map((data: IData) => (
    <div 
      key={data.id} 
      className="flex flex-col items-center bg-white rounded-2xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition-shadow duration-200"
    >
      <div className="relative w-24 h-24 mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
        <Image 
          src={data.image} 
          alt={data.companyName || "Company logo"} 
          width={96} 
          height={96}
          className="object-cover"
        />
      </div>

      <h2 className="text-lg font-semibold text-gray-900 text-center line-clamp-1 mb-2">
        {data.companyName}
      </h2>

      <div className="flex items-center justify-between w-full text-sm text-gray-600 mt-auto pt-3 border-t border-gray-100">
        <span className="flex items-center gap-1 font-medium text-amber-600">
          ★ {data.ratingAvg}
        </span>
        <span>{data.downloads} downloads</span>
        <span className="text-gray-400">{data.size}</span>
      </div>
    </div>
  ))}
</div>
    );
};

export default InstallationPage;