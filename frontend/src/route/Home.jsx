import React from 'react';
import UserInfoCard from '../components/UserInfoCard';
import MainContent from '../components/MainContent';
import ContactCard from '../components/ContactCard';
import Navbar from '../components/Navbar.jsx';

function Home() {

  return (
    <div >
      <div className='flex space-x-4'>
        <div className='flex-1'>
          <UserInfoCard />
        </div>
        <div className='flex-1'>
          <MainContent />
        </div>
        <div className='flex-1'>
          <ContactCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
