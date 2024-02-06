import React from 'react';

const Advantages: React.FC = () => {
  return (
    <div
      id='advantages'
      className='flex items-center justify-center text-center xl:text-start'
    >
      <div className='w-full px-4 flex-col items-center justify-center gap-40 md:px-0 md:w-3/4 mt-10'>
        <div>
          <h1 className='text-2xl md:text-3xl font-bold'>
            What's our advantage?
          </h1>
          <span className='md:text-2xl text-xl mt-4 md:mt-9 block'>
            TMS is amazing Ukrainian software for logistics! We offer an
            incredibly wide range of logistics services to efficiently and
            reliably manage supply, providing optimal solutions that perfectly
            meet our customers' needs!
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export { Advantages };
