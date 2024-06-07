import React from 'react';
import Link from 'next/link';
import Button from '../Button';

const SmartParkingSolution: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white p-8 md:p-16 space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-1/2 flex justify-center md:justify-center">
        <img src="/Smart-Parking-Solution2.png" alt="Smart Parking Solution" className="w-full md:w-auto object-contain"/>
      </div>
      <div className="w-full md:w-1/2 flex flex-col space-y-4 md:space-y-6">
        <h2 className="text-[38px] leading-[43.2px]text-2xl md:text-4xl font-bold pt-darkblue1-900">Smart Parking Solution</h2>
        <p className="text-[16px] leading-[24px]text-sm md:text-base pt-darkblue1-700">
          The parking disc has long been a tool to promote circulation and activity in city centers. It's a fantastic invention that benefits residents, visitors, and local businesses alike. We want to be part of this evolution by creating a free digital parking disc.
        </p>
        <ul className="space-y-2 md:space-y-">
          <li className="flex items-center space-x-2">
            <span className="text-pt-red font-semibold">›</span>
            <span className="text-[16px] leading-[24px] text-sm md:text-base pt-darkblue1 font-semibold py-0.5 md:py-0">We aim to support the growth and efficiency of urban areas.</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-pt-red font-semibold">›</span>
            <span className="text-[16px] leading-[24px] text-sm md:text-base pt-darkblue1 font-semibold py-0.5 md:py-0">Our digital parking disc simplifies the parking process.</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-pt-red font-semibold">›</span>
            <span className="text-[16px] leading-[24px] text-sm md:text-base pt-darkblue1 font-semibold py-0.5 md:py-0">Any parking attendant systems can easily be integrated with our system.</span>
          </li>
        </ul>
        <p className="text-[16px] leading-[24px] text-sm md:text-base pt-darkblue1-700">
          We're excited to share more about our solution in a meeting.
        </p>
        <Button route="/contact" btnText="Contact us" colors="bg-custom-black text-white"/>
      </div>
    </div>
  );
};

export default SmartParkingSolution;