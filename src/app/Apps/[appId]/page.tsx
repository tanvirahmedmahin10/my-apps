import { AppPromise } from '@/app/components/AppFolder/TrendingApps';
import { IData } from '@/data.type';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

interface PageProps {
  params: Promise<{ appId: string }>;
}

const AppDetailsPage = async ({ params }: PageProps) => {
  const { appId } = await params;
  const appsData: IData[] = await AppPromise();

  // Find the app by ID
  const app = appsData.find((item) => item.id === Number(appId));

  // Trigger 404 if app is not found
  if (!app) {
    notFound();
  }

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Back Button */}
      <Link
        href="/"
        className="mb-6 inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600"
      >
        ← Back to Apps
      </Link>

      {/* Hero Section */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <Image
            src={image}
            alt={title}
            width={128}
            height={128}
            className="h-28 w-28 flex-shrink-0 rounded-3xl object-cover shadow-sm"
          />

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
              {title}
            </h1>
            <p className="mt-1 text-sm font-medium text-blue-600">
              {companyName}
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-4 flex flex-wrap items-center gap-6 border-t border-gray-100 pt-4 text-sm">
              <div>
                <span className="block text-xs text-gray-500">Rating</span>
                <span className="font-semibold text-gray-900">
                  ★ {ratingAvg.toFixed(1)}{' '}
                  <span className="text-xs font-normal text-gray-500">
                    ({reviews})
                  </span>
                </span>
              </div>

              <div className="h-8 w-px bg-gray-200" />

              <div>
                <span className="block text-xs text-gray-500">Downloads</span>
                <span className="font-semibold text-gray-900">{downloads}</span>
              </div>

              <div className="h-8 w-px bg-gray-200" />

              <div>
                <span className="block text-xs text-gray-500">Size</span>
                <span className="font-semibold text-gray-900">{size} MB</span>
              </div>
            </div>
          </div>

          <button className="h-12 w-full rounded-xl bg-blue-600 px-6 font-semibold text-white transition-colors hover:bg-blue-700 active:bg-blue-800 sm:w-auto">
            Install
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Description Section */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:col-span-2">
          <h2 className="text-lg font-bold text-gray-900">About this app</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Ratings Breakdown Sidebar */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900">Ratings & Reviews</h2>

          <div className="mt-4 space-y-3">
            {ratings && ratings.length > 0 ? (
              ratings.map((ratingItem, index) => (
                <div key={index} className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-medium text-gray-600">
                    {ratingItem.name}
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-amber-400"
                      style={{
                        width: `${Math.min(ratingItem.count, 100)}%`,
                      }}
                    />
                  </div>
                  <span className="w-8 text-right text-gray-500">
                    {ratingItem.count}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-xs text-gray-500">No ratings available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;