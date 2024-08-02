import React from 'react'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  UserGroupIcon,
  PencilSquareIcon,
  ChartBarIcon,
  CalendarDaysIcon,
  HandRaisedIcon,
} from "@heroicons/react/20/solid";

const Feature = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:items-center lg:justify-center">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-10">
            Features
          </p>
        </div>
        <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 gap-x-8 lg:max-w-7xl lg:grid-cols-3 lg:gap-y-8 ">
          <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>

            <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                <UserGroupIcon class="h-14 w-14" />
                <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                  Real Time Collaboration
                </h2>
              </div>

              <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                  Real Time Collaboration
                </h3>

                <p className="mt-4 text-sm sm:text-base">
                  Keep everyone on the same page with real-time updates and
                  collaboration tools. Our dashboard ensures seamless
                  communication and coordination, eliminating bottlenecks and
                  delays.
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>

            <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                <PencilSquareIcon className="h-14 w-14" />
                <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                  Customizable Workflow
                </h2>
              </div>

              <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                  Customizable Workflow
                </h3>

                <p className="mt-4 text-sm sm:text-base">
                  Adapt the platform to your unique needs. Customize workflows
                  to match your team's specific processes, ensuring a perfect
                  fit for any project, big or small.
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>

            <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                <ChartBarIcon className="h-14 w-14" />
                <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                  Advanced Analytics
                </h2>
              </div>

              <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                  Advanced Analytics
                </h3>

                <p className="mt-4 text-sm sm:text-base">
                  Make informed decisions with detailed analytics and reporting
                  features. Track progress, identify trends, and optimize
                  performance with data-driven insights.
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>

            <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                <LockClosedIcon className="h-14 w-14" />
                <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                  Secure Data Management
                </h2>
              </div>

              <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                  Secure Data Management
                </h3>

                <p className="mt-4 text-sm sm:text-base">
                  Protect your valuable information with our robust security
                  measures. Our platform ensures your data is stored and managed
                  securely, giving you peace of mind.
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>

            <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 sm:size-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                  Task Automation
                </h2>
              </div>

              <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                  Task Automation
                </h3>

                <p className="mt-4 text-sm sm:text-base">
                  Save time and reduce manual efforts with our task automation
                  features. Automate repetitive tasks and focus on what truly
                  matters, enhancing your team's productivity.
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>

            <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 sm:size-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                  Integration Capabilities
                </h2>
              </div>

              <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                  Integration Capabilities
                </h3>

                <p className="mt-4 text-sm sm:text-base">
                  Easily integrate with your existing tools and systems. Our
                  platform supports a wide range of integrations, allowing you
                  to streamline your workflows and enhance efficiency.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Feature