import React from 'react';

function Loader() {
  const commonClasses = 'h-5 w-5 bg-accent rounded-full';
  return (
    <div className="tile flex col-span-full  justify-center mt-10 -ml-5 w-[100%]">
      <div className={`${commonClasses} mr-1 animate-bounce`}></div>
      <div className={`${commonClasses} mr-1 animate-bounce200`}></div>
      <div className={`${commonClasses} animate-bounce400`}></div>
    </div>
  );
}

export default Loader;
