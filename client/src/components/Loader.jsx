import React from 'react';

const Loader = () => {
  return (
    <div className='flex justify-center items-center p-3'>
      <div  className='animate-spin rounded-full h-12 w-12 border-b-4 border-purple-700'/>
    </div>
  );
}

export default Loader;
