import React from 'react';
import Button from '../Button';

const Homehero: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/hero-bg.png)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative flex flex-col items-start justify-center h-full text-white px-4 md:px-8 lg:px-16" style={{ marginLeft: '40px' }}>
        <h1 className="text-[42px] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight w-full md:w-3/4 lg:w-2/3 xl:w-1/2" style={{ opacity: 1 }}>
          What time is it? <br /> Parking Time!
        </h1>
        <p className="text-[16px] leading-[30px] text-sm md:text-base lg:text-lg xl:text-xl mb-8 w-full md:w-3/4 lg:w-2/3 xl:w-1/2" style={{ opacity: 1 }}>
          Digital parking disc - directly on your mobile. <br />
          A winning concept in a new, digitalized format.
        </p>
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <Button route="/contact" btnText="Contact us" colors="bg-white text-custom-black" />
        <Button targetBlank={true} route={'https://apps.apple.com/se/app/parking-time/id1611019108'} btnText="Download app" colors="bg-custom-black text-white" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-pt-green p-4 text-center text-white bg-opacity-80">
        <ul className="grid grid-cols-2 md:flex md:justify-around text-xs md:text-sm lg:text-base list-disc list-inside gap-4">
          <li className="font-roboto font-medium leading-8">Easy to use</li>
          <li className="font-roboto font-medium leading-8">Free to download</li>
          <li className="font-roboto font-medium leading-8">Avoid fines</li>
          <li className="font-roboto font-medium leading-8">Reduce Stress</li>
        </ul>
      </div>
    </div>
  );
}

export default Homehero;