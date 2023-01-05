import React from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
// import { RiHaert2Fill} from 'react-icons/ri';


const ServiceCard = ({color,title,icon,subtitle}) =>{
  return (
    <div className='flex flex-row justify-start items-center p-3 m-2 cursor-pointer hover:shadow-xl '>
      <div className={`w-9 h-9 rounded-full flex justify-center items-center ${color}`}>
        {icon}
      </div>
      <div className='ml-5 flex flex-col flex-1'>
        <h3 className='font-bold mt-2 text-white text-lg '>{title}</h3>
        <p className='mt-2 text-white text-lg'>{subtitle}</p>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <div className="flex w-fill justify-center items-center gradient-bg-services">
      <div className="flex mf-flex-row flex-col items-center justify-betweem md:p-20 py-12 px-4">
        <div className='flex-1 flex flex-col justify-start items-start'>
            <h1 className='text-white text-3xl sm: text-5xl py-2 text-gradient'>Services Web
               <br/>
               that we are improoving
               </h1>
        </div>
      </div>
      <div className='flex-1 flex flex-col justify-start items-center'>
        <ServiceCard 
          color="bg-[#2552E3]"
          title="Kaiovasa"
          icon={<BsShieldFillCheck fontSize={21} className='text-white'/>}
          subtitle="kaiovasa2 security subtitle"
        />
      </div>
    </div>
  );
}

export default Services;
