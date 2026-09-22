import Installation from '@/app/installationbutton/Installation';
import { IData } from '@/data.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AppCard = ({ app }: { app: IData }) => {
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    id
  } = app;

  return (
    <div className="w-80 flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md space-y-5">
      {/* Top Header Section */}
      <div className="flex items-start gap-4">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="h-16 w-16 shrink-0 rounded-2xl object-cover shadow-sm"
        />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-gray-900">
            {title}
          </h3>
          <p className="truncate text-xs font-medium text-gray-500">
            {companyName}
          </p>
          <div className="mt-1.5 flex items-center gap-1">
            <span className="text-xs font-semibold text-amber-500">
              ★ {ratingAvg.toFixed(1)}
            </span>
            <span className="text-xs text-gray-400">({reviews})</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 line-clamp-2 text-xs text-gray-600">
        {description}
      </p>

      {/* Metadata Bar */}
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">
        <div>
          <span className="font-semibold text-gray-700">
            {downloads}
          </span>{' '}
          Downloads
        </div>
        <div>
          <span className="font-semibold text-gray-700">
            {size} MB
          </span>
        </div>
      </div>

      <div className='flex gap-4'>
      <div className="mt-3 text-center w-full rounded-lg bg-blue-600 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700 active:bg-blue-800">
        <Installation app={app}/>
      </div>
       <Link href={`/Apps/${id}`} className="mt-3 text-center w-full rounded-lg bg-blue-600 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700 active:bg-blue-800"><button >
        Details
      </button></Link>
      </div>
    </div>
  );
};

export default AppCard;