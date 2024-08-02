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

import { useState } from "react";
const features = [
  {
    name: "Real Time Collaboration.",
    description:
      "Keep everyone on the same page with real-time updates and collaboration tools. Our dashboard ensures seamless communication and coordination, eliminating bottlenecks and delays.",
    icon: UserGroupIcon,
  },
  {
    name: "Customizable Workflow.",
    description:
      "Adapt the platform to your unique needs. Customize workflows to match your team's specific processes, ensuring a perfect fit for any project, big or small.",
    icon: PencilSquareIcon,
  },
  {
    name: "Advanced Analytics.",
    description:
      "Make informed decisions with detailed analytics and reporting features. Track progress, identify trends, and optimize performance with data-driven insights.",
    icon: ChartBarIcon,
  },
  {
    name: "Secure Data Management.",
    description:
      "Make informed decisions with detailed analytics and reporting features. Track progress, identify trends, and optimize performance with data-driven insights.",
    icon: LockClosedIcon,
  },
];


const Product = () => {
  return (
    <>
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
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-amber-600">
                  Deploy faster
                </p>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A better workflow
                </p>
                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                  <p className="mt-8">
                    Introducing our latest innovation in full-stack development,
                    designed specifically for modern developers. This
                    comprehensive toolkit seamlessly integrates the powerful
                    capabilities of React and Vite, providing an unparalleled
                    development experience. With its intuitive interface and
                    robust features, you can effortlessly manage complex
                    projects and streamline your workflow. Whether you're
                    building dynamic web applications or optimizing user
                    interfaces, this toolkit offers the perfect balance of
                    flexibility and performance.
                  </p>
                  <p className="mt-8">
                    Enhance your productivity with real-time updates, faster
                    builds, and a highly efficient development environment. The
                    toolkit supports hot module replacement, ensuring that your
                    changes are reflected instantly without needing a full page
                    reload, saving you valuable time. Its optimized performance
                    allows for quicker rendering and smoother transitions,
                    giving your applications a professional and polished feel.
                  </p>

                  <p className="mt-8">
                    In addition to its technical prowess, our product includes
                    comprehensive documentation and an active community of
                    developers, ensuring you have the support you need to tackle
                    any challenge. The modular architecture allows for easy
                    scalability, making it suitable for projects of all sizes,
                    from small startups to large enterprises.
                  </p>
                </div>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute left-1 top-1 h-5 w-5 text-amber-600"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt=""
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
            <p className="mt-14 text-base font-semibold leading-9 text-gray-900 max-w-lg text-justify ">
              Elevate your coding journey and stay ahead in the tech world with
              this cutting-edge solution. Whether you’re a seasoned developer or
              just starting out, this toolkit empowers you to create stunning,
              high-performance web applications with ease and efficiency. Unlock
              your potential and transform your ideas into reality with our
              state-of-the-art development toolkit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
