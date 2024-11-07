import React from 'react';
import UserInfoCard from '../components/UserInfoCard';
import MainContent from '../components/MainContent';
import ContactCard from '../components/ContactCard';

function Home() {
  return (
    <div className="bg-stone-100 min-h-screen p-4">
      <div className='flex space-x-4'>
        <div className='w-1/4 flex justify-end h-[400px] items-start'>
          <UserInfoCard />
        </div>
        <div className='w-1/2 '>
          <MainContent />
        </div>
        <div className='w-1/4'>
          <ContactCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
