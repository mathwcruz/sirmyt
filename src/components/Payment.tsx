/* eslint-disable @next/next/no-img-element */

export const Payment = () => {
  return (
    <>
      <div className="w-screen h-full bg-primary-100 flex flex-col items-center justify-center mt-[60px] gap-[18px] pt-9 px-5">
        <h3 className="text-center max-w-[335px] text-[32px] leading-[42px] text-white font-medium">
          Managing your ecommerce business on the go is easy.
        </h3>
        <p className="text-center max-w-[335px] text-white text-opacity-70 font-normal text-sm leading-6">
          Our customers enjoy complete freedom of doing business online by
          managing every aspect of their online store from their mobile and web
          devices.
        </p>
        <img
          src="/assets/images/platform-view-one.png"
          alt="An image showing a graph, an armchair and a screenshot for our platform"
        />
      </div>
      <div className="w-screen h-full bg-white px-5 py-20 flex flex-col justify-center">
        <span className="block text-primary-100 font-medium text-base leading-5 text-left mb-2">
          PWA READY STOREFRONT
        </span>
        <h4 className="mb-[18px] text-primary-100 font-medium text-[32px]  leading-[42px] text-left max-w-[335px]">
          Own everything forever with a single payment.
        </h4>
        <p className="mb-8 text-black-400 font-regular text-sm  leading-6 text-left max-w-[290px]">
          Build your dream business. Never worry about paying monthly fees or
          recurring payments again.
        </p>
        <img
          src="/assets/images/bill-amount-card.png"
          alt="An imagem showing a list of three men with their respective data an a card showing amount bill"
        />
      </div>
      <div className="w-screen h-full bg-white px-5 pb-20 flex flex-col justify-center">
        <span className="block text-primary-100 font-medium text-base leading-5 text-left mb-2">
          PAY ONCE, USE LIFETIME
        </span>
        <h4 className="mb-[18px] text-primary-100 font-medium text-[32px]  leading-[42px] text-left max-w-[335px]">
          Getting your products sold on the easy.
        </h4>
        <p className="mb-8 text-black-400 font-regular text-sm  leading-6 text-left max-w-[290px]">
          Sell your products online, and turn your social media accounts into
          marketing channels.
        </p>
        <img
          src="/assets/images/dashboard-card.png"
          alt="An imagem showing billing data: total income, worst selling and a graph showing stats about total growth"
        />
      </div>
    </>
  );
};