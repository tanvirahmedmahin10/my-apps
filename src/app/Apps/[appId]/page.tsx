import { AppPromise } from '@/app/components/AppFolder/TrendingApps';
import Installation from '@/app/installationbutton/Installation';
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
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Back Button */}
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
      >
        ← Back to Apps
      </Link>

      {/* Hero Section */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center">
            <Image
              src={image}
              alt={title}
              width={128}
              height={128}
              className="h-28 w-28 flex-shrink-0 rounded-3xl object-cover shadow-md ring-1 ring-gray-200 sm:h-32 sm:w-32"
            />

            <div className="min-w-0 flex-1">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {title}
              </h1>

              <p className="mt-2 text-sm font-medium text-blue-600">
                {companyName}
              </p>

              {/* Quick Metrics Bar */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-gray-100 pt-5 text-sm">
                <div>
                  <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-gray-400">
                    Rating
                  </span>
                  <span className="font-semibold text-gray-900">
                    <span className="text-amber-400">★</span>{' '}
                    {ratingAvg.toFixed(1)}{' '}
                    <span className="text-xs font-normal text-gray-400">
                      ({reviews})
                    </span>
                  </span>
                </div>

                <div className="hidden h-8 w-px bg-gray-200 sm:block" />

                <div>
                  <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-gray-400">
                    Downloads
                  </span>
                  <span className="font-semibold text-gray-900">
                    {downloads}
                  </span>
                </div>

                <div className="hidden h-8 w-px bg-gray-200 sm:block" />

                <div>
                  <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-gray-400">
                    Size
                  </span>
                  <span className="font-semibold text-gray-900">
                    {size} MB
                  </span>
                </div>
              </div>
            </div>

            <div className="w-40">
              <Installation app={app}></Installation>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {/* Description Section */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            About this app
          </h2>

          <p className="mt-4 whitespace-pre-line text-sm leading-7 text-gray-600">
            {description}
          </p>
        </div>

        {/* Ratings Breakdown Sidebar */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            Ratings & Reviews
          </h2>

          <div className="mt-6 space-y-4">
            {ratings && ratings.length > 0 ? (
              ratings.map((ratingItem, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-xs"
                >
                  <span className="w-12 font-medium text-gray-600">
                    {ratingItem.name}
                  </span>

                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-amber-400 transition-all"
                      style={{
                        width: `${Math.min(ratingItem.count, 100)}%`,
                      }}
                    />
                  </div>

                  <span className="w-8 text-right font-medium text-gray-500">
                    {ratingItem.count}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-xs text-gray-500">
                No ratings available.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;