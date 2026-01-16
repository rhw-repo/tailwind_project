import type { FC } from "react";
import errorBoundaryImg from "/imgs/error-boundary-image.webp";

//export interface BlankPagesTemplateProps {

//}

const BlankPagesTemplate: FC = () => {
  return (
    <section className="bg-[url('/imgs/error-boundary-bg-image.svg')] bg-cover bg-center flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center landscape:flex-row landscape:h-[80vh] landscape:lg:h-auto landscape:xl:flex-col w-3xl p-5 rounded-xl bg-gray-50 text-neutral-900 text-center text-balance text-2xl font-bold portrait:m-8 portrait:sm:md-4 m-4">
        <div className="landscape:flex flex-col">
          <h1 className="text-5xl landscape:text-6xl md:text-9xl text-gray-600 m-4">
            Oops.
          </h1>
          <h2 className="text-gray-500 text-base text-balance md:text-4xl landscape:text-2xl">
            This page has no content at this time.
          </h2>
        </div>
        <div className="aspect-3/2 p-4 overflow-hidden mb-8 landscape:mb-0">
          <img
            src={errorBoundaryImg}
            alt="A retro style robot toy stares with a fixed expression."
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-between mt-4 gap-4">
          <p className="text-base landscape:text-base font-medium text-gray-500 text-balance">
            We apologize for the inconvenience.
          </p>
          <p className="text-base landscape:text-base font-medium text-gray-700 text-balance">
            Please use the button below to go to the store.
          </p>
          <button
            className="py-2 px-4 bg-blue-700 text-neutral-50 border rounded cursor-pointer mb-4"
            onClick={() => (window.location.href = "/store")}
          >
            Go to Store
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlankPagesTemplate;
